/// Select all buttons with the class "dum"
const buttons = document.querySelectorAll('.drum')

///Add event listener to each buttons
buttons.forEach(button => {
    button.addEventListener('click',function () {
        console.log(this.innerHTML);
        button_name = this.innerHTML;
        let audio;
        
        //Switch statement to play the sound based on the button clicked.
        switch(button_name){
        case 'w':
            audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            // Do nothing

        }
    });
});

