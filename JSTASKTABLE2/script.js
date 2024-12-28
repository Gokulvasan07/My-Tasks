const table = document.createElement("table");
document.body.append(table);
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);
const tr1 = document.createElement("tr");
thead.appendChild(tr1);
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");
let th4 = document.createElement("th");
tr1.appendChild(th1);
th1.textContent = "Sno";
tr1.appendChild(th2);
th2.textContent = "Ename";
tr1.appendChild(th3);
th3.textContent = "Location";
tr1.appendChild(th4);
th4.textContent = "Delete";
table.style.border = "1px solid black";
table.style.borderCollapse = "collapse";
table.style.alignItems = "center";
const numberOfRows = parseInt(prompt("How many entries to input?"), 10);
for (let i = 1; i <= numberOfRows; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (let j = 0; j < 3; j++) {
        let td = document.createElement("td");
        if (j == 0) td.textContent = i;
        else if (j == 1) {
            let t1 = td.textContent = prompt(`Enter the name for entry ${i}:`);
            if (t1 !== "") tr.appendChild(td);
            else j--;
        } else if (j === 2) {
            let t2 = td.textContent = prompt(`Enter the location for entry ${i}:`);
            if (t2 !== "") tr.appendChild(td);
            else j--;
        }
        td.style.border = "1px solid black";
        td.style.padding = "5px";
        tr.appendChild(td);
    }
    let deleteCell = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.padding = "5px";
    deleteButton.addEventListener("click", function () {
        tr.remove();
    });
    deleteCell.appendChild(deleteButton);
    deleteCell.style.border = "1px solid black";
    deleteCell.style.padding = "5px";
    tr.appendChild(deleteCell);
}
