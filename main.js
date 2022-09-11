document.body.onload = addElement;

function addElement() {
    console.log(loginDetails);

    var h = document.getElementById("header");
    // document.body.appendChild(h);

    var p = document.createElement("span");
    p.setAttribute("id", "headerVal");
    var txt = document.createTextNode("Info Tracker");
    p.appendChild(txt);
    h.appendChild(p);

    var accountStatus = document.createElement("span");
    accountStatus.setAttribute("id", "accountStatus");

    var name = document.createElement("span");
    name.setAttribute("id", "usernameVal");
    accountStatus.appendChild(name);

    var loginBtn = document.createElement("span");

    var accountStatusBtn = document.createElement("button");

    accountStatusBtn.setAttribute("id", "actBtn");

    var btnText = "Login";
    accountStatusBtn.innerHTML = btnText;

    loginBtn.appendChild(accountStatusBtn);

    accountStatus.appendChild(loginBtn);

    h.appendChild(accountStatus);

    loginDetails();

    accountStatusBtn.onclick = function (event) {
        // document.getElementById("mainsection").style.display = "block";
        // btnCheck();

        localStorage.setItem("loggedIn", false);

        document.getElementById("actBtn").style.display = "none";
        document.getElementById("usernameVal").style.display = "none";
        loginDetails();
    };

    // Create a break line element
    // var br = document.createElement("br");
    // function btnCheck() {

    //     var form = document.createElement("form");

    //     var UN = document.createElement("input");
    //     UN.setAttribute("type", "text");
    //     UN.setAttribute("name", "UserName");
    //     UN.setAttribute("placeholder", "Username");

    //     var PASS = document.createElement("input");
    //     PASS.setAttribute("type", "password");
    //     PASS.setAttribute("name", "Password");
    //     PASS.setAttribute("placeholder", "Password");

    //     var s = document.createElement("input");
    //     s.setAttribute("type", "submit");
    //     s.setAttribute("value", "Submit");

    //     form.appendChild(UN);

    //     form.appendChild(br.cloneNode());

    //     form.appendChild(PASS);
    //     form.appendChild(br.cloneNode());

    //     form.appendChild(s);

    //     // UN.setAttribute("required", "");

    //     form.onsubmit = function (e) {
    //         console.log(e);
    //         e.preventDefault();
    //         loginBtnClick();
    //     }

    //     document.getElementsByTagName("body")[0]
    //         .appendChild(form);
    // }

    // function loginBtnClick() {

    //     localStorage.setItem("loggedIn", true);

    //     var v = localStorage.getItem("loggedIn");

    //     personalDetails();

    //     console.log(v);
    // }

    // function personalDetails() {

    //     var form = document.createElement("form");

    //     var FN = document.createElement("input");
    //     FN.setAttribute("type", "text");
    //     FN.setAttribute("name", "FirstName");
    //     FN.setAttribute("placeholder", "First Name");

    //     var LN = document.createElement("input");
    //     LN.setAttribute("type", "text");
    //     LN.setAttribute("name", "LastName");
    //     LN.setAttribute("placeholder", "Last Name");

    //     var EID = document.createElement("input");
    //     EID.setAttribute("type", "text");
    //     EID.setAttribute("name", "emailID");
    //     EID.setAttribute("placeholder", "E-Mail ID");

    //     var PN = document.createElement("input");
    //     PN.setAttribute("type", "text");
    //     PN.setAttribute("name", "PhoneNo");
    //     PN.setAttribute("placeholder", "Mobile Number");

    //     var s = document.createElement("input");
    //     s.setAttribute("type", "submit");
    //     s.setAttribute("value", "Submit");

    //     form.appendChild(FN);

    //     form.appendChild(br.cloneNode());

    //     form.appendChild(LN);
    //     form.appendChild(br.cloneNode());

    //     form.appendChild(EID);
    //     form.appendChild(br.cloneNode());

    //     form.appendChild(PN);
    //     form.appendChild(br.cloneNode());

    //     form.appendChild(s);

    //     PN.setAttribute("required", "");

    //     // form.onsubmit = function(){
    //     //     loginBtnClick();
    //     // }

    //     document.getElementById("s2")
    //         .appendChild(form);

    // }


    // create a new div element
}