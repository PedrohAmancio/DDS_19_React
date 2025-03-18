import React from "react";

export const TemplateExpressions = () => {
    let nome = "Zico";
//  objeto
    let aluno = {
    nome: "Rodrigo ", 
    Turma: "DDS-01",
    curso: "Desenvolvimento de Software"
 }
 console.log("Vamos ver se funciona")
 console.log(aluno.curso)
  return (
    <div>
      <h1>O nome do melhor do mundo é : {nome}</h1>
      <p>O nome do aluno é {aluno.nome}, faz o curso {aluno.curso},
        na turma {aluno.Turma}
      </p>
    </div>
  );
};
