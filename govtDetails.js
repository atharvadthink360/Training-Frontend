function govtDetails() {

    var br = document.createElement("br");

    var details;

    if (localStorage.getItem('details') != null) {
        details = JSON.parse(localStorage.getItem('details'));
    }

    document.getElementById("mainsection").innerHTML = "";

    var form = document.createElement("form");

    var AN = document.createElement("input");
    AN.setAttribute("type", "number");
    AN.setAttribute("id", "AadharNumber");
    AN.setAttribute("placeholder", "Aadhar Number");

    var PAN = document.createElement("input");
    PAN.setAttribute("type", "text");
    PAN.setAttribute("id", "PanNumber");
    PAN.setAttribute("placeholder", "PAN Number");

    var back = document.createElement("input");
    back.setAttribute("type", "submit");
    back.setAttribute("value", "Back");
    back.setAttribute("id","backBtn");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    form.appendChild(AN);
    form.appendChild(br.cloneNode());

    form.appendChild(PAN);
    form.appendChild(br.cloneNode());

    form.appendChild(back);
    form.appendChild(br.cloneNode());

    form.appendChild(s);

    // PN.setAttribute("required", "");

    // form.onsubmit = function(){
    //     loginBtnClick();
    // }

    back.onclick = function(e) {
        e.preventDefault();

        personalDetails();
    }

    form.onsubmit = function (e) {
        console.log(e);
        e.preventDefault();

        if (details.step <= 2){
            details.step = 3;
        }

        details['step2'] = {};

        details['step2']['aadhar'] = document.getElementById('AadharNumber').value;
        details['step2']['pan'] = document.getElementById('PanNumber').value;

        localStorage.setItem('details',JSON.stringify(details));

        addressDetails();
    }

    document.getElementById("mainsection")
        .appendChild(form);

    if (details != null){
        if (details.step > 1){
            // console.log("step",details.step);
            document.getElementById('AadharNumber').value = details.step2.aadhar;
            document.getElementById('PanNumber').value = details.step2.pan;
        }
    }

    // document.getElementById("backBtn").addEventListener("click", personalDetails());

    
    // if (details != null){

    //     if (details.step > 2){
    //         // console.log("step",details.step);
    //         document.getElementById('AadharNumber').value = details.aadhar;
    //         document.getElementById('PanNumber').value = details.pan;
    //     }
    // }
}