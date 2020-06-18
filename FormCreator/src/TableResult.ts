import {Field} from './Field';
import {Form} from './Form';
import { array } from '@hapi/joi';

export class TableResult{
    fields: Field[];
    form: Form;
    table: HTMLTableElement;
    thead: HTMLTableSectionElement;
    tbody: HTMLTableSectionElement;
    tr: HTMLTableRowElement;
    objectTabs: any[];
    tab: any[];

    constructor(form: Form) {
        this.fields = new Array();
        this.form = form;
        this.table = document.createElement('table');
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');
        this.tr = document.createElement('tr');
        this.objectTabs = new Array();
    }

    create(): void{
        let titles = this.form.getth();
        this.table.className = "w3-table-all w3-centered";
        let thead = this.thead;
        let tbody = this.tbody;
        let thdel = document.createElement('th');
        let tr = this.tr;
       
        for(let i = 0; i<titles.length;i++){
          let th =  document.createElement('th');
            th.innerText = titles[i];
            tr.appendChild(th)
        }

        thdel.innerHTML = "USUŃ"
        tr.appendChild(thdel)
        thead.appendChild(tr)
        this.table.appendChild(thead)
        this.table.appendChild(tbody)
        this.form.valueElement.appendChild(this.table)
    }

    updateExist():void{
        
     
        let cat = JSON.parse(localStorage.getItem('list'));
        let object;
        let td;
        
        for(let i =0;i<cat.length;i++){
            let  tr2 = document.createElement('tr');
            object = {   
                imie: cat[i].imie,
                nazwisko: cat[i].nazwisko,
                email: cat[i].email,
                kierunek_studiow: cat[i].kierunek_studiow,
                elearning: cat[i].elearning,
                uwagi:  cat[i].uwagi,
                data: cat[i].data,
                id: cat[i].id   
            };
            let delbutton = document.createElement('button');
            for(let key in object) {
                
            
                td = document.createElement('td');
                td.innerHTML = object[key]
               
                if(key=="id"){
                    td.id = (object[key]);
                    td.innerHTML ="";
                    td.appendChild(delbutton)
                  
                }
                
                tr2.appendChild(td)   
              
            }
            
            
            this.objectTabs.push(object)
            this.tbody.appendChild(tr2)
            delbutton.addEventListener('click', () => this.del(delbutton.parentElement.id));
          
          
        }

      
         
       
       this.saveLC( this.objectTabs)

    }
    update(id): void {
   
        let tab2 = [];
        let tr2 = document.createElement('tr');
        let tddel = document.createElement('td');
        let td2;
        let delbutton = document.createElement('button');
        delbutton.id = id;
        delbutton.className = 'guziki';
        let user;
        
        this.form.fields.forEach(element => {
           tab2.push(element.getValue())
            td2 = document.createElement('td');
            td2.innerHTML = element.getValue()
            tr2.appendChild(td2)   
        });

        
        for(let i =0;i<tab2.length;i++){
        user = {   
            imie: tab2[0],
            nazwisko: tab2[1],
            email:  tab2[2],
            kierunek_studiow: tab2[3],
            elearning: tab2[4],
            uwagi:  tab2[5],
            data: tab2[6],
            id: id      
        };
    }

        tab2.push(id)
        tddel.id = id;
        tddel.appendChild(delbutton)
        tr2.appendChild(tddel)
        this.tbody.appendChild(tr2)
        tddel.addEventListener('click', () => this.del(tddel.id));
        this.objectTabs.push(user)


        this.saveLC(this.objectTabs)
    }
    del(id):void {
        var elem = document.getElementById(id).parentElement;
        elem.parentNode.removeChild(elem);
    
        this.objectTabs =   this.objectTabs.filter(person => person.id != id);
        

        this.saveLC(this.objectTabs)
        
    }
    saveLC(x):void {
        localStorage.setItem("list", JSON.stringify(x));
    }
}