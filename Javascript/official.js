/**
 * Find the username in the url
 * @returns {string}
 */
function findUsername() {
    var url = window.location.href
    var part = url.split("?");
    return (part[1])
}

document.getElementById("officialOwner-tab").addEventListener("click", tabListener);

function tabListener() {
    var username = findUsername();
    if (username === undefined) {
        alert("Access denied")
        return
    }
    var url = new URL('http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/official/' +
        username + '/totalOwners');

    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(response => fillTotalOwnersTable(response));
}

tabListener();

function fillTotalOwnersTable(totalOwners) {
    let table = document.getElementById("myTableOfficialOwners");

    if (document.getElementById("tBodyOwners") !== null) {
        $('#myTableOfficialOwners').DataTable().destroy();
        table.removeChild(document.getElementById("tBodyOwners"));
    }

    let tBody = document.createElement("tbody");
    tBody.id = "tBodyOwners";

    const tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = "Total de propietarios";
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = totalOwners["totalOwners"];
    tr.appendChild(td2);
    tBody.appendChild(tr);

    for (let i = 0; i < totalOwners["neighborhoodOwnersTotal"].length; i++) {
        const tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = "Localidad " + totalOwners["neighborhoodOwnersTotal"][i].neighborhood;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = totalOwners["neighborhoodOwnersTotal"][i].total;
        tr.appendChild(td2);

        tBody.appendChild(tr);
    }
    table.appendChild(tBody);
    $('#myTableOfficialOwners').DataTable({"bSort": false});
}

document.getElementById("officialPet-tab").addEventListener("click", function () {
    var username = findUsername();
    if (username === undefined) {
        alert("Access denied")
        return
    }
    var url = new URL('http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/official/' +
        username + '/totalPets');

    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(response => fillTotalPetsTable(response));
});

function fillTotalPetsTable(totalPets) {
    let table = document.getElementById("myTableOfficialPets");

    if (document.getElementById("tBodyPets") !== null) {
        $('#myTableOfficialPets').DataTable().destroy();
        table.removeChild(document.getElementById("tBodyPets"));
    }
    let tBody = document.createElement("tbody");
    tBody.id = "tBodyPets";

    const atributes = ["totalPets", "totalPetsWithMicrochip", "totalPetsWithSterilization"];
    const atributeTitle = ["Total de mascotas", "Total de mascotas con microchip", "Total de mascotas esterilizadas"];

    for (let i = 0; i < atributes.length; i++) {
        const tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = atributeTitle[i];
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = totalPets[atributes[i]];
        tr.appendChild(td2);
        tBody.appendChild(tr);
    }

    const listTitles = ["sexPets", "sizePets", "racePets", "speciesPets"];
    var title = "";

    for (const listTitlesKey of listTitles) {

        if (listTitlesKey === "sexPets") title = "Sexo ";
        else if (listTitlesKey === "sizePets") title = "Tamaño ";
        else if (listTitlesKey === "racePets") title = "Raza ";
        else title = "Especie ";

        for (let i = 0; i < totalPets[listTitlesKey].length; i++) {
            const tr = document.createElement("tr");
            let td1 = document.createElement("td");

            var object = totalPets[listTitlesKey][i];
            td1.textContent = title + object[Object.keys(object)[0]];
            tr.appendChild(td1);

            let td2 = document.createElement("td");
            td2.textContent = totalPets[listTitlesKey][i].total;
            tr.appendChild(td2);
            tBody.appendChild(tr);
        }
    }

    table.appendChild(tBody);
    $('#myTableOfficialPets').DataTable({"bSort": false});
}

document.getElementById("officialCase-tab").addEventListener("click", function () {
    var username = findUsername();
    if (username === undefined) {
        alert("Access denied")
        return
    }
    var url = new URL('http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/official/' +
        username + '/totalCases');

    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(response => fillTotalCasesTable(response));
});

function fillTotalCasesTable(totalCases) {
    let table = document.getElementById("myTableOfficialCases");

    if (document.getElementById("tBodyCases") !== null) {
        $('#myTableOfficialCases').DataTable().destroy();
        table.removeChild(document.getElementById("tBodyCases"));
    }
    let tBody = document.createElement("tbody");
    tBody.id = "tBodyCases";

    const tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = "Total de casos";
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = totalCases["totalCases"];
    tr.appendChild(td2);
    tBody.appendChild(tr);

    for (let i = 0; i < totalCases["totalCase"].length; i++) {
        const tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.textContent = "Total de casos por " + totalCases["totalCase"][i].type;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = totalCases["totalCase"][i].total;
        tr.appendChild(td2);

        tBody.appendChild(tr);
    }

    table.appendChild(tBody);
    $('#myTableOfficialCases').DataTable({"bSort": false});
}

document.getElementById("officialVisit-tab").addEventListener("click", function () {
    var username = findUsername();
    if (username === undefined) {
        alert("Access denied")
        return
    }
    var url = new URL('http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/official/' +
        username + '/totalVisits');

    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(response => fillTotalVisitsTable(response));
});

