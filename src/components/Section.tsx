import { Flex } from '@chakra-ui/react'
import React from 'react'

interface Props {
  backgroundColor?: string | string[]

  gridArea?: string | string[]
  maxWidth?: string | string[]
  justify?: string | string[]
  rounded?: string | string[]
  padding?: string | string[]
  zIndex?: number | number[]
  margin?: string | string[]
  shadow?: string | string[]
  top?: string | string[]
  inViewRef?: any
  children?: any
  check?: any
}

export const Section = ({ children, inViewRef, padding, zIndex, top, backgroundColor, check }: Props) => {
  return (
    <Flex
      direction='column'
      border={check && ['solid', 'solid red', 'solid green', 'solid yellow', 'solid purple', 'solid blue']}
      backgroundColor={backgroundColor && backgroundColor}
      ref={inViewRef && inViewRef}
      zIndex={zIndex && zIndex}
      p={padding && padding}
      justify='flex-start'
      top={top && top}
      minWidth='100%'
      maxWidth='100%'
      flex='1 0 auto'
      align='center'
      height='100%'
      as='section'
      width='100%'
    >
      {children}
    </Flex>
  )
}
