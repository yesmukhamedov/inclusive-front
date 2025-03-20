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

const data = [
  {title: 'Айбек Жанболат'},
  {title: 'Аружан Талгат'},
  {title: 'Марат Нұрсұлтан'},
  {title: 'Дарина Кенжебек'},
  {title: 'Еркеназ Мұрат'},
  {title: 'Нұрсұлтан Қанат'},
  {title: 'Кәмилла Айтжановна'},
  {title: 'Тимур Жақсылық'},
  {title: 'Алия Серікқызы'},
  {title: 'Данияр Баймолдин'}
];

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function Student(props) {
    
    return <>
        <Splitter style={{ height: '100vh', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                    <List.Item style={index === 3 ? { backgroundColor: '#1677ff' } : {}}>
                        <List.Item.Meta
                        avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Оқушы жайлы қосымша ақпараттар."
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
        <Checkbox>Сыныта</Checkbox>
      </Form.Item>
      <Form.Item label="Жынысы">
        <Radio.Group>
          <Radio value="apple"> Ұл </Radio>
          <Radio value="pear"> Қыз </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Аты-жөні">
        <Input value={"Дарина Кенжебек"}/>
      </Form.Item>
      <Form.Item label="Пән">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Топ">
        <TreeSelect
          treeData={[
            { title: '1-сынып', value: 'light', children: [{ title: 'Бірінші топ', value: 'bamboo' }, { title: 'Екінші топ', value: 'bamboo' }] },
            { title: '2-сынып', value: 'light', children: [{ title: 'Бірінші топ', value: 'bamboo' }, { title: 'Екінші топ', value: 'bamboo' }] },
            { title: '3-сынып', value: 'light', children: [{ title: 'Бірінші топ', value: 'bamboo' }, { title: 'Екінші топ', value: 'bamboo' }] },
            { title: '4-сынып', value: 'light', children: [{ title: 'Бірінші топ', value: 'bamboo' }, { title: 'Екінші топ', value: 'bamboo' }] },
          ]}
        />
      </Form.Item>
      <Form.Item label="Мекен жайы">
        <Cascader
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
        <DatePicker />
      </Form.Item>
      <Form.Item label="Интервал белгілеу">
        <RangePicker />
      </Form.Item>
      <Form.Item label="Оқушының сабақта белсенділігі">
        <Rate />
      </Form.Item>
      <Form.Item label="Оқушы жайлы мәлімет (Ескерту)">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Оқушы фотосуреті" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload action="/upload.do" listType="picture-card">
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
    >
      Ерекше оқушы
    </Checkbox>

      <Card>
      
      <Form.Item label="Тапсырма уақыттарын ұзарту">
        <Slider />
      </Form.Item>
      <Form.Item label="Әріп-симфолдар өлшемін реттеу">
        <Slider />
      </Form.Item>
      <Form.Item label="Субтитр қосу" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Түс таңдау">
        <ColorPicker />
      </Form.Item>
      </Card>
    </Form>
  </>
            </Splitter.Panel>
        </Splitter>
    </>
}

export default Student;