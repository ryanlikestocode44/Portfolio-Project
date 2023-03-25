let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.btn'));

console.log('test')
buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Input Error'
                }
                break;
            case '&larr;':
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

const toggleButton = document.querySelector('.toggle-mode');
const calculator = document.querySelector('.calculator');
let darkMode = true;
toggleButton.addEventListener('click', function(){
    calculator.classList.toggle('.dark');
    toggleButton.classList.toggle('.dark');
    darkMode = false;
});
