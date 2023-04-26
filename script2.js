var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","city");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-warning");
button.style.marginLeft="5px";
button.style.marginBottom="7px";
button.innerHTML="search";
button.addEventListener("click",foo);

let temperature=document.createElement("div");
temperature.setAttribute("id","temperature");

let wind=document.createElement("div");
wind.setAttribute("id","wind");

let description=document.createElement("div");
description.setAttribute("id","description");


div.append(input,button,temperature,wind,description);
document.body.append(div);

async function foo(){
    let res=document.getElementById("city").value;
    console.log(res);
    try{
    let url= `https://goweather.herokuapp.com/weather/${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    console.log(res2);
    console.log(res2.temperature);
    temperature.innerHTML=`Temperature: =>${res2.temperature}`;
    temperature.style.fontWeight="bold";
    temperature.style.color="red"
    console.log(res2.wind);
    wind.innerHTML=`Wind speed: => ${res2.wind}`;
    wind.style.fontWeight="bold";
    wind.style.color="darkblue"
    console.log(res2.description);
    description.innerHTML=`Description: =>${res2.description}`;
    description.style.fontWeight="bold";
    description.style.color="green";
    
    
}catch(error){
    console.log(error);
}
}
