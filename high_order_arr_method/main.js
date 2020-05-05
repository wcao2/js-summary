const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i=0; i<companies.length;i++){
    console.log(companies[i]);
}

//1:foreach
//easier way to loop through an array rather than using for loop
//doesn't return anything to me
//same as above
companies.forEach(function(company){
    console.log(company);
})

//2:filter(donot change original array, returns a new array)
//Without filter
let canDrink=[];
for(i=0;i<ages.length;i++){
    if(ages[i]>21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

//Using filter
const canDrink1=ages.filter((age)=>{
    if(age>=21){
        return true;
    }
})

console.log(canDrink1);
const canDrink2=ages.filter(age => age >= 21);

//filter ratail companies
const retailCompanies=companies.filter(function(company){
    if(company.category==='Retail'){
        return true;
    }
});

console.log(retailCompanies);
console.log(companies);

const retailCompanies1=companies.filter(company=>company.category==='Retail');
//Get 80s companies
const eightCompanies=companies.filter(company=>(company.start>=1980 && company.start<=1990));
console.log(eightCompanies);
//last 10 years companies
const lastTenYears=companies.filter(company=>(company.end-company.start>10));

//3:map
//can create new array from a current array, donot change the original array

//get all companies' name and put to the new array
const companyName=companies.map(function(company){
    return company.name;
})
console.log(companyName);
console.log(companies);

const testMap=companies.map(function(company){
    return `${company.name} [${company.start}-${company.end}]`;//template String
})

const ageMap=ages
    .map(age=>Math.sqrt(age))
    .map(age=>age*2)
console.log(ageMap);

//4:sort!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!important
const sortedCompanies=companies.sort((c1,c2)=>{
    if(c1.start>c2.start){
        return 1;//cannot be true or false in here
    }else{
        return -1;
    }
});

const sortedCompanies1=companies.sort((a,b)=>(a.start>b.start?1:-1));//ASCENDING

console.log(sortedCompanies);
//sort ages
const sortAges=ages.sort((a,b)=>a-b);//ASCENDING
console.log(sortAges);

//5:reduce
let ageSum=0;
for(let i=0;i<ages.length;i++){
    ageSum+=ages[i];
}

let ageSum1= ages.reduce((total,age)=>{
    return total+age;
},0);//0 means the default value is 0
console.log(ageSum1);

//elegant way
const ageSum2=ages.reduce((total,age)=>total+age,0);

const totalYears=companies.reduce(function(total, company){
    return total+ (company.end - company.start);
},0);

console.log(totalYears);

//combined all together
const combined=ages
    .map(age=>age*2)
    .filter(age=>age>=40)
    .sort((a,b)=>a-b)
    .reduce((a,b)=>a+b,0)
console.log(combined);