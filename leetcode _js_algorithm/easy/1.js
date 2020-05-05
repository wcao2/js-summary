//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum=function(nums,target){
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        const num=nums[i]
        diff =target-num
        if(map.has(diff)){
            console.log("it works, the index is ",map.get(diff)," and the another is ",i);
            return [map.get(diff),i]//map.get(diff) gets the key of that value           
        }
        map.set(num,i);
    }
    return null;
}


twoSum([1,2,3],3);