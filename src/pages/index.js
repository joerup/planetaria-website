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

        <img className={styles.image} src="/images/Logo.png"/>

        <div class={styles.column}>
            
          <h1 className={styles.header}>An interactive Solar System simulator that allows you to explore the heavens above right from your fingertips.</h1>

          <a href="https://apps.apple.com/is/app/planetaria/id1546887479"><img src="download.svg" className={styles.download}/></a>

          <p className={styles.desc}>There's so much to explore in the Solar System: the Sun, the eight planets, the dwarf planets, and over two hundred moons. See their stories, their beauty, their characteristics, and their impact.</p>

          {/* <p className={styles.desc}>
            You will be greeted with a beautiful view of the Solar System from above, looking down at the symphony of planets below you. The app uses real-time data to give you a representation of where each planet is currently located in its orbit at the precise moment you arrive.
            <br/><br/>
            The major objects are presented with beautiful interactive 3D models of their surfaces. You’ll learn some fascinating information about their stories and their impacts on the universe, followed by a list of their characteristics and properties: their orbits, rotations, structures, and environments. Dive deeper into these sections and find a more detailed breakdown of the objects’ characteristics.
            <br/><br/>
            <b>The universe is waiting to be explored with Planetaria!</b>

          </p> */}
          
        </div>
        
        <br/><br/><br/><br/><br/><br/>
        
        <Footer/>
      </Flex>
    </Box>
  )
}
