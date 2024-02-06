import {Box} from "@chakra-ui/react";
import './App.css'
import CodeEditor from "./components/CodeEditor.jsx";


function App() {

  return (
    <>
        <Box
        minH="100vh" bg="brand.900" color="white" px={6} py={8}
        >
            <CodeEditor />
        </Box>
    </>
  )
}

export default App
