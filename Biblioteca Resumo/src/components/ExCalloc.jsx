import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ExCalloc = () => {
  const codeString = `
  
#include <stdio.h>
#include <stdlib.h>

int *alocaVetorInt_Com_Zero(int numero);

int main()
{
  int numero = 5;
  int *vetor = alocaVetorInt_Com_Zero(numero); //manda para a função calloc

  free(vetor); // desaloca 
}

//inicializa com zero, a função calloc é preparada para isso
int *alocaVetorInt_Com_Zero(int numero)
{
  printf("\nFunção Calloc\n");
  
  int *vetor = (int *)calloc(numero,sizeof(int)); // não precisa da multiplicação

  if(vetor == NULL){
    printf("Erro de alocacao");
    return NULL;
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

export default ExCalloc;