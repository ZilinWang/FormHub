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
        form: "Major Declaration ",
        specification: "Computer Science",
        signatures: [{
            name: "Gerald Roth",
            status: "Approved",
        }, {
            name: "Julie Johnson",
            status: "Approved"
        }]
    }, {
        form: "Withdraw",
        specification: "KOR-1101-01",
        signatures: [{
            name: "BaeSeok Jang",
            status: "Approved",
        }, {
            name: "Julie Johnson",
            status: "Approved"
        }]
    }
];

const onLoadProcessedForms = () => {
    let d1 = new Date(2018, 9, 22, 10, 33, 30, 0);
    let d2 = new Date(2018, 8, 5, 15, 6, 21, 0);

    let n1 = d1.toLocaleString();
    let n2 = d2.toLocaleString();
    console.log(n1);

    document.getElementById("date1").innerHTML = n1;
    document.getElementById("date2").innerHTML = n2;
};
