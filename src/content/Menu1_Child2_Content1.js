import React from "react";
import Editor from "../components/Editor";
import Menu1_Child2_Content1_Image1 from "../assets/images/Menu1_Child2_Content1_Image1.png";
import Portal from "../components/Portal";

const Menu1_Child2_Content1 = () => {
  // const Menu1_Child2_Content1_Image1 = '../assets/images/Menu1_Child2_Content1_Image1.png';

  return (
    <>
      <p>
        <b>Python бағдарламаларын жазу және сақтау</b>
      </p>
      <b>Жоспар:</b>
      <ol>
        <li>Python тілінде алғашқы бағдарлама жазу және сақтау</li>
        <li>Мәліметтерді енгізу және кансолда шығару</li>
      </ol>
      <p>
        PyCharm ортасын орнату сабағымызда, бағдарламалау ортасын өз
        компьютерімізге орнатқан соң, ендігі кезекте алғашқы Python тіліндегі
        бағдарламамызды жазып,іске қосу және оны сақтауды үйренейік. Төмендегі
        (сурет 1) суретте көрсетілгендей алғашқы «Сәлем» мәтінін кансолда шығару
        реті. Яғни:
      </p>
      <ol>
        <li>
          <Portal code={"print('Сәлем')//python тілінде жазылуы"} />
        </li>
        <li>
          Файл атауын (main.py //файл атауы )тінтуір көмегімен таңдап, «Run
          ‘main’» таңдамасын таңдау арқылы файлды іске қосамыз
        </li>
        <li>Кансолда Сәлем мәтіні пайда болады</li>
      </ol>
      <div>
        <img
          src={Menu1_Child2_Content1_Image1}
          alter={"Menu1_Child2_Content1_Image1.png"}
        />
        Сурет 1
      </div>
      <b>Мәліметтерді енгізу</b>
      <p>
        Пайдаланушы өз ойынан қандайда бір мәліметті компьютерге енгізу үшін
        Python бағдарламалау тілінде <b>input( )</b> функциясы қолданылады.
        Input() функциясын қолдануға мысал:
      </p>
      <p>1 - мысал</p>
      <Editor
        className="editor"
        inputInitial={"a = input() //2 \nb = input() //3 \nprint('a=' +a+'  b='+b)"}
        outputInitial={"a=2 b=3"}
      />
      <b>Мәліметтерді шығару print() функциясы</b>
      <p>
        Python бағдарламалау тілінде қандай да бір мәліметті кансолда көру үшін
        print() функциясы қолданылады. Мысал келтіретін болсақ:
      </p>
      <Portal code={"print('Сәлем')//python тілінде жазылуы"} />
      <p>
        <b>Output:</b> Сәлем
      </p>
      <p>
        Print() функциясы арқылы кансолда сандық мәліметтерді шығаруда
        түсіндірме сөздер арқылы да шығаруға болады. Мысал:
      </p>
      {/* <Editor
        input={
          "a = int(input()) \nb = int(input()) \nprint(a, '+', b, '=',  a+b)"
        }
        output={"2 \n3 \n 2 + 3 = 5"}
      /> */}
      <div>
        <b>Пайдаланылған әдебиеттер тізімі</b>
      </div>
      <ol>
        <li>
          Билл Любанович, Простой Python. Современный стиль программирования,
          екінші шығарылым,Санк – Петербург,2021.- 531 – 539 стр.
        </li>
        <li>
          Python 3 для начинающих{" "}
          <a href={"https://pythonworld.ru/samouchitel-python "}>
            https://pythonworld.ru/samouchitel-python
          </a>
        </li>
        <li>
          Dr. Krishna Kumar Mohbey, Dr. Brijesh Bakariya, An introduction to
          python: A practical approach, first edition, India,2022. -1 – 36 page
        </li>
      </ol>
    </>
  );
};

export default Menu1_Child2_Content1;
