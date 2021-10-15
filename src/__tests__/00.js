/* eslint-disable no-unused-vars */
import {robertAlertTip} from '@mikecodeur/react-course-app/test-utils'
import chalk from 'chalk'
import {render, screen, prettyDOM} from '@testing-library/react'

//import App from '../final/02'
//import App from '../final/02.bonus-1'
//import App from '../exercise/02'

test('Just a template test', () => {
  robertAlertTip(
    () => {
      expect(true).toEqual(true)
    },
    () => `Il manque le fontStyle : 'italic' sur ce container`.trim(),
  )
})
