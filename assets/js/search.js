function search_project() { 
    let input = document.getElementById('search-input').value 
    input = input.toLowerCase(); 

    let x = document.getElementsByClassName('search_result'); 
    for (i = 0; i < x.length; i++) {  
        let txt = x[i].innerHTML.toLowerCase()
        if (txt.indexOf(input) > -1) { 
            x[i].style.display = ""; 
        } else {
            x[i].style.display = "none"; 
        }
    } 
} 
