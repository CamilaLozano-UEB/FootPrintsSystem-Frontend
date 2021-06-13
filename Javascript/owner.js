var Cbutton = document.getElementById("Cpets");
var Ubutton = document.getElementById("Upets");
var Casebutton = document.getElementById("caseB");
var Userbutton = document.getElementById("Uuser");

/**
 * Find the username in the url
 * @returns {string}
 */
function findUsername() {
    var url = window.location.href
    var part = url.split("?");
    return (part[1])
}

/**
 * Get the parameters of the form and send it to the rest in backend for create a pet
 */
Cbutton.onclick = function () {
    var photo = document.getElementById("imagePet");
    var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/upload';

    const formData = new FormData();
    formData.append('file', photo.files[0]);

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(res => res.text())
        .then(res => createPet(res));
}

function createPet(fileD) {
    var username = findUsername();
    var microchip
    var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/owners/' + username + '/pets';
    if (document.getElementById("microchip").value === "") {
        microchip = null;
    } else {
        microchip = Number(document.getElementById("microchip").value)
    }
    if (isNaN(microchip) || document.formC.species[document.formC.species.selectedIndex].text === "Seleccione"
        || document.formC.size[document.formC.size.selectedIndex].text === "Seleccione" || document.formC.sex[document.formC.sex.selectedIndex].text === "Seleccione"
        || fileD === "unknown") {
        alert("Los datos ingresados son incorrectos");
        return;
    }
    var data = {
        "microchip": microchip,
        "name": document.getElementById("name").value,
        "species": document.formC.species[document.formC.species.selectedIndex].text,
        "race": document.getElementById("race").value,
        "size": document.formC.size[document.formC.size.selectedIndex].text,
        "sex": document.formC.sex[document.formC.sex.selectedIndex].text,
        "picture": fileD
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text())
        .then(res => validateNewPet(res));
}

/**
 * Validate the register of a pet
 * @param res string message
 */
function validateNewPet(res) {
    if (res === "se ha registrado correctamente") {
        alert("Se creo la mascota correctamente");
    } else {
        alert(res.toString());
    }
    location.reload();
}

/**
 * Get the parameters of the form and send it to the rest in backend for update a pet
 */
Ubutton.onclick = function () {
    var photo = document.getElementById("imagePetU");
    var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/upload';

    const formData = new FormData();
    formData.append('file', photo.files[0]);

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(res => res.text())
        .then(res => updatePet(res));
}

function updatePet(fileD) {
    var username = findUsername();
    var pet_id = Number(document.getElementById("petid").value);
    var microchip
    var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/owners/' + username + '/pets/' + pet_id;
    if (document.getElementById("microchipU").value === "") {
        microchip = null;
    } else {
        microchip = Number(document.getElementById("microchipU").value)
    }
    if (isNaN(microchip) || isNaN(pet_id) || document.formU.speciesU[document.formU.speciesU.selectedIndex].text === "Seleccione"
        || document.formU.sizeU[document.formU.sizeU.selectedIndex].text === "Seleccione" || document.formU.sexU[document.formU.sexU.selectedIndex].text === "Seleccione"
        || fileD === "unknown") {
        alert("Los datos ingresados son incorrectos");
        return;
    }
    var data = {
        "microchip": microchip,
        "name": document.getElementById("nameU").value,
        "species": document.formU.speciesU[document.formU.speciesU.selectedIndex].text,
        "race": document.getElementById("raceU").value,
        "size": document.formU.sizeU[document.formU.sizeU.selectedIndex].text,
        "sex": document.formU.sexU[document.formU.sexU.selectedIndex].text,
        "picture": fileD
    };

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text())
        .then(res => validateUpPet(res));
}

function validateUpPet(res) {
    if (res === "Se ha modificado exitosamente!") {
        alert("Se ha modificado la mascota exitosamente!");
    } else {
        alert(res.toString());
    }
    location.reload();
}

/**
 * Get the parameters of the form and send it to the rest in backend for create a case
 */

