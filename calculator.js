var number= document.getElementsByTagName("input");     
//convert to an array
  Array.from(number).forEach(function(numbers){     
  var numberKeys= numbers;    
 
     numberKeys.addEventListener("click",numberKey,false);           
  });
  var display =document.getElementById("display");            
  displayedNum = display.textContent;

// To display the number keys
  function numberKey(e){
          var key = e.target;                      
          var keyContent = e.target.value;           
          var action = key.dataset.action;            
         if(!action){
             if(displayedNum === "0"){
                 displayedNum = keyContent;
                 display.innerHTML = displayedNum;                   
             }
             else{                 
                     displayedNum += keyContent;
                      display.innerHTML = displayedNum;

             }                 
         } 
         decimal(e); 
         keyOperators(e);
         clearKey(e);
         deleteKey(e);        
  }  

  // To display the decimal point
  function decimal(e){
      var key = e.target;                      
      var keyContent =  key.value;  
      var action = key.dataset.action; 
         if(action ==="decimal"){
             displayedNum = displayedNum +".";
             display.innerHTML=displayedNum;
         }            
  }

  // To display the keyOperators
  function keyOperators(e){
    var key = e.target;                      
    var keyContent =  key.value;  
    
     var action = key.dataset.action; 
         if(action ==="add"
              || action==="minus"||
              action ==="divide" ||
              action ==="multiply"||
              action === "mod"){          
            displayedNum = displayedNum + keyContent;
            display.innerHTML = displayedNum;
         }
      
  }
  // To cfreate a clear screen key
  function clearKey(e){
      var key = e.target;                      
      var keyContent =  key.value;  
      var action = key.dataset.action;
      if(action ==="clear"){
          displayedNum = "0";
          display.innerHTML=  displayedNum;               
      }              
  }  
  // To be able to remove/delete numbers/ operators at a time
  function deleteKey(e){        
      var key = e.target;                      
      var keyContent =  key.value;  
      var action = key.dataset.action; 
      if(action === "delete"){               
          if (displayedNum.length > 1) {
             displayedNum = displayedNum.slice(0, -1);
             display.innerHTML = displayedNum;
          } else {
             displayedNum ="0";
             display.innerHTML = displayedNum;
          }
      }    
  }
      // To perform mathematical calculations
      var evaluate =document.getElementById("equal");
      evaluate.addEventListener("click", evaluation, false);
     function evaluation(){       
      var result = eval(displayedNum.toString());
      display.innerHTML=result;
     } 