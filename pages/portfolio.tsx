import styles from "../styles/Portfolio.module.css";
import textStyles from "../styles/TextStyles.module.css";
import InfoImage from "../components/InfoImage";
import Layout from "../components/Layout";
import etsy_shop from "../public/etsy_shop.png";

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
        />
      </div>
    </Layout>
  );
}
