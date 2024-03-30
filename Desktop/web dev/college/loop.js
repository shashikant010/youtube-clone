let tablee=document.querySelector("#tablee")
let inn=document.querySelector('#input')
let but=document.querySelector("button")
let a=inn.value;

but.addEventListener("click",()=>{
    tablee.innerHTML=" "
    for (let i = 1; i < 11; i++) {

        tablee.innerHTML+=inn.value+' '+'* '+i+' = '+inn.value*i+" "+'<br>';
       
    
        
    }
})

