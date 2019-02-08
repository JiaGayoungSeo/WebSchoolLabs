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
    document.getAnimations.apply = navigator.appName;
}

function controlForm(opt){
    startLeft = 320;
    
    
    if(opt==1){
        startLeft-=50
        document.all.floatingForm.style.left=startLeft + "px";
    }
    if (opt==2){
        document.all.floatingForm.style.visibility="visible"
    }
    if (opt==3){
        document.all.floatingForm.style.visibility="hidden";
    }
    if (opt==4){
        startLeft += 50;
        document.all.floatingForm.style.left = startLeft + "px";
    }
}
