var list = document.getElementById("mylist");
             list.addEventListener("click", removeItems, false);

             var filter = document.getElementById("filter");
             filter.addEventListener("keyup", search, false);
            var button = document.getElementById("add");
            button.addEventListener("click",add, false);

           // To add a list item
            function add(e){                
                e.preventDefault();
               var input = document.getElementById("title");
               var li = document.createElement("li");
                var text = document.createTextNode(input.value);
                var delBtn = document.createElement("button");
                delBtn.appendChild(document.createTextNode("X"));
                delBtn.setAttribute("data-action", "delete");
                li.appendChild(text);
                li.appendChild(delBtn);
                var list = document.getElementById("mylist");
                list.insertBefore(li, list.childNodes[0]);
                }            
           
            // To remove a list item
            function removeItems(e){  
                var action = e.target.dataset.action;
               if( action ==="delete"){
                   if(confirm("Are you sure?")){
                       var li = e.target.parentElement;
                       list.removeChild(li);
                   }
               }
            } 
            // To filter items
            function search(e){
            // convert text to lowercase
            let text = e.target.value.toLowerCase();
            // Get list
            var items = document.getElementsByTagName('li');
            // Convert to an array
            Array.from(items).forEach(function(item){
              var itemName = item.textContent;
              if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display = 'block';
              } else {
                item.style.display = 'none';
              }
            });
          }
         