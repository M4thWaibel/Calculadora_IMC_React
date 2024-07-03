import { useState } from 'react';
import Button from '../Button/Button';
import './Imc_calc.css';

const Imc_calc = ({calcImc}) => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setHeight("");
    setWeight("");
  };

  return (
    <div id='container'>
      <h1 id='tittle'>Calculadora de IMC</h1>

      <form id="imc_form">
        <div className="form_inputs">
          <div className="form_control">
            <label htmlFor="height">Altura: </label>
            <input 
              type="number" 
              name='height' 
              id='height' 
              placeholder='Exemplo 1,75' 
              onChange={(e) => setHeight(e.target.value)} 
              value={height}
              required
            />
          </div>

          <div className="form_control">
            <label htmlFor="weight">Peso: </label>
            <input 
              type="number" 
              name='weight' 
              id='weight' 
              placeholder='Exemplo 58,3'
              onChange={(e) => setWeight(e.target.value)} 
              value={weight}
              required
            />
          </div>
        </div>

        <div className="action_control">
          <Button id = "calc_btn" text = "Calcular" action={(e) => calcImc(e, height, weight)}/>
          <Button id = "clear_btn" text ="Limpar" action={clearForm}/>
        </div>
      </form>

    </div>
  )
}

export default Imc_calc