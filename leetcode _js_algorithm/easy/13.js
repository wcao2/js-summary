// //Roman to integer

var romanToInt=function(s){
   let convertedNumber=0;
   if(s.length>0){
       const roman=romanNumeralsMap();
       for(let index=0; index<s.length-1;index++){
           if(roman.get(s[index])<roman.get(s[index+1])){
               convertedNumber -= roman.get(s[index]);
               
           }else{
               convertedNumber+=roman.get(s[index]);
           }
       }
       convertedNumber+=roman.get(s[s.length-1]);
   } 
   return convertedNumber;
};

function romanNumeralsMap() {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    return map;
}

y=romanToInt('IVM');
 console.log(y)