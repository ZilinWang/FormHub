/**
 * Created by wangshibao on 11/14/18.
 */

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

const onLoadProcessedForms = () => {

    sessionStorage.setItem("i1", JSON.stringify(processedForms[0]));
    sessionStorage.setItem("i2", JSON.stringify(processedForms[1]));

    var items = [];
    items.push(JSON.parse(sessionStorage.getItem("i1")));
    items.push(JSON.parse(sessionStorage.getItem("i2")));
    if (sessionStorage.getItem("i3") != null)
        items.push(JSON.parse(sessionStorage.getItem("i3")));

    items.forEach(function(element) {
        var tRow = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML = element.form + "<br>" + "<span style=\"font-size: 13px;\"><i>" + element.specification + "</i></span>";
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
    var element = document.getElementById("drop2201");
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
    sessionStorage.setItem("i3", JSON.stringify(processedForms[2]));

}

let onFormSelectHome = () => {
    let formSelect = document.getElementById("form-select");
    let optionVal = formSelect.options[formSelect.selectedIndex].value;

    if (optionVal == 0) { // Drop a class was selected
        let form = document.getElementById("home-form");
        let formGroup = document.createElement("div");
        formGroup.classList.add("form-group");

        let label = document.createElement("label");
        label.innerHTML = "Which class would you like to drop?";

        let select = document.createElement("select");
        select.setAttribute("id", "course-select");
        select.classList.add("form-control");
        select.setAttribute("onchange", "onDropCourseSelectHome();");

        let defaultOption = document.createElement("option");
        defaultOption.setAttribute("selected", "");
        defaultOption.setAttribute("hidden", "");
        defaultOption.innerHTML = "Choose a course...";
        select.appendChild(defaultOption);

        let courses = ["CS-2201-01", "EECE-2112-02", "CHEM-1601-01", "MATH-1301-02"];
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

let onDropCourseSelectHome = () => {

    let form = document.getElementById("home-form");
    let formGroup = document.createElement("div");
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
    btnDiv.setAttribute("align", "right");
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "button");
    submitBtn.classList.add("btn");
    submitBtn.classList.add("btn-primary");
    submitBtn.innerHTML = "Submit for Approval";
    submitBtn.setAttribute("onclick", "onSubmitDropFormForApproval();");
    btnDiv.appendChild(submitBtn);

    formGroup.appendChild(label);
    formGroup.appendChild(approversDiv);
    form.appendChild(formGroup);
    form.appendChild(btnDiv);
};

let onSubmitDropFormForApproval = () => {

};