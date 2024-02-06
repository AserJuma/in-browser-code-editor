import * as React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const colors = {
    brand: {
        900: '#0f0a19',
        800: '#083065',
        700: '#0f66c4',
    },
}
const theme = extendTheme({ colors })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
  </React.StrictMode>,
)