Casebutton.onclick = function () {
    var username = findUsername();
    var pet_id = Number(document.getElementById("petidC").value);
    var create_at = document.getElementById("caseDate").value;
    var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/owner/' + username + '/pet/' + pet_id + '/petCases';
    if (document.formCase.typeCase[document.formCase.typeCase.selectedIndex].text === "Seleccione" || isNaN(pet_id)) {
        alert("Los datos ingresados son incorrectos");
        return;
    }
    var data = {
        "created_at": create_at.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1'),
        "type": document.formCase.typeCase[document.formCase.typeCase.selectedIndex].text,
        "description": document.getElementById("description").value
    };

    //Send and create a post method in the rest backend
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text())
        .then(res => validateMessage(res));
}

function validateMessage(res) {
    if (res === "se ha registrado correctamente") {
        alert("Se creo el caso correctamente");
    } else {
        alert(res.toString());
    }
    location.reload();
}

/**
 * Get the parameter of the form and send it to rest in the backend to update the owner's data
 */
Userbutton.onclick = function () {
    var username = findUsername();
    var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/owner/' + username;
    if (document.formUser.neighborhoodUser[document.formUser.neighborhoodUser.selectedIndex].text === "Seleccione") {
        alert("Es necesario selecionar una localidad");
        return;
    }
    var data = {
        "username": username,
        "password": null,
        "email": null,
        "person_id": 0,
        "name": null,
        "address": document.getElementById("addressUser").value,
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

document.getElementById("find-tab").addEventListener("click", function () {

    var username = findUsername();
    var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/owner/' + username;
    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(response => fillTables(response));
});

function fillTables(petList) {
    let table = document.getElementById("myTableOwner");
    if (document.getElementById("tBodyPets") !== null) {
        $('#myTableOwner').fnDestroy();
        table.removeChild(document.getElementById("tBodyPets"));
    }
    let tBody = document.createElement("tbody");
    tBody.id = "tBodyPets";

    for (let i = 0; i < petList.length; i++) {
        var tr = document.createElement("tr");

        var updateTd = document.createElement("td");
        var updateButton = document.createElement("a");
        updateButton.id = petList[i]["pet_id"];
        updateButtonConfiguration(updateButton);
        updateTd.appendChild(updateButton);
        tr.appendChild(updateTd);

        var caseButton = document.createElement("a");
        var caseTd = document.createElement("td");
        caseButton.id = petList[i]["pet_id"];
        caseButtonConfiguration(caseButton);
        caseTd.appendChild(caseButton);
        tr.appendChild(caseTd);

        var caseVisitButton = document.createElement("a");
        var caseVisitTd = document.createElement("td");
        caseVisitButton.id = petList[i]["pet_id"];
        caseVisitButtonConfiguration(caseVisitButton);
        caseVisitTd.appendChild(caseVisitButton);
        tr.appendChild(caseVisitTd);

        for (const property in petList[i]) {
            if (property !== "owner_username") {
                var td = document.createElement("td");
                td.textContent = petList[i][property];
                if (property === "picture") {
                    var image = document.createElement("img");
                    image.src = td.textContent;
                    image.width = document.body.clientWidth / 6;
                    td.textContent = "";
                    td.appendChild(image);
                }
                tr.appendChild(td);
            }
        }
        tBody.appendChild(tr);
        table.appendChild(tBody);
    }
    $('#myTableOwner').DataTable();
}

function updateButtonConfiguration(button) {
    button.type = "button";
    button.textContent = "Actualizar";
    button.href = "#update";
    button.setAttribute("data-toggle", "tab");
    button.addEventListener("click", function () {
        document.getElementById("petid").value = button.id;
    })
}

function caseButtonConfiguration(button) {
    button.type = "button";
    button.textContent = "Crear caso";
    button.href = "#petCase";
    button.setAttribute("data-toggle", "tab");
    button.addEventListener("click", function () {
        document.getElementById("petidC").value = button.id;
    })
}

function caseVisitButtonConfiguration(button) {
    button.type = "button";
    button.textContent = "Ver casos y visitas";
    button.href = "#CaseAndVisits";
    button.setAttribute("data-toggle", "tab");
    button.addEventListener("click", function () {
        document.getElementById("petIdCV").value = button.id;
    })
}