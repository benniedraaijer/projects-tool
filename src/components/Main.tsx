import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const FlexMotion = motion(Flex)

interface Type {
  children?: any
}

export const Main = ({ children }: Type) => {
  return (
    <FlexMotion
      direction='column'
      justify='center'
      flex='1 0 auto'
      align='center'
      height='100%'
      as='main'
      w='100%'
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </FlexMotion>
  )
}
