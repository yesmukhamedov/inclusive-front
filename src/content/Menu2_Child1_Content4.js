import React from 'react';

const Menu2_Child1_Content4 = () => {
    return (
        <>
            <p><b>Жиындар</b></p>
            <p><b>Жоспар:</b></p>
            <ol>
                <li>Set() функциясының көмегімен жиынды құру</li>
                <li>Set() функциясының көмегімен мәліметтер типін өзгерту</li>
                <li>Жиын элементтерін алу</li>
                <li>Жиынға элемент қосу</li>
                <li>Жиын ішіндегі элементтерді өшіру</li>
                <li>Жиынды біріктіру</li>
                <li>Жиындардың қиылысуы</li>
            </ol>
            <p>Жиындар сөздікке ұқсас, бірақ жиын тек кілттен тұрады, кілт мәні болмайды. Ал егер де кілтке қандайда бір мәнді бергіңіз келсе сөздікті қолданыңыз. Және кілттер бірегей болуы қажет.</p>
            <p>Егер де сіз бірнеше бірдей кілттері бар екі жиынды қоссаңыз, біріккен жиын ішінде әр кілттен тек біреуі ғана қалады. Себебі жиында кілттер бірегей болуы керек. Бос жиын ішінде элементтер саны нөлге тең болады.</p>
            <p><b>Set() функциясының көмегімен жиынды құру</b></p>
            <p><b>Жиынды құру үшін set() функциясын қолдану қажет немесе фигуралы жақша арқылы әр элементтен соң үтір қою арқылы құру қажет.</b></p>
            <p>{'>>>'} empty_set = set()</p>
            <p>{'>>>'} emty_set</p>
            <p>set()</p>
            <p>{'>>>'} even_numbers = {'{0,2,4,6,8}'}</p>
            <p>{'>>>'} even_numbers{'{0, 2, 4, 6, 8}'}</p>
            <br></br>
            <p>{'>>>'} odd_numbers = {'{1,3,5,7,9}'}</p>
            <p>{'>>>'} odd_numbers</p>
            <p>{'{1, 3, 5, 7, 9}'}</p>
            <p>Сөздіктегі секілді кілттердің реттілігінің жиында да мағынасы жоқ.</p>
            <p>Set() функциясының көмегімен мәліметтер типін өзгерту</p>
            <p>Сіз жиынды мәндерін қайталамай сөздіктен,кортежден, тізімнен де құра аласыз. Ең алдымен бірнеше әріптері қайталанатын жолға мысал келтіріп көрейік:</p>
            <p>{'>>>'} set('letters')</p>
            <p>{"{'e', 't', 'r', 'l', 's'}"}</p>
            <p>Мысалда көрсетілгендей екі рет қайталанған “t” және “e” әріптері бір реттен ғана экранға жықты.”letters” жолы {"{'e', 't', 'r', 'l', 's'}"}/- жиынына айналды.</p>
            <p>Тізімнен жиын құру:</p>
            <p>{'>>>'} set(['Aigul','Ainur','Aigul','Zholbarys'])</p>
            <p>{"{'Zholbarys', 'Aigul', 'Ainur'}"}</p>
            <p>Енді кортежден тізім құру:</p>
            <p>{'>>>'} set(('Aigul','Ainur','Aigul','Zholbarys'))</p>
            <p>{"{'Zholbarys', 'Aigul', 'Ainur'}"}</p>
            <p>Set() функциясы көмегімен сөздікті жиынға айналдырсаңыз, тек кілттерін аласыз және бірегей түрде.</p>
            <p>{'>>>'} set({"{'apple':'red','orange':'orange','cherry':'red'}"})</p>
            <p>{"{'apple', 'cherry', 'orange'}"}</p>
            <p><b>Жиын элементтерін алу</b></p>
            <p>Жиын ішіндегі элементтерге итерация жасау үшін біз циклді қолданамыз.</p>
            <p>{'>>>'} months = set(['Jan','Feb','March','Apr','May','June'])</p>
            <p>{'>>>'} print('May' in months)</p>
            <p>True</p>
            <p><b>Жиынға элемент қосу</b></p>
            <p>{'>>>'} months = set(['Jan','Feb','March','Apr','May','June'])</p>
            <p>{'>>>'} months.add("July")</p>
            <p>{'>>>'} print(months)</p>
            <p><b>Output</b></p>
            <p>{"{'Apr', 'March', 'July', 'Feb', 'June', 'May', 'Jan'}"}</p>
            <p><b>Жиын ішіндегі элементтерді өшіру</b></p>
            <p>Python – да элементтерді жиын ішінен өшіруге болады. Ол discard() және remove() әдістері арқылы жүзеге асырылады. discard() әдісі арқылы элементтерді жойсаңыз егерде сіз жойғалы жатқан элемент жиын ішінде кездеспесе қателік туындамайды. Ал егер де remove() әдісі арқылы болса, элемент табылмаса қателік шығарады. Мысал келтіріп көрейік:</p>
            <p>{'>>>'} num_set = {'{1,2,3,4,5,6}'}</p>
            <p>{'>>>'} num_set.discard(3)</p>
            <p>{'>>>'} print(num_set)</p>
            <p><b>Output</b></p>
            <p>{'{1, 2, 4, 5, 6}'}</p>
            <p>Remove() әдісіне мысал келтірсек:</p>
            <p>{'>>>'} num_set = {'{1,2,3,4,5,6}'}</p>
            <p>{'>>>'} num_set.remove(3)</p>
            <p>{'>>>'} print(num_set)</p>
            <p><b>Output</b></p>
            <p>{'{1, 2, 4, 5, 6}'}</p>
            <p>Clear() әдісі арқылы жиын ішіндегі барлық элементті жоюға болады. </p>
            <p>Мысалы:</p>
            <p>{'>>>'} num_set = {'{1,2,3,4,5,6}'}</p>
            <p>{'>>>'} num_set.clear()</p>
            <p>{'>>>'} print(num_set)</p>
            <p><b>Output</b></p>
            <p>set()</p>
            <p><b>Жиынды біріктіру</b></p>
            <p><b>A</b> және <b>B</b> жиыны бар дейік, екі жиынды біріктіру үшін union() әдісін қолдану қажет. Мысалы:</p>
            <p>{'>>>'} months = set(['Jan','Feb','March','Apr','May','June'])</p>
            <p>{'>>>'} months_a = set(['July','Aug','Sep','Oct','Nov','Dec'])</p>
            <p>{'>>>'} all_months=months.union(months_a)</p>
            <p>{'>>>'} print(all_months)</p>
            <p><b>Output</b></p>
            <p>{"{'Nov', 'Sep', 'Aug', 'Dec', 'Apr', 'March', 'July', 'Oct', 'Feb', 'June', 'May', 'Jan'}"}</p>
            <p>Бір немесе оданда көп жиындарды біріктірсе болады:</p>
            <p>{'>>>'} months_a = set(['July','Aug','Sep','Oct','Nov','Dec'])</p>
            <p>{'>>>'} months = set(['Jan','Feb','March','Apr','May','June'])</p>
            <p>{'>>>'} num_set = {'{1,2,3,4,5,6}'}</p>
            <p>{'>>>'} output = months_a.union(months,num_set)</p>
            <p>{'>>>'} print(output)</p>
            <p><b>Output</b></p>
            <p>{"{1, 2, 3, 'Nov', 'Sep', 'Aug', 'Dec', 4, 'Apr', 5, 6, 'July', 'March', 'Oct', 'Feb', 'June', 'May', 'Jan'}"}</p>
            <p>Жиынды | операторының көмегімен де жүзеге асырса болады:</p>
            <p>{'>>>'} months = set(['Jan','Feb','March','Apr','May','June'])</p>
            <p>{'>>>'} months_a = set(['July','Aug','Sep','Oct','Nov','Dec'])</p>
            <p>{'>>>'} print(months | months_a)</p>
            <p><b>Output</b></p>
            <p>{"{'Nov', 'Sep', 'Aug', 'Dec', 'Apr', 'March', 'July', 'Oct', 'Feb', 'June', 'May', 'Jan'}"}| операторының көмегімен бірнеше жиындарды біріктіру</p>
            <p>{'>>>'} months = set(['Jan','Feb','March','Apr','May','June'])</p>
            <p>{'>>>'} months_a = set(['July','Aug','Sep','Oct','Nov','Dec'])</p>
            <p>{'>>>'} num_set = {'{1,2,3,4,5,6}'}</p>
            <p>{'>>>'} print(months | months_a | num_set)</p>
            <p><b>Output</b></p>
            <p>{"{1, 2, 3, 'Nov', 'Sep', 'Aug', 'Dec', 4, 'Apr', 5, 6, 'March', 'July', 'Oct', 'Feb', 'June', 'May', 'Jan'}"}</p>
            <p><b>Жиындардың қиылысуы</b></p>
            <p>Жиындардың қиылысуы intersection() әдісі арқылы жүзеге асырылады.</p>
            <p>Мысалы:</p>
            <p>{'>>>'} months = set(['Jan','Feb','March','Apr','May','June','July'])</p>
            <p>{'>>>'} months_a = set(['July','Aug','Sep','Oct','Nov','Dec'])</p>
            <p>{'>>>'} z = months.intersection(months_a)</p>
            <p>{'>>>'} print(z)</p>
            <p><b>Output</b></p>
            <p>{"{'July'}"} & таңбасы арқылы қиылысуы.Мысалы:</p>
            <p>{'>>>'} months = set(['Jan','Feb','March','Apr','May','June','July'])</p>
            <p>{'>>>'} months_a = set(['July','Aug','Sep','Oct','Nov','Dec'])</p>
            <p>{'>>>'} print(months & months_a)</p>
            <p><b>Output</b></p>
            <p>{"{'July'}"}</p>
            <div><b>Пайдаланылған әдебиеттер тізімі</b></div>
            <ol>
                <li>Билл Любанович, Простой Python. Современный стиль программирования, екінші шығарылым,Санк – Петербург,2021.- 531 – 539 стр.</li>
                <li>Python 3 для начинающих <a href='https://pythonworld.ru/samouchitel-python'>https://pythonworld.ru/samouchitel-python</a></li>
                <li>Python 3 для начинающих <a href='https://pythonworld.ru/samouchitel-python'>https://pythonworld.ru/samouchitel-python</a></li>
            </ol>
        </>
    )
}

export default Menu2_Child1_Content4;