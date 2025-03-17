import React from 'react';

const Menu1_Child7_Content1 = () => {
    return (
        <>
            <p><b>While циклінің көмегімен әрекеттерді қайталау</b></p>
            <b>Жоспар:</b>
            <ol>
                <li>While циклінің көмегімен әрекеттерді қайталау</li>
                <li>Break операторының көмегімен циклді тоқтату</li>
                <li>Continue операторымен итерацияны өткізу</li>
            </ol>
            <p>If, elif, if…else операторларымен шартты тексеру ретпен орындалады. Ал бізге кейбір операцияларды бірнеше реттен қайталап орындау қажет болады. Қайталау операторларының көмегімен бір операцияны бірнеше рет қайталап тексеруге немесе орындауға болады. Python – да қайталау операторының қарапайым түрі while операторы. Интерактивті интерпретатор көмегімен 1 – ден  5 – ке дейінгі сандарды экранға шығарсақ ол төмендегідей болады:</p>
            <p>{'>>>'} count =1</p>
            <p>{'>>>'} while count{'<'}=5:</p>
            <p>...      print(count)</p>
            <p>...      count+=1</p>
            <p><b>Output</b></p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>Ең алдымен count айнымалысына 1 санын меншіктейміз. Шарт бойынша егерде count айнымалысының мәні 5 санынан кіші болса, және 6 – ға тең болғанша, цикл денесі орындалады. Әр цикл денесі орындалған сайын count айнымалысына 1 саны қосылып отырады.</p>
            <p><b>Break операторының көмегімен циклді тоқтату</b></p>
            <p>Егер де циклдің белгілі бір шарт орындалмайынша қайталанғанын қаласаңыз, бірақ ол шарттың қай кезде орындалатыны анық емес жағдайда break операторынан тұратын шексіз циклді қолданыңыз. Input() функциясының көмегімен, пернатақта арқылы енгізілген жолды экранға бастапқы әріпін үлкен етіп экранға шығарайық. Және де цикл тек қана “q” әріпінен тұратын жолды көргенде цикл тоқтасын десек ол төмендегідей болады:</p>
            <p>{'>>>'} while True:</p>
            <p>...     stuff = input("String to capitalize [type q to quit]: ")</p>
            <p>...     if stuff == 'q':</p>
            <p>...        break</p>
            <p>...     print(stuff.capitalize())</p>
            <p>...</p>
            <p>String to capitalize [type q to quit]: gulsim</p>
            <p>Gulsim</p>
            <p>String to capitalize [type q to quit]: kapbar</p>
            <p>Kapbar</p>
            <p>String to capitalize [type q to quit]: q</p>
            <p>{'>>>'}</p>
            <p><b>Continue операторымен итерацияны өткізу</b></p>
            <p>Кейбір жағдайда барлық циклді тоқтатпай, тек қана бір ғана итерацияны өткізіп жіберу керек болады. Сондай бір жағдайға мысал келтіріп көрейік: бүтін санды экранға енгізсе, егер де ол оң болса өткізіп жіберейік, ал егер де тақ сан болса экранға оның квадратын шығарайық. Және де цикл тек қана “q” әріпінен тұратын жолды көргенде цикл тоқтасын десек ол төмендегідей болады:</p>
            <p>{'>>>'} while True:</p>
            <p>...      value = input("Integer.please[q to quit]: ")</p>
            <p>...      if value =='q':</p>
            <p>...         break</p>
            <p>...      number = int(value)</p>
            <p>...      if number % 2 == 0:</p>
            <p>...         continue</p>
            <p>...      print(number,'squared is',number*number)</p>
            <p>...</p>
            <p>Integer.please[q to quit]: 1</p>
            <p>1 squared is 1</p>
            <p>Integer.please[q to quit]: 2</p>
            <p>Integer.please[q to quit]: 3</p>
            <p>3 squared is 9</p>
            <p>Integer.please[q to quit]: 4</p>
            <p>Integer.please[q to quit]: 7</p>
            <p>7 squared is 49</p>
            <p>Integer.please[q to quit]:</p>
            <div><b>Пайдаланылған әдебиеттер тізімі</b></div>
            <ol>
                <li>Билл Любанович, Простой Python. Современный стиль программирования, екінші шығарылым,Санк – Петербург,2021.- 531 – 539 стр.</li>
                <li>Python 3 для начинающих <a href='https://pythonworld.ru/samouchitel-python'>https://pythonworld.ru/samouchitel-python</a></li>
                <li>Django Fan <a href='https://djangofan.ru/python-literals'>https://djangofan.ru/python-literals</a></li>
            </ol>
        </>
    )
}

export default Menu1_Child7_Content1;