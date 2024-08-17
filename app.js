var string = "";
var buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.slice(0, -1); // Update the string variable
            document.querySelector('input').value = string; // Update the display
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
