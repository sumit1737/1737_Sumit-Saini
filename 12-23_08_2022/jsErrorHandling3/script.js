function myFunction() {
    
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
    try {
        ErrHand();
    }
    catch (err) {
    message.innerHTML = "Input " + err;
    }
    finally {
    document.getElementById("demo").value = "";
    }

    function ErrHand(){
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
    }
}

