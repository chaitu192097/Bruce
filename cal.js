let curr_disply = document.getElementById("typing")
let sav_disply = document.getElementById("typed")
let mainstr = ""
let curr_str = ""
let flag = true;
function clickme(a){
    let str =document.getElementById(a).innerText;
    if(str === "+" || str === "-" || str === "/" || str === "%" || str === "*"){
        mainstr+= str
        curr_disply.innerText = "0"
        sav_disply.innerText = mainstr
        curr_str = ""
    }
    else{
    mainstr += str
    curr_str += str
    curr_disply.innerText = curr_str;
    }
}
function operation(b){
    let oper = document.getElementById(b).innerText;
    
    
        if(oper == "C"){
            curr_str = curr_str.slice(0,-1)
            mainstr= mainstr.slice(0 , -1)
                curr_disply.innerText = curr_str;
                if(curr_disply.innerText == ""){
                    curr_disply.innerText = "0"
                }
            
            
        }
        if(oper == "CE"){
            curr_str = ""
            mainstr = ""
            curr_disply.innerText = "0"
            sav_disply.innerText = ""
        }
    
    
}
function result() {
    let ans =sav_disply.innerText+curr_disply.innerText
    curr_disply.innerText="0"
   let res = eval(ans)
   sav_disply.innerText = ans
   curr_disply.innerText = res
}


function change_mode(){
 
    if(flag == true){
        let main_body = document.querySelector(".main")
        main_body.style.backgroundColor = "black"
        document.querySelector(".mode").style.backgroundColor = "white"
        main_body.style.color = "white"
        document.querySelector(".display").style.borderBottom = "1px solid white"
        sav_disply.style.color= "white"
        flag = false;
    }
    else{
        let main_body = document.querySelector(".main")
        main_body.style.backgroundColor = "white"
        document.querySelector(".mode").style.backgroundColor = "black"
        main_body.style.color = "black"
        document.querySelector(".display").style.borderBottom = "1px solid black"
        sav_disply.style.color= "black"
        flag = true;
    }
  

}
