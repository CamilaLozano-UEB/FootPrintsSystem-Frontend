var visitButton = document.getElementById("Cpets");
var vetButton = document.getElementById("Uuser");

/**
 * Function that validates the implantation of a microchip in a pet
 */
var selecttype = document.getElementById("type");
selecttype.onchange = function controlMicrochip() {
    var type = document.formVC.type[document.formVC.type.selectedIndex].text;
    if (type === "Implantación de microchip") {
        var microchip = document.getElementById("microchip");
        microchip.disabled = false;
    } else {
        var microchip = document.getElementById("microchip");
        microchip.disabled = true;
    }
}

/**
 * Find the user in the url
 * @returns {string}
 */
findUsername()
function findUsername() {
    var url = window.location.href
    var part = url.split("?");
    if (part[1] === undefined){
        alert("Es necesario ingresar un usuario");
        window.location.href="index.html";
    }
    return (part[1])
}

/**
 * Take and send it the data to the backend and create the visit
 */
visitButton.onclick = function () {
    var username = findUsername();
    var pet_id = Number(document.getElementById("petId").value.trim());
    var create_at = document.getElementById("CreatAt").value;
    var type = document.formVC.type[document.formVC.type.selectedIndex].text
    var url = 'http://35.206.97.221:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/vet/' + username + '/visits';

    //If the visit is for implantation microchip, take the microchip value and send it
    if (type === "Implantación de microchip") {
        var microchip = Number(document.getElementById("microchip").value.trim());
        type = "implantación de microchip";
        if (isNaN(microchip) || isNaN(pet_id) || type === "Seleccione") {
            alert("Los datos ingresados son incorrectos");
            return;
        }
        if (isNaN(microchip) || isNaN(pet_id) || type === "Seleccione"||document.getElementById("description").value.trim()==="") {
            alert("Deben llenarse todos los campos");
            return;
        }
        var data = {
            "created_at": create_at.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1'),
            "type": type,
            "microchip": microchip,
            "description": document.getElementById("description").value.trim(),
            "pet_id": pet_id
        };

        //Send and create a post method in the rest backend
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.text())
            .then(response => showAlert(response));
    } else {
        if (isNaN(pet_id) || type === "Seleccione") {
            alert("Los datos ingresados son incorrectos");
            return;
        }
        if (isNaN(pet_id) || type === "Seleccione"||document.getElementById("description").value.trim()==="") {
            alert("Deben llenarse todo los campos");
            return;
        }
        var data = {
            "created_at": create_at.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1'),
            "type": type,
            "description": document.getElementById("description").value.trim(),
            "pet_id": pet_id
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.text())
            .then(response => showAlert(response));
    }
}

/**
 * Function that sends a message if the visit creation is successful
 * @param res
 */
function showAlert(res) {
    if (res === "Se ha creado exitosamente la visita!") {
        alert("Se ha creado exitosamente la visita!");
    } else {
        alert(res.toString());
    }
    location.reload();
}

/**
 * Update the dat of the vet
 */
vetButton.onclick = function () {
    var username = findUsername();
    var url = 'http://35.206.97.221:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/vet/' + username;
    if (document.formUser.neighborhoodUser[document.formUser.neighborhoodUser.selectedIndex].text === "Seleccione"||document.getElementById("addressUser").value.trim()==="" ) {
        alert("Es necesario selecionar una localidad y dirección");
        return;
    }

    var data = {
        "username": username,
        "password": null,
        "email": null,
        "name": null,
        "address": document.getElementById("addressUser").value.trim(),
        "neighborhood": document.formUser.neighborhoodUser[document.formUser.neighborhoodUser.selectedIndex].text
    };

    //Send and create a put method in the rest backend
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text())
        .then(response => console.log('Success:', response));
    alert("Se actualizaron los datos ");
    location.reload();
}


document.getElementById("VisitTablePet-tab").addEventListener("click", function () {

    var username = findUsername();
    var url = new URL('http://35.206.97.221:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/vet/' +
        username + "/visits/All")
    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(response => fillVisitPetsTable(response));

});

/**
 * This function take the values of the backend and put it in the tables to generate it
 * @param visitList list of visits objects
 */
function fillVisitPetsTable(visitList) {
    let table = document.getElementById("myTablePets");
    //If the table have an element, remove it
    if (document.getElementById("tBodyVisit") !== null) {
        $('#myTablePets').DataTable().destroy();
        table.removeChild(document.getElementById("tBodyVisit"));
    }
    //create the body of the table
    let tBody = document.createElement("tbody");
    tBody.id = "tBodyVisit";
    if (visitList.length === 0)
        alert("No se encontró información");

    //go through the for the visits and create each cell in the table to assign a record of the visits
    for (let i = 0; i < visitList.length; i++) {
        const tr = document.createElement("tr");
        for (const property in visitList[i]) {
            let td = document.createElement("td");
            td.textContent = visitList[i][property];
            tr.appendChild(td);
        }
        tBody.appendChild(tr);
    }
    table.appendChild(tBody);
    $('#myTablePets').DataTable();
}

/**
 * assign filter action to filter button
 */
document.getElementById("filter").addEventListener("click", filterTableVet);

/**
 * Date and name filter for the visits table in pets
 */
function filterTableVet() {

    var username = findUsername();
    var url = new URL('http://35.206.97.221:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/vet/' +
        username + "/visits/")

    var date1 = document.getElementById("Date1").value;
    var date2 = document.getElementById("Date2").value;
    if (date1 === "" || date2 === ""|| document.getElementById("PetName").value==="") {
        alert("Para filtar es necesario ingresar las fechas y el nombre");
        return;
    }
    //Params for the filter
    var params = [['petName', document.getElementById("PetName").value],
        ['initialDate', document.getElementById("Date1").value.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')],
        ['finalDate', document.getElementById("Date2").value.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1')]]

    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(response => fillVisitPetsTable(response));

}