function personalDetails() {

    var br = document.createElement("br");

    var details;

    if (localStorage.getItem('details') != null) {
        details = JSON.parse(localStorage.getItem('details'));
    }

    document.getElementById("mainsection").innerHTML = "";

    var form = document.createElement("form");

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("id", "FirstName");
    FN.setAttribute("placeholder", "First Name");

    var LN = document.createElement("input");
    LN.setAttribute("type", "text");
    LN.setAttribute("id", "LastName");
    LN.setAttribute("placeholder", "Last Name");

    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("id", "emailID");
    EID.setAttribute("placeholder", "E-Mail ID");

    var PN = document.createElement("input");
    PN.setAttribute("type", "text");
    PN.setAttribute("id", "PhoneNo");
    PN.setAttribute("placeholder", "Mobile Number");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    form.appendChild(FN);

    form.appendChild(br.cloneNode());

    form.appendChild(LN);
    form.appendChild(br.cloneNode());

    form.appendChild(EID);
    form.appendChild(br.cloneNode());

    form.appendChild(PN);
    form.appendChild(br.cloneNode());

    form.appendChild(s);

    PN.setAttribute("required", "");

    // form.onsubmit = function(){
    //     loginBtnClick();
    // }

    form.onsubmit = function (e) {
        console.log(e);
        e.preventDefault();

        if (details.step <= 1){
            details.step = 2;
        }
        
        details["step1"] = {};

        details['step1']['fname'] = document.getElementById('FirstName').value;
        details['step1']['lname'] = document.getElementById('LastName').value;
        details['step1']['email'] = document.getElementById('emailID').value;
        details['step1']['phone'] = document.getElementById('PhoneNo').value;

        localStorage.setItem('details',JSON.stringify(details));

        govtDetails();
    }

    document.getElementById("mainsection")
        .appendChild(form);
    
    if (details != null){
        if (details.step > 1){
            // console.log("step",details.step);
            document.getElementById('FirstName').value = details.step1.fname;
            document.getElementById('LastName').value = details.step1.lname;
            document.getElementById('emailID').value = details.step1.email;
            document.getElementById('PhoneNo').value = details.step1.phone;
        }
    }
}