import Header from "../components/Header"

import sobre from '../assets/sobre.svg'

import styles from "../styles/pages/sobre.module.css"

import curiosidades from "../assets/curiosidades.jpg"

const Sobre = () => {
  return (
    <>
      <Header 
        title="Descubra mais" 
        image={sobre} 
      />
     
      
      
    
    <div className={styles.sobreContainer}>

      <img className={styles.taiImage} src={curiosidades} alt="Imagem de Tai" />
      <div className={styles.textContainer}>
      <h1 className={styles.cardNome}>Tainã Raio de Luar da Silva</h1>
      <p className={styles.cardParagrafo}>Mulher, nordestina, mãe de Malie, apaixonada por animais. Acredito que meu propósito aqui seja gerar benefício para outros seres. Sou entusiasta da diversidade, afinal, que graça teria se fôssemos todos iguais?
Formação acadêmica em Arqueologia pela UFPE e transicionando para carreira de desenvolvedora. Inicializada no berço do melhor bootcamp, a Reprograma, me sinto feliz e privilegiada em ter a oportunidade de me reencontrar nessa profissão desafiadora, de efeito instigador de tantas formas.</p>
    
      </div>
      
    </div>
    </>
  )
}

export default Sobre
