"use strict";
exports.__esModule = true;
var FieldType_1 = require("./FieldType");
var CheckboxField = /** @class */ (function () {
    function CheckboxField(name, label) {
        this.name = name;
        this.type = FieldType_1.FieldType.checkbox;
        this.element = document.createElement('input');
        this.element.name = name;
        this.element.type = 'checkbox';
        this.label = document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }
    CheckboxField.prototype.render = function () {
        return this.element;
    };
    CheckboxField.prototype.getValue = function () {
        if (this.element.checked) {
            return "Tak";
        }
        else {
            return "Nie";
        }
    };
    return CheckboxField;
}());
exports.CheckboxField = CheckboxField;
