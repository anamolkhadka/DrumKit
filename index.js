/// Select all buttons with the class "dum"
const buttons = document.querySelectorAll('.drum')

///Add event listener to each buttons
buttons.forEach(button => {
    button.addEventListener('click',function () {
        //console.log(this.innerHTML);
        button_name = this.innerHTML;
        makeSound(button_name);
        buttonanimation(button_name);
    });
});

///Adding event listener for keypress event in the document object.
///Event is the keypress event.
document.addEventListener('keypress',function (event){
    ///console.log(event.key)
    key_pressed = event.key;
    makeSound(key_pressed);
    buttonanimation(key_pressed);

})


function makeSound(key) {
    key_pressed = key;
    let audio;
    //Switch statement to play the sound based on the key pressed.
    switch(key_pressed){
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
};

///Adding flash Animation for the buttons that gets clicked
function buttonanimation(currentKey) {

    var activeButton = document.querySelector('.'+ currentKey);
    ///classlist.add will add css class pressed to the button when clicked.
    activeButton.classList.add('pressed');
    ///settimeout function to remove the effect.
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    },100)
    
}