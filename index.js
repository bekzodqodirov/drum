


var listOfButtons = document.querySelectorAll('.drum');
for(var i = 0 ; i <  listOfButtons.length; i++){
   
   
    listOfButtons[i].addEventListener('click', function(){



        var htmlButton = this.innerHTML; 
        console.log(htmlButton);
        switch (htmlButton) {
            case 'w':
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                animationMaker(htmlButton);
                break;

            case 'a':
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                animationMaker(htmlButton);
                break;
                
            case 's':
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                animationMaker(htmlButton);
            break;

            case 'd':
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                animationMaker(htmlButton);
            break;

            case 'j':
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                animationMaker(htmlButton);
            break;

            case 'k':
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                animationMaker(htmlButton);
            break;

            case 'l':
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                animationMaker(htmlButton);
            break;

            default:
                alert('fuck you');
                break;
        }

    });

}


document.addEventListener('keydown', function(event){

    soundMaker(event.key); 
    animationMaker(event.key);

})



function soundMaker(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
    
        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
    
        case 'j':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
    
        case 'k':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
    
        case 'l':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
    
        default:
            alert('dont mess up with key board');
            break;
    }
}


function animationMaker(key){

    var activeButton = document.querySelector('.' + key);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}