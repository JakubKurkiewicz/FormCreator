import './styles/styles.scss';
import {App} from './App';
import {TextBox} from './TextBox';
import {EmailField} from './EmailField';
import {SelectField} from './SelectField';
import {CheckboxField} from './CheckboxField';
import {TextAreaField} from './TextAreaField';
import {DateField} from './DateField';


document.addEventListener('DOMContentLoaded', function () { return StartProgram(); });

function StartProgram() {
    const textbox = new TextBox('Name', 'Imię');
    const textboxSur = new TextBox('Surname', 'Nazwisko');
    const email = new EmailField('Email', 'Email');
    const select = new SelectField('Select', 'Kierunek studiów', 'Informatyka', 'Aktorstwo', 'Wzornictwo', 'Etyka');
    const checkbox = new CheckboxField('Learning', 'Czy preferujesz e-learning?');
    const textarea = new TextAreaField('Notes', 'Uwagi');
    const date = new DateField('Date', 'Data');
    const app = new App(textbox, textboxSur, email, select, checkbox, textarea, date);
    app.Show();
    app.CreateTable();
   
    
}



   