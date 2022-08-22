export const isString = (variable) => {
    return typeof variable === 'string' || variable instanceof String;
}

/* Start generate random hex color code functions from https://code.tutsplus.com/tutorials/how-to-code-a-random-color-generator-in-javascript--cms-39861. 
TODO: Is there a better way to achieve this? */
export const generateRandomColorHexCode = () => {
    // console.log("Gen color");
    let [r,g,b] = randomRgbColor();
 
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
 
    return "#" + hr + hg + hb;
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
/* End generate random hex color code functions */

/* Start debug functions */
export const sleep = (ms) => {
    console.log("Sleeping for " , ms * 0.001 , " seconds...");
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* End debug functions */
