import React from 'react'
import Apollo from 'Providers/Apollo'

export const wrapRootElement = ({ element }) => <Apollo>{element}</Apollo>
