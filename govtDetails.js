function govtDetails() {

    var br = document.createElement("br");

    var details;

    if (localStorage.getItem('details') != null) {
        details = JSON.parse(localStorage.getItem('details'));
    }

    document.getElementById("mainsection").innerHTML = "";

    var form = document.createElement("form");
    form.setAttribute("id","content")

    var title = document.createElement("h1")
    var titleNode = document.createTextNode("Government Details");
    title.appendChild(titleNode);
    var mainsection = document.getElementById("mainsection");
    mainsection.appendChild(title);
    title.setAttribute("id", "heading");

    var AN = document.createElement("input");
    AN.setAttribute("type", "text");
    AN.setAttribute("id", "AadharNumber");
    AN.setAttribute("placeholder", "Aadhar Number");
    AN.setAttribute("minLength", 12);
    AN.setAttribute("maxLength", 12);
    AN.setAttribute("required", "");

    var PAN = document.createElement("input");
    PAN.setAttribute("type", "text");
    PAN.setAttribute("id", "PanNumber");
    PAN.setAttribute("placeholder", "PAN Number");
    PAN.setAttribute("minLength", 10);
    PAN.setAttribute("maxLength", 10);
    PAN.setAttribute("required", "");

    var back = document.createElement("input");
    back.setAttribute("type", "submit");
    back.setAttribute("value", "Back");
    back.setAttribute("id", "backBtn");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.setAttribute("id", "submitBtn");

    form.appendChild(AN);
    form.appendChild(br.cloneNode());

    form.appendChild(PAN);
    form.appendChild(br.cloneNode());

    // form.appendChild(back);
    // form.appendChild(br.cloneNode());

    // form.appendChild(s);

    // PN.setAttribute("required", "");

    // form.onsubmit = function(){
    //     loginBtnClick();
    // }

    back.onclick = function (e) {
        e.preventDefault();

        personalDetails();
    };

    var combine = document.createElement("div");
    combine.appendChild(back);
    combine.appendChild(s);
    combine.setAttribute("id", "combine");
    form.appendChild(combine);

    form.onsubmit = function (e) {
        console.log(e);
        e.preventDefault();

        if (details.step <= 2) {
            details.step = 3;
        }

        details["step2"] = {};

        details["step2"]["Aadhaar No."] =
            document.getElementById("AadharNumber").value;
        details["step2"]["PAN No."] =
            document.getElementById("PanNumber").value;

        localStorage.setItem("details", JSON.stringify(details));

        addressDetails();
    };

    document.getElementById("mainsection").appendChild(form);

    if (details != null) {
        if (details.step > 1) {
            // console.log("step",details.step);
            document.getElementById("AadharNumber").value =
                details["step2"]["Aadhaar No."];
            document.getElementById("PanNumber").value =
                details["step2"]["PAN No."];
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