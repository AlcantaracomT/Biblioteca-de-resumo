import React from 'react';
import Info from './all_pages/Info.jsx';
import './all_pages/Info.css'
import ExMalloc from './components/ExMalloc';
import ExMalloZero from './components/ExMallocZero.jsx';
import ExCalloc from './components/ExCalloc.jsx';

const App = () => {
  return (
    <div>
      <Info />
      <h1>Exemplo de Bloco de Código</h1>

      <h3>MALLOC</h3>
      <p>  
        A função abaixo recebe um tamanho representado pela 
        variavel <span className='cor_princ'> numero </span>, 
        cria um ponteiro com a variável chamada 
       <span className='cor_princ'> vetor </span> e aloca
       na memória o tamanho necessário com 
       <span className='cor_princ'> malloc </span>. Este tem 
       o tipo <span className='cor_princ'> (int*) </span> 
       ponteiro de inteiro, o tamanho do array 
       <span className='cor_princ'> (numero) </span> 
       multiplicado pelo tamanho dos bytes do tipo 
       <span className='cor_princ'> (sizeof(int)) </span>.
      </p>

      <ExMalloc />

      <h4>Iniciando Malloc Com Zero</h4>
      <p>
        A função <span className='cor_princ'> int *alocaVetorInt(int numero) </span> 
        inicia a alocaçao com zero atraves do <span className='cor_princ'> malloc </span> 
        com um loop <span className='cor_princ'> for </span> adicionando em cada posição por vez. 
      </p>

      <ExMalloZero />
      
      <h3>CALLOC</h3>
      <p>
        A função <span className='cor_princ'> int *alocaVetorInt_Com_Zero(int numero) </span> 
        inicia a alocação com zero atraves da função <span className='cor_princ'> calloc </span>. 
        Esse é o papel dela, atraves dessa função, conseguimos iniciar com <span className='cor_princ'> 0, NULL, 0.0 </span> 
        para todo tipo: <span className='cor_princ'> char, int, float </span> sem prescisar
        criar um <span className='cor_princ'> for </span> como foi feito anteriormente.
      </p>


      <ExCalloc />
    </div>
  );
};

export default App;