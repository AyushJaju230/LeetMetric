// class Ayush{
//     //properties
//     age;
//     #weight = 54;
//     height = 180;

//     constructor(newAge , newHeight){
//         this.age = newAge;
//         this.height = newHeight;
//     }

//     //behaviour
//     walking(){
//         console.log("I am walking in a Farm",this.#weight);
//     }
//     Playing(){
//         console.log("I am Playing a Cricket");
//     }
    
// } 
// let obj = new Ayush(50,190);
// console.log(obj.height);
// // obj.walking();
//Default Parameter//
// function Ayush(Firstname = "Ayush"){
//     console.log("My name is",Firstname);
// }
// Ayush();
function Value(solve = ["Ayush","Virat","Rohit"]){
    console.log("The Value is",solve);
}
Value();