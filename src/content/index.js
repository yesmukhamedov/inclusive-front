import React from 'react';
import Test from './Test';
import Student from './Student';
import Menu1_Child1_Content1 from './Menu1_Child1_Content1';
import Menu1_Child1_Content2 from './Menu1_Child1_Content2';
import Menu1_Child1_Content3 from './Menu1_Child1_Content3';
import Menu1_Child1_Content4 from './Menu1_Child1_Content4';
import Menu1_Child1_Content5 from './Menu1_Child1_Content5';
import Menu1_Child1_Content6 from './Menu1_Child1_Content6';
import Menu1_Child1_Content7 from './Menu1_Child1_Content7';
import Menu1_Child2_Content1 from './Menu1_Child2_Content1';
import Menu1_Child2_Content2 from './Menu1_Child2_Content2';
import Menu1_Child2_Content3 from './Menu1_Child2_Content3';
import Menu1_Child2_Content4 from './Menu1_Child2_Content4';
import Menu1_Child2_Content5 from './Menu1_Child2_Content5';
import Menu1_Child2_Content6 from './Menu1_Child2_Content6';
import Menu1_Child2_Content7 from './Menu1_Child2_Content7';
import Menu3_Child1_Content1 from './Menu3_Child1_Content1';

export const list = [
    {
        label: 'Оқулықтар',
        value: 'Menu1_Child0_Content0',
        subList: [
            {
                label: '3-сынып',
                value: 'Menu1_Child1_Content0',
                subList: [
                    {
                        label: '1-сабақ. Сөз таптары.',
                        value: 'Menu1_Child1_Content1',
                        subList: []
                    },
                    {
                        label: '2-сабақ. Зат есім.',
                        value: 'Menu1_Child1_Content2',
                        subList: []
                    },
                    {
                        label: '3-сабақ. Негізгі және туынды зат есім.',
                        value: 'Menu1_Child1_Content3',
                        subList: []
                    },
                    {
                        label: '4-сабақ. Зат есімнің тәуелденуі.',
                        value: 'Menu1_Child1_Content4',
                        subList: []
                    },
                    {
                        label: '5-сабақ. Жалқы және жалпы есім.',
                        value: 'Menu1_Child1_Content5',
                        subList: []
                    },
                    {
                        label: '6-сабақ. Зат есімнің жекеше және көпше түрі.',
                        value: 'Menu1_Child1_Content6',
                        subList: []
                    },
                    {
                        label: '7-сабақ. Болымды және болымсыз етістік.',
                        value: 'Menu1_Child1_Content7',
                        subList: []
                    },
                    {
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child1_Content1_Quiz1',
                        subList: []
                    }
                ]
            },
            {
                label: '4-сынып',
                value: 'Menu1_Child2_Content0',
                subList: [
                    {
                        label: '1-сабақ. Зат есімнің септелуі.',
                        value: 'Menu1_Child2_Content1',
                        subList: []
                    },
                    {
                        label: '2-сабақ. Атау септігі.',
                        value: 'Menu1_Child2_Content2',
                        subList: []
                    },
                    {
                        label: '3-сабақ. Жатыс септігі.',
                        value: 'Menu1_Child2_Content3',
                        subList: []
                    },
                    {
                        label: '4-сабақ. Септік жалғауының емьесі.',
                        value: 'Menu1_Child2_Content4',
                        subList: []
                    },
                    {
                        label: '5-сабақ. Зат есімнің жіктелуі.',
                        value: 'Menu1_Child2_Content5',
                        subList: []
                    },
                    {
                        label: '6-сабақ. Есімдік.',
                        value: 'Menu1_Child2_Content6',
                        subList: []
                    },
                    {
                        label: '7-сабақ. Етістік.',
                        value: 'Menu1_Child2_Content7',
                        subList: []
                    },
                    {
                        label: 'Тақырып бойынша білім тексеру',
                        value: 'Menu1_Child2_Content1_Quiz1',
                        subList: []
                    }
                ]
            },
        ]
    },
    {
        label: 'Оқушылар',
        value: 'Menu2_Child0_Content0',
        subList: [
            {
                label: '3-сынып',
                value: 'Menu1_Child1_Content1_Student3',
                subList: []
            },
            {
                label: '4-сынып',
                value: 'Menu1_Child1_Content2_Student4',
                subList: []
            }
        ]
    },
    {
        label: 'Нұсқаулық',
        value: 'Menu3_Child1_Content1',
        subList: []
    }
]

function Content({content, ...props}){
    switch(content){
        case  'Menu1_Child1_Content1': return <Menu1_Child1_Content1/>;
        case  'Menu1_Child1_Content2': return <Menu1_Child1_Content2/>;
        case  'Menu1_Child1_Content3': return <Menu1_Child1_Content3/>;
        case  'Menu1_Child1_Content4': return <Menu1_Child1_Content4/>;
        case  'Menu1_Child1_Content5': return <Menu1_Child1_Content5/>;
        case  'Menu1_Child1_Content6': return <Menu1_Child1_Content6/>;
        case  'Menu1_Child1_Content7': return <Menu1_Child1_Content7/>;
        case  'Menu1_Child2_Content1': return <Menu1_Child2_Content1/>;
        case  'Menu1_Child2_Content2': return <Menu1_Child2_Content2/>;
        case  'Menu1_Child2_Content3': return <Menu1_Child2_Content3/>;
        case  'Menu1_Child2_Content4': return <Menu1_Child2_Content4/>;
        case  'Menu1_Child2_Content5': return <Menu1_Child2_Content5/>;
        case  'Menu1_Child2_Content6': return <Menu1_Child2_Content6/>;
        case  'Menu1_Child2_Content7': return <Menu1_Child2_Content7/>;
        case  'Menu3_Child1_Content1': return <Menu3_Child1_Content1 style={{ all: 'unset' }}/>;
        default: return content.includes('Quiz')? <Test content={content}/> : content.includes('Student')? <Student content={content} style={{ all: 'unset' }}/> : <Menu1_Child1_Content1/>;
    }
}

export default Content;
