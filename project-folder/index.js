// async function Ayush(){
//     setTimeout(function() {
//         console.log("I am Ayush Jaju")
//     },3000);
// }
// let output = Ayush();
async function Ayush(){
    let response = await  fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
    let data = await response.json();
    console.log(data);
}
Ayush();
