import {Box, Button, Text, useToast} from "@chakra-ui/react"
import {execute/*, checkRuntimes8*/} from "../api.js";
import {useState} from "react";


// eslint-disable-next-line react/prop-types
const Output = ({editorRef, language}) => {
    const [output, setOutput] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const toast = useToast();

    //checkRuntimes().then(r => console.log(r));

    const runButton = async () => {
        // eslint-disable-next-line react/prop-types
        const code = editorRef.current.getValue()
        if(!code) return;
        try {
            setIsLoading(true)
            const {run:result} = await execute(language, code)
            setOutput(result.output.split("\n"))
            result.stderr ? setIsError(true) : setIsError(false)
        }catch (e) {
            toast({
                title: "An error happened.",
                description: e.message || "Not able to run code",
                status: "error",
                duration: 7000,
            })
        }
        finally {
            setIsLoading(false)
        }
    }

  return (
      <Box w="50%">
          <Text>
              Output:
          </Text>
          <Button variant='outline' colorScheme="green" mb={4} mt={1}
          isLoading={isLoading} onClick={runButton}>
              Run
          </Button>
          <Box height='75vh' p={2} border='1px solid' color={isError ? "red.400" : ""} borderRadius={4} borderColor={isError ? "red.500" : "#333"}>
              {
                  output ? output.map((line, i) => <Text key={i}>{line}</Text>) : 'Click to run the code!'
              }
          </Box>
      </Box>
  )
}

export default Output
