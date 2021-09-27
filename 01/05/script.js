// Goal: Update the stack list whenever a new item is "pushed".
function updateStack() {
    // let new_number = document.getElementById("new_number");
    let number = new_number.value;
    stack.push(number);
    //console.log(stack);
  
    let numberItem = document.createElement("li"); // <li></li>
    numberItem.append(number); // html -> body -> ol -> li -> [text node]
                               // <li>12</li>
  
    stack_list.prepend(numberItem);
  }
  
  function popStack() {
    let number = stack.pop();
    //console.log(stack);
  
    let numberItem = document.createElement("li");
    numberItem.append(number);
  
    output_list.append(numberItem);
  
    stack_list.firstChild.remove();
  }
  
  push_button.onclick = updateStack;
  pop_button.onclick = popStack;