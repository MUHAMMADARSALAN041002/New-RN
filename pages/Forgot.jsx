import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  Icon
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const Forgot = () => {
  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Forgot Password
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input type="email"  InputLeftElement={<Icon as={<MaterialIcons name="email" />} size={5} ml="2" color="muted.400" />} />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Forgot Password
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Forgot;
