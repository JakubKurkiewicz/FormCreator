"use strict";
exports.__esModule = true;
var FieldType_1 = require("./FieldType");
var EmailField = /** @class */ (function () {
    function EmailField(name, label) {
        this.name = name;
        this.type = FieldType_1.FieldType.email;
        this.element = document.createElement('input');
        this.element.name = name;
        this.element.type = 'email';
        this.label = document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }
    EmailField.prototype.render = function () {
        return this.element;
    };
    EmailField.prototype.getValue = function () {
        return this.element.value;
    };
    return EmailField;
}());
exports.EmailField = EmailField;
