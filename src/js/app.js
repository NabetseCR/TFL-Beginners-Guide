var t = "";
var steps = new Array();
$( document ).ready(function() {
    $("#newCaseContent").hide();
    $("#existingCaseContent").hide();
    fetch("./src/data/data.json")
    .then(response => response.json())
    .then(data => {
        t = data.test;
    });
});

function formatLandingPage(){
    $("#newCaseContent").hide();
    $("#existingCaseContent").hide();
    $("#landingPageContent").show();
}

function formatNewCase(){
    $("#landingPageContent").hide();
    $("#existingCaseContent").hide();
    resetSteps();
    populateNewCaseTableBody();
    $("#newCaseContent").show();
}

function resetSteps(){
    steps = new Array();
}

function populateNewCaseTableBody(){
    fetch("./src/data/data.json")
    .then(response => response.json())
    .then(function(data) {
        data.scenarios[0].NewCase.steps.forEach(element => {
          steps.push(element);
        });
    })
    .then(function(){
        var table = document.getElementById("newCase_Table_Body");
        var counter = 1;
        table.innerHTML = '';

        var tr = "";

        steps.forEach(x=>{
            tr+='<tr>';
            tr+='<td>'+counter+'</td>'+'<td>'+x.step+'</td>'+'<td>'+x.script+'</td>'
            tr+='</tr>'
            counter++;
        })

        table.innerHTML += tr;
    });
}

function formatExistingCase(){
    $("#landingPageContent").hide();
    $("#newCaseContent").hide();
    resetSteps();
    populateExistingCaseTableBody();
    $("#existingCaseContent").show();
}

function populateExistingCaseTableBody(){
    fetch("./src/data/data.json")
    .then(response => response.json())
    .then(function(data) {
        data.scenarios[1].ExistingCase.steps.forEach(element => {
          steps.push(element);
        });
    })
    .then(function(){
        var table = document.getElementById("existingCase_Table_Body");
        var counter = 1;
        table.innerHTML = '';

        var tr = "";

        steps.forEach(x=>{
            tr+='<tr>';
            tr+='<td>'+counter+'</td>'+'<td>'+x.step+'</td>'+'<td>'+x.script+'</td>'
            tr+='</tr>'
            counter++;
        })

        table.innerHTML += tr;
    });
}