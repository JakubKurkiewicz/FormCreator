"use strict";
exports.__esModule = true;
var FieldType_1 = require("./FieldType");
var TextAreaField = /** @class */ (function () {
    function TextAreaField(name, label) {
        this.name = name;
        this.type = FieldType_1.FieldType.textarea;
        this.element = document.createElement('textarea');
        this.element.name = this.name;
        this.label = document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }
    TextAreaField.prototype.render = function () {
        return this.element;
    };
    TextAreaField.prototype.getValue = function () {
        return this.element.value;
    };
    return TextAreaField;
}());
exports.TextAreaField = TextAreaField;
