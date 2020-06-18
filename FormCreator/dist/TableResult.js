"use strict";
exports.__esModule = true;
var TableResult = /** @class */ (function () {
    function TableResult(form) {
        this.fields = new Array();
        this.form = form;
        this.table = document.createElement('table');
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');
        // this.th = document.createElement('th');
        this.tr = document.createElement('tr');
        this.objectTab = new Array();
    }
    TableResult.prototype.create = function () {
        var titles = this.form.getth();
        this.table.className = "w3-table-all w3-centered";
        var thead = this.thead;
        var tbody = this.tbody;
        var thdel = document.createElement('th');
        var tr = this.tr;
        titles;
        for (var i = 0; i < titles.length; i++) {
            var th = document.createElement('th');
            th.innerText = titles[i];
            tr.appendChild(th);
        }
        thdel.innerHTML = "USUŃ";
        tr.appendChild(thdel);
        thead.appendChild(tr);
        this.table.appendChild(thead);
        this.table.appendChild(tbody);
        this.form.valueElement.appendChild(this.table);
    };
    TableResult.prototype.update = function (id) {
        var _this = this;
        ///////////////
        var arr = [];
        // let listOfLists : string[][];
        //  this.form.fields.forEach(element => {
        //   for (var i = 0; i < 5; i++) {
        arr.push({
            imie: "1",
            nazwisko: "1",
            email: "1",
            kierunek_studiow: "1",
            elearning: "1",
            uwagi: "1",
            data: "1",
            id: "1"
        });
        //  }
        //   });
        //  let len = oFullResponse.results.length;
        //console.log(arr + "jazda")
        var tab2 = [];
        var tr2 = document.createElement('tr');
        var tddel = document.createElement('td');
        var td2;
        var delbutton = document.createElement('button');
        delbutton.id = id;
        delbutton.className = 'guziki';
        this.form.fields.forEach(function (element) {
            tab2.push(element.getValue());
            td2 = document.createElement('td');
            // console.log(element.getValue())
            td2.innerHTML = element.getValue();
            tr2.appendChild(td2);
        });
        tab2.push(id);
        tddel.innerHTML = "USUŃ";
        tddel.id = id;
        tddel.appendChild(delbutton);
        tr2.appendChild(tddel);
        this.tbody.appendChild(tr2);
        tddel.addEventListener('click', function () { return _this.del(tddel.id); });
        this.objectTab.push(tab2);
        // console.log(this.objectTab)
    };
    TableResult.prototype.del = function (id) {
        var elem = document.getElementById(id).parentElement;
        elem.parentNode.removeChild(elem);
        //this.objectTab = this.objectTab.slice(id)
        // this.objectTab.splice(id, 1);
        // this.objectTab[id].push()
        for (var i = 0; i < this.objectTab.length; i++)
            if (this.objectTab[i].id === id) {
                this.objectTab.splice(i, 1);
                console.log(this.objectTab);
            }
        var filtered = this.objectTab.filter(function (el) { return el[7] == id; });
        var arr = [];
        arr.push({
            imie: filtered[0],
            nazwisko: filtered[1],
            email: filtered[2],
            kierunek_studiow: filtered[3],
            elearning: filtered[4],
            uwagi: filtered[5],
            data: filtered[6],
            id: filtered[7]
        });
        console.log(filtered[0] + "obiekt");
        //   console.log(arr[1]+"obiekt")
        //   console.log(arr[2]+"obiekt")
        //  console.log(this.objectTab+"iha")
        //     console.log(this.objectTab+"iha1")
    };
    return TableResult;
}());
exports.TableResult = TableResult;
