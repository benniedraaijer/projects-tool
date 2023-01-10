"use strict";
exports.__esModule = true;
exports.SectionContent = void 0;
var tslib_1 = require("tslib");
var react_1 = require("@chakra-ui/react");
var react_2 = tslib_1.__importDefault(require("react"));
var SectionContent = function (_a) {
    var children = _a.children, padding = _a.padding, zIndex = _a.zIndex, maxWidth = _a.maxWidth, margin = _a.margin, gridArea = _a.gridArea, justify = _a.justify, rounded = _a.rounded, shadow = _a.shadow;
    return (react_2["default"].createElement(react_1.Flex, { maxWidth: maxWidth ? maxWidth : ['90vw', '92.5vw', null, null, null, '79rem'], width: ['90vw', '92.5vw', null, null, null, '79rem'], zIndex: zIndex && zIndex, gridArea: gridArea && gridArea, padding: padding && padding, margin: margin && margin, direction: 'column', justify: justify ? justify : 'flex-start', rounded: rounded && rounded, shadow: shadow && shadow, flex: '1 0 auto', align: 'center' }, children));
};
exports.SectionContent = SectionContent;
//# sourceMappingURL=SectionContent.js.map