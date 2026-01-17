// console.log("Ayush");
// for(let i =1; i<6; i++){
//     if(i ==4){
//         continue;
//     }
//     else{
//         console.log(i)
//     }
// }
// let i = 1;
// while (i<=10){
//     console.log("Babbar");
//     i++
// }
// let i = 1;
// do{
//     console.log("Ayush");
//     i++;
// }while(i<=10);
// let firstname = "Aysuh"
// let Secondname = 'Virat'
// console.log(typeof(Secondname));
// let name = `love`;
// console.log(name);
// let firstname = new String("Ayush Jaju");
// console.log(firstname);
// let opt1 ='English';
// let opt2 ='Hindi';
// let ans = opt1 + opt2;
// console.log(ans);
// let op1 = 'hindi';
// console.log(op1.length);
// let op1 = 'hindi';
// let op2 = 'English';
// console.log(op1.toUpperCase());
// console.log(op2.toUpperCase());
// let str = 'Ayushjaju';
// console.log(str.substring(2));
// let str = 'Ayushjaju';
// console.log(str.substring(2,4));
// function Ayush(){
//     console.log("Virat");
// }
// Ayush();
// function Counting(){
//     for(let i=1; i<=100; i++){
//         console.log(i);
//     }
// }
// Counting();
// function Printnumber(num){
//        console.log("printing Number",num);
// }
// Printnumber(5);
// function getAvarage(num1,num2){
//     let Avg = (num1 + num2)/2;
//        console.log("Avrage",Avg);
// }
// getAvarage(5,6);
// function getsum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }
// let ans =  getsum(1,2,3)
// console.log("Printing sum:",ans);
// let getmulti = (x,y) => {
//     let ans = x*y;
//     return ans;
// }
// console.log(getmulti(2,10));
// let obj = {
//     name: "Love",
//      age: 18,
//      weight:56,
//      height:"6ft 1inch",
//      Ayush: function(){
//          console.log("Hello jii kaise ho app");
//      }
// };
// console.log(obj);
// obj.Ayush();
// let obj = {
//     age : 18,
//     weight :56,
//     Name : "Virat",
//     Ayush: function (){
//         console.log("Hello Everyone how are you All");
//     }
// };
// console.log(obj);
// obj.Ayush();
// console.log(typeof(obj));
// Creation Of Array
// let Arr =[1,2,3,4,5];
// console.log(Arr);
// let brr = new Array("Ayush",1,true);
// brr.push("virat");
// brr.pop();
// brr.shift();
// brr.unshift("Sakshi Jaju");
// brr.push(20,40,50,60);
// brr.slice(2,5);
// console.log(brr.slice(2,5));
// console.log(brr);
// Arr.push("Virat",34,68);
// console.log(Arr);
// Arr.splice(1,2,3,"Rohit sharma");
// console.log(Arr.splice(1,2,3,"Rohit sharma"));
// let arr = [5,6,8];
// let ansarray = arr.map((number) => {
//       return number*number;
// });
// console.log(ansarray);
// let arr = [5,6,8];
// let ansarray = arr.map((number) => {
//       return (number+1);
// });
// console.log(ansarray);
// let arr = [10,20,30,11,21,44,51];
// let evenarray = arr.filter((number)=>{
//     if(number %2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(evenarray);
// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,Curr) => {
//     return acc+ Curr;
// },0);
// console.log(ans);
// let arr = [5,8,9,6,2,3,1];
// // arr.sort();
// // console.log(arr);
// console.log(arr.indexOf(9));
// let arr =[20,60,78,79];
// arr.forEach((Value,index) => {
//     console.log("Number:",Value,"index:",index)
// });
// let arr = [10,20,30,40];
// for(let Value of arr){
//     console.log(Value);
// }
//Arrays with Function
let arr = [10,20,30,40,50];
function getsum(arr){
    let length = arr.length;
    let sum =0;
    for(let index =0; index<length; index++){
        sum = sum + arr[index];
    }
    return sum;
}
let totalsum = getsum(arr);
console.log(totalsum);