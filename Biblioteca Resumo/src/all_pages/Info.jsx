import './Info.css';

function Info()
{
  return(
    <div>
      <h1>Alocalção Dinâmica</h1>
      
      <p>
        Recurso crucial para gerenciar memoria, permite 
        reservar memoria durante a execução do programa, 
        dando flexibilidade, reduzindo o desperdicio e 
        evitando erros com estouro de memoria. Está incluido 
        na biblioteca stdlib.h.
      </p>
      
      <p>
        <span className='cor_princ'>HEAP</span>: Àrea reservada para alocação de memoria 
        durante a execução do programa, que é ajustada pelo 
        sistema operacional.
      </p>

      <h4>Funções Essenciais para Alocação Dinâmica</h4>
      
      <p>
        <span className='cor_princ'>MALLOC</span>: Aloca um bloco de memoria no heap e retorna 
        um ponteiro.
      </p>
      
      <p>
        <span className='cor_princ'>CALLOC</span>: Semelhante ao MALLOC, mas inicializa o bloco
        alocado com byts nulo, ou seja, um int = 0, float = 0.0, 
        e assim sucessivamente.
      </p>
      
      <p>
      <span className='cor_princ'>REALLOC</span>: Redimensiona um bloco de memoria alocado por 
        MALLOC ou CALLOC.
      </p>

      <p>
        <span className='cor_princ'>FREE</span>: Libera o bloco alocado com MALLOC, CALLOC ou REALO,
        devolvendo ao HEAP.
      </p>

    </div>


  )
}

export default Info