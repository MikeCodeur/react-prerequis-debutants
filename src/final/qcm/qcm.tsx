
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
    exerciseTitle: 'JavaScript - Variables et Types',
    quiz: [
      {
        question: "Quel mot clef pour déclarer un variable ?",
        options: ["int", "vari", "var", "zet"],
        answer: "2"
      },
      {
        question: "Comment affecter une valeur ?",
        options: ["==", "+", "||", "="],
        answer: "3"
      },{
        question: "Eliminer l'intru",
        options: ["String", "Number", "Boolean", "Object"],
        answer: "3"
      },{
        question: "A quoi sert typeof",
        options: ["Connaitre le type", "Déclarer une variable", "Affecter une valeur ", "Tester une variable"],
        answer: "0"
      } 
    ],
  },
]

//export default QCM;

const QcmComponent = () => {
  return (<>{ JSON.stringify(QCM, null, 2) }</>);
}
export default QcmComponent
