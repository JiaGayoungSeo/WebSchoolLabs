var currentIndex;
var selectValue;

function showPicture() {
    var selectBox = document.getElementById("mySelect");
    currentIndex = selectBox.selectedIndex;
    selectValue = selectBox.options[currentIndex].value;
    if (selectValue == "base") {
        //document.write(currentIndex);
        document.getElementById("img_out").innerHTML = "<img src='base.jpg'>";
    }
    if (selectValue == "wall") {
        document.getElementById("img_out").innerHTML = "<img src ='wall.jpg'>";
    }
    if (selectValue == "counters") {
        document.getElementById("img_out").innerHTML = "<img src ='counters.jpg'>";
    }
}



function getTotalPrice() {

    var selectBox = document.getElementById("mySelect");
    var row = selectBox.selectedIndex - 1;

    var col = 0;

    var priceArray = [
        [99.99, 179.00, 200.99],
        [69.99, 79.00, 99.99],
        [30.99, 189.99, 212.99],
        [50.99, 79.99, 89.99]
    ]

    var linearFootage = document.getElementsByName("linearFootage");
    var numOfUnit = document.getElementsByName("number");

    var empireButton = document.getElementById("EmpireStandard");
    var kitchenButton = document.getElementById("KitchenElite");
    var goldButton = document.getElementById("GoldStarPlus");

    if (empireButton.checked == true) {
        col = 0;
    }
    if (kitchenButton.checked == true) {
        col = 1;
    }
    if (goldButton == true) {
        col = 2;
    }

    var lookupPrice = priceArray[row][col];

    var totalPrice = linearFootage * numOfUnit * lookupPrice;

    document.getElementById("price").value = totalPrice;

}