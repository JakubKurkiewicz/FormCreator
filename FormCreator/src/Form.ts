import {Field} from './Field';
import { TableResult } from './TableResult';

export class Form {
    fields: Field[];
    formElement: HTMLElement;
    valueElement: HTMLElement;
    tharray: string[];
    count:number;

    constructor(idForm: string, idValues: string) {
        this.fields = new Array();
        this.formElement = document.getElementById(idForm);
        this.valueElement = document.getElementById(idValues);
        this.tharray = new Array<string>();
        this.count = 0;
        
    }

    render(): void {
        this.fields.forEach(element => {
            this.formElement.appendChild(element.label);
            this.formElement.appendChild(element.render());
        });
    }

    getth():  string[] {
        let tab = this.tharray;
        this.fields.forEach(element => {
            tab.push(element.labelValue)
        });

        return tab
    }

   getupdate(table: TableResult): void{
       let a = new Date().valueOf();
        console.log("witam")
        table.update(a)
    }

   
}