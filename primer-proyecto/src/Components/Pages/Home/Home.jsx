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
import foto from '../../../assets/Chelsea.png'




export const Home = () => {
    return (
        
        <>
              <Header>
              
              <div className='logoo'><Logo content={otro} /></div>
              <div className='nombre'><h1>Jorge Andres</h1></div>
              <hr className='raya'/>
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
          <hr className='raya1'/>
          <p className='n'>El Lorem ipsum fue concebido como un texto de relleno,formateado de una cierta <br /> manera para permitir la presentacion de elementos graficos en documentos, sin <br /> necesidad de una copia formal. EL uso de Lorem ipsum permite a los diseñadores reunir <br /> los diseños  y la forma del contenido antes de que el contenido se haya creado, <br /> dando al diseño y al proceso de produccion mas libertad.</p>
          <div className="to"><Logo content={sena} />
          <h1 className='lt'>PROYECTOS</h1></div>
          <hr className='raya1'/>
          <div className="cuadros">
          <div className='cuadro'>
          
              <div className="log"><Logo  content={foto}></Logo></div>
              <div className="nd">
              <h1>Tittle</h1>
              <p>Descripcion</p>
              <h3 className='pp'>Ir a proyecto</h3></div>
          </div>
          
          <div className='cuadro'>
              <div className="log"><Logo  content={foto}></Logo></div>
              <div className="nd">
              <h1>Tittle</h1>
              <p>Descripcion</p>
              <h3 className='pp'>Ir a proyecto</h3></div>
              </div>
              </div>
              <div className="cuadross">
          
          <div className='cuadro'>
              <div className="log"><Logo  content={foto}></Logo></div>
              <div className="nd">
              <h1>Tittle</h1>
              <p>Descripcion</p>
              <h3 className='pp'>Ir a proyecto</h3></div>
              
          </div>
          <div className='cuadro'>
              <div className="log"><Logo  content={foto}></Logo></div>
              <div className="nd">
              <h1>Tittle</h1>
              <p>Descripcion</p>
              <h3 className='pp'>Ir a proyecto</h3></div>
             
              </div>
              </div>

              <div className="to">
          <Logo content={sena} />
          <h1 className='lt'>REFERENCIAS</h1> </div>
          <hr className='raya1'/>
          <div className="tdd">
          <div className="blanco">
              <h1>Nombre</h1>
              <h1>Cargo</h1>
              <h1>Telefono</h1>
              <h1>Correo electronico</h1>
          </div>
          <div className="blanco">
              <h1>Nombre</h1>
              <h1>Cargo</h1>
              <h1>Telefono</h1>
              <h1>Correo electronico</h1>
          </div>
          <div className="blanco">
              <h1>Nombre</h1>
              <h1>Cargo</h1>
              <h1>Telefono</h1>
              <h1>Correo electronico</h1>
          </div>
          </div>
          <div className="to">
          <Logo content={sena} />
          <h1 className='lt'>REFERENCIAS</h1>
          
          </div>
          <hr className='raya1'/>

          </Main>
          
          
          </>
    )
  }