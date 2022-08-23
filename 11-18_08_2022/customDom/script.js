

let turn = 'X';

function createGrid(){
    console.log("jii");
    let arr = document.getElementsByClassName('button');
    for(let i=0; i<arr.length; ++i){
        arr[i].addEventListener('click',function(event){
            console.log(event.target.dataset.posx,event.target.dataset.posy);

            event.target.innerHTML = turn;

            if(turn == 'X')turn='O';
            else turn='X';
        });
    }

}

window.onload = createGrid;