"use strict";
exports.__esModule = true;
var FieldType_1 = require("./FieldType");
var SelectField = /** @class */ (function () {
    function SelectField(name, label) {
        var _this = this;
        var options = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            options[_i - 2] = arguments[_i];
        }
        this.name = name;
        this.type = FieldType_1.FieldType.select;
        this.element = document.createElement('select');
        options.forEach(function (element) {
            var opt = document.createElement('option');
            opt.value = element;
            opt.text = element;
            _this.element.add(opt);
        });
        this.element.name = name;
        this.label = document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }
    SelectField.prototype.render = function () {
        return this.element;
    };
    SelectField.prototype.getValue = function () {
        return this.element.value;
    };
    return SelectField;
}());
exports.SelectField = SelectField;
