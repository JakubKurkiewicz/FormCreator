"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var TextBox_1 = require("./TextBox");
var EmailField_1 = require("./EmailField");
var SelectField_1 = require("./SelectField");
var CheckboxField_1 = require("./CheckboxField");
var TextAreaField_1 = require("./TextAreaField");
var DateField_1 = require("./DateField");
document.addEventListener('DOMContentLoaded', function () { return StartProgram(); });
function StartProgram() {
    var textbox = new TextBox_1.TextBox('Name', 'Imię');
    var textboxSur = new TextBox_1.TextBox('Surname', 'Nazwisko');
    var email = new EmailField_1.EmailField('Email', 'Email');
    var select = new SelectField_1.SelectField('Select', 'Kierunek studiów', 'Informatyka', 'Aktorstwo', 'Wzornictwo', 'Etyka');
    var checkbox = new CheckboxField_1.CheckboxField('Learning', 'Czy preferujesz e-learning?');
    var textarea = new TextAreaField_1.TextAreaField('Notes', 'Uwagi');
    var date = new DateField_1.DateField('Date', 'Data');
    var app = new App_1.App(textbox, textboxSur, email, select, checkbox, textarea, date);
    app.Show();
    app.CreateTable();
}
