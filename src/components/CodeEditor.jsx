import { useRef, useState } from "react";
import {Box, HStack} from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

import { SNIPPETS } from "../constants";
import LangSelector from "./LangSelector.jsx";


const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("javascript");

    const mount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language);
        setValue(SNIPPETS[language]);
    };

    return (
        <Box>
            <HStack spacing={4}>
                <Box w="50%">
                    <LangSelector language={language} onSelect={onSelect} />
                    <Editor
                        height="75vh"
                        theme="vs-dark"
                        language={language}
                        defaultValue={SNIPPETS[language]}
                        onMount={mount}
                        value={value}
                        onChange={(value) => setValue(value)}
                    />
                </Box>
            </HStack>

        </Box>
    );
};
export default CodeEditor;
