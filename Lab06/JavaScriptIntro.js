function isEmpty(){
    if(document.getElementById("txtText1").value ===""){
        alert("The text box is empty");
    } else{
        alert("The text box is not empty");
    }
}

function redirect(){
    var url = document.getElementById("txtText2").value;
    if(url.includes('http')==false){
        url = 'http://' + document.getElementById("txtText2").value;
    }
    if(url.includes('www')==false){
        url = 'http://www.' + document.getElementById("txtText2").value;
    }
    window.location.href = url;
}

function browser(){
    
    document.getElementById("txtText3").value = navigator.appName;
}
