/* eslint-disable @next/next/no-img-element */
import styles from "../styles/InfoImage.module.css";
import textStyles from "../styles/TextStyles.module.css";
import buttonStyles from "../styles/ButtonStyles.module.css";

type Props = {
  title: string;
  text: string;
  buttonText: string;
  buttonAction: Function;
  left: boolean;
  image: string;
};

export default function InfoImage(props: Props) {
  return (
    <div className={styles.info_image} style={{flexDirection: props.left ? "row-reverse" : "row"}}>
      <div className={styles.side} style={{ marginRight: props.left ? "" : "64px", marginLeft: props.left ? "64px" : "0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h4 className={textStyles.title}>{props.title}</h4>
        <p className={textStyles.info_text}>{props.text}</p>
        <button className={buttonStyles.normal} onClick={() => props.buttonAction}>
          {props.buttonText}
        </button>
      </div>
      <div className={styles.side}>
        <div className={styles.image_background}>
          <img src={props.image} alt="" className={styles.image} />
        </div>
      </div>
    </div>
  );
}
