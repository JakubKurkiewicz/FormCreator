import './styles/styles.scss';
import {Form} from './Form';
import {Field} from './Field';
import {TableResult} from './TableResult';

export class App {
    form: Form;
    sButton: HTMLElement;
    table: TableResult;
    tabelka: HTMLTableElement;
    thead: HTMLTableSectionElement;
    tbody: HTMLTableSectionElement;
    tr: HTMLTableRowElement;
    objectTabs: any[];



    constructor(...elements: Field[]) {
        
        
        
        this.tabelka = document.createElement('table');
        this.form = new Form('formInput', 'formOut');
        this.form.fields.push(...elements);
        this.table = new TableResult(this.form);
        this.sButton = document.getElementById('submit');
        
        this.sButton.addEventListener('click', () => this.form.getupdate(this.table));
  
       
    
    }

    Show() {
        this.form.render();
    }

    CreateTable(){

        if (localStorage.getItem("list") === null) {
            this.table.create();
          }
          else{
              this.table.create();
              this.table.updateExist();
          }
          
    }
}