
function calc(){
    let l = parseInt(document.getElementById("l").value);
    let r = parseInt(document.getElementById("r").value);
    let k = parseInt(document.getElementById("k").value);
    
    console.log(l,r,k);
    
    if(l > r){ 
        alert("First Number should be smaller than Second");
    }
    else{
        let cnt = 0;
        for(let i=l; i<r; ++i){
            if(i%k == 0)++cnt;
        }

        document.getElementById("ans").innerHTML="Number divisible by "+k+" are "+cnt;
    }
}