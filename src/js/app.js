var t = "";
var steps = new Array();
var template = "";
$( document ).ready(function() {
    $("#newCaseContent").hide();
    $("#existingCaseContent").hide();
    $("#templateContent").hide();
    fetch("./src/data/data.json")
    .then(response => response.json())
    .then(data => {
        t = data.test;
    });
});

function formatLandingPage(){
    $("#newCaseContent").hide();
    $("#existingCaseContent").hide();
    $("#templateContent").hide();
    $("#landingPageContent").show();
}

function formatNewCase(){
    $("#landingPageContent").hide();
    $("#existingCaseContent").hide();
    $("#templateContent").hide();
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
    $("#templateContent").hide();
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

function formatTemplate(){
    $("#landingPageContent").hide();
    $("#newCaseContent").hide();
    $("#existingCaseContent").hide();
    resetTemplates();
    populateBodyTransferEngineer();
    populateBodyTransferTeamLeader();
    populateBodyTransferTeamManager();
    $("#templateContent").show();
}

function populateBodyTransferEngineer(){
    fetch("./src/data/data.json")
    .then(response => response.json())
    .then(function(data) {
        template = data.templates[0].ToCaseOwner;
    })
    .then(function(){
        $('#bodyTransferEngineer').append(template);
    });
}

function populateBodyTransferTeamLeader(){
    fetch("./src/data/data.json")
    .then(response => response.json())
    .then(function(data) {
        template = data.templates[1].ToTeamLeader;
    })
    .then(function(){
        $('#bodyTransferTeamLeader').append(template);
    });
}

function populateBodyTransferTeamManager(){
    fetch("./src/data/data.json")
    .then(response => response.json())
    .then(function(data) {
        template = data.templates[2].ToTeamManager;
    })
    .then(function(){
        $('#bodyTransferTeamManager').append(template);
    });
}

function copyBodyTransfer(){
    var copyText = $("#bodyTransfer").text().trim();
    var copyhelper = document.createElement("input");
    copyhelper.className = 'copyhelper'
    document.body.appendChild(copyhelper);
    copyhelper.value = copyText;
    copyhelper.select();
    document.execCommand("copy");
    document.body.removeChild(copyhelper);
}

function resetTemplates(){
    $('#bodyTransferEngineer').empty();
    $('#bodyTransferTeamLeader').empty();
    $('#bodyTransferTeamManager').empty();
}

function changeCUName(){
    $('.cuname').text($('#inputcuname').val());
}

function changeEGName(){
    $('.egname').text($('#inputegname').val());
}

function changeEGCCID(){
    $('.egccid').text($('#inputegccid').val());
}

function changeTLName(){
    $('.tlname').text($('#inputtlname').val());
}

function changeTLCCID(){
    $('.tlccid').text($('#inputtlccid').val());
}

function changeTMName(){
    $('.tmname').text($('#inputtmname').val());
}

function changeTMCCID(){
    $('.tmccid').text($('#inputtmccid').val());
}

function changeCase(){
    $('.case').text($('#inputcase').val());
}


