import { Flex } from '@chakra-ui/react'
import React from 'react'

interface Style {
  children?: any
  padding?: string | string[]
  zIndex?: number | number[]
  top?: string | string[]
  backgroundColor?: string | string[]
  maxWidth?: string | string[]
  margin?: string | string[]
  gridArea?: string | string[]
  justify?: string | string[]
  rounded?: string | string[]
  shadow?: string | string[]
}

export const Section = ({ children, padding, zIndex, top, backgroundColor }: Style) => {
  return (
    <Flex
      direction='column'
      backgroundColor={backgroundColor && backgroundColor}
      zIndex={zIndex && zIndex}
      position='relative'
      p={padding && padding}
      top={top && top}
      height='100%'
      justify='flex-start'
      align='center'
      flex='1 0 auto'
      as='section'
      minWidth='100%'
      maxWidth='100%'
      width='100%'
    >
      {children}
    </Flex>
  )
}
