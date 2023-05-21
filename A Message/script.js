let i = 0;
let string = "Hello.\n\nIf you are reading this message, please understand that I am with you throughout these hard times.\n\nYou might be wondering, 'Who are you?'\n\nTo answer your question, I'm just a freelance hobbyist. In fact, I was quite creative to the point that I coded this message for you!\n\nHonestly, the past few years haven't been good so far; regardless, we WILL climb this mountain together.\n\nThanks,\nSomeone";

function typewriter() {
    if (i < string.length) {
        let element = document.getElementById("typeOutMessage");
        element.innerHTML += string.charAt(i);
        i++;
        setTimeout(typewriter, 100);

    }
}
typewriter();