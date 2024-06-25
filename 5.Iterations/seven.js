const myNums=[1,2,3,4,5,6,7,8,9,10]
// map always automatically value return krta hai
console.log(myNums.map( (num) => num+10))

//chaining

const newNums=myNums
              .map( (num) => num* 10  )
              .map( (num) => num+1)

console.log(newNums);

const newNums2=myNums
              .map( (num) => num* 10  )
              .map( (num) => num+1)
              .filter( (num) => num>=40)

console.log(newNums2);