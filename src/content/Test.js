import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Checkbox, Button, Space, Card } from "antd";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

import {
  fetchCollection,
  add,
  update,
  remove,
  fetchQuiz,
  check,
  fetchResult,
  progress,
  fetchResults,
} from "../redux/slices/tests";
const Test = ({ content }) => {
  const { TextArea } = Input;
  const { Meta } = Card;

  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ user: state.auth.user }));
  const { collection, quiz, result, results } = useSelector(
    (state) => state.tests
  );

  const initialForm = {
    collectionForm: {
      collectionName: content,
      _id: null,
      text: "",
      options: [
        { text: "", truth: false },
        { text: "", truth: false },
      ],
    },
    quizForm: {
      id: user?._id,
      collectionName: content,
      questions: [],
    },
  };

  const [state, setState] = React.useState({ form: initialForm });

  React.useEffect(() => {
    setState({
      ...state,
      form: {
        collectionForm: {
          ...initialForm.collectionForm,
          collectionName: content,
        },
        quizForm: {
          ...initialForm.quizForm,
          collectionName: content,
        },
      },
    });
  }, [content]);

  React.useEffect(() => {
    setState({
      ...state,
      form: {
        ...state.form,
        quizForm: {
          ...state.form.quizForm,
          questions: quiz.items?.map((question) => ({
            _id: question._id,
            answers: [],
          })),
        },
      },
    });
  }, [quiz]);

  React.useEffect(() => {
    if (!user?.supervisor?._id && state.form.collectionForm?.collectionName) {
      dispatch(fetchCollection(state.form.collectionForm.collectionName));
    }
  }, [state.form.collectionForm?.collectionName]);

  React.useEffect(() => {
    if ((!!content, !!user?.supervisor?._id)) {
      dispatch(fetchResult({ collectionName: content, _id: user._id }))
        .then((res) => {
          if (!res.payload?.data.questions?.length) {
            dispatch(
              fetchQuiz({
                collectionName: state.form.quizForm.collectionName,
                count: 5,
              })
            );
          }
        })
        .catch(() =>
          dispatch(
            fetchQuiz({
              collectionName: state.form.quizForm.collectionName,
              count: 5,
            })
          )
        );
    }
  }, [content, user?._id]);

  const [seconds, setSeconds] = useState(1800);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  console.log({
    content: content,
    state: state,
    collection: collection,
    quiz: quiz,
    result: result,
    results: results,
    user: user,
  });

  return (
    <>
      <Space
        direction="vertical"
        size={16}
        style={{ width: "80%", margin: "0 auto" }}
      >
        {!!user?.supervisor?._id ? (
          !!result.items.questions?.length ? (
            <>
              {result.items.questions?.map((item, index) => (
                <Card
                  style={{ marginTop: 16 }}
                  key={index}
                  title={
                    <div
                      style={{ marginLeft: 14 }}
                      dangerouslySetInnerHTML={{
                        __html: index + 1 + ") " + item.text,
                      }}
                    />
                  }
                >
                  <Meta
                    description={
                      <ul>
                        {item.options.map((option, index) => (
                          <li
                            key={index}
                            style={{
                              color: option.truth? "green" : option.answer? "red" : "",
                            }}
                          >
                            <div
                              style={{ marginLeft: 14 }}
                              dangerouslySetInnerHTML={{ __html: option.text }}
                            />
                          </li>
                        ))}
                      </ul>
                    }
                  />
                </Card>
              ))}
            </>
          ) : (
            <>
              <Card
                size="small"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className="quizHead">
                  <div>Тақырып бойынша білім тексеру </div>
                  <div style={{ color: seconds < 300 ? "red" : "blue" }}>
                    <b>{`${String(Math.floor(seconds / 60)).padStart(
                      2,
                      "0"
                    )}:${String(seconds % 60).padStart(2, "0")}`}</b>
                  </div>
                  <Button
                    disabled={
                      !state.form.quizForm.questions.reduce(
                        (checked, question) =>
                          !!question.answers.length && checked,
                        true
                      )
                    }
                    onClick={() => {
                      if (window.confirm("Тестті аяқтауды қалайсызба?")) {
                        dispatch(check(state.form.quizForm))
                          .then(
                            dispatch(
                              fetchResult({
                                collectionName: content,
                                _id: user._id,
                              })
                            )
                          )
                          .catch((error) => {
                            console.error(
                              "Тестті аяқтау Promise орындалмады",
                              error
                            );
                          });
                      }
                    }}
                  >
                    Жауаптарды жіберу
                  </Button>
                </div>
              </Card>
              {quiz.items?.map((item, index) => (
                <Card
                  style={{ marginTop: 16 }}
                  key={index}
                  title={
                    <div
                      style={{ marginLeft: 14 }}
                      dangerouslySetInnerHTML={{
                        __html: index + 1 + ") " + item.text,
                      }}
                    />
                  }
                >
                  <Meta
                    description={
                      <>
                        {item.options.map((option, index) => (
                          <div style={{ display: "flex" }} key={index}>
                            <Checkbox
                              checked={state.form.quizForm.questions
                                ?.find((question) => question._id === item._id)
                                ?.answers.includes(option.text)}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  form: {
                                    ...state.form,
                                    quizForm: {
                                      ...state.form.quizForm,
                                      questions:
                                        state.form.quizForm.questions?.map(
                                          (question) =>
                                            question._id === item._id
                                              ? question.answers.includes(
                                                  option.text
                                                )
                                                ? {
                                                    ...question,
                                                    answers:
                                                      question.answers.filter(
                                                        (answer) =>
                                                          answer !== option.text
                                                      ),
                                                  }
                                                : {
                                                    ...question,
                                                    answers: [
                                                      ...question.answers,
                                                      option.text,
                                                    ],
                                                  }
                                              : question
                                        ),
                                    },
                                  },
                                })
                              }
                            />
                            <div
                              style={{ marginLeft: 14 }}
                              dangerouslySetInnerHTML={{ __html: option.text }}
                            />
                          </div>
                        ))}
                      </>
                    }
                  />
                </Card>
              ))}
            </>
          )
        ) : (
          <>
            <Card
              style={{ width: "100%" }}
              title={
                <div>
                  <TextArea
                    value={state.form.collectionForm?.text}
                    onChange={(e) =>
                      setState({
                        ...state,
                        form: {
                          ...state.form,
                          collectionForm: {
                            ...state.form.collectionForm,
                            text: e.target.value,
                          },
                        },
                      })
                    }
                  />
                  <div
                    style={{
                      marginTop: 10,
                      display: "flex",
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      disabled={
                        !(
                          state.form.collectionForm?.collectionName &&
                          state.form.collectionForm?.text &&
                          state.form.collectionForm?.options?.reduce(
                            (truth, option) => option.truth || truth,
                            false
                          )
                        )
                      }
                      onClick={() => {
                        if (state.form.collectionForm._id) {
                          dispatch(update(state.form.collectionForm));
                        } else {
                          dispatch(add(state.form.collectionForm));
                        }
                        setState({ form: initialForm.collectionForm });
                        dispatch(
                          fetchCollection(
                            state.form.collectionForm?.collectionName
                          )
                        );
                      }}
                    >
                      Сақтау
                    </Button>
                    <Button
                      type="primary"
                      onClick={() =>
                        setState({
                          ...state,
                          form: {
                            ...state.form,
                            collectionForm: {
                              ...state.form.collectionForm,
                              options: [
                                ...state.form.collectionForm.options,
                                { text: "", truth: false },
                              ],
                            },
                          },
                        })
                      }
                    >
                      Жауап үлгісін қосу
                    </Button>
                  </div>
                </div>
              }
            >
              {state.form.collectionForm?.options?.map((option, index) => (
                <div
                  style={{ display: "flex", gap: 10, paddingTop: 10 }}
                  key={index}
                >
                  <Checkbox
                    checked={option.truth}
                    onChange={(e) =>
                      setState({
                        ...state,
                        form: {
                          ...state.form,
                          collectionForm: {
                            ...state.form.collectionForm,
                            options: state.form.collectionForm.options.map(
                              (o, i) => ({
                                ...o,
                                truth: index === i ? e.target.checked : o.truth,
                              })
                            ),
                          },
                        },
                      })
                    }
                  />
                  <Input
                    placeholder="Жауап үлгісі"
                    value={option.text}
                    onChange={(e) =>
                      setState({
                        ...state,
                        form: {
                          ...state.form,
                          collectionForm: {
                            ...state.form.collectionForm,
                            options: state.form.collectionForm.options.map(
                              (o, i) => ({
                                ...o,
                                text: index === i ? e.target.value : o.text,
                              })
                            ),
                          },
                        },
                      })
                    }
                  />
                  <Button
                    danger
                    onClick={() =>
                      setState({
                        ...state,
                        form: {
                          ...state.form,
                          collectionForm: {
                            ...state.form.collectionForm,
                            options: state.form.options.filter((o, i) =>
                              index === i ? false : true
                            ),
                          },
                        },
                      })
                    }
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              ))}
            </Card>
            {collection.items.map((item, index) => (
              <Card
                style={{ marginTop: 16 }}
                key={index}
                title={
                  <div
                    style={{ marginLeft: 14 }}
                    dangerouslySetInnerHTML={{
                      __html: index + 1 + ") " + item.text,
                    }}
                  />
                }
                extra={
                  <div style={{ display: "flex" }}>
                    <Button
                      type="link"
                      onClick={() =>
                        setState({
                          ...state,
                          form: {
                            ...state.form,
                            collectionForm: {
                              ...state.form.collectionForm,
                              _id: item._id,
                              text: item.text,
                              options: item.options.map((option) => ({
                                _id: option._id,
                                text: option.text,
                                truth: option.truth,
                              })),
                            },
                          },
                        })
                      }
                    >
                      <EditOutlined />
                      Өзгерту
                    </Button>
                    <Button
                      type="link"
                      danger
                      onClick={() => dispatch(remove(item._id))}
                    >
                      <DeleteOutlined />
                      Өшіру
                    </Button>
                  </div>
                }
              >
                <Meta
                  description={
                    <ul>
                      {item.options.map((option, index) => (
                        <li
                          key={index}
                          style={{ color: option.truth ? "green" : "" }}
                        >
                          <div
                            style={{ marginLeft: 14 }}
                            dangerouslySetInnerHTML={{ __html: option.text }}
                          />
                        </li>
                      ))}
                    </ul>
                  }
                />
              </Card>
            ))}
          </>
        )}
      </Space>
    </>
  );
};

export default Test;
