/**
 * Created by wangshibao on 11/14/18.
 */
// 1= home, 2=pending, 3=processed
const switchPage = (num) => {
    if (num === 1){
        document.getElementById("BIGhome").style.display = "block";
        document.getElementById("BIGpending").style.display = "none";
        document.getElementById("BIGprocessed").style.display = "none";
        document.getElementById("homeBtn").className = "active";
        document.getElementById("pendingBtn").className = "normal";
        document.getElementById("processedBtn").className = "normal";
    } else if (num === 2) {
        document.getElementById("BIGhome").style.display = "none";
        document.getElementById("BIGpending").style.display = "block";
        document.getElementById("BIGprocessed").style.display = "none";
        document.getElementById("homeBtn").className = "normal";
        document.getElementById("pendingBtn").className = "active";
        document.getElementById("processedBtn").className = "normal";
    } else {
        document.getElementById("BIGhome").style.display = "none";
        document.getElementById("BIGpending").style.display = "none";
        document.getElementById("BIGprocessed").style.display = "block";
        document.getElementById("homeBtn").className = "normal";
        document.getElementById("pendingBtn").className = "normal";
        document.getElementById("processedBtn").className = "active";
    }
};


let pendingForms = [{
    form: "Drop",
    specification: "CS-2201-01",
    signatures: [{
        name: "Gerald Roth",
        status: "Approved",
    }, {
        name: "Julie Johnson",
        status: "Approved"
    }]
}, {
    form: "Withdraw",
    specification: "EECE-2112-01",
    signatures: [{
        name: "Bharat Bhuva",
        status: "Not responded",
    }, {
        name: "Julie Johnson",
        status: "Not responded"
    }]
}];

let processedForms = [{
    form: "Major Declaration",
    specification: "Computer Science",
    signatures: [{
        name: "Gerald Roth",
        status: "Approved",
    }, {
        name: "Julie Johnson",
        status: "Approved"
    }],
    processedTime: "10/22/2018, 10:33:30 AM"
}, {
    form: "Withdraw",
    specification: "KOR-1101-01",
    signatures: [{
        name: "BaeSeok Jang",
        status: "Approved",
    }, {
        name: "Julie Johnson",
        status: "Approved"
    }],
    processedTime: "9/5/2018, 3:06:21 PM"
}];

let courses = ["CS-3251-01", "EECE-2112-02", "CHEM-1601-01", "MATH-1301-02"];

/* session storage*/
const onLoadProcessedForms = () => {

    sessionStorage.setItem("i1", JSON.stringify(processedForms[0]));
    sessionStorage.setItem("i2", JSON.stringify(processedForms[1]));

    let items = [];
    items.push(JSON.parse(sessionStorage.getItem("i1")));
    items.push(JSON.parse(sessionStorage.getItem("i2")));
    if (sessionStorage.getItem("i3") != null)
        items.push(JSON.parse(sessionStorage.getItem("i3")));

    items.forEach(function(element) {
        var tRow = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = element.form + "<br>" + "<span style=\"font-size: 15px;\"><i>" + element.specification + "</i></span>";
        var td2 = document.createElement("td");
        td2.innerHTML = element.signatures[0].name + "<br>" + element.signatures[1].name;
        var td3 = document.createElement("td");
        td3.innerHTML = element.processedTime;
        tRow.appendChild(td1);
        tRow.appendChild(td2);
        tRow.appendChild(td3);
        document.getElementById("pTable").appendChild(tRow);

    });
};


const onLoadProcessed = () => {
    processedForms.forEach(function(element) {
        var tRow = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = element.form + "<br>" + "<span style=\"font-size: 15px;\"><i>" + element.specification + "</i></span>";
        var td2 = document.createElement("td");
        td2.innerHTML = element.signatures[0].name + "<br>" + element.signatures[1].name;
        var td3 = document.createElement("td");
        td3.innerHTML = element.processedTime;
        tRow.appendChild(td1);
        tRow.appendChild(td2);
        tRow.appendChild(td3);
        document.getElementById("pTable").appendChild(tRow);

    });
};

function handleSubmit() {
    let element = document.getElementById("drop2201");
    element.parentNode.removeChild(element);

    let d1 = new Date();
    let s1 = d1.toLocaleString();

    let newObject = {
        form: "Drop",
        specification: "CS-2201-01",
        signatures: [{
            name: "Gerald Roth",
            status: "Approved",
        }, {
            name: "Julie Johnson",
            status: "Approved"
        }],
        processedTime: s1
    };
    processedForms.push(newObject);
    addToProcessed(newObject);
    //sessionStorage.setItem("i3", JSON.stringify(processedForms[2]));

}

