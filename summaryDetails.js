function summaryDetails(){
    var br = document.createElement("br");

    // document.getElementById("mainsection").innerHTML = "";

    // var form = document.createElement("form");

    const as = document.getElementById("mainsection");

    as.innerHTML = "";

    const infoTable = document.createElement("table");

    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    td1.innerHTML = "Field";
    td2.innerHTML = "Value";
    tr.appendChild(td1);
    tr.appendChild(td2);
    infoTable.appendChild(tr);

    let stepinfo1 = JSON.parse(localStorage.getItem('details'))["step1"];

    console.log(stepinfo1);

    for (let key in stepinfo1){

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.innerHTML = key;
        td2.innerHTML = stepinfo1[key];
        tr.appendChild(td1);
        tr.appendChild(td2);
        infoTable.appendChild(tr);
    
        // let p = document.createElement('p')
        // p.innerHTML = key + ": " + getStep1Details[key]
        // detailsPage.appendChild(p)
    }

    let stepinfo2 = JSON.parse(localStorage.getItem('details'))["step2"];

    console.log(stepinfo2);

    for (let key in stepinfo2){

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.innerHTML = key;
        td2.innerHTML = stepinfo2[key];
        tr.appendChild(td1);
        tr.appendChild(td2);
        infoTable.appendChild(tr);
    
        // let p = document.createElement('p')
        // p.innerHTML = key + ": " + getStep1Details[key]
        // detailsPage.appendChild(p)
    }

    let stepinfo3 = JSON.parse(localStorage.getItem('details'))["step3"];

    console.log(stepinfo3);

    for (let key in stepinfo3){

        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.innerHTML = key;
        td2.innerHTML = stepinfo3[key];
        tr.appendChild(td1);
        tr.appendChild(td2);
        infoTable.appendChild(tr);
    
        // let p = document.createElement('p')
        // p.innerHTML = key + ": " + getStep1Details[key]
        // detailsPage.appendChild(p)
    }

    as.appendChild(infoTable)
    // as.insertAdjacentHTML(regFirstName);
}