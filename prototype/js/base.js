/**
 * Created by wangshibao on 11/14/18.
 */

let pendingForms = [
    {
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
    }
];

let processedForms = [
    {
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
    }, {
        form: "Drop",
        specification: "CS-2201-01",
        signatures: [{
            name: "Gerald Roth",
            status: "Approved",
        }, {
            name: "Julie Johnson",
            status: "Approved"
        }],
        processedTime: "11/15/2018, 3:05:03 PM"
    }
];

const onLoadProcessedForms = () => {
    // console.log(processedForms);
    processedForms.forEach(function(element) {
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

    // let d1 = new Date(2018, 9, 22, 10, 33, 30, 0);
    // let d2 = new Date(2018, 8, 5, 15, 6, 21, 0);
    //
    // let n1 = d1.toLocaleString();
    // let n2 = d2.toLocaleString();
    // console.log(n1);
    //
    // document.getElementById("date1").innerHTML = n1;
    // document.getElementById("date2").innerHTML = n2;
};

function handleSubmit() {
    var element = document.getElementById("drop2201");
    element.parentNode.removeChild(element);

    let d1 = Date.now();
    let n1 = d1.toLocaleString();

    // let newObject = {
    //     form: "Drop",
    //     specification: "CS-2201-01",
    //     signatures: [{
    //         name: "Gerald Roth",
    //         status: "Approved",
    //     }, {
    //         name: "Julie Johnson",
    //         status: "Approved"
    //     }],
    //     processedTime: n1
    // };
    // processedForms.push(newObject);
    // console.log(processedForms);

}