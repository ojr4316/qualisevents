/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import TextStyles from "../styles/TextStyles.module.css";
import styles from "../styles/Home.module.css";
import grad_party from "../public/grad_party.png";
import InfoImage from "../components/InfoImage";
import etsy_shop from "../public/etsy_shop.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useEffect } from "react";
import isMobile from "is-mobile";

export default function Home() {
  useEffect(() => {
    if(isMobile()){
      const height = window.innerHeight - 120;
      let element = document.getElementById("home-splash");
      if(element != null){
        element.style.height = `${height}px`;
        console.log(`${height} Working`)
      }
    }
  }, []); 

  return (
    <Layout>
      <div className={styles.home_splash} id="home-splash">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          width="100%"
          dynamicHeight={false}
        >
          <div>
            <img
              src={grad_party.src}
              alt="Grad Party"
              className={styles.splash_image}
            />
          </div>
          <div>
            <img
              src={grad_party.src}
              alt="Grad Party"
              className={styles.splash_image}
            />
          </div>
        </Carousel>

        <div className={styles.splash_text}>
          <h3 className={styles.stylized_header}>Have an idea?</h3>
          <h2 className={styles.main_header}>Let{"'"}s make it a reality.</h2>
          <button className={styles.splash_button}>
            <p className={styles.splash_button_text}>learn how</p>
          </button>
        </div>
      </div>
      <div className={styles.info_images}>
        <InfoImage
          left={true}
          title={"Products your events need"}
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
          title={"Products your events need"}
          text={
            "Custom products handcrafted for your perfect events. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo quis nisl congue fermentum. In feugiat justo sagittis, ornare enim sed, convallis justo. Cras sollicitudin hendrerit eleifend. Ut id enim non justo dignissim pharetra quis vel neque. Etiam maximus orci non tellus elementum, at faucibus urna suscipit. Sed faucibus in neque vitae tincidunt. Nam posuere nibh augue, a ultrices nibh tempor vel. Nulla facilisi."
          }
          buttonAction={() => {}}
          buttonText={"My Etsy Shop"}
          image={etsy_shop.src}
          animation={2}
        />
        <InfoImage
          left={true}
          title={"Products your events need"}
          text={
            "Custom products handcrafted for your perfect events. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo quis nisl congue fermentum. In feugiat justo sagittis, ornare enim sed, convallis justo. Cras sollicitudin hendrerit eleifend. Ut id enim non justo dignissim pharetra quis vel neque. Etiam maximus orci non tellus elementum, at faucibus urna suscipit. Sed faucibus in neque vitae tincidunt. Nam posuere nibh augue, a ultrices nibh tempor vel. Nulla facilisi."
          }
          buttonAction={() => {}}
          buttonText={"My Etsy Shop"}
          image={etsy_shop.src}
          animation={1}
        />
      </div>
      <div className={styles.testimonials}>
        <h2 className={TextStyles.title}>
          Some of our client&apos;s testimonials
        </h2>
        <motion.div className={styles.testimonial_container}>
          <motion.div
            className={styles.testimonial}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className={styles.testimonial_title}>
              &quot;Best Formal Event EVER!!&quot;
            </p>
            <div className={styles.stars_container}>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon icon={faStar} className={styles.rating} />
            </div>
            <p className={styles.testimonial_desc}>
              {
                '"It was the most well-planned, easy to execute part planning experience I\'ve ever had!"'
              }
            </p>
            <p className={styles.testimonial_name}>John Josephsen</p>
            <p className={styles.testimonial_date}>- 7/6/2022</p>
          </motion.div>
          <motion.div
            className={styles.testimonial}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className={styles.testimonial_title}>
              &quot;Best Formal Event EVER!!&quot;
            </p>
            <div className={styles.stars_container}>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon icon={faStar} className={styles.rating} />
            </div>
            <p className={styles.testimonial_desc}>
              {
                '"It was the most well-planned, easy to execute part planning experience I\'ve ever had!"'
              }
            </p>
            <p className={styles.testimonial_name}>John Josephsen</p>
            <p className={styles.testimonial_date}>- 7/6/2022</p>
          </motion.div>
          <motion.div
            className={styles.testimonial}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            viewport={{ once: true }}
          >
            <p className={styles.testimonial_title}>
              &quot;Best Formal Event EVER!!&quot;
            </p>
            <div className={styles.stars_container}>
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon
                icon={faStar}
                className={styles.rating_checked}
              />
              <FontAwesomeIcon icon={faStar} className={styles.rating} />
            </div>
            <p className={styles.testimonial_desc}>
              {
                '"It was the most well-planned, easy to execute part planning experience I\'ve ever had!"'
              }
            </p>
            <p className={styles.testimonial_name}>John Josephsen</p>
            <p className={styles.testimonial_date}>- 7/6/2022</p>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
}
