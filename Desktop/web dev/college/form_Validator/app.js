const nam=document.querySelector("#nam")
const roll=document.querySelector("#roll")
const comfirmPass=document.querySelector("#comfirmPassword")
const pass=document.querySelector("#password")
nam.addEventListener("keyup",()=>{
    console.log("you wrote something")
    console.log(nam.value);
    if(!isNaN(nam.value.at(nam.value.length-1))&& (nam.value.at(nam.value.length-1)!==" ")){
        console.log("you wrote number")
        nam.setCustomValidity("Don't write number here")
        nam.reportValidity()
        nam.value=nam.value.slice(0,(nam.value.length)-1)
        setTimeout(() => {
            nam.setCustomValidity("")
        }, 2000);
        
    }
    })

nam.addEventListener("keydown",(e)=>{
    setTimeout(()=>{
        e.preventDefault()
    },100)
})

roll.addEventListener("keyup",()=>{
    console.log("you wrote something")
    console.log(nam.value);
    if(isNaN(roll.value.at(roll.value.length-1))){
        console.log("you wrote number")
        roll.setCustomValidity("write only number here")
        roll.reportValidity()
        roll.value=roll.value.slice(0,(roll.value.length)-1)
    }
    else{
        roll.setCustomValidity("")
    }

comfirmPass.addEventListener("blur",()=>{
    if(comfirmPass.value!==pass.value){
        comfirmPass.setCustomValidity("Password did not matched")
        comfirmPass.reportValidity()
    }
    else{
        comfirmPass.setCustomValidity("") 
    }
})
})