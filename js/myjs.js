let temp=document.getElementById("person-detail");
function onclick(temp)
{
    temp["input"].getAttribute("background-color")="black";
}
temp.addEventListener("onclick");
console.log(temp);