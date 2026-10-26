// console.log("hello world");

console.log("JavaScript file loaded!");

const button = document.getElementById("btn");

console.log(button);

button.addEventListener("click", function () {
    console.log("Button clicked!");
});
button.addEventListener("mouseover", function () {
    console.log("Button is ok  the mouse id over");
});
button.addEventListener("mouseout", function () {
    console.log("when i click on button then something is happend");
});
function bbt(text){
    console.log(text)
}
const a=document.getElementById('btn1');
const container=document.getElementById('container');
a.addEventListener('click',function(){
   bbt ("this is btn");
});
container.addEventListener('click',function(){
   bbt ("this is div");
});