function isEmpty(){
    if(document.getElementById("txtText1").value ===""){
        alert("The text box is empty");
    } else{
        alert("The text box is not empty");
    }
}

function redirect(){
    var url = document.getElementById("txtText2").value;
    if(url==""){
        url = "http://www.google.com";
    }
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


var startLeft = 320;

function controlForm(opt){
    
    if(opt==1){
        startLeft-=50
        if(startLeft<0){
            startLeft = 1000;
        }
        document.getElementById("floatingForm").style.left = startLeft +"px";
    }
    if (opt==2){
        startLeft = 320;
        document.getElementById("floatingForm").style.left = startLeft +"px";
        document.getElementById("floatingForm").style.visibility="visible"
    }
    if (opt==3){
        document.getElementById("floatingForm").style.visibility="hidden";
    }
    if (opt==4){
        startLeft += 50;
        if(startLeft>1000){
            startLeft =0;
        }
        document.getElementById("floatingForm").style.left = startLeft + "px";
    }
}
