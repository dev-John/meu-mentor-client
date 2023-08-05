import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
} from "@chakra-ui/react";

import { VscJson, VscSearch } from "react-icons/vsc";

const MentorFilter = () => {
  return (
    <Stack
      paddingLeft={20}
      paddingRight={20}
      spacing={4}
      direction="column"
      align="center"
    >
      <InputGroup>
        <Stack direction="row" spacing={2} flex={1}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <VscSearch color="gray.100" />
            </InputLeftElement>
            <Input placeholder="Busca por nome" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <VscJson color="gray.100" />
            </InputLeftElement>
            <Input placeholder="Tecnologia" />
          </InputGroup>

          <InputGroup>
            <Select placeholder="Ordenar por">
              <option value="nome">Nome</option>
              <option value="tecnologia">Tecnologia</option>
            </Select>
          </InputGroup>
        </Stack>
      </InputGroup>
      <InputGroup>
        <Stack direction="row" spacing={2} flex={1}></Stack>
        <Button colorScheme="teal" variant="ghost">
          Limpar
        </Button>
        <Button
          size="md"
          rounded="md"
          color="white"
          bg="primary.200"
          _hover={{
            bg: "primary.300",
          }}
        >
          Buscar
        </Button>
      </InputGroup>
    </Stack>
  );
};

export default MentorFilter;
