import { Flex } from '@chakra-ui/react'
import React from 'react'

interface Props {
  backgroundColor?: string | string[]
  maxWidth?: string | string[]
  gridArea?: string | string[]
  justify?: string | string[]
  rounded?: string | string[]
  padding?: string | string[]
  margin?: string | string[]
  zIndex?: number | number[]
  shadow?: string | string[]
  cursor?: string | string[]
  width?: string | string[]
  top?: string | string[]
  children?: any
  check?: any
  as?: any
}

export const SectionContent = ({
  children,
  width,
  padding,
  zIndex,
  maxWidth,
  margin,
  gridArea,
  justify,
  rounded,
  shadow,
  cursor,
  check,
  as,
}: Props) => {
  return (
    <Flex
      border={check && ['solid', 'solid red', 'solid green', 'solid yellow', 'solid purple', 'solid blue']}
      maxWidth={maxWidth ? maxWidth : ['90vw', '92.5vw', null, null, null, '79rem']}
      width={width ? width : ['90vw', '92.5vw', null, null, null, '79rem']}
      margin={margin ? margin : ['2rem 0 0 0', null, null, '2rem 0 0 0']}
      justify={justify ? justify : 'flex-start'}
      cursor={cursor ? cursor : 'context-menu'}
      gridArea={gridArea && gridArea}
      rounded={rounded && rounded}
      padding={padding && padding}
      zIndex={zIndex && zIndex}
      shadow={shadow && shadow}
      direction='column'
      flex='1 0 auto'
      align='center'
      as={as && as}
    >
      {children}
    </Flex>
  )
}
