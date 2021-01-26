const firstBtn = document.getElementById("plus-button");
firstBtn.addEventListener("click", function(){
  var amount= document.getElementById("first-input").value;
  var amountNumber=parseFloat(amount);
  var total= amountNumber+1;

  document.getElementById("first-input").value=total;
    
  
})
