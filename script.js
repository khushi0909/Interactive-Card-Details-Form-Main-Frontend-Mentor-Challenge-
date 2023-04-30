
      let cardnumber = document.getElementById("cardnumber")
      const cardnumber1 = document.getElementById("cardnumber1")
      const cardnumber2 = document.getElementById("cardnumber2")
      let cardnumber3= document.getElementById("cardnumber3")
      let expyear = document.getElementById("expyear")
      const cvcnum = document.getElementById("cvcnum")
 const expmonth = document.getElementById("expmonth")
 const cardholdername =document.getElementById("cardholdername")


document.getElementById("cardholdername").oninput = () =>{

    document.getElementById("namemirror").value = document.getElementById("cardholdername").value;
 }

 document.getElementById("cardnumber").oninput = () =>{

    document.getElementById("mirrornumber").value = document.getElementById("cardnumber").value;
 }
 document.getElementById("cardnumber1").oninput = () =>{

    document.getElementById("mirrornumber1").value = document.getElementById("cardnumber1").value;
 }
 document.getElementById("cardnumber2").oninput = () =>{

    document.getElementById("mirrornumber2").value = document.getElementById("cardnumber2").value;
 }
 document.getElementById("cardnumber3").oninput = () =>{

    document.getElementById("mirrornumber3").value = document.getElementById("cardnumber3").value;
 }

 document.getElementById("expmonth").oninput = () =>{

    document.getElementById("expdatemonthmirror").value = document.getElementById("expmonth").value;
 }
 document.getElementById("expyear").oninput = () =>{

    document.getElementById("expdateyearmirror").value = document.getElementById("expyear").value;
 }
 document.getElementById("cvcnum").oninput = () =>{

    document.getElementById("cvcmirror").innerHTML = document.getElementById("cvcnum").value;
 }


 document.querySelector(".form").addEventListener("input",(e)=> {
   switch(e.target.id){

      case "cardnumber","cardnumber1","cardnumber2","cardnumber3","expmonth","expyear","cvcnum" :
         checkNumber();
         break;
      
         case "cardoldername":
         checkNumber();
         break;
         
           
   }

 })



 function checkNumber(){

   let num = cardnumber.value
   // console.log(num)
   let num1=cardnumber1.value
   // console.log(num1)

   let num2=cardnumber2.value
   let num3=cardnumber3.value
   let expmonthq = expmonth.value
   let expyearq = expyear.value
   let cvcnumq = cvcnum.value
let cardholdernameq = cardholdername.value
// if((!num)|| (!num1)|| (!num2) || (!num3)|| !expmonthq || !expyearq || !cvcnumq || !cardholdernameq ){
// {
//    document.querySelector(".invaliddatecvc").innerHTML=" cant be blank ";
//    document.querySelector(".invalid").innerHTML=" cant be blank ";

//    document.querySelector(".invalidname").innerHTML=" cant be blank ";
// }
//    // 
// return true;

// }

if( !cardholdernameq || !isAlphabet(cardholdernameq)){

   document.querySelector(".invalidname").innerText ="should contain alphabets only or \n cant be blank"
    
}
     else  if(( !num)|| (!num1)|| (!num2) || (!num3) || !isNumber(num)|| !isNumber(num1) || !isNumber(num2) || !isNumber(num3)){

               {

                     document.querySelector(".invalid").innerText="Should contain only numbers \n  or cant be blank ";

               } 
               
               // return false;
               }
                        else if(!expmonthq || !expyearq || !cvcnumq || !isNumber(expmonthq) || !isNumber(expyearq) || !isNumber(cvcnumq)){
                        {

                           document.querySelector(".invaliddatecvc").innerText="Should contain only numbers \n  or cant be blank ";
                           

                        }
                        // return false;
                        }

                       
   
    else 
    {return true;}
   }  


   document.getElementById("confirmbutton").addEventListener("click", displayCompletePage)
   function displayCompletePage(e){
     e.preventDefault(); 
  
         //   let checkalphabet = isAlphabet();
        const checknumber = checkNumber();
        if(checknumber){
           document.querySelector(".section2").classList.add("displaynone")
           document.querySelector(".section3").classList.remove("displaynone")
           document.querySelector(".invalid").classList.add("displaynone") 
           document.querySelector(".invaliddatecvc").classList.add("displaynone") 
           document.querySelector(".invalidname").classList.add("displaynone") 


        }
        return false;
           
  
  
   }


   document.querySelector(".confirmbutton").addEventListener("click", displayPreviousPage,false)

      
      function displayPreviousPage(e){
         document.querySelector(".section2").classList.remove("displaynone")
         document.querySelector(".section3").classList.add("displaynone")     
         document.querySelector(".form").reset();    
         e.preventDefault(); 

      }

      function isNumber(str){
        let  char = str.split("");

      // let char = str.toString().split("");

        if(char.some((c)=> c.charCodeAt()<48 || c.charCodeAt()>57)) 
         return false;
         return true;
      }
      // else (return true;)


      // function isAlphabet(str) {

      //   let  char = str.split("");
      //   return (/[a-zA-Z]/).test(char)
      // }
      function isAlphabet(str){
         // let  char = str.split(" ");
       let letters = /^[A-Za-z ]*$/;
       if(str.match(letters))
         {
          return true;
         }
       else
         {
         // alert("not valid format");
         return false;
         }
      }

