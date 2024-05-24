import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ExMalloZero = () => {
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

int *alocaVetorInt(int numero)
{
  int *vetor = (int *)malloc(numero * sizeof(int));

  if(vetor == NULL){
    printf("Erro de alocacao");
    return NULL;
  }

// inicializa com zero o malloc com o for

  for(int i = 0; i < numero; i++)
  {
      vetor[i] = 0;
      printf("%d", vetor[i]);
  }

  printf("\n");
  
  return vetor;
}

  //Apenas printa na tela 
  for(int i = 0; i < numero; i++)
  {
    printf("%d", vetor[i]);
  }

  return vetor;
}
`;

  return (
    <SyntaxHighlighter language="javascript" style={okaidia}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default ExMalloZero;