function handleForm(e) {
    
    e.preventDefault();
  
    const f = document.getElementById("form");
  
    // save value from input field
    const content = f.text1.value;
  
    const list = document.getElementById("list");
  
    const li = document.createElement("li");
  
    // set content to bullet point 
    li.textContent = content;
  
    // add to the list
    list.appendChild(li);
  
    f.text1.value = "";
  }