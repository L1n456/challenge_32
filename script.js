const btn = document.querySelector("#switch");
const value_1 = document.querySelector(".value-1");
const value_2 = document.querySelector(".value-2");
const value_3 = document.querySelector(".value-3"); 

btn.addEventListener("input", function onInput(){
    if(btn.checked){
        value_1.innerHTML = "199.99";
        value_2.innerHTML = "249.99";
        value_3.innerHTML = "399.99";
    }else{
        value_1.innerHTML = "19.99";
        value_2.innerHTML = "24.99";
        value_3.innerHTML = "39.99"; 
    }
})