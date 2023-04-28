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

    document.getElementById("cvcmirror").value = document.getElementById("cvcnum").value;
 }

 
 function displayCompletePage(e){

      console.log("sss")
      document.querySelector(".section2").classList.add("displaynone")
      document.querySelector(".section3").classList.remove("displaynone")         

      e.preventDefault(); 

 }
      document.getElementById("confirmbutton").addEventListener("click", displayCompletePage)
