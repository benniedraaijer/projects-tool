"use strict";
exports.__esModule = true;
exports.Section = void 0;
var tslib_1 = require("tslib");
var react_1 = require("@chakra-ui/react");
var react_2 = tslib_1.__importDefault(require("react"));
var Section = function (_a) {
    var children = _a.children, padding = _a.padding, zIndex = _a.zIndex, top = _a.top, backgroundColor = _a.backgroundColor;
    return (react_2["default"].createElement(react_1.Flex, { direction: 'column', backgroundColor: backgroundColor && backgroundColor, zIndex: zIndex && zIndex, position: 'relative', p: padding && padding, top: top && top, height: '100%', justify: 'flex-start', align: 'center', flex: '1 0 auto', as: 'section', minWidth: '100%', maxWidth: '100%', width: '100%' }, children));
};
exports.Section = Section;
//# sourceMappingURL=Section.js.map