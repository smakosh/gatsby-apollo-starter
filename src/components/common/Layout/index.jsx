import React from 'react'
import { GlobalStyle } from './styles'
import './layout.css'

export default ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)
