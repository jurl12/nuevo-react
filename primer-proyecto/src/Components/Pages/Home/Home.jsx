import React from 'react'
import { Logo } from '../../Logo/Logo'

import loga from '../../../assets/Perfil.jpg'
import sena from '../../../assets/logoSena.png'
import { Items } from '../../Items/Items'
import { Header } from '../../Layouts/Header/Header'
import { Navbar } from '../../Navbar/Navbar'
import { Main } from '../../Main/Main'




export const Home = () => {
    return (
        
        <div className='todoo'>
              <Header>
              <div className='td'><Logo content={loga}/>
              <div className='nombre'><h1>Jorge Andres</h1></div>
              <hr /></div>
              <div className='todo'><Items content={"Inicio"}></Items>
              <Items content={"perfil"}></Items>
              <Items content={"proyectos"}></Items>
              <Items content={"Referencias"}></Items>
              <Items content={"experiencia"}></Items></div>
              <Logo content={sena} />
          <Navbar>
          </Navbar>
          </Header>
          </div>
    )
  }