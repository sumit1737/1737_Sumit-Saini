let tg = 1;
function clicked(){
    let shape = document.getElementById("shape");

    if(tg == 1){
        shape.style.borderRadius = "50%";
        tg = 0;
    }
    else{
        shape.style.borderRadius = "0%";
        tg = 1;
    }



}