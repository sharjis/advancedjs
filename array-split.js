const numbers=[1,2,3,4,5,6,7,8];
// const parts=numbers.slice(2,5);//shuru ar shesh lekha lagbe
// console.log(parts);
/* tumi caile add o korte paro*/const removed=numbers.splice(2,5,77);//prothom number array r index er moto kore lekha lagbe but porertate lekha lagbe je koyta shoraibe
console.log(removed);
console.log(numbers);
const together=numbers.join("ami");//join kora jay..comma deya jay,lekha deya jay
const together=numbers.join(" ");
const together=numbers.join(",");
console.log(together);