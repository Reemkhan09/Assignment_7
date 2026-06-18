const dada = document.querySelector(".dada");
const baap = document.querySelector(".baap");
const bachha = document.querySelector(".bachha");
// bubble: 

dada.addEventListener("click", () => {
    console.log("Grandparent");
})
baap.addEventListener("click", () => {
    console.log("Parent");
})
bachha.addEventListener("click", () => {
    console.log("Child");
})
// output : child,parent,grandparent 
// the event is bubbling
// event starts from the target element and moves upward
// child -> parent -> grandparent

// capturing
dada.addEventListener("click", () => {
    console.log("Grandparent");
}, true);
baap.addEventListener("click", () => {
    console.log("Parent");
}, true);
bachha.addEventListener("click", () => {
    console.log("Child");
}, true);

// grandparent -> parent -> child

// this is event capturing 
// the event start from ancestor to the target
// 


