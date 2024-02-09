import {Box, Menu, MenuButton, MenuItem, MenuList, Text, Button} from "@chakra-ui/react";
import {LANGUAGE_VERSIONS} from "../constants.jsx";

const languages = Object.entries((LANGUAGE_VERSIONS))

// eslint-disable-next-line react/prop-types
const LangSelector = ({language, onSelect}) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize='lg'>
                Language:
            </Text>
            <Menu>
                <MenuButton as={Button}>{language}</MenuButton>
                <MenuList bg="brand.800">
                    {languages.map(([lang, version]) => (
                        <MenuItem key={lang} color={lang === language ? "blue.400" : ""}
                                  bg={lang === language ? "gray.700" : "transparent"}
                                  _hover={{
                                      color:"blue.700",
                                      bg:"gray.700"
                                  }}
                        onClick={() => onSelect(lang)}
                        >
                            {lang}
                            &nbsp;
                                <Text as="span" color="white.600" fontSize="sm">
                                    ({version})
                                </Text>
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
}

export default LangSelector