function fillTotalVisitsTable(totalVisits) {
    let table = document.getElementById("myTableOfficialVisits");

    if (document.getElementById("tBodyVisits") !== null) {
        $('#myTableOfficialVisits').DataTable().destroy();
        table.removeChild(document.getElementById("tBodyVisits"));
    }
    let tBody = document.createElement("tbody");
    tBody.id = "tBodyVisits";

    const tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = "Total de Visitas";
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = totalVisits["total"];
    tr.appendChild(td2);
    tBody.appendChild(tr);

    const listTitles = ["visitByType", "visitByVets"];
    var title = "";

    for (const listTitlesKey of listTitles) {

        if (listTitlesKey === "visitByType") title = "Visitas de ";
        else title = "Total de visitas de la veterinaria ";

        for (let i = 0; i < totalVisits[listTitlesKey].length; i++) {
            const tr = document.createElement("tr");
            let td1 = document.createElement("td");

            var object = totalVisits[listTitlesKey][i];
            td1.textContent = title + object[Object.keys(object)[0]];
            tr.appendChild(td1);

            let td2 = document.createElement("td");
            td2.textContent = totalVisits[listTitlesKey][i].total;
            tr.appendChild(td2);
            tBody.appendChild(tr);
        }
    }

    table.appendChild(tBody);
    $('#myTableOfficialVisits').DataTable({"bSort": false});
}

document.getElementById("filterOwner").addEventListener("click", fillFilteredPetsTableAction);

fillFilteredPetsTableAction();

function fillFilteredPetsTableAction() {
    var username = findUsername();
    if (username === undefined) {
        alert("Access denied")
        return
    }
    let url = new URL('http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/official/' +
        username + '/pets');

    let params = makeParams();

    if (params[0] !== undefined)
        url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(response => fillFilteredPetsTable(response));
}

function fillFilteredPetsTable(petsFiltered) {
    let table = document.getElementById("myTableOfficialFilters");

    if (document.getElementById("tBodyFilteredPets") !== null) {
        $('#myTableOfficialFilters').DataTable().destroy();
        table.removeChild(document.getElementById("tBodyFilteredPets"));
    }
    let tBody = document.createElement("tbody");
    tBody.id = "tBodyFilteredPets";

    if (petsFiltered.length === 0)
        alert("No se encontró información");

    for (let i = 0; i < petsFiltered.length; i++) {
        const tr = document.createElement("tr");

        for (const property in petsFiltered[i]) {
            let td = document.createElement("td");
            td.textContent = petsFiltered[i][property];

            if (property === "picture") {
                var image = document.createElement("img");

                if (td.textContent === "http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/image/unknown.jpg")
                    image.src = "imgs/unknown.jpg";
                else
                    image.src = td.textContent;

                image.width = document.body.clientWidth / 6;
                td.textContent = "";
                td.appendChild(image);
            }

            tr.appendChild(td);
        }
        tBody.appendChild(tr);
    }

    table.appendChild(tBody);
    $('#myTableOfficialFilters').DataTable();
}

function makeParams() {
    var params = [];

    let petId = document.getElementById("IdPet").value;
    if (isNaN(Number(petId))) {
        alert("El id de la mascota debe ser un número");
        return;
    } else if (petId !== "") {
        params.push(['idF', petId])
    }

    let microchipF = document.getElementById("MicrochipPet").value;
    if (isNaN(Number(microchipF))) {
        alert("El id de la mascota debe ser un número");
        return;
    } else if (microchipF !== "") {
        params.push(['microchipF', microchipF])
    }

    let nameF = document.getElementById("NamePet").value;
    if (nameF !== "") params.push(['nameF', nameF]);

    let speciesToFilter = "";
    let species = document.getElementsByClassName("especies");
    for (let i = 0; i < species.length; i++) {
        if (species[i].checked) {
            speciesToFilter += species[i].value + ",";
        }
    }
    if (speciesToFilter !== "") {
        speciesToFilter = speciesToFilter.substring(0, speciesToFilter.length - 1);
        params.push(["speciesF", speciesToFilter]);
    }

    let raceF = document.getElementById("RacePet").value;
    if (raceF !== "") params.push(["raceF", raceF]);

    let sizesToFilter = "";
    let sizes = document.getElementsByClassName("sizesToFilter");
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i].checked) {
            sizesToFilter += species[i].value + ",";
        }
    }
    if (sizesToFilter !== "") {
        sizesToFilter = sizesToFilter.substring(0, sizesToFilter.length - 1);
        params.push(["sizeF", sizesToFilter]);
    }

    let sexesToFilter = "";
    let sexes = document.getElementsByClassName("sexes");
    for (let i = 0; i < sexes.length; i++) {
        if (sexes[i].checked) {
            sexesToFilter += sexes[i].value + ",";
        }
    }
    if (sexesToFilter !== "") {
        sexesToFilter = sexesToFilter.substring(0, sexesToFilter.length - 1);
        params.push(["sexF", sexesToFilter]);
    }

    return params;
}



