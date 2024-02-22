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
        <div className='todo'>
              <Header>
              <Logo content={loga}/>
              <h1>Jorge Andres</h1>
              <hr />
              <Items content={"Inicio"}></Items>
              <Items content={"perfil"}></Items>
              <Items content={"proyectos"}></Items>
              <Items content={"Referencias"}></Items>
              <Items content={"experiencia"}></Items>
              <Logo content={sena} />
          <Navbar>
          </Navbar>
          </Header>
          </div>
    )
  }