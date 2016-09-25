console.log('Loaded!');
var button=document.getElementById("btn");
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById("sp");
    span.innerHTML=counter.toString();
};