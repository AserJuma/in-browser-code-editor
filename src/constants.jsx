export const LANGUAGE_VERSIONS = {
    //c: "10.2.0",
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    php: "8.2.3",
    };

export const SNIPPETS = {
    //c: ``,
    javascript: `function greet(name) {\n console.log("Hello, " + name + "!");\n}\ngreet("Dania");\n`,
    typescript: `type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Dania" });\n`,
    python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Dania")\n`,
    java: `public class HelloDania {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Dania!");\n\t}\n}\n`,
    php: "<?php\n\n$name = 'Dania';\necho 'Hello '; \necho $name;\n",
};
