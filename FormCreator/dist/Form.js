"use strict";
exports.__esModule = true;
var Form = /** @class */ (function () {
    function Form(idForm, idValues) {
        this.fields = new Array();
        this.formElement = document.getElementById(idForm);
        this.valueElement = document.getElementById(idValues);
        this.tharray = new Array();
        this.count = 0;
    }
    Form.prototype.render = function () {
        var _this = this;
        this.fields.forEach(function (element) {
            _this.formElement.appendChild(element.label);
            _this.formElement.appendChild(element.render());
        });
    };
    Form.prototype.getth = function () {
        var tab = this.tharray;
        this.fields.forEach(function (element) {
            tab.push(element.labelValue);
        });
        return tab;
    };
    Form.prototype.getupdate = function (table) {
        var a = this.count++;
        console.log("witam");
        table.update(a);
    };
    return Form;
}());
exports.Form = Form;
