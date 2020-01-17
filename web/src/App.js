import React, { useEffect, useState } from 'react';

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'


// componente -> bloco isolado de HTML CSS JS o qual nao interfere no restante da aplicacao
// estado -> Informacoes mantidas pelo componente (lembrar: imutabilidade -> nunca alteramos direto na variavel, alteramos o estado)
// propriedade -> Informacoes que um componente PAI passa para o componente FILHO. ex: (props) de um componente pai sendo passada como parametro em um componente filho 

function App() {
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

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required value={latitude}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required value={longitude}/>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>  
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/13842365?s=460&v=4" alt="Marcelo Galdino"/>
              <div className="user-info">
                <strong>Marcelo Galdino</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>Bio</p>
            <a href="https://github.com/marcelogaldino">Acessar perfil no Github</a>
          </li>
        

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/13842365?s=460&v=4" alt="Marcelo Galdino"/>
              <div className="user-info">
                <strong>Marcelo Galdino</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>Bio</p>
            <a href="https://github.com/marcelogaldino">Acessar perfil no Github</a>
          </li>


          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/13842365?s=460&v=4" alt="Marcelo Galdino"/>
              <div className="user-info">
                <strong>Marcelo Galdino</strong>
                <span>NodeJS, ReactJS, React Native</span>
              </div>
            </header>
            <p>Bio</p>
            <a href="https://github.com/marcelogaldino">Acessar perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
