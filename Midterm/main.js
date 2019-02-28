function check(){
    if(document.getElementById("WidgetPriceTextBox").value==="" || 
        document.getElementById("NumberWidgetsSoldTextbox").value==="" || 
        document.getElementById("CommissionRateTextbox").value===""){
        alert("All input values are required");
    }
}

function calculate(){ 
    var price;
    var numOfSold;
    var commisionRate;
    var commissionEarned;
    price = document.getElementById("WidgetPriceTextBox").value;
    numOfSold = document.getElementById("NumberWidgetsSoldTextbox").value;
    commisionRate = document.getElementById("CommissionRateTextbox").value/100;
    commissionEarned = price*numOfSold*commisionRate;
    document.getElementById("CommissionEarnedTextbox").value = commissionEarned;
}