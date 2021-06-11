function call() {
    const owner = {
        "username": "NIPEMO3022P",
        "password": "12345",
        "email": "nicop@gmail.com",
        "person_id": 1193499871,
        "name": "Nicolas",
        "address": "TUCO",
        "neighborhood": "Usaquen"
    }
    var request = $.ajax({
        url: 'http://localhost:8080/FourPawsCitizens-FootprintsSystem-1.0-SNAPSHOT/api/owners',
        method: "POST",
        data: (owner) ? JSON.stringify(owner) : "",
        dataType: 'application/json'
    });

    request.done(function(resp) {
        console.log(resp);
    });

    request.fail(function(jqXHR, textStatus) {
        console.log("Request failed: " + textStatus);
    });
};
