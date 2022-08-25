var employees = [];

employees.push( {name:"George", age:32, retiredate:"March 12, 2014"} );
employees.push( {name:"Edward", age:17, retiredate:"June 2, 2023"} );
employees.push( {name:"Christine", age:58, retiredate:"December 20, 2036"} );
employees.push( {name:"Sarah", age:62, retiredate:"April 30, 2020"} );

employees.sort(function(a, b){
  return a.age - b.age;
});

function func(){
    let ele = document.getElementById('inpt');
    let found = false;
    for(let i=0; i<employees.length; ++i){
        if(employees[i].name == ele.value){
            found = true;
            alert("found "+ele.value);
        }
    }
}