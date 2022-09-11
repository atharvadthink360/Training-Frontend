var br = document.createElement("br");
function loginDetails() {
    document.getElementById("mainsection").innerHTML = "";

    var form = document.createElement("form");
    form.setAttribute("id","content")

    var UN = document.createElement("input");
    UN.setAttribute("type", "text");
    UN.setAttribute("id", "UserName");
    UN.setAttribute("placeholder", "Username");

    var PASS = document.createElement("input");
    PASS.setAttribute("type", "password");
    PASS.setAttribute("id", "Password");
    PASS.setAttribute("placeholder", "Password");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.setAttribute("id", "submitBtn")

    form.appendChild(UN);

    form.appendChild(br.cloneNode());

    form.appendChild(PASS);
    form.appendChild(br.cloneNode());

    form.appendChild(s);

    // UN.setAttribute("required", "");

    form.onsubmit = function (e) {
        console.log(e);
        e.preventDefault();
        var username = document.getElementById("UserName").value;
        var password = document.getElementById("Password").value;

        if (localStorage.getItem('details') != null) {
            var details = JSON.parse(localStorage.getItem('details'));

            console.log("details",details);
            
            if ((username == details.username) && (password == details.password)){
                localStorage.setItem("loggedIn", true);
                document.getElementById("actBtn").innerHTML = "Logout";
                personalDetails();
            } else{
                alert("Wrong Credentials");
            }
        } else{
            var details = {};
            details['username'] = username;
            details['password'] = password;
            details['step'] = 1;
            localStorage.setItem("loggedIn", true);

            localStorage.setItem("details", JSON.stringify(details));
            personalDetails();
        }
    }

    document.getElementById("mainsection")
        .appendChild(form);

}