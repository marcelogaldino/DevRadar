import React, { useEffect, useState } from 'react';

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import api from './services/Api'

import DevItem from './components/DevItem'

// componente -> bloco isolado de HTML CSS JS o qual nao interfere no restante da aplicacao
// estado -> Informacoes mantidas pelo componente (lembrar: imutabilidade -> nunca alteramos direto na variavel, alteramos o estado)
// propriedade -> Informacoes que um componente PAI passa para o componente FILHO. ex: (props) de um componente pai sendo passada como parametro em um componente filho 

function App() {
  const [ devs, setDevs ] = useState([])
  

 

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }
    
    loadDevs()
  }, [])

  async function handleAddDev(e) {
    e.preventDefault()

    const response = await api.post('./devs', {
      github_username,
      techs,
      latitude,
      longitude
    })

    setGithubUsername('')
    setTechs('')

    setDevs([...devs, response.data])    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))} 
        </ul>

      </main>
    </div>
  );
}

export default App;
