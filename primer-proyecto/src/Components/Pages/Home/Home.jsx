import React from 'react'
import { Logo } from '../../Logo/Logo'
import{FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import { faInstagram,faLinkedin,faFacebook,faTwitter,faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import loga from '../../../assets/Perfil.jpg'
import sena from '../../../assets/logoSena.png'
import { Items } from '../../Items/Items'
import { Header } from '../../Layouts/Header/Header'
import { Navbar } from '../../Navbar/Navbar'
import { Main } from '../../Main/Main'
import otro from '../../../assets/Otro.jpg'




export const Home = () => {
    return (
        
        <>
              <Header>
              
              <div className='logoo'><Logo content={otro} /></div>
              <div className='nombre'><h1>Jorge Andres</h1></div>
              <hr />
              <div className='todo'><Items content={"Inicio"}></Items>
              <Items content={"perfil"}></Items>
              <Items content={"proyectos"}></Items>
              <Items content={"Referencias"}></Items>
              <Items content={"experiencia"}></Items></div>
              <div className='logooo'><Logo content={sena} /></div>
<div className='iconos'>
              <FontAwesomeIcon icon={faLinkedin}/>
              <FontAwesomeIcon icon={faFacebook}/>
              <FontAwesomeIcon icon={faInstagram}/>
              <FontAwesomeIcon icon={faTwitter}/>
              <FontAwesomeIcon icon={faWhatsapp}/>
              </div>
              
              
          </Header>
          <Main>
              <div className="to">
          <Logo content={sena} />
          <h1 className='lt'>PERFIL</h1>
          </div>
          </Main>
          </>
    )
  }