let i = 0;
let string = "Just breathe.\n\nYou can do this.\n\nDon't give up!\n\nStay determined.\n\nFocus on the positives.\n\nKnow what you're doing; sink into it.\n\nStay focused.\n\nEverything has a purpose, just like you.\n\nYou are unique, so BE unique!\n\nReach for the light; don't trap yourself in a dark bubble.";

function typewriter() {
    if (i < string.length) {
        let element = document.getElementById("typeOutAffirms");
        element.innerHTML += string.charAt(i);
        i++;
        setTimeout(typewriter, 100);

    }
}
typewriter();