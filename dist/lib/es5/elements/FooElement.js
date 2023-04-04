"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooElement = void 0;
var FooElement = /** @class */ (function (_super) {
    __extends(FooElement, _super);
    function FooElement() {
        var _this = _super.call(this) || this;
        _this.shadow = _this.attachShadow({ mode: 'open' });
        _this.name = 'foo';
        return _this;
    }
    FooElement.prototype.getAttributes = function () {
        this.name = this.getAttribute('name') || '';
    };
    return FooElement;
}(HTMLElement));
exports.FooElement = FooElement;
