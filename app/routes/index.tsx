import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { IconButton, Link as ChakraLink, useColorMode, VStack, useColorModeValue, Text } from '@chakra-ui/react'
import { Link } from "@remix-run/react";

export default function Index() {

  const yellow = useColorModeValue("orange.400", "yellow.200")
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack spacing={50}>
      <ChakraLink fontWeight={'extrabold'} as={Link} to='/route' color={yellow} textAlign='center' fontSize={'5xl'}>Go to second route</ChakraLink>
      <IconButton onClick={toggleColorMode} aria-label='change theme' icon={colorMode == 'light' ?
        <Text mx={4}><MoonIcon /> Toggle dark</Text> :
        <Text mx={4}><SunIcon /> Toggle light</Text>} />
    </VStack>
  );
}
