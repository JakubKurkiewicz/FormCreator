import {Field} from './Field';
import {FieldType} from './FieldType';

export class DateField implements Field {
    name: string;
    type: FieldType;
    element: HTMLInputElement;
    labelValue: string;
    label: HTMLLabelElement;

    constructor(name: string, label: string) {
        this.name = name;
        this.type = FieldType.date;
        this.element = <HTMLInputElement>document.createElement('input');
        this.element.name = name;
        this.element.type = 'date';
        this.label = <HTMLLabelElement>document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }

    render(): HTMLElement {
        return this.element;
    }
    getValue() {
        return this.element.value;
    }
   }