import { useState } from 'react';
import styles from './App.module.css'
import poweredImg from './assets/powered.png'
import {levels, calculateImc, Level} from './helpers/imc'
import { GridItem } from './components/GridItem'
import leftArrow from './assets/leftarrow.png'
import { isDisabled } from '@testing-library/user-event/dist/utils';

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level|null>(null);

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  const handleCalculateButton = () => {
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    }
    else{
      return null;
    }
  }

  return(
    <div className = {styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImg} width = {250} alt="Logo" />
        </div>
      </header>

    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule o seu IMC.</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

        <input
        disabled={toShow ? true : false}
        type="number" 
        placeholder='Digite sua altura. Ex: 1.5 (em metros)'
        value={heightField > 0 ? heightField : ''}
        // No onChange abaixo, ele analisa um evento, e como o e.target.value sempre retorna uma string, usa-se o parse float.
        onChange={e => setHeightField(parseFloat(e.target.value))}
        />

        <input
        disabled={toShow ? true : false}
        type="number" 
        placeholder='Digite seu peso. Ex: 75.3 (em Kg)'
        value={weightField > 0 ? weightField : ''}
        // No onChange abaixo, ele analisa um evento, e como o e.target.value sempre retorna uma string, usa-se o parse float.
        onChange={e => setWeightField(parseFloat(e.target.value))}
        />

        <button 
          onClick={handleCalculateButton}
          disabled={toShow ? true : false}
        >Calcular
        </button>

      </div>

      <div className={styles.rightSide}>
        {!toShow &&
        <div className={styles.grid}>
          {levels.map((item, key) => (
            <GridItem key={key} item={item}/>
          ))}
        </div>
}
      {toShow && 
        <div className={styles.rightBig}>
          <div className={styles.leftArrow}>
            <img onClick={handleBackButton} src={leftArrow} alt="leftArrow" width={25}/>
          </div>
          <GridItem item={toShow}/>
        </div>
      }
      </div>
      </div>

    </div>
  );
}

export default App