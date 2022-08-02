/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Portfolio.module.css";
import textStyles from "../styles/TextStyles.module.css";
import InfoImage from "../components/InfoImage";
import Layout from "../components/Layout";
import etsy_shop from "../public/etsy_shop.png";
import grad_party from "../public/grad_party.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Portfolio() {
  return (
    <Layout page="portfolio">
      <div className={styles.portfolio}>
        <InfoImage
          left={false}
          title={"Products your events need"}
          text={
            "Custom products handcrafted for your perfect events. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet leo quis nisl congue fermentum. In feugiat justo sagittis, ornare enim sed, convallis justo. Cras sollicitudin hendrerit eleifend. Ut id enim non justo dignissim pharetra quis vel neque. Etiam maximus orci non tellus elementum, at faucibus urna suscipit. Sed faucibus in neque vitae tincidunt. Nam posuere nibh augue, a ultrices nibh tempor vel. Nulla facilisi."
          }
          buttonAction={() => {}}
          buttonText={"My Etsy Shop"}
          image={etsy_shop.src}
          animation={1}
        />
        <Carousel
          responsive={responsive}
          containerClass={styles.carousel_container}
          renderArrowsWhenDisabled={true}
          showDots={true}
        >
          <div draggable={false}>
            <img
              src={grad_party.src}
              alt="Grad Party"
              className={styles.image}
              draggable={false}
            />
          </div>
          <div draggable={false}>
            <img
              src={grad_party.src}
              alt="Grad Party"
              className={styles.image}
              draggable={false}
            />
          </div>
          <div draggable={false}>
            <img
              src={grad_party.src}
              alt="Grad Party"
              className={styles.image}
              draggable={false}
            />
          </div>
          <div draggable={false}>
            <img
              src={grad_party.src}
              alt="Grad Party"
              className={styles.image}
              draggable={false}
            />
          </div>
          <div draggable={false}>
            <img
              src={grad_party.src}
              alt="Grad Party"
              className={styles.image}
              draggable={false}
            />
          </div>
          <div draggable={false}>
            <img
              src={grad_party.src}
              alt="Grad Party"
              className={styles.image}
              draggable={false}
            />
          </div>
        </Carousel>
      </div>
    </Layout>
  );
}
