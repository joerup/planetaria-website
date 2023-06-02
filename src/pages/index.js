import NextLink from "next/link";
import { Link, Flex, Box, Heading } from "@chakra-ui/core";
import Head from 'next/head';
import { NextPage } from "next";
import styles from '../styles/title.module.css';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Home(props) {
  return (
    <Box className={styles.background}>
      <Head>
        <title>Planetaria</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex flexDirection="column" alignItems="center">
        <Header/>
        <br/><br/><br/><br/><br/><br/>

        <img className={styles.image} src="/images/Planetaria.png"/>

        <div class={styles.column}>
            
          <h1 className={styles.header}>Welcome to Planetaria – an interactive Solar System simulator. Explore the heavens above right from your fingertips.</h1>

          <a href="https://apps.apple.com/is/app/planetaria/id1546887479"><img src="download.svg" className={styles.download}/></a>

          <br/><br/>

          <p className={styles.header}>
            There’s so much to explore in space!
          </p>
          <p className={styles.desc}>
          Embark on an epic journey through the celestial realm, and visit the Sun, the planets, dwarf planets, and over two-hundred moons. Entire worlds await your discovery, each with their own unique features and environments. Prepare to be captivated by their stories, enchanted by their beauty, and intrigued by their cosmic influence.
          </p>

          <br/><br/>

          <p className={styles.header}>
          It’s time to unveil the universe’s mysteries and expand your understanding of the cosmos.
          </p>
          <p className={styles.desc}>
          Let Planetaria be your guide, igniting your imagination and fueling your passion for exploring the universe.
          </p>
          
        </div>
        
        <br/><br/><br/><br/><br/><br/>
        
        <Footer/>
      </Flex>
    </Box>
  )
}
