import { useRef, useState } from "react";
import {Box, HStack} from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

import { SNIPPETS } from "../constants";
import LangSelector from "./LangSelector.jsx";
import Output from "./Output.jsx";


const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("javascript");

    const mount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onLangSelect = (language) => {
        setLanguage(language);
        setValue(SNIPPETS[language]);
    };

    return (
        <Box w="100%">
            <HStack spacing={4}>
                <Box w="50%">
                    <LangSelector language={language} onSelect={onLangSelect} />
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
                <Output editorRef={editorRef} language={language} />
            </HStack>

        </Box>
    );
};
export default CodeEditor;
