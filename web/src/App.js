import React, { useEffect, useState } from 'react';

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import api from './services/Api'

// componente -> bloco isolado de HTML CSS JS o qual nao interfere no restante da aplicacao
// estado -> Informacoes mantidas pelo componente (lembrar: imutabilidade -> nunca alteramos direto na variavel, alteramos o estado)
// propriedade -> Informacoes que um componente PAI passa para o componente FILHO. ex: (props) de um componente pai sendo passada como parametro em um componente filho 

function App() {
  const [ devs, setDevs ] = useState([])

  const [ github_username, setGithubUsername ] = useState('')
  const [ techs, setTechs ] = useState('')
  const [ latitude, setLatitude ] = useState('')
  const [ longitude, setLongitude ] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000
      }
    )
  }, [])

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

    console.log(response.data)

    setDevs([...devs, response.data])    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={ (e) => setGithubUsername(e.target.value) }
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={ (e) => setTechs(e.target.value) }
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude} 
                onChange={ (e) => setLatitude(e.target.value) }
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude} 
                onChange={ (e) => setLongitude(e.target.value) }
              />
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>  
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <li key={dev._id} className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            </li>
          ))} 
        </ul>

      </main>
    </div>
  );
}

export default App;
