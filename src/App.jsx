import {data} from "./data/data";

import {useState} from "react";

import Imc_calc from './components/IMC_Calc/Imc_calc';
import IMCTable from './components/Info/IMCTable';

import './App.css';


function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if(!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat /(heightFloat * heightFloat)).toFixed(1);

    setIMC(imcResult);

    data.forEach((item) =>{
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if(!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();

    setIMC("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setIMC] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className='container'>

      {!imc ? (
        <Imc_calc calcImc={calcImc}/>
      ) : (
        <IMCTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>
      )}

    </div>
  )
}

export default App
