import React from 'react'

interface IQuestion {
  question: string
  options: string[]
  answer: string
}

interface IQCMInterface {
  exerciseId: string
  exerciseTitle: string
  quiz: IQuestion[]
}

const QCM: Array<IQCMInterface> = [
  {
    exerciseId: 'src/exercise/01.md',
    exerciseTitle: 'Rappel HTML CSS',
    quiz: [
      {
        question: 'HTML est ?',
        options: [
          'Un langage de programmation',
          'Un langage orienté objet',
          'Un langage de balisage',
          'Un langage fonctionnel',
        ],
        answer: '2',
      },
      {
        question: 'Que signifie CSS ?',
        options: [
          'Color Style Simple',
          'Cascading Style Sheets',
          'Cascading Simple Sheets',
          'Color Style Sheets ',
        ],
        answer: '1',
      },
      {
        question: "Cocher l'intru",
        options: ['Inline CSS', 'External CSS', 'Include CSS', 'External CSS'],
        answer: '2',
      },
    ],
  },
  //export
  {
    exerciseId: 'src/exercise/02.md',
    exerciseTitle: 'JavaScript dans une page HTML',
    quiz: [
      {
        question: 'Comment ajouter du JavaScript ?',
        options: [
          'avec la balise code',
          'avec la balise script',
          'avec la balise javascript',
          'avec la balise body',
        ],
        answer: '1',
      },
      {
        question: "Les instructions s'exécutent : ",
        options: [
          'Aléatoirement',
          'De bas en haut',
          'De haut en bas',
          "L'ordre n'a pas d'importance",
        ],
        answer: '2',
      },
    ],
  },
  {
    exerciseId: 'src/exercise/03.md',
    exerciseTitle: 'JavaScript - Variables et Types',
    quiz: [
      {
        question: 'Quel mot clef pour déclarer un variable ?',
        options: ['int', 'vari', 'var', 'zet'],
        answer: '2',
      },
      {
        question: 'Comment affecter une valeur ?',
        options: ['==', '+', '||', '='],
        answer: '3',
      },
      {
        question: "Eliminer l'intru",
        options: ['String', 'Number', 'Boolean', 'Object'],
        answer: '3',
      },
      {
        question: 'A quoi sert typeof',
        options: [
          'Connaitre le type',
          'Déclarer une variable',
          'Affecter une valeur ',
          'Tester une variable',
        ],
        answer: '0',
      },
    ],
  },
  {
    exerciseId: 'src/exercise/04.md',
    exerciseTitle: 'JavaScript - Fonctions',
    quiz: [
      {
        question: 'Comment déclarer une fonction ?',
        options: ['Avec var', 'Avec function', 'Avec func', 'Avec let'],
        answer: '1',
      },
      {
        question: 'Une fonction ...',
        options: [
          'A obligatoirement des paramètres',
          "N'a jamais de paramètres",
          'Ne peut avoir que 2 paramètres',
          'Peut avoir ou ne pas avoir de paramètre',
        ],
        answer: '3',
      },
    ],
  },
  {
    exerciseId: 'src/exercise/05.md',
    exerciseTitle: 'JavaScript - Array et Boucles',
    quiz: [
      {
        question: 'Comment initialiser un array ?',
        options: ['Avec {}', 'Avec []', "Avec ''", 'Avec #'],
        answer: '1',
      },
      {
        question: 'Comment ajouter un élément ?',
        options: ['split', 'pop', 'push', 'pull'],
        answer: '2',
      },
      {
        question: 'Comment supprimer un élément ?',
        options: ['split', 'splice', 'delete', 'pull'],
        answer: '1',
      },
    ],
  },
  {
    exerciseId: 'src/exercise/06.md',
    exerciseTitle: 'JavaScript - Object',
    quiz: [
      {
        question: 'Comment initialiser un objet ?',
        options: ['Avec {}', 'Avec []', "Avec ''", 'Avec #'],
        answer: '0',
      },
      {
        question: 'Un objet peut stoker  ...',
        options: [
          'Tout type de variable',
          'Uniquement des strings',
          'Uniquement des numbers',
          'Uniquement des arrays',
        ],
        answer: '0',
      },
      {
        question: "Comment accéder à la valeur d'une propriété de l'objet ?",
        options: [
          'var personne',
          'personne.nom',
          'var nom from personne',
          '{nom}',
        ],
        answer: '1',
      },
      {
        question: 'Peut-on boucler sur un objet ?',
        options: ['oui', 'non'],
        answer: '0',
      },
    ],
  },
  {
    exerciseId: 'src/exercise/07.md',
    exerciseTitle: ' JavaScript - Conditions - Opérateurs de comparaison',
    quiz: [
      {
        question: 'Un operateur de comparaisons retourne ...',
        options: ['Un String', 'Un Boolean', 'Un Array', 'Rien'],
        answer: '1',
      },
      {
        question: "Lequel n'est pas un comparateur de comparaison ?",
        options: ['==', '===', '=', '!='],
        answer: '2',
      },
      {
        question: "A quoi sert l'opérateur logique &&",
        options: ['A faire un ET', 'A faire un OU', 'A faire un NON'],
        answer: '0',
      },
      {
        question: "A quoi sert l'opérateur logique ||",
        options: ['A faire un ET', 'A faire un OU', 'A faire un NON'],
        answer: '1',
      },
      {
        question: "A quoi sert l'opérateur logique !",
        options: ['A faire un ET', 'A faire un OU', 'A faire un NON'],
        answer: '2',
      },
      {
        question: 'Le Else est il obligatoire après un if',
        options: ['Oui', 'Non'],
        answer: '1',
      },
    ],
  },
  {
    exerciseId: 'src/exercise/08.md',
    exerciseTitle: 'JavaScript - Manipuler le DOM',
    quiz: [
      {
        question: "Qu'est-ce que le DOM ?",
        options: [
          'Document Oriented Model',
          ' Document Object Model',
          'Donuts Orange Model',
          'Document Object Map',
        ],
        answer: '1',
      },
      {
        question: "Comment récupérer la <div id='root'> ",
        options: [
          "getElementById('root')",
          "document.getElementById('root')",
          "document.getElementById('div')",
          "document.getElement('root')",
        ],
        answer: '1',
      },
      {
        question: ' createAttribute suffit-il pour créer un attribut ?',
        options: ['Oui', 'Non, il faut setAttributeNode'],
        answer: '1',
      },
    ],
  },
  {
    exerciseId: 'src/exercise/09.md',
    exerciseTitle: 'JavaScript - Les Evènements',
    quiz: [
      {
        question: 'Quelle est la bonne solution ?',
        options: ['onclick = "handleClic"', 'onclick = "handleClic()"'],
        answer: '1',
      },
      {
        question:
          'Existe-il des évenements pour detecter le déplacement de la souris ',
        options: ['Oui', 'Non'],
        answer: '0',
      },
      {
        question: "Qu'est ce qui va de paire avec addEventListener",
        options: [
          'getListener',
          'deleteEventListener',
          'manageListener',
          'removeEventListener',
        ],
        answer: '3',
      },
    ],
  },
]

//export default QCM;

const QcmComponent = () => {
  return <>{JSON.stringify(QCM, null, 2)}</>
}
export default QcmComponent
