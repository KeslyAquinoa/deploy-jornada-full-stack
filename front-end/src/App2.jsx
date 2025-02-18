// rafce - React Arrow Function Component Export - Snippet para criar um componente funcional com arrow function e exportar

import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

// npm create vite@latest - Criar um projeto Vite
// npm install - Instalar as dependências
// npm run dev - Rodar o projeto


     //Nomeação de Componentes
// Componentes de função: PascalCase (inicia com letra maiúscula)

    //Nomeação de Variavel, Função e Arquivo
// camelCase (inicia com letra minúscula)

// Nomeação de Classes
//kebab-case (com traço)

// export default, posso importar com qualquer nome e sem chaves.
// export, preciso importar com o mesmo nome e com chaves.


//Self Closing Tags
// <Header /> ou <Header></Header>

     // Nomeação de Classes em CSS
// Metodologia BEM (Block Element Modifier)
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
//  header
//  header__link
//  header__link--small

// Tag vazia - Self Closing Tag em React se chama Fragment e é representado por <> </> - serve para agrupar elementos sem criar um elemento pai

// Componentes recebem props como argumento - props é um objeto que contém todas as propriedades passadas para o componente - é como se fosse os parâmetros de uma função

/* 
    ItemList.jsx - dentro do container
   {items === 5 ? (
  <>
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
  </>
) : (
  <>
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
      <SingleItem />
  </>
)} */


// Spread Operator - {...props} - passa todas as propriedades de um objeto para outro objeto - é como se fosse o Object.assign

// Quando componentes se re-rederizão?
//  Uma das ocasiões é quando uma variável de estado usada por esse componete é atualizada 

//  Hook useState - é uma função que retorna um array com duas posições - a primeira é o valor da variável de estado e a segunda é uma função que atualiza o valor da variável de estado