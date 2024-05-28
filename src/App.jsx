import {Box, Center, Heading} from "@chakra-ui/react";
import './App.css'
import CodeEditor from "./components/CodeEditor.jsx";


function App() {

  return (
      <Box minH="100vh" bg="brand.900">
          <Box bg="brand.900" color="white">
              <Heading>In-Browser Code Editor</Heading>
          </Box>
          <Box color="white" px={6} py={8}>
              <Center >
                  <CodeEditor />
              </Center>
          </Box>
      </Box>

  )
}

export default App
