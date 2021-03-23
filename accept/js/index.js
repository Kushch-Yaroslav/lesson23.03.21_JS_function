// const myFirstFunc = function(){
//   console.log("D");
// }
// function mySecondFunc(){
//   console.log("2");
// }
// myFirstFunc();
// mySecondFunc();
// console.log(myFirstFunc);
// console.log(mySecondFunc);

const myFirstFunc = function(val1, val2){
  const num1 = +val1;
  const num2 = +val2;
  const result = num1 + num2;
//   if(isNaN(result)){ //Проверяет переменнубю result на тип "number"
//     return null;     //Если не число, то выводит null
//   }
//   return result;     //Если число, то выводит переменнуб result
// }

return isNaN(result) ? null : result;
}

const sum = myFirstFunc(5, 10);
console.log(sum);