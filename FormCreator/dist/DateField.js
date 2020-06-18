"use strict";
exports.__esModule = true;
var FieldType_1 = require("./FieldType");
var DateField = /** @class */ (function () {
    function DateField(name, label) {
        this.name = name;
        this.type = FieldType_1.FieldType.date;
        this.element = document.createElement('input');
        this.element.name = name;
        this.element.type = 'date';
        this.label = document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }
    DateField.prototype.render = function () {
        return this.element;
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
}());
exports.DateField = DateField;
