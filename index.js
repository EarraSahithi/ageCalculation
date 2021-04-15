//importing httpserver
const http=require ("http");
//importing url server
const url=require("url");


//creating httpserver
http.
createServer(function(request,response){
    response.setHeader("content-Type","html");
    const path = request.url;
    const dataFromUrl=url.parse(path,true).query;
    console.log(dataFromUrl.name);
    console.log(dataFromUrl.year);
    console.log(dataFromUrl.month);
    console.log(dataFromUrl.date);
    //checking url condition
    const DOB=(dataFromUrl.month , dataFromUrl.date , dataFromUrl.year);
    
    const d=Date.parse( dataFromUrl.month , dataFromUrl.date , dataFromUrl.year);
    const p=Date.parse(DOB);
    const q=Date.now();
    const ageInMilliSeconds=q-p;
    const milliseconds=ageInMilliSeconds;
    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;
    const month=day*30;
    const year=day*(365.25);
    const y =Math.round(milliseconds/year);
    if(request.url.includes("age")){
        response.write(`<p> Hello ${dataFromUrl.name} </p>`);
        response.write(`<p> You are currently ${y} years old </p>`);
        //console.log(`<p>Hello ${dataFromUrl.name}`);
        //console.log(`<p> You are currently ${y} years old </p>`);
        response.end();
    }
    else{
        response.write("Server is running. ");
        response.write("You can send request to the server now");
        response.end();
    }
})
.listen(8080);