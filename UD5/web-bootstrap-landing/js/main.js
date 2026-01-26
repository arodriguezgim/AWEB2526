const app = document.getElementById('typewriter');

const typewriter = new Typewriter( app, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString("La ciudad del mudéjar.")
    .pauseFor(1000)
    .start();