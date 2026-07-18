let clicks = 0;

const contador = document.getElementById("clicks");

function contar() {
    clicks++;
    contador.textContent = clicks;

    if (navigator.vibrate) {
        navigator.vibrate(10);
    }
}

// BOTÕES
const buttons = document.getElementById("buttons");

for (let i = 1; i <= 60; i++) {
    const b = document.createElement("button");
    b.textContent = i;

    b.onclick = () => {
        contar();

        b.style.background = "#00bcd4";

        setTimeout(() => {
            b.style.background = "#202b44";
        }, 150);
    };

    buttons.appendChild(b);
}

// LEDS
const leds = document.getElementById("leds");

for (let i = 0; i < 40; i++) {

    const led = document.createElement("div");

    led.className = "led";

    led.onclick = () => {
        contar();
        led.classList.toggle("on");
    };

    leds.appendChild(led);
}

// KNOBS
const knobs = document.getElementById("knobs");

for (let i = 0; i < 20; i++) {

    let angulo = 0;

    const knob = document.createElement("div");

    knob.className = "knob";
    knob.innerHTML = "⟳";

    knob.onclick = () => {
        contar();

        angulo += 30;

        knob.style.transform = `rotate(${angulo}deg)`;
    };

    knobs.appendChild(knob);
}

// SLIDERS
const sliders = document.getElementById("sliders");

for (let i = 0; i < 20; i++) {

    const slider = document.createElement("input");

    slider.type = "range";
    slider.min = 0;
    slider.max = 100;

    slider.oninput = contar;

    sliders.appendChild(slider);
}

// INTERRUPTORES
const switches = document.getElementById("switches");

for (let i = 0; i < 20; i++) {

    const s = document.createElement("div");

    s.className = "switch";

    s.onclick = () => {
        contar();
        s.classList.toggle("on");
    };

    switches.appendChild(s);
}

// POP IT
const pop = document.getElementById("popit");

for (let i = 0; i < 100; i++) {

    const bolha = document.createElement("div");

    bolha.className = "bubble";

    bolha.onclick = () => {
        contar();
        bolha.classList.toggle("pop");
    };

    pop.appendChild(bolha);
}