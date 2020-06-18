"use strict";
exports.__esModule = true;
var FieldType_1 = require("./FieldType");
var TextBox = /** @class */ (function () {
    function TextBox(name, label) {
        this.name = name;
        this.type = FieldType_1.FieldType.textBox;
        this.element = document.createElement('input');
        this.element.name = this.name;
        this.element.type = 'text';
        this.label = document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }
    TextBox.prototype.render = function () {
        return this.element;
    };
    TextBox.prototype.getValue = function () {
        return this.element.value;
    };
    return TextBox;
}());
exports.TextBox = TextBox;
