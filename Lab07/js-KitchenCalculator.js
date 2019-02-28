let price;

function getTotolPrice(){
    if(document.getElementById("Select 1").value == "Wall Cabinets" && document.getElementsByName("productLine").value=="EmpireStandard"){
        price = 99.9;
    }
}

function showCalculation(){
    document.getElementsByName('result').innerHTML = price;
}

function init(){
    showCalculation();
}

init();