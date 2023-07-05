import Header from "../components/Header"

import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'

import home from '../assets/home.svg'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header 
        title="Site de Tainã" 
        image={home} 
      />
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Alien size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>Que tal conhecer um pouco sobre a minha história e o que me motiva?</p>
        </div>
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}> Tenha acesso aos projetinhos que desenvolvi na minha jornada como estudante de programação. </p>
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#686AAC" weight="thin"/>
          <h2 className={styles.cardTitle}>Contatinho</h2>
          <p className={styles.cardDescription}>Por aqui você consegue entrar em contato comigo, seja para desenvolvermos juntos, ou trocar uma ideia.</p>
        </div>
      </div>
      
    </>
  )
}

export default Home