let addToProcessed = (obj) => {
    let table = document.getElementById("processedForms");
    let row = table.insertRow(1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    cell0.innerHTML = obj.form + "<br>" + "<span style=\"font-size: 15px;\"><i>" + obj.specification + "</i></span>";
    cell1.innerHTML = obj.signatures[0].name + "<br>" + obj.signatures[1].name;
    cell2.innerHTML = obj.processedTime;
};

let onFirstDropdownSelect = () => {
    console.log("form selected");
    let formSelect = document.getElementById("form-select");
    let optionVal = formSelect.options[formSelect.selectedIndex].value;

    if (optionVal == 0) { // Drop a class was selected
        let form = document.getElementById("home-form");
        let formGroup = document.createElement("div");
        formGroup.id = "courseListDiv";
        formGroup.classList.add("form-group");

        let label = document.createElement("label");
        label.innerHTML = "Which class would you like to drop?";

        let select = document.createElement("select");
        select.setAttribute("id", "course-select");
        select.classList.add("form-control");
        select.setAttribute("onchange", "onDropCourseDropdownSelect();");

        let defaultOption = document.createElement("option");
        defaultOption.setAttribute("selected", "");
        defaultOption.setAttribute("hidden", "");
        defaultOption.innerHTML = "Choose a course...";
        select.appendChild(defaultOption);

        for (let i = 0; i < courses.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", i);
            option.innerHTML = courses[i];
            select.appendChild(option);
        }
        formGroup.appendChild(label);
        formGroup.appendChild(select);
        form.appendChild(formGroup);
    }
};

let onDropCourseDropdownSelect = () => {
    console.log("course selected");

    let form = document.getElementById("home-form");
    let formGroup = document.createElement("div");
    formGroup.id = "facultyDiv";
    formGroup.classList.add("form-group");

    let label = document.createElement("label");
    label.innerHTML = "You will need approval from the following faculty:";

    let approversDiv = document.createElement("div");
    approversDiv.classList.add("text-block");

    let approvers = ["John Rafter", "Julie Johnson"];
    for (let i = 0; i < approvers.length; i++) {
        let nameP = document.createElement("p");
        nameP.innerHTML = approvers[i];
        approversDiv.appendChild(nameP);
    }

    let btnDiv = document.createElement("div");
    btnDiv.id = "submitBtnDiv";
    btnDiv.setAttribute("align", "right");
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "button");
    submitBtn.classList.add("btn");
    submitBtn.classList.add("btn-primary");
    submitBtn.innerHTML = "Submit for Approval";
    submitBtn.setAttribute("onclick", "onSubmitDropFormForApproval()");
    btnDiv.appendChild(submitBtn);

    formGroup.appendChild(label);
    formGroup.appendChild(approversDiv);
    form.appendChild(formGroup);
    form.appendChild(btnDiv);
};

let cancelRequest = (node) => {
    alert("Are you sure you would like to cancel this request?");
    let rowIdx = node.parentNode.rowIndex;
    document.getElementById("pendingForms").deleteRow(rowIdx);
};

let addToPending = (obj) => {
    let table = document.getElementById("pendingForms");
    let row = table.insertRow(1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    cell0.innerHTML = obj.form + "<br>" + "<span style=\"font-size: 15px;\"><i>" + obj.specification + "</i></span>";
    cell1.innerHTML = obj.signatures[0].name + "<br>" + obj.signatures[1].name;
    cell2.innerHTML = "<i class=\"fa fa-square-o\"></i><br>" + "<i class=\"fa fa-square-o\"></i><br>";
    cell3.innerHTML = "<button class=\"greyButton\" disabled>Submit</button>" + "   " +
        "<button type=\"button\" class=\"btn btn-primary\" onclick='cancelRequest(this.parentNode)'>Cancel</button>";
};

let onSubmitDropFormForApproval = () => {
    console.log("ajdnasjsa");
    let formSelect = document.getElementById("form-select");
    let form = formSelect.options[formSelect.selectedIndex].value;

    let courseSelect = document.getElementById("course-select");
    let course = courses[courseSelect.options[courseSelect.selectedIndex].value];

    let newObject = {
        form: "Drop",
        specification: course,
        signatures: [{
            name: "Gerald Roth",
            status: "Approved",
        }, {
            name: "Julie Johnson",
            status: "Approved"
        }]
    };
    addToPending(newObject);
    switchPage(2);

    var el = document.getElementById("courseListDiv");
    el.parentNode.removeChild( el );
    el = document.getElementById("facultyDiv");
    el.parentNode.removeChild( el );
    el = document.getElementById("submitBtnDiv");
    el.parentNode.removeChild( el );
    let defaultOption = document.getElementById("defaultChooseFormOption");
    defaultOption.selected = true;
};