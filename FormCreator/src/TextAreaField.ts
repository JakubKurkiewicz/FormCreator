import {Field} from './Field';
import {FieldType} from './FieldType';

export class TextAreaField implements Field {
    name: string;
    type: FieldType;
    element: HTMLTextAreaElement;
    labelValue: string;
    label: HTMLLabelElement;

    constructor(name: string, label: string) {
        this.name = name;
        this.type = FieldType.textarea;
        this.element = <HTMLTextAreaElement>document.createElement('textarea');
        this.element.name = this.name;
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