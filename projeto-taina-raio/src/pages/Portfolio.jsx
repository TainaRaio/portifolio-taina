import Header from "../components/Header"

import portfolio from '../assets/portfolio.svg'

import React, { useEffect, useState } from 'react';

import Axios from 'axios';

import styles from "../styles/pages/portifolio.module.css"

import { GithubLogo } from 'phosphor-react'

const Portfolio = () => {
  
    const [searchDados, setsearchDados] = useState([]);
  
    useEffect(() => {
      async function getData() {
        try {
          const response = await Axios.get(
            'https://api.github.com/users/TainaRaio/repos'
          );
          setsearchDados(response.data);
        } catch (error) {
          console.error('Capturei um erro: ' + error);
        }
      }  
      getData();
    }, []);
  
    
  return (
    <div>
      <Header 
        title="Projetinhos" 
        image={portfolio} 
      />
      
      
    <div/>

    <div className={styles.repoContainer}>
    {searchDados.map((repo) => (
          
          <div className={styles.cardRepo} key={repo.id}>
          <h3 className={styles.cardName}>{repo.name}</h3>
          <p className={styles.cardName}>{repo.description}</p>
          <a className={styles.cardLink} href={repo.html_url} target="_blank"><GithubLogo size={32} /></a>
          </div>
      
    
        ))}
       
        </div>
      </div>
  )
    }
        
      
   
export default Portfolio;