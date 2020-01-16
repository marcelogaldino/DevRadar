import React from 'react';

import './global.css'

// componente -> bloco isolado de HTML CSS JS o qual nao interfere no restante da aplicacao
// estado -> Informacoes mantidas pelo componente (lembrar: imutabilidade -> nunca alteramos direto na variavel, alteramos o estado)
// propriedade -> Informacoes que um componente PAI passa para o componente FILHO. ex: (props) de um componente pai sendo passada como parametro em um componente filho 

function App() {
  return (
    <div id="app">
      <aside>

      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
