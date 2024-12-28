document.getElementById('b1').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let branch = document.getElementById('branch').value;
    let checkIn = document.getElementById('checkIn').value;
    let checkOut = document.getElementById('checkOut').value;
    if (name && branch && checkIn && checkOut) {
        let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();
        let nameCell = newRow.insertCell(0);
        let branchCell = newRow.insertCell(1);
        let checkInCell = newRow.insertCell(2);
        let checkOutCell = newRow.insertCell(3);
        let deleteCell = newRow.insertCell(4);
        nameCell.innerText = name;
        branchCell.innerText = branch;
        checkInCell.innerText = checkIn;
        checkOutCell.innerText = checkOut;
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteCell.appendChild(deleteButton);
        deleteButton.addEventListener('click', function() {
            table.deleteRow(newRow.rowIndex - 1);
        });
        document.getElementById('name').value = '';
        document.getElementById('branch').value = '';
        document.getElementById('checkIn').value = '';
        document.getElementById('checkOut').value = '';
    } else {
        alert("Please fill out all fields.");
    }
});
