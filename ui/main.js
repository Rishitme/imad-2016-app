console.log('Loaded!');
var button=document.getElementById("btn");
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById("sp");
    span.innerHTML=counter.toString();
}