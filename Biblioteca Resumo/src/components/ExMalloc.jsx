import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ExMalloc = () => {
  const codeString = `
  #include <stdio.h>
  #include <stdlib.h>
  
  int *alocaVetorInt(int numero);
  
  int main()
  {
    int numero = 5;
    int *vetor = alocaVetorInt(numero); //manda para a função
    
    free(vetor); // desaloca 
  }
  
  //Função aloca um espaço na memoria
  int *alocaVetorInt(int numero)
  {
    int *vetor = (int *)malloc(numero * sizeof(int));
  
    if (vetor == NULL) {
      printf("Erro de alocacao");
    }
    return vetor;
  }`;

  return (
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ExMalloc;