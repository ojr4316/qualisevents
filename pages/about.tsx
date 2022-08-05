import styles from "../styles/About.module.css";
import textStyles from "../styles/TextStyles.module.css";
import InfoImage from "../components/InfoImage";
import Layout from "../components/Layout";
import etsy_shop from "../public/etsy_shop.png";
import minuteman from "../public/minuteman.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
const item = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export default function About() {
  return (
    <Layout page="about">
      <div className={styles.about}>
        <h4 className={textStyles.title} style={{ marginTop: "32px" }}>
          A Little About Us
        </h4>
        <InfoImage
          left={true}
          title={"Our Founder"}
          text={
            "Custom products handcrafted for your perfect events. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo quis nisl congue fermentum. In feugiat justo sagittis, ornare enim sed, convallis justo. Cras sollicitudin hendrerit eleifend. Ut id enim non justo dignissim pharetra quis vel neque. Etiam maximus orci non tellus elementum, at faucibus urna suscipit. Sed faucibus in neque vitae tincidunt. Nam posuere nibh augue, a ultrices nibh tempor vel. Nulla facilisi."
          }
          buttonAction={() => {}}
          buttonText={"My Etsy Shop"}
          image={etsy_shop.src}
          animation={1}
        />
        <InfoImage
          left={false}
          title={"Our Goals"}
          text={
            "Custom products handcrafted for your perfect events. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo quis nisl congue fermentum. In feugiat justo sagittis, ornare enim sed, convallis justo. Cras sollicitudin hendrerit eleifend. Ut id enim non justo dignissim pharetra quis vel neque. Etiam maximus orci non tellus elementum, at faucibus urna suscipit. Sed faucibus in neque vitae tincidunt. Nam posuere nibh augue, a ultrices nibh tempor vel. Nulla facilisi."
          }
          buttonAction={() => {}}
          buttonText={"My Etsy Shop"}
          image={etsy_shop.src}
          animation={2}
        />
        <hr className={styles.separator} />
        <h4 className={textStyles.title} style={{ margin: "32px 0" }}>
          Some Vendors We Work With
        </h4>
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.vendor_list}
        >
          <motion.div
            variants={item}
            className={styles.vendor}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            <div className={styles.vendor_img}>
              <Image src={minuteman} alt="minuteman logo" />
            </div>
            <p className={styles.vendor_name}>Minuteman Press</p>
          </motion.div>
          <motion.div
            variants={item}
            className={styles.vendor}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            <div className={styles.vendor_img}>
              <Image src={minuteman} alt="minuteman logo" />
            </div>
            <p className={styles.vendor_name}>Minuteman Press</p>
          </motion.div>
          <motion.div
            variants={item}
            className={styles.vendor}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            <div className={styles.vendor_img}>
              <Image src={minuteman} alt="minuteman logo" />
            </div>
            <p className={styles.vendor_name}>Minuteman Press</p>
          </motion.div>
          <motion.div
            variants={item}
            className={styles.vendor}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            <div className={styles.vendor_img}>
              <Image src={minuteman} alt="minuteman logo" />
            </div>
            <p className={styles.vendor_name}>Minuteman Press</p>
          </motion.div>
          <motion.div
            variants={item}
            className={styles.vendor}
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
          >
            <div className={styles.vendor_img}>
              <Image src={minuteman} alt="minuteman logo" />
            </div>
            <p className={styles.vendor_name}>Minuteman Press</p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
