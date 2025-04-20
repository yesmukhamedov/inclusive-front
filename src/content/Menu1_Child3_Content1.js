import React from 'react';
import Menu1_Child3_Content1_Image1 from '../assets/images/Menu1_Child3_Content1_Image1.png';
import Menu1_Child3_Content1_Image2 from '../assets/images/Menu1_Child3_Content1_Image2.png';
import Menu1_Child3_Content1_Image3 from '../assets/images/Menu1_Child3_Content1_Image3.png';

const Menu1_Child3_Content1 = () => {

    return (
        <>
            <div><h1>1-сабақ. Сөз таптары.</h1></div>
            <div><iframe src="https://elordamektep.kz/%D0%9C%D0%B5%D0%BA%D1%82%D0%B5%D0%BF%20%D0%B1%D3%A9%D0%BB%D1%96%D0%BC%D1%96/3%20%D1%87%D0%B5%D1%82%D0%B2%D0%B5%D1%80%D1%82%D1%8C/%D0%BA%D0%B0%D0%B7/4%20%D1%81%D1%8B%D0%BD%D1%8B%D0%BF/%D2%9A%D0%B0%D0%B7%D0%B0%D2%9B%20%D1%82%D1%96%D0%BB%D1%96/2%20%D1%81%D0%B0%D0%B1%D0%B0%D2%9B%20%D0%A1%D3%A9%D0%B7%20%D1%82%D0%B0%D0%BF%D1%82%D0%B0%D1%80%D1%8B.mp4" width="640" height="360" allowfullscreen></iframe></div>
            <br></br><br></br>
            <div><h1>«Қысқы ойын»</h1></div>
            <div><img src={Menu1_Child3_Content1_Image1} alter={'Menu1_Child3_Content1_Image1.png'}/></div>
            <p><span><b>Дескрипторлар:</b></span></p>
            <ul>
                <li><span>Сурет бойынша заттардың атауларын жазады;</span></li>
                <li><span>Жазған сөздеріне сұрақ қояды;</span></li>
                <li><span>Сөз таптарының атаулары мен сұрақтары арқылы топқа біріктіреді;</span></li>
            </ul>
            <br></br><br></br>
            <div><h1>Өзіңді тексер: «Қысқы ойын»</h1></div>
            <p><span>Суретке қарап отырып  барлық заттардың атауын, қимылын, түсін жаз.</span></p>
            <p><span>Мысалы:</span></p>
            <p><span>Үйлер, балалар, қыздар, ұлдар, қар, үш, екі, бір, аппақ, мұз, ағаш, ағаштар,сырғанақ, жылтыр, жасады, сырғанады, тепті, көңілді.</span></p>
            <table>
                <thead>
                    <tr>
                        <td><span><b>Зат есім</b> <p><i>Кім? Не? Кімдер? Нелер?</i></p></span></td>
                        <td><span><b>Етістік</b> <p><i>Не істеді? Не қылды? Қайтты?</i></p></span></td>
                        <td><span><b>Сын есім</b> <p><i>Қандай? Қай?</i></p></span></td>
                        <td><span><b>Сан есім</b> <p><i>Қанша? Неше? Нешінші?</i></p></span></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>Үйлер, қар, мұз,  ағаш, сырғанақ, балалар, қыздар, ұлдар, ағаштар</span></td>
                        <td><span>сырғанады, жасады, тепті</span></td>
                        <td><span>аппақ, жылтыр</span></td>
                        <td><span>үш, екі, бір</span></td>
                    </tr>
                </tbody>
            </table>
            <br></br><br></br>
            <div><h1>Жұмбақ</h1></div>
            <div><p><span>Жарқылдан соң жаңағы,</span></p>
            <p><span>Суға бөкті бар алап.</span></p>
            <p><span>Көкте түрлі жолақты</span></p>
            <p><span>Өрнек тұрды ғаламат!</span></p></div>
            <button onClick={()=>alert("Кемпірқосақ")}>Жұмбақтың  шешуі</button>
            <br></br><br></br>
            <div><img src={Menu1_Child3_Content1_Image2} alter={'Menu1_Child3_Content1_Image2.png'} width="640" height="360"/></div>
            <br></br><br></br>
            <div><h1>Кел ойнайық: «Жылдам жаз»</h1></div>
            <p><span>1-минутта терезе сыртындағы табиғатқа байланысты сөздерді жаз.</span></p>
            <br></br><br></br>
            <div><h1>КЕРІ БАЙЛАНЫС</h1></div>
            <div><img src={Menu1_Child3_Content1_Image3} alter={'Menu1_Child3_Content1_Image3.png'} width="640" height="360"/></div>
        </>
    )
}

export default Menu1_Child3_Content1;