import {Field} from './Field';
import {FieldType} from './FieldType';

export class CheckboxField implements Field {
    name: string;
    type: FieldType;
    element: HTMLInputElement;
    labelValue: string;
    label: HTMLLabelElement;

    constructor(name: string, label: string) {
        this.name = name;
        this.type = FieldType.checkbox;
        this.element = <HTMLInputElement>document.createElement('input');
        this.element.name = name;
        this.element.type = 'checkbox';
        this.label = <HTMLLabelElement>document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }

    render(): HTMLElement {
        return this.element;
    }
    getValue() {
        if(this.element.checked){
            return "Tak"
        }
        else{
            return "Nie"
        }
    }
}