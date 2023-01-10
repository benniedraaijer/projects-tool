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

export const SectionContent = ({
  children,
  padding,
  zIndex,
  maxWidth,
  margin,
  gridArea,
  justify,
  rounded,
  shadow,
}: Style) => {
  return (
    <Flex
      maxWidth={maxWidth ? maxWidth : ['90vw', '92.5vw', null, null, null, '79rem']}
      width={['90vw', '92.5vw', null, null, null, '79rem']}
      zIndex={zIndex && zIndex}
      gridArea={gridArea && gridArea}
      padding={padding && padding}
      margin={margin && margin}
      direction='column'
      justify={justify ? justify : 'flex-start'}
      rounded={rounded && rounded}
      shadow={shadow && shadow}
      flex='1 0 auto'
      align='center'
    >
      {children}
    </Flex>
  )
}
