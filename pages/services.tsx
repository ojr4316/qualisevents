/* eslint-disable @next/next/no-img-element */
import InfoImage from "../components/InfoImage";
import Layout from "../components/Layout";
import styles from "../styles/Services.module.css";
import textStyles from "../styles/TextStyles.module.css";
import buttonStyles from "../styles/ButtonStyles.module.css";
import etsy_shop from "../public/etsy_shop.png";
import grad_party from "../public/grad_party.png";

export default function Services() {
  let tempService = (
    <div className={styles.service}>
      <img
        src={grad_party.src}
        alt="grad_party"
        className={styles.service_image}
      />
      <div className={styles.service_info}>
        <h5 className={textStyles.title_inverted}>Custom Events</h5>
        <p className={textStyles.info_text_inverted}>
          Custom products handcrafted for your perfect events. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Donec sit amet leo quis nisl
          congue fermentum. In feugiat justo sagittis, ornare enim sed,
          convallis justo. Cras sollicitudin hendrerit eleifend.
        </p>
        <button className={buttonStyles.inverted}>My Etsy Shop</button>
      </div>
    </div>
  );

  return (
    <Layout page="services">
      <div className={styles.services}>
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

        <div className={styles.service_list}>
          {tempService}
          {tempService}
          {tempService}
        </div>
      </div>
    </Layout>
  );
}
