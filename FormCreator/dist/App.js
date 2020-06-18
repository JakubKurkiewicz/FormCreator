"use strict";
exports.__esModule = true;
var Form_1 = require("./Form");
var TableResult_1 = require("./TableResult");
var App = /** @class */ (function () {
    function App() {
        var _a;
        var _this = this;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.form = new Form_1.Form('formInput', 'formOut');
        (_a = this.form.fields).push.apply(_a, elements);
        this.table = new TableResult_1.TableResult(this.form);
        this.sButton = document.getElementById('submit');
        this.sButton.addEventListener('click', function () { return _this.form.getupdate(_this.table); });
    }
    App.prototype.Show = function () {
        this.form.render();
    };
    App.prototype.CreateTable = function () {
        this.table.create();
    };
    return App;
}());
exports.App = App;
