import {Field} from './Field';
import {FieldType} from './FieldType';

export class SelectField implements Field {
    name: string;
    type: FieldType;
    element: HTMLSelectElement;
    labelValue: string;
    label: HTMLLabelElement;

    constructor(name: string, label: string, ...options: string[]) {
        this.name = name;
        this.type = FieldType.select;
        this.element = <HTMLSelectElement>document.createElement('select');
        options.forEach(element => {
            const opt = document.createElement('option');
            opt.value = element;
            opt.text = element;
            this.element.add(opt);
        });
        this.element.name = name;
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
