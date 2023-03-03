import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  
const modal = ({display}) => {
  return (
    <div><ChakraProvider>
    <Alert
        status='success'
        variant='subtle'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        textAlign='center'
        height='200px'
        display= {display}
>
    <AlertIcon boxSize='40px' mr={0} />
    <AlertTitle mt={4} mb={1} fontSize='lg'>
        Agregado al carrito
    </AlertTitle>
    <AlertDescription maxWidth='sm'>
    Agregaste {cantidad}  {productName} al carrito.
    </AlertDescription>
    </Alert>
</ChakraProvider></div>
  )
}

export default modal