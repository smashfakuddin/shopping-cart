// document.getElementById('case-increase').addEventListener('click' ,function(){
//   handleProductChange(true);
// })

// document.getElementById('case-decrease').addEventListener("click", function(){
//    handleProductChange(false);
// })


function handleProductChange(product,isIncrease){
  const caseInput = document.getElementById(product+'-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = 0;
    if(isIncrease == true){
      caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0){
      caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById(product + '-total').innerText= caseTotal;
}



// document.getElementById('case-increase').addEventListener('click' ,function(){
//   const caseInput = document.getElementById('case-count');
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount + 1;
//   caseInput.value = caseNewCount;  
//   const caseTotal = caseNewCount * 59;
//   document.getElementById('case-total').innerText= caseTotal;
// })

// document.getElementById('case-decrease').addEventListener("click", function(){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText= caseTotal;
// })