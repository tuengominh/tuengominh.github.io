function search_project(){ 
    let input = document.getElementById('search-input').value 
    input = input.toLowerCase(); 

    let x = document.getElementsByClassName('search_result'); 
    for (i = 0; i < x.length; i++){  
        if (input === ""){ 
            x[i].style.display = ""; 
        } else {
            if (x[i].innerHTML.toLowerCase().includes(input)){ 
                x[i].style.display = ""; 
            } else {
                x[i].style.display = "none";
            }
        }
    } 
} 

