function search_project() { 
    let input = document.getElementById('search-input').value 
    input = input.toLowerCase(); 

    let x = document.getElementsByClassName('search_results'); 
    for (i = 0; i < x.length; i++) {  
        if (input === "") {
            x[i].style.display="inherit"; 
        } else {
            if (x[i].innerHTML.toLowerCase().includes(input)) { 
                x[i].style.display="inherit"; 
            } else {
                x[i].style.display="none";
            }
        }
    } 
} 