import {FieldType} from './FieldType';

export interface Field {
    name: string,
    label: HTMLLabelElement;
    labelValue: string,
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
}