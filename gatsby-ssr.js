import React from 'react'
import Apollo from 'providers/Apollo'

export const wrapRootElement = ({ element }) => <Apollo>{element}</Apollo>
