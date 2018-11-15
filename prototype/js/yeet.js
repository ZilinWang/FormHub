'use strict';

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