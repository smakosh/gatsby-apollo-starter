import React from 'react'
import { GlobalStyle } from './styles'
import './Layout.css'

export default ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)
