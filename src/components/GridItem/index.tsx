import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css'
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'


type Props = {
    item: Level;
}

export const GridItem = ({item}:Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                {item.icon  && (<img src={item.icon == 'up' ? upImage : downImage} width='30'/>)}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className = {styles.yourImc}>
                    Seu IMC é de <strong>{item.yourImc.toFixed(2)}</strong> Kg/m².
                </div>
            }

            <div className={styles.gridInfo}>{
                <>
                IMC entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            }</div>
        </div>
    );
}