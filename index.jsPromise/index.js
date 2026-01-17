let firstpromise = new Promise((resolve,reject) =>
{
    function saymyname(){
    console.log("My Name is Ayush Jaju");
}
setTimeout(saymyname,10000);
});
