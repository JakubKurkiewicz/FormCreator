import {Field} from './Field';
import {FieldType} from './FieldType';

export class TextBox implements Field {
    name: string;
    type: FieldType;
    element: HTMLInputElement;
    labelValue: string;
    label: HTMLLabelElement;

    constructor(name: string, label: string) {
        this.name = name;
        this.type = FieldType.textBox;
        this.element = <HTMLInputElement>document.createElement('input');
        this.element.name = this.name;
        this.element.type = 'text';
        this.label = <HTMLLabelElement>document.createElement('label');
        this.label.innerHTML = label;
        this.label.htmlFor = name;
        this.labelValue = label;
    }

    render(): HTMLElement {
        return this.element;
    }
    
    getValue(): any {
        return this.element.value;
    }
}