/**
 *It takes the parameter of the selected role and from this it shows
 * the form for the creation of a user from the role
 * @constructor
 */
function ShowFields() {
    var fieldSetForm = document.getElementById("fieldSetForm");
    var listTitlesVet = ["Usuario: ", "Contraseña:", "Email: ", "Nombre de la Veterinaria: ", "Direccion: ", "Localidad:"];
    var listTitlesOwner = ["Usuario: ", "Contraseña:", "Email: ", "Documento de identidad: ", "Nombre Completo: ", "Direccion: ", "Localidad: "];
    var listAtributesVet = ["usernameVet", "passwordVet", "emailVet", "nameVet", "addressVet", "neigborhoodVet"];
    var listAtributesOwner = ["username", "password", "email", "person_id", "name", "address", "neighborhood"];
    var role = document.getElementById("listSingUp").value;

    if (fieldSetForm.hasChildNodes())
        fieldSetForm.removeChild(fieldSetForm.firstChild);
    var div = document.createElement("div");

    //Shows the form for a vet
    if (role === "vetSelect") {
        for (var i = 0; i < listTitlesVet.length; i++) {
            var label = document.createElement("label");
            label.setAttribute("for", listAtributesVet[i]);
            label.textContent = listTitlesVet[i];
            div.appendChild(label);
            var input = document.createElement("input");
            input.setAttribute("name", listAtributesVet[i]);
            input.setAttribute("id", listAtributesVet[i]);
            div.appendChild(input);
            div.appendChild(document.createElement("br"));
        }
        var inputButton = document.getElementById("createButton");
        inputButton.disabled = false;
        inputButton.textContent = "Registrar";
        inputButton.addEventListener("click", function createVet() {

            //Create the vet's user
            var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/vet';
            var data = {
                "username": document.getElementById("usernameVet").value,
                "password": document.getElementById("passwordVet").value,
                "email": document.getElementById("emailVet").value,
                "name": document.getElementById("nameVet").value,
                "address": document.getElementById("addressVet").value,
                "neighborhood": document.getElementById("neigborhoodVet").value
            };

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.text()).then(res => validateResponseVet(res));
        })
        div.appendChild(inputButton);

        fieldSetForm.appendChild(div);

        //Shows the form for the creation of a owner's user
    } else if (role === "ownerSelect") {
        for (var i = 0; i < listTitlesOwner.length; i++) {
            var label = document.createElement("label");
            label.setAttribute("for", listTitlesOwner[i]);
            label.textContent = listTitlesOwner[i];
            div.appendChild(label);
            var input = document.createElement("input");
            input.setAttribute("name", listAtributesOwner[i]);
            input.setAttribute("id", listAtributesOwner[i]);
            div.appendChild(input);
            div.appendChild(document.createElement("br"));
        }
        var inputButton = document.getElementById("createButton");
        inputButton.disabled = false;
        inputButton.textContent = "Registrar";
        inputButton.addEventListener("click", function createOwner() {
            //Takes and send the data to create a new owner user
            var url = 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/owners';
            var person_id = Number(document.getElementById("person_id").value)
            if (isNaN(person_id)) {
                alert("La identificación debe ser numerica");
                return;
            }
            var data = {
                "username": document.getElementById("username").value,
                "password": document.getElementById("password").value,
                "email": document.getElementById("email").value,
                "person_id": person_id,
                "name": document.getElementById("name").value,
                "address": document.getElementById("address").value,
                "neighborhood": document.getElementById("neighborhood").value
            };

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.text()).then(res => validateResponseOwner(res));
        })
        div.appendChild(inputButton);

        fieldSetForm.appendChild(div);

    } else {
        alert("Seleccione una opción para continuar");
    }
}

/**
 * Function that validates the correct fields to the creation of the owner's user
 * @param res String message
 */
function validateResponseOwner(res) {
    if ("se ha registrado correctamente" === res) {
        alert("Se creo el propietario correctamente");
        window.location.href = "login.html";
    } else {
        alert("Ocurre un problema al crear el propietario, revise los datos ");
        location.reload();
    }
}

/**
 * Function that validates the correct fields to the creation of the vet's user
 * @param res String message
 */
function validateResponseVet(res) {
    if ("se ha registrado correctamente la veterinaria" === res) {
        alert("Se creo la veterinaria correctamente");
        window.location.href = "login.html";
    } else {
        alert("Ocurre un problema al crear la veterinaria, revise los datos ");
        location.reload();
    }
}
