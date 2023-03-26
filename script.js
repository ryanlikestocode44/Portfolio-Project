let display = document.querySelector('.display');
let buttons = Array.from(document.querySelectorAll('.btn'));

console.log('test')
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.id){
            case 'clear':
                display.innerText = '';
                break;
            case 'equal':
                function calculate(input) {
                    return eval(`(${input})`);
                }
                try {
                    display.innerText = calculate(display.innerText);
                } catch {
                    display.innerText = 'Input Error';
                }
                break;
            case 'backspace':
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
