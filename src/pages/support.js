import NextLink from "next/link";
import Head from 'next/head';
import { Link, Flex, Box, Heading } from "@chakra-ui/core";
import { NextPage } from "next";
import styles from '../styles/title.module.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function About(props) {
  return (
    <Box className={styles.background}>
      <Head>
        <title>Support | Planetaria</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex flexDirection="column" alignItems="center">
        <Header/>
        <br/><br/><br/><br/><br/><br/>

        <div className={styles.column}>
          
          <div className={styles.description}>

            <img className={styles.image} src="/images/Planetaria.png"/>
            <h1 className={styles.title}>Support</h1>
            
            <br/>
            <p className={styles.desc}>You can contact us directly via email at any time for support, feedback, or bug reports. We'll try our best to get back to you within a few hours or so.</p>
            <h3 className={styles.title2}><a href="mailto:rupertusapps@gmail.com"><b>Email Contact:<br/><u>rupertusapps@gmail.com</u></b></a></h3>
            <br/>
            <br/>
            <p className={styles.desc}>If you are contacting us about an issue in the app, please include the following details in your submission:</p>
            <h3 className={styles.title2}>Planetaria version • device you are using • iOS version</h3>
            <p className={styles.desc}>This makes it faster for us to resolve any issues you may be facing.</p>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
        
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
      </Flex>
    </Box>
  )
}
