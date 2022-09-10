function addressDetails() {

    var br = document.createElement("br");

    var details;

    if (localStorage.getItem('details') != null) {
        details = JSON.parse(localStorage.getItem('details'));
    }

    document.getElementById("mainsection").innerHTML = "";

    var form = document.createElement("form");

    var FlatN = document.createElement("input");
    FlatN.setAttribute("type", "number");
    FlatN.setAttribute("id", "FlatNumber");
    FlatN.setAttribute("placeholder", "Flat Number");

    var BN = document.createElement("input");
    BN.setAttribute("type", "text");
    BN.setAttribute("id", "BuildingName");
    BN.setAttribute("placeholder", "Building Name");

    var City = document.createElement("input");
    City.setAttribute("type", "text");
    City.setAttribute("id", "City");
    City.setAttribute("placeholder", "City");

    var select = document.createElement("select");
    select.setAttribute("id","State");

    var states = [
        'Andaman and Nicobar Islands',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chandigarh',
        'Chhattisgarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Goa',
        'Gujurat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerela',
        'Ladakh',
        'Lakshadweep',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'NCT of Delhi',
        'Odisha',
        'Puducherry',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttarakhand',
        'Uttar Pradesh',
        'West Bengal'
    ];

    for(var i = 0; i < states.length; i++) {
        var opt = states[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }

    // State.setAttribute("type", "text");
    // State.setAttribute("name", "State");
    // State.setAttribute("placeholder", "State");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    form.appendChild(FlatN);
    form.appendChild(br.cloneNode());

    form.appendChild(BN);
    form.appendChild(br.cloneNode());

    form.appendChild(City);
    form.appendChild(br.cloneNode());

    form.appendChild(select);
    form.appendChild(br.cloneNode());

    form.appendChild(s);


    form.onsubmit = function (e) {
        console.log(e);
        e.preventDefault();

        if (details.step <= 3){
            details.step = 4;
        }

        details["step3"] = {}

        details["step3"]['Flat Number'] = document.getElementById('FlatNumber').value;
        details["step3"]['Building Name'] = document.getElementById('BuildingName').value;
        details["step3"]['City'] = document.getElementById('City').value;
        details["step3"]['State'] = document.getElementById('State').value;

        localStorage.setItem('details',JSON.stringify(details));

        summaryDetails();
    }

    document.getElementById("mainsection")
        .appendChild(form);

    if (details != null){
        if (details.step > 3){
            console.log()
            // console.log("step",details.step);
            document.getElementById('FlatNumber').value = details["step3"]["Flat Number"];
            document.getElementById('BuildingName').value = details["step3"]["Building Name"];
            document.getElementById('City').value = details["step3"]["City"];
            document.getElementById('State').value = details.step3["State"];
        }
    }

}