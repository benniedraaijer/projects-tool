import { Flex } from '@chakra-ui/react';
import React from 'react';
export var SectionContent = function (_a) {
    var children = _a.children, padding = _a.padding, zIndex = _a.zIndex, maxWidth = _a.maxWidth, margin = _a.margin, gridArea = _a.gridArea, justify = _a.justify, rounded = _a.rounded, shadow = _a.shadow;
    return (React.createElement(Flex, { maxWidth: maxWidth ? maxWidth : ['90vw', '92.5vw', null, null, null, '79rem'], width: ['90vw', '92.5vw', null, null, null, '79rem'], zIndex: zIndex && zIndex, gridArea: gridArea && gridArea, padding: padding && padding, margin: margin && margin, direction: 'column', justify: justify ? justify : 'flex-start', rounded: rounded && rounded, shadow: shadow && shadow, flex: '1 0 auto', align: 'center' }, children));
};
//# sourceMappingURL=SectionContent.js.map