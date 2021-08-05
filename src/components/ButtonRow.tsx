import { IonRow } from "@ionic/react";
import styles from "./ButtonRow.module.css";

const ButtonRow = (props: any)=> {

    return (
        <IonRow className={ styles.buttonRow }>
            { props.children }
        </IonRow>
    );
}

export default ButtonRow;