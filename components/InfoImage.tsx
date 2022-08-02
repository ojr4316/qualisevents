/* eslint-disable @next/next/no-img-element */
import styles from "../styles/InfoImage.module.css";
import textStyles from "../styles/TextStyles.module.css";
import buttonStyles from "../styles/ButtonStyles.module.css";
import { motion } from "framer-motion";

type Props = {
  title: string;
  text: string;
  buttonText: string;
  buttonAction: Function;
  left: boolean;
  image: string;
  animation?: number;
};

const variants = {
  anim1_text: { opacity: 0, x: -50 },
  anim1_img: { opacity: 0, x: 50 },
  anim2_text: { opacity: 0, x: 50 },
  anim2_img: { opacity: 0, x: -50 },
};

export default function InfoImage(props: Props) {
  return (
    <div
      className={`${props.left ? styles.info_image : styles.info_image_flip}`}
    >
      <motion.div
        className={`${styles.side} ${props.left ? styles.side_left : styles.side_right}`}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        initial={
          props.animation == 1 ? variants.anim1_text : variants.anim2_text
        }
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "tween" }}
      >
        <h4 className={textStyles.title}>{props.title}</h4>
        <p className={textStyles.info_text}>{props.text}</p>
        <button
          className={buttonStyles.normal}
          onClick={() => props.buttonAction}
        >
          <p className={buttonStyles.normal_text}>{props.buttonText}</p>
        </button>
      </motion.div>
      <motion.div
        className={styles.side}
        initial={props.animation == 1 ? variants.anim1_img : variants.anim2_img}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "tween" }}
      >
        <div className={styles.image_background}>
          <img src={props.image} alt="" className={styles.image} />
        </div>
      </motion.div>
    </div>
  );
}
