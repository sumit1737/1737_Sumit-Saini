window.onload = function (){
    document.getElementById("ans").innerHTML = localStorage.getItem("f_name") + " " + localStorage.getItem("l_name");
};