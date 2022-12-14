function personalDetails() {

    var br = document.createElement("br");

    var details;

    if (localStorage.getItem('details') != null) {
        details = JSON.parse(localStorage.getItem('details'));
    }

    document.getElementById("mainsection").innerHTML = "";

    var title = document.createElement("h1")
    var titleNode = document.createTextNode('Personal Details');
    title.appendChild(titleNode);
    var mainsection = document.getElementById("mainsection")
    mainsection.appendChild(title)
    title.setAttribute("id","heading")

    var form = document.createElement("form");
    form.setAttribute("id","content")

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("id", "FirstName");
    FN.setAttribute("placeholder", "First Name");
    FN.setAttribute("required", "");

    var br = document.createElement("br");

    var LN = document.createElement("input");
    LN.setAttribute("type", "text");
    LN.setAttribute("id", "LastName");
    LN.setAttribute("placeholder", "Last Name");
    LN.setAttribute("required", "");

    var EID = document.createElement("input");
    EID.setAttribute("type", "email");
    EID.setAttribute("id", "emailID");
    EID.setAttribute("placeholder", "E-Mail ID");
    EID.setAttribute("required", "");

    var PN = document.createElement("input");
    PN.setAttribute("type", "text");
    PN.setAttribute("id", "PhoneNo");
    PN.setAttribute("placeholder", "Mobile Number");
    PN.setAttribute("minLength", 10);
    PN.setAttribute("maxLength", 10);
    PN.setAttribute("required", "");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.setAttribute("id", "submitBtn");

    form.appendChild(FN);

    form.appendChild(br.cloneNode());

    form.appendChild(LN);
    form.appendChild(br.cloneNode());

    form.appendChild(EID);
    form.appendChild(br.cloneNode());

    form.appendChild(PN);
    form.appendChild(br.cloneNode());

    form.appendChild(s);

    // form.onsubmit = function(){
    //     loginBtnClick();
    // }

    form.onsubmit = function (e) {
        console.log(e);
        e.preventDefault();

        if (details.step <= 1) {
            details.step = 2;
        }

        details["step1"] = {};

        details["step1"]["First Name"] =
            document.getElementById("FirstName").value;
        details["step1"]["Last Name"] =
            document.getElementById("LastName").value;
        details["step1"]["Email ID"] = document.getElementById("emailID").value;
        details["step1"]["Phone No"] = document.getElementById("PhoneNo").value;

        localStorage.setItem("details", JSON.stringify(details));

        govtDetails();
    };

    document.getElementById("mainsection").appendChild(form);

    if (details != null) {
        if (details.step > 1) {
            // console.log("step",details.step);
            document.getElementById("FirstName").value =
                details["step1"]["First Name"];
            document.getElementById("LastName").value =
                details["step1"]["Last Name"];
            document.getElementById("emailID").value =
                details["step1"]["Email ID"];
            document.getElementById("PhoneNo").value =
                details["step1"]["Phone No"];
        }
    }
}