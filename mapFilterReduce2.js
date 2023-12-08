const users=[
    {firstName:"saurav",lastName:"kumar",age:16},
    {firstName:"John",lastName:"Cena",age:12},
    {firstName:"Mathew",lastName:"Robert",age:14},
    {firstName:"Larson",lastName:"Keith",age:16}
];

//list of full name
// ["saurav kumar","John Cena",...]

// const output=users.map((user)=>{
//     return user.firstName+" "+user.lastName;
// })
// console.log(output);

// {16:2,12:1,14:1}--desired 
// const output=users.reduce((acc,curr)=>{
//    if(acc[curr.age]){
//     acc[curr.age]++;
//    }
//    else{
//        acc[curr.age]=1;
//    }
//    return acc;
// },{})
// console.log(output)


// const output=users.filter(x=>x.age<15).map(x=>x.firstName)
// console.log(output)

// using reduce

const output=users.reduce((acc,curr)=>{
    if(curr.age<15){
      acc.push(curr.firstName)
    }
    return acc;
},[])
console.log(output)
