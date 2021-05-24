let number = 0;
let question = "<h1>Héeee Comment t'appelles tu ?</h1>";

let output = document.getElementById('output');
output.innerHTML = question;

function bot(){
    let input = document.getElementById('input').value;
    console.log(input);

    if(number == 0){
        output.innerHTML = "<h1>Salut " + input + " !</h1>";
        document.getElementById('input').value = "";
        question = "<h1>Sinon comment vas tu ?</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 1){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1>Je suis trés content de te voir !</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 2){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1>Comment tu te sent aujourd'hui ?</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 3){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1>Est ce que tu peux jouer au foot ?</h1>";
        setTimeout(timedQuestion, 3000);
     
    }
    else if(number == 4){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1>Est ce que tu parles bien français et anglais ?</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 5){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1>Ok ! merci au revoir.</h1>";
        setTimeout(timedQuestion, 3000);
    }
}
function timedQuestion(){
    output.innerHTML = question;
} 
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13){
        bot();
        number++;
    }
});

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;

    let elem = document.getElementById(id);

    elem.hidden = !elem.hidden;
  });

