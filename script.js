const change_text = document.getElementById("change_text");
let text = "Venim in ajutorul dumneavostra cu drag si profesionalism";
let caractere = text.split("");
let i = 0;
setTimeout(()=>{setInterval(schimba,200);},1000)

let cuvant = "";
function schimba() {
    cuvant = ""
    if(caractere.length == i){
        i = 0;
    }
    else{
        i = i+1;
    }
    for(let j = 0; j < i; j++){
     cuvant = cuvant.concat(caractere[j]);
    }
    if(!(i%4 == 0)){
    cuvant = cuvant.concat("|")
    }
    change_text.innerText = cuvant;
}

const acasa = document.getElementById('acasa')
const upper = document.getElementById("upper");
const text1 = document.getElementById('text')
window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        upper.classList.add("active");
    }
    else{
        upper.classList.remove("active");
    }
})
function up(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}
var s_top = document.getElementById('top');
const section = document.querySelectorAll('.trb');
const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
    entry.target.classList.toggle("show",entry.isIntersecting);
 })
},
{
    threshold: 0.3,
})

section.forEach(sec => {
    observer.observe(sec);
})
console.log(section)
window.addEventListener('scroll',()=>{
    let el = section.forEach(e =>{
      
            console.log(e);
        
    })

})

