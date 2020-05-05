// var arrax=['A','B'];

// var totalNum=0
// for(i=0;i<2;i++){
//     if(arrax[i]=='A'){
//         arrax[i]=2;
//     }else if(arrax[i]=='B'){
//         arrax[i]=3;
//     }
//     totalNum=totalNum+arrax[i];
       
// }

// console.log(totalNum);


var arrax=['A','B'];

var totalNum=0
for(i=0;i<2;i++){
    if(arrax[i]=='A'){
        arrax[i]=2;
    }else if(arrax[i]=='B'){
        arrax[i]=3;
    }
    totalNum=totalNum+arrax[i];
}
console.log(totalNum);

//===============================


// var txt=0;
// var numbers=[45,4,2,3,13];

// numbers.forEach(myFunction);
// //document.getElementById("demo").innerHTML = txt;

// function myFunction(value,index,array){
//     txt=txt+value;
    
// }
// console.log(txt);

var txt=0;
var numbers=[1,2,3,4];

numbers.forEach((value)=>{
    txt=txt+value;
})
console.log(txt);