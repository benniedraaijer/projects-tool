import { Flex } from '@chakra-ui/react';
import React from 'react';
export var Section = function (_a) {
    var children = _a.children, padding = _a.padding, zIndex = _a.zIndex, top = _a.top, backgroundColor = _a.backgroundColor;
    return (React.createElement(Flex, { direction: 'column', backgroundColor: backgroundColor && backgroundColor, zIndex: zIndex && zIndex, position: 'relative', p: padding && padding, top: top && top, height: '100%', justify: 'flex-start', align: 'center', flex: '1 0 auto', as: 'section', minWidth: '100%', maxWidth: '100%', width: '100%' }, children));
};
//# sourceMappingURL=Section.js.map