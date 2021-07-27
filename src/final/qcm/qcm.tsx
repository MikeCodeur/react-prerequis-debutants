
import React from 'react'

  
interface IQuestion {
  question: string
  options:string[]
  answer: string
}

interface IQCMInterface {
  exerciseId: string
  exerciseTitle : string
  quiz: IQuestion[]
}

const QCM: Array<IQCMInterface> = [
  {
    exerciseId: 'src/exercise/01.md',
    exerciseTitle: 'Rappel HTML CSS',
    quiz: [
      {
        question: "HTML est ?",
        options: ["Un langage de programmation", "Un langage orienté objet", "Un langage de balisage", "Un langage fonctionnel"],
        answer: "2"
      },{
        question: "Que signifie CSS ?",
        options: ["Color Style Simple", "Cascading Style Sheets", "Cascading Simple Sheets", "Color Style Sheets "],
        answer: "1"
      },{
        question: "Cocher l'intru",
        options: ["Inline CSS", "External CSS", "Include CSS", "External CSS"],
        answer: "2"
      }
    ],
  },
  //export
  {
    exerciseId: 'src/exercise/02.md',
    exerciseTitle: 'JavaScript dans une page HTML',
    quiz: [
      {
        question: "Comment ajouter du JavaScript ?",
        options: ["avec la balise code", "avec la balise script", "avec la balise javascript", "avec la balise body"],
        answer: "1"
      },{
        question: "Les instructions s'exécutent : ",
        options: ["Aléatoirement", "De bas en haut", "De haut en bas", "L'ordre n'a pas d'importance"],
        answer: "2"
      },
    ],
  },
  {
    exerciseId: 'src/exercise/03.md',
    exerciseTitle: 'Manipuler le style',
    quiz: [
      {
        question: "LEs styles  ?",
        options: ["css", "jss", "xss", "pdf"],
        answer: "0"
      },{
        question: "HMTL est ",
        options: ["a2", "b2", "c2", "d2"],
        answer: "2"
      } 
    ],
  },
]

//export default QCM;

const QcmComponent = () => {
  return (<>{ JSON.stringify(QCM, null, 2) }</>);
}
export default QcmComponent
