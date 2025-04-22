import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Card,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Splitter, 
  Avatar, List
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function Student({students, setTheme, ...props}) {

const [state, setState] = React.useState({
  selected: null,
  form: null
});

const setForm = (prop, value) => setState({...state, form: {...state.form, theme: {...state.form.theme, [prop]: value}}});
console.log(state)
    return <div style={{ all: 'unset' }}>
        <Splitter style={{ height: '100vh', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                <List
                    itemLayout="horizontal"
                    dataSource={students || []}
                    renderItem={(student, index) => (
                    <List.Item style={student?._id === state.selected?._id ? { backgroundColor: '#1677ff' } : {}}>
                        <List.Item.Meta
                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                        title={<a href="https://ant.design">{student.fullName}</a>}
                        onClick={()=>setState({...state, selected: student, form: student})}
                        description={student.special?" (ерекше оқушы)":""}
                        />
                    </List.Item>
                    )}
                />
            </Splitter.Panel>
            <Splitter.Panel >
            
  <>
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 10 }}
      layout="horizontal"
      style={{ maxWidth: 800, marginLeft: 80 }}
    >
      <Form.Item label="Қатысуы" name="disabled" valuePropName="checked">
        <Checkbox disabled>Сыныта</Checkbox>
      </Form.Item>
      <Form.Item label="Жынысы">
        <Radio.Group disabled>
          <Radio value="apple"> Ұл </Radio>
          <Radio value="pear"> Қыз </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Аты-жөні">
        <Input disabled value={"Дарина Кенжебек"}/>
      </Form.Item>
      <Form.Item label="Пән">
        <Select disabled>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Топ">
        <TreeSelect disabled
          treeData={[
            { title: '1-сынып', value: 'light', children: [{ title: 'Бірінші топ', value: 'bamboo' }, { title: 'Екінші топ', value: 'bamboo' }] },
            { title: '2-сынып', value: 'light', children: [{ title: 'Бірінші топ', value: 'bamboo' }, { title: 'Екінші топ', value: 'bamboo' }] },
            { title: '3-сынып', value: 'light', children: [{ title: 'Бірінші топ', value: 'bamboo' }, { title: 'Екінші топ', value: 'bamboo' }] },
            { title: '4-сынып', value: 'light', children: [{ title: 'Бірінші топ', value: 'bamboo' }, { title: 'Екінші топ', value: 'bamboo' }] },
          ]}
        />
      </Form.Item>
      <Form.Item label="Мекен жайы">
        <Cascader disabled
          options={[
            {
              value: '#1 Қала аты',
              label: '#1 Қала аты',
              children: [
                {
                  value: '#1 Көше аты',
                  label: '#1 Көше аты',
                },
                {
                    value: '#2 Көше аты',
                    label: '#2 Көше аты',
                },
                {
                    value: '#3 Көше аты',
                    label: '#3 Көше аты',
                },
                {
                    value: '#4 Көше аты',
                    label: '#4 Көше аты',
                },
              ],
            },
            {
                value: '#2 Қала аты',
                label: '#2 Қала аты',
                children: [
                  {
                    value: 'Көше аты',
                    label: 'Көше аты',
                  },
                ],
              },
          ]}
        />
      </Form.Item>
      <Form.Item label="Туылған күні">
        <DatePicker  disabled/>
      </Form.Item>
      <Form.Item label="Интервал белгілеу">
        <RangePicker  disabled/>
      </Form.Item>
      <Form.Item label="Оқушының сабақта белсенділігі">
        <Rate  disabled/>
      </Form.Item>
      <Form.Item label="Оқушы жайлы мәлімет (Ескерту)">
        <TextArea disabled rows={4} />
      </Form.Item>
      <Form.Item label="Оқушы фотосуреті" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload disabled action="/upload.do" listType="picture-card">
          <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Жүктеу</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label="Толық ақпарат">
        <Button>Оқушы парақшасына өту</Button>
      </Form.Item>
      
      <Checkbox
      checked={state.form?.special}
      onChange={()=>setState({...state, form: {...state.form, special: !state.form?.special}})}
    >
      Ерекше оқушы
    </Checkbox>
      <Card>
      
      <Form.Item label="Тапсырма уақыттарын ұзарту">
        <Slider disabled={!state.form?.special} onChange={value=>setForm('slowingDown', 1+value/100)}/>
      </Form.Item>
      <Form.Item label="Әріп-симфолдар өлшемін реттеу">
        <Slider disabled={!state.form?.special} onChange={value=>setForm('fontSize', 1+value/100)}/>
      </Form.Item>
      <Form.Item label="Субтитр қосу" valuePropName="checked">
        <Switch disabled={!state.form?.special} onChange={value=>setForm('subtitle', value)}/>
      </Form.Item>
      <Form.Item label="Негізгі түсті таңдау">
        <ColorPicker disabled={!state.form?.special} onChange={(a, value)=>setForm('textColor', value)}/>
      </Form.Item>
      <Form.Item label="Көмекші түсті таңдау">
        <ColorPicker disabled={!state.form?.special} onChange={(a, value)=>setForm('backgroundColor', value)}/>
      </Form.Item>
      </Card>
      <Form.Item label="Өзгерістерді сақтау">
        <Button disabled={!state.form?.special} onClick={()=>setTheme(state.form)}>Сақтау</Button>
      </Form.Item>
    </Form>
    <Card style={{background: state.form?.theme?.backgroundColor}}>
      <span style={{fontSize: 14*state.form?.theme?.fontSize, color: state.form?.theme?.textColor}}>
        Бұл бір мысал жазба, болашақ бет бейнесін бағалауға арналған. Айтылған ойлармен келісу-келіспеу өз еркіңізде. Маңыздысы – қалай жеткізілгені. Бұл бір мысал жазба, болашақ бет бейнесін бағалауға арналған. Айтылған ойлармен келісу-келіспеу өз еркіңізде. Маңыздысы – қалай жеткізілгені. Бұл бір мысал жазба, болашақ бет бейнесін бағалауға арналған. Айтылған ойлармен келісу-келіспеу өз еркіңізде. Маңыздысы – қалай жеткізілгені. Бұл бір мысал жазба, болашақ бет бейнесін бағалауға арналған. Айтылған ойлармен келісу-келіспеу өз еркіңізде. Маңыздысы – қалай жеткізілгені.
      </span>
    </Card>
  </>
            </Splitter.Panel>
        </Splitter>
    </div>
}

export default Student;