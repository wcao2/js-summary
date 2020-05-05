// Input: ["flower","flow","flight"]
// Output: "fl"

// Input: ["dog","racecar","car"]
// Output: ""

var longestCommonPrefix=function(strs){
    let longest='';

    if(strs.length===0){
        return longest;
    }

    //separate out the first word and capture that in a variable
    let comparisonWord=strs[0];
    let comparisonIndex=0;

    //loop through every letter in cimarison word
    for(let comparisonLetter of comparisonWord){
        for(let i=1;i<strs.length;i++){
            let currentWord=strs[i];
            //get a reference of current letter of the current word
            let currentLetter=currentWord.charAt(comparisonIndex);
            if(comparisonLetter!==currentLetter||comparisonIndex>currentWord.length){
                return longest;
            }
        }
        comparisonIndex++;
    }
}