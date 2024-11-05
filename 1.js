function attachEventListeners(){
let count=0;
document.getElementById("Click me")
.addEventListener("click",function xyz(){
    console.log("Button Clicked",++count);
})
}
attachEventListeners();