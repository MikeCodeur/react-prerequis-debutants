
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
    exerciseTitle: 'Les bases de React',
    quiz: [
      {
        question: "React est ?",
        options: ["lib", "framework", "langage", "autre"],
        answer: "0"
      },{
        question: "HMTL est ",
        options: ["a2", "b2", "c2", "d2"],
        answer: "2"
      },{
        question: "Render app",
        options: ["a3", "b3", "c3", "d3"],
        answer: "3"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      }
    ],
  },
  //export
  {
    exerciseId: 'src/exercise/02.md',
    exerciseTitle: 'Manipuler le DOM',
    quiz: [
      {
        question: "DOM cest quoi  ?",
        options: ["chrome", "bbb", "sss", "ddd"],
        answer: "0"
      },{
        question: "HMTL est ",
        options: ["a2", "b2", "c2", "d2"],
        answer: "2"
      },{
        question: "Render app",
        options: ["a3", "b3", "c3", "d3"],
        answer: "3"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      },{
        question: "How heavy are you?",
        options: ["a3", "b3", "c3", "d3"],
        answer: "1"
      }
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
