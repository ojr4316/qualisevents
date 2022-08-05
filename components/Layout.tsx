/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Layout.module.css";
import logo from "../public/logo2.png";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEtsy,
  faFacebookF,
  faInstagram,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import isMobile from "is-mobile";

const mobile = require("is-mobile");

type Props = {
  children: JSX.Element | JSX.Element[];
  page?: string;
};

export default function Layout(props: Props) {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(
    <header className={styles.navbar}>
      <div className={styles.flex_third}>
        <Link href="/services">
          <p
            className={
              props.page === "services" ? styles.link_active : styles.link
            }
            style={{
              marginRight: "64px",
              borderBottom:
                props.page === "services" ? "2px solid black" : "none",
            }}
          >
            Services
          </p>
        </Link>
        <Link href="/about">
          <p
            className={
              props.page === "about" ? styles.link_active : styles.link
            }
            style={{
              marginRight: "64px",
              borderBottom: props.page === "about" ? "2px solid black" : "none",
            }}
          >
            About
          </p>
        </Link>
        <Link href="/portfolio">
          <p
            className={
              props.page === "portfolio" ? styles.link_active : styles.link
            }
            style={{
              borderBottom:
                props.page === "portfolio" ? "2px solid black" : "none",
            }}
          >
            Portfolio
          </p>
        </Link>
      </div>
      <div className={styles.flex_third} style={{ justifyContent: "center" }}>
        <Link href="/">
          <img src={logo.src} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.flex_third} style={{ justifyContent: "flex-end" }}>
        <Link href="/contact">
          <div className={styles.link_button}>
            <p
              className={
                props.page === "contact" ? styles.link_active : styles.link
              }
              style={{
                borderBottom:
                  props.page === "contact" ? "2px solid black" : "none",
              }}
            >
              Contact
            </p>
          </div>
        </Link>
      </div>
    </header>
  );

  useEffect(() => {
    if (mobile() || window.innerWidth < 800) {
      setNav(
        <header className={styles.navbar}>
          <Link href="/">
            <img src={logo.src} alt="Logo" className={styles.logo} />
          </Link>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.menu}
            onClick={() => setOpen(!open)}
          />
          <motion.div
            className={styles.nav_items}
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <Link href="/services">
              <p
                className={
                  props.page === "services" ? styles.link_active : styles.link
                }
                style={{
                  borderBottom:
                    props.page === "services" ? "2px solid black" : "none",
                }}
              >
                Services
              </p>
            </Link>
            <Link href="/about">
              <p
                className={
                  props.page === "about" ? styles.link_active : styles.link
                }
                style={{
                  borderBottom:
                    props.page === "about" ? "2px solid black" : "none",
                }}
              >
                About
              </p>
            </Link>
            <Link href="/portfolio">
              <p
                className={
                  props.page === "portfolio" ? styles.link_active : styles.link
                }
                style={{
                  borderBottom:
                    props.page === "portfolio" ? "2px solid black" : "none",
                }}
              >
                Portfolio
              </p>
            </Link>
            <Link href="/contact">
              <div className={styles.link_button}>
                <p
                  className={
                    props.page === "contact" ? styles.link_active : styles.link
                  }
                  style={{
                    borderBottom:
                      props.page === "contact" ? "2px solid black" : "none",
                  }}
                >
                  Contact
                </p>
              </div>
            </Link>
          </motion.div>
        </header>
      );
    }

    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [open, props.page]);

  return (
    <div className={styles.main_container}>
      <Head>
        <title>Qualis Events</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {nav}
      <main className={styles.content}>{props.children}</main>
      <footer className={styles.footer}>
        <div className={styles.flex_third_col}>
          <p className={styles.footer_name}> Qualis Events LLC. </p>
          <p className={styles.footer_text}>info@qualisevents.com</p>
        </div>
        <div className={styles.flex_third} style={{ justifyContent: "center" }}>
          <a
            target="_blank"
            href="https://www.instagram.com/qualisevents/"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.footer_icon}
            />
          </a>
          <a target="_self" href="#!" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebookF}
              className={styles.footer_icon}
            />
          </a>
          <a target="_self" href="#!" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEtsy} className={styles.footer_icon} />
          </a>
          <a target="_self" href="#!" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faPinterestP}
              className={styles.footer_icon}
            />
          </a>
        </div>
        <div className={styles.flex_third_empty}/>
      </footer>
    </div>
  );
}
