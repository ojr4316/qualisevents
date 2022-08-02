/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Contact.module.css";
import textStyles from "../styles/TextStyles.module.css";
import buttonStyles from "../styles/ButtonStyles.module.css";

import InfoImage from "../components/InfoImage";
import Layout from "../components/Layout";
import welcome from "../public/welcome.png";
import { useState } from "react";

export default function Contact() {

  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[phone, setPhone] = useState("");
  const[email, setEmail] = useState("");
  const[inquiry, setInquiry] = useState("");

  function onSubmit() {
    console.log(firstName, lastName, phone, email, inquiry);
  }

  return (
    <Layout page="contact">
      <div className={styles.contact}>
        <div className={styles.left}>
          <img src={welcome.src} alt="Welcome" className={styles.image} />
          <h6 className={styles.header}>
            {"Let's make your dream come true..."}
            <br />
            {"Contact us here!"}
          </h6>
        </div>
        <div className={styles.contact_form}>
          <div
            className={styles.form_container}
            style={{ marginRight: "32px" }}
          >
            <label className={styles.form_label}>First Name</label>
            <input type="text" className={styles.form_input} value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className={styles.form_container}>
            <label className={styles.form_label}>Last Name</label>
            <input type="text" className={styles.form_input} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </div>
          <div
            className={styles.form_container}
            style={{ marginRight: "32px" }}
          >
            <label className={styles.form_label}>Phone</label>
            <input type="text" className={styles.form_input} value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className={styles.form_container}>
            <label className={styles.form_label}>Email</label>
            <input type="text" className={styles.form_input} value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div
            className={styles.form_container}
            style={{ gridColumn: "1 / 3 " }}
          >
            <label className={styles.form_label}>Inquiry</label>
            <textarea className={styles.form_textarea} value={inquiry} onChange={(e)=>setInquiry(e.target.value)}></textarea>
          </div>
          <button
            className={buttonStyles.normal}
            style={{ marginTop: "24px", width: "220px" }}
            onClick={onSubmit}
          >
            <p className={buttonStyles.normal_text}>Submit</p>
          </button>
        </div>
      </div>
    </Layout>
  );
}
