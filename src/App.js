import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "./axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  UserOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  Spin,
  Row,
  Col,
  Switch,
  Drawer,
  Button,
  Form,
  Input,
  Select,
  Divider,
  Steps,
  Affix,
  Progress,
  Tag,
  Image,
  Space,
  Segmented,
} from "antd";

import Multimedia, { list } from "./content";
import "./style.css";
import { login, logout, register, authMe, setTheme } from "./redux/slices/auth";
const { Sider, Content, Header, Footer } = Layout;
const { Step } = Steps;
const { Option } = Select;

function App({ ...props }) {
  const {} = useParams();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({
    user: state.auth.user,
  }));

  React.useEffect(() => {
    dispatch(authMe());
  }, []);

  React.useEffect(() => {
    user?.token && window.localStorage.setItem("token", user.token);
  }, [user]);

  React.useEffect(() => {
    setState({
      ...state,
      user: user ? { ...state.user, ...user } : { theme: "light" },
    });
  }, [user]);

  React.useEffect(() => {
    if(user?._id && user?.theme){
      dispatch(setTheme({ _id: user._id, theme: user.theme }));
    }
  }, [user?.theme]);

  const [state, setState] = React.useState({
    user: {
      type: "Оқытушы",
      theme: "light",
      ...user,
    },
    drawer: {
      account: false,
      login: false,
      register: false,
    },
    content: "",
    form: {
      login: {
        email: "",
        password: "",
      },
      register: {
        fullName: "",
        email: "",
        supervisorId: "",
        password: "",
      },
    },
  });

  console.log({ state, user });

  function drawer(element) {
    setState({
      ...state,
      drawer: { ...state.drawer, [element]: !state.drawer[element] },
    });
  }

  const menu = (list) =>
    list
      .filter((m) => (user?.token ? true : !m.value.includes("Quiz")))
      .map((listElement) =>
        listElement.subList?.length ? (
          <Menu.SubMenu
            key={listElement.value}
            title={<span>{listElement.label}</span>}
          >
            {menu(listElement.subList)}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={listElement.value}>
            <span>{listElement.label}</span>
          </Menu.Item>
        )
      );

  const senu = (list) =>
    list
      .filter((listElement) =>
        user?._id ? true : !listElement.value.includes("Quiz")
      )
      .map((listElement) =>
        listElement.subList?.length ? (
          <Menu.SubMenu
            key={listElement.value}
            title={<span>{listElement.label}</span>}
          >
            {senu(listElement.subList)}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={listElement.value}>
            <span>{listElement.label}</span>
          </Menu.Item>
        )
      );
  //     const textt = list =>
  //     list
  //       .filter((m) => (user?.token ? true : !m.value.includes("Quiz")))
  //       .map((listElement) =>
  //         listElement.subList?.length
  //           ? `"->listElement.label" ${menu(listElement.subList)}`
  //           : listElement.label
  //       );
  // console.log(textt(list));

  const title = (list) =>
    list.map((lit) =>
      lit.subList?.length
        ? title(lit.subList)
        : lit.value === state.content
        ? true
        : false
    )?.label;

  const setForm = (formName, prop, value) =>
    setState({
      ...state,
      form: {
        ...state.form,
        [formName]: { ...state.form[formName], [prop]: value },
      },
    });

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(247 247 249)",
          minHeight: 55,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Row style={{ width: "100%" }}>
          <Col span={2}>
            <></>
          </Col>
          <Col
            span={20}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a href={"/"}>Python үйрену</a>
            <div>
              <Switch
                style={{ marginLeft: 14, marginRight: 14 }}
                checkedChildren="күн"
                unCheckedChildren="түн"
                defaultChecked
                onChange={(bool) =>
                  setState({
                    ...state,
                    user: { ...state.user, theme: bool ? "light" : "dark" },
                  })
                }
              />
              {state.user?.fullName ? (
                <a
                  onClick={
                    state.user?.supervisor
                      ? () => drawer("account")
                      : () => {
                          if (window.confirm("Жүйеден шығуды қалайсызба?")) {
                            dispatch(logout());
                            window.localStorage.removeItem("token");
                          }
                        }
                  }
                >
                  {state.user?.fullName}
                </a>
              ) : (
                <a onClick={() => drawer("login")}>Жүйеге кіру</a>
              )}
              <Drawer
                title="Жүйеге қосылу"
                width={500}
                placement="right"
                closable={false}
                onClose={() => drawer("login")}
                visible={state.drawer.login}
              >
                <Form
                  name="basic"
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Электронды почта"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Өтініш, электронды почтаны енгізіңіз!",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) =>
                        setForm("login", "email", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    label="Құпия сөз"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Өтініш, құпия сөз енгізіңіз!",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={(e) =>
                        setForm("login", "password", e.target.value)
                      }
                    />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => {
                          dispatch(login(state.form.login));
                          drawer("login");
                        }}
                      >
                        Кіру
                      </Button>
                      <Button type="primary" onClick={() => drawer("register")}>
                        Тіркелу
                      </Button>
                    </div>
                  </Form.Item>
                </Form>
                <Drawer
                  title="Жүйеге тіркелу"
                  width={520}
                  closable={false}
                  onClose={() => drawer("register")}
                  visible={state.drawer.register}
                >
                  <div style={{ width: "100%", display: "flex" }}>
                    <Segmented
                      width={"100%"}
                      options={["Оқытушы", "Оқушы"]}
                      value={state.user.type}
                      onChange={(value) =>
                        setState({
                          ...state,
                          user: { ...state.user, type: value },
                        })
                      }
                    />
                  </div>
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    autoComplete="off"
                  >
                    <Form.Item
                      label="Қолданушы аты"
                      name="fullName"
                      rules={[
                        {
                          required: true,
                          message: "Өтініш, қолданушы атын көрсетіңіз!",
                        },
                      ]}
                    >
                      <Input
                        prefix={<UserOutlined />}
                        onChange={(e) =>
                          setForm("register", "fullName", e.target.value)
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      label="Электронды почта"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Өтініш, электронды почтаны көрсетіңіз!",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) =>
                          setForm("register", "email", e.target.value)
                        }
                      />
                    </Form.Item>
                    {state.user.type === "Оқушы" ? (
                      <Form.Item
                        label="Мұғалім коды"
                        name="supervisorId"
                        rules={[
                          {
                            required: false,
                            // message: 'Өтініш, Мұғалім кодын көрсетіңіз!',
                          },
                        ]}
                      >
                        <Input
                          onChange={(e) =>
                            setForm("register", "supervisorId", e.target.value)
                          }
                        />
                      </Form.Item>
                    ) : null}
                    <Form.Item
                      label="Құпия сөз"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Өтініш, құпия сөз енгізіңіз!",
                        },
                      ]}
                    >
                      <Input.Password
                        onChange={(e) =>
                          setForm("register", "password", e.target.value)
                        }
                      />
                    </Form.Item>
                    {/* <Form.Item
                        label="Құпия сөз"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Өтініш, құпия сөз енгізіңіз!',
                          },
                        ]}
                      >
                        <Input.Password  onChange={e=>setForm('register', 'password', e.target.value)}/>
                      </Form.Item> */}
                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => {
                          dispatch(
                            register({
                              ...state.form.register,
                              supervisorId:
                                state.form.register.supervisorId !== ""
                                  ? state.form.register.supervisorId
                                  : null,
                            })
                            // .unwrap().then(result=>{
                            //   if(result.payload && result.payload.user){
                            //     drawer('register');
                            //   }
                            // })
                          );
                          drawer("register");
                        }}
                      >
                        Тіркелу
                      </Button>
                    </Form.Item>
                  </Form>
                </Drawer>
              </Drawer>
            </div>
          </Col>
          <Col span={2}>
            <></>
          </Col>
        </Row>
      </div>
      <Layout>
        <Sider theme={state.user.theme} width={256}>
          <Image
            preview={false}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/1920px-Python_logo_and_wordmark.svg.png"
          />
          <Menu
            style={{ marginTop: 28 }} //minWidth: 500,
            theme={state.user.theme}
            size="large"
            onClick={(any) => setState({ ...state, content: any.key })}
            mode="inline"
            defaultOpenKeys={["Menu1_Child0_Content0", "Menu2_Child0_Content0"]}
          >
            {senu(list)}
          </Menu>
        </Sider>
        <Layout>
          <Header
            className={`${state.user.theme}Header`}
            style={{
              paddingLeft: 42,
            }}
          >
            {title(list)}
          </Header>
          <div>
            <Content
              className={`${state.user.theme} content`}
              style={{
                padding: "48px 40px 24px 24px",
                minHeight: window.innerHeight - 285,
              }}
            >
              <Multimedia
                className={`${state.user.theme}Multimedia`}
                content={state.content}
                user={state.user}
              />

              <Affix
                offsetTop={120}
                // onChange={(affixed) => console.log(affixed)}
                style={{ position: "fixed", bottom: 50, right: 50 }}
              >
                <Button
                  shape="circle"
                  size="large"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  ^
                </Button>
              </Affix>
            </Content>
          </div>
          <Drawer
            title={`${state.user?.fullName} (${state.user?.email})`}
            placement={"bottom"}
            height={650}
            onClose={() => drawer("account")}
            extra={
              <Space>
                <a
                  onClick={() => {
                    if (window.confirm("Жүйеден шығуды қалайсызба?")) {
                      dispatch(logout());
                      drawer("account");
                      window.localStorage.removeItem("token");
                    }
                  }}
                >
                  Жүйеден шығу
                </a>
              </Space>
            }
            visible={state.drawer.account}
          >
            <Row>
              <Col span={6}>
                <Steps
                  direction="vertical"
                  size="small"
                  current={1}
                  percent={60}
                >
                  <Step title="Дәріс #1" description="This is a description." />
                  <Step title="Дәріс #2" description="This is a description." />
                  <Step title="Дәріс #3" description="This is a description." />
                </Steps>
              </Col>
              <Col span={18}>
                <div>
                  <Divider
                    style={{ marginTop: 0, marginBottom: 0 }}
                    orientation="left"
                  >
                    Сенің үлгерімің
                  </Divider>
                  <Progress
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                    style={{ marginTop: 14, marginBottom: 14 }}
                    percent={99.9}
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nonne merninisti licere mihi ista probare, quae sunt a te
                    dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Sed nonne merninisti licere
                    mihi ista probare, quae sunt a te dicta? Refert tamen, quo
                    modo. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed nonne merninisti licere mihi ista probare, quae
                    sunt a te dicta? Refert tamen, quo modo. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Sed nonne merninisti
                    licere mihi ista probare, quae sunt a te dicta? Refert
                    tamen, quo modo.
                  </p>
                </div>
                <Row>
                  <Col span={6}>
                    <Progress type="circle" percent={50} width={100} />
                  </Col>
                  <Col span={6}>
                    <Progress type="circle" percent={60} width={100} />
                  </Col>
                  <Col span={6}>
                    <Progress type="circle" percent={70} width={100} />
                  </Col>
                  <Col span={6}>
                    <Progress type="circle" percent={80} width={100} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Drawer>
          <Footer
            className={`${state.user.theme}Footer`}
            style={{
              textAlign: "center",
            }}
          >
            <Tag icon={<TwitterOutlined />} color="#55acee">
              Twitter
            </Tag>
            <Tag icon={<YoutubeOutlined />} color="#cd201f">
              Youtube
            </Tag>
            <Tag icon={<FacebookOutlined />} color="#3b5999">
              Facebook
            </Tag>
            <Tag icon={<LinkedinOutlined />} color="#55acee">
              LinkedIn
            </Tag>
            <br />
            Abay University, Almaty ©{new Date().getFullYear()} Created by Shakharbanu
            {/* Almaty ©2022 Created by Yeskendyr */}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
