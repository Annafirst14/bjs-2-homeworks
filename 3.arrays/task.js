
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  return arr1.every((element, index) => element === arr2[index])
}


console.log(compareArrays([8, 9], [6]))
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]))
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]))
console.log(compareArrays([1, 2, 3], [2, 3, 1]))
console.log(compareArrays([8, 1, 2], [8, 1, 2]))


function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter((user) => user.gender === gender)

  if (filteredUsers.length === 0) {
    return 0
  }

  const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0)
  const averageAge = totalAge / filteredUsers.length
  return averageAge
}

const people = [
  { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
  { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
  { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
  { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
  { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
  { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
  { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
  { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
  { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
  { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
  { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
  { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
  { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
  { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
]

console.log(getUsersNamesInAgeRange(people, "мужской"))
console.log(getUsersNamesInAgeRange(people, "женский"))
console.log(getUsersNamesInAgeRange([], "женский"))
console.log(getUsersNamesInAgeRange(people, "инопланетянин"))


//function compareArrays(arr1, arr2) {


 // let compareFunc = arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
  //    return compareFunc;
}
  //console.log(compareArrays([1,2,4,4],[1,2,3,4]));


//function getUsersNamesInAgeRange(users, gender) {
 // const people = [
   //   {firstName: "Александр", age: 17, gender: "мужской"},
     // {firstName: "Егор", age: 21, gender: "мужской"},
     // {firstName: "Мелисса", age: 40, gender: "женский"},
    //  {firstName: "Мелания", age: 37, gender: "женский"}
    //  {firstName: "Мария", age: 18, gender: "мужской"},
    //  {firstName: "Марьяна", age: 17, gender: "женский"},
    //  {firstName: "Федор", age: 50, gender: "мужской"}
    //  {firstName: "Георгий", age: 35, gender: "мужской"},
    //  {firstName: "Даниил", age: 49, gender: "мужской"},
    //  {firstName: "Дарья", age: 25, gender: "женский"},
    //  {firstName: "Михаил", age: 22, gender: "мужской"}
    //  {firstName: "Владислав", age: 40, gender: "мужской"},
    //  {firstName: "Илья", age: 35, gender: "мужской"},

  //]
  //function getUsersNamesInAgeRange(users, gender) {
  //return arr.filter(users => user.gender === "мужской").map(user => user.age).reduce((acc, item, index,users)=>acc+item/users.length);}}

 //let result = arr.filter(),
  //map(function (num) ....

  //reduce(people.reduce((r,i) => r + i.age, 0) / (data.length || 1)))
 // console.log(result);
  //const data = [
    //{name: "Ann", age: 24},
   // {name: "Bred", age: 27},
   // {name: "Grace", age: 21},
    //{name: "Alex", age: 30},
   // {name: "Robby", age: 25}
  //];

 // let avg = data.reduce((r,i) => r + i.age, 0) / (data.length || 1);
 // console.log(avg);



//const data = [
 // {name: "Ann", age: 24},
 // {name: "Bred", age: 27},
 // {name: "Grace", age: 21},
 // {name: "Alex", age: 30},
 // {name: "Robby", age: 25}
//];

//let avg = data.reduce((r,i) => r + i.age/data.length, 0.0);
//console.log(avg);

