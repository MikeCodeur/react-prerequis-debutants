import {robertAlertTip} from '@mikecodeur/react-course-app/test-utils'
import chalk from 'chalk'
import {render, screen, prettyDOM} from '@testing-library/react'

import App from '../final/02'
//import App from '../final/02.bonus-1'
//import App from '../exercise/02'

test('effectue le rendu et vérifie le style', () => {
  render(<App />)
  const allContainers = screen.getAllByText(/box/i)

  const className = 'container'
  allContainers.forEach(container => {
    robertAlertTip(
      () => {
        expect(container).toHaveClass(className)
      },
      () =>
        `
Il manque le className "${className}" sur ce container

${chalk.reset(prettyDOM(container))}
    `.trim(),
    )
  })

  allContainers.forEach(container => {
    robertAlertTip(
      () => {
        expect(container).toHaveStyle('font-style: italic;')
      },
      () =>
        `
Il manque le fontStyle : 'italic' sur ce container

${chalk.reset(prettyDOM(container))}
    `.trim(),
    )
  })

  const small = screen.getByText(/small/i)
  const medium = screen.getByText(/medium/i)
  const large = screen.getByText(/large/i)

  expect(small).toHaveClass('container--small')
  expect(small).toHaveStyle('background-color: lightskyblue;')

  expect(medium).toHaveClass('container--medium')
  expect(medium).toHaveStyle('background-color: lightpink;')

  expect(large).toHaveClass('container--large')
  expect(large).toHaveStyle('background-color: lightsalmon;')
})
