import React from 'react';

const Menu1_Child7_Content2 = () => {
    return (
        <>
            <p><b>For және in кілт сөздерін қолдана отырып итерация жасау</b></p>
            <p>Python-да итераторлар көбінесе бір қарапайым себеппен қолданылады. Олар сізге осы құрылымдардың қаншалықты үлкен екенін және қалай жүзеге асырылатындығын білмей, деректер құрылымдарынан өтуге мүмкіндік береді. Сіз тіпті бағдарлама жұмыс істеп тұрған кезде жасалған мәліметтер бойынша жүре аласыз, бұл сізге компьютердің жадына сәйкес келмейтін деректер ағындарын өңдеуге мүмкіндік береді.</p>
            <p>Берілген тізім ішіндегі элементтерді экранға шығарайық:</p>
            <p>{'>>>'} rabbits = ['Flopsy','Mopsy','Cottontial','Peter']</p>
            <p>{'>>>'} current=0</p>
            <p>{'>>>'} while current{'<'}len(rabbits):</p>
            <p>...       print(rabbits[current])</p>
            <p>...       current+=1</p>
            <p><b>Output</b></p>
            <p>Flopsy</p>
            <p>Mopsy</p>
            <p>Cottontial</p>
            <p>Peter</p>
            <p>Берілген тізім ішіндегі элементтерді қайта экранға шығару үшін яғни итерация жасаудың жеңілірек түрі ол for және in кіл сөздерін қолдану арқылы:</p>
            <p>{'>>>'} for rabbit in rabbits:</p>
            <p>...     print(rabbit)</p>
            <p><b>Output</b></p>
            <p>Flopsy</p>
            <p>Mopsy</p>
            <p>Cottontial</p>
            <p>Peter</p>
            <p>Тізімдер мен сөздіктер немесе кортеждер арқылы итерация жасасаңыз ол элементтерді қайтарады.Ал егер де жолдарға итерация жасалса ол төмендегідей жолдағы әрбір символды экранға бөлек қатарларға бөліп шығарады:</p>
            <p>{'>>>'} word = 'cat'</p>
            <p>{'>>>'} for letter in word:</p>
            <p>...     print(letter)</p>
            <p>Output</p>
            <p>c</p>
            <p>a</p>
            <p>t</p>
            <p>Сөздіктерге итерация жасасақ кілттерін қайтарады. Біздің мысалымызда сөздік кілттері карта типтері болып табылады.</p>
            <p>{'>>>'} {"accusation = {'room':'ballroom', 'weapon':'lead pipe', 'person':'Col.Mustard'}"}</p>
            <p>{'>>>'} for card in accusation:  #немесе for card in accusation.keys():</p>
            <p>...     print(card)</p>
            <p>Output</p>
            <p>room</p>
            <p>weapon</p>
            <p>person</p>
            <p>Егер де сөздік кілтін емес сөздік мәндерін шығарғымыз келсе values() функциясын қолданамыз:</p>
            <p>{'>>>'} for value in accusation.values():</p>
            <p>...     print(value)</p>
            <p>Output</p>
            <p>ballroom</p>
            <p>lead pipe</p>
            <p>Col.Mustard </p>
            <p>Кілтті де, кортеж мәнін де қайтару үшін  items() функциясын пайдалануға болады:</p>
            <p>{'>>>'} for item in accusation.items():</p>
            <p>...     print(item)</p>
            <p>Output</p>
            <p>('room', 'ballroom')</p>
            <p>('weapon', 'lead pipe')</p>
            <p>('person', 'Col.Mustard')</p>
            <p>Сөздіктер, тізімдер және кортеждер жайлы алдағы тарауда айтылады. Break және continue операторлары while  цикліндегідей қолданылады.</p>
            <div><b>Пайдаланылған әдебиеттер тізімі</b></div>
            <ol>
                <li>Билл Любанович, Простой Python. Современный стиль программирования, екінші шығарылым,Санк – Петербург,2021.- 531 – 539 стр.</li>
                <li>Python 3 для начинающих <a href='https://pythonworld.ru/samouchitel-python'>https://pythonworld.ru/samouchitel-python</a></li>
                <li>Django Fan <a href='https://djangofan.ru/python-literals'>https://djangofan.ru/python-literals</a></li>
            </ol>
        </>
    )
}

export default Menu1_Child7_Content2;