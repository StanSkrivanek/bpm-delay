"use strict";

const usersInput = document.getElementById("bpmNumber");
const bpmDelay = document.getElementById("bmpDelayResult");

bpmDelay.innerHTML = "Enter BPM";



const delayCounter = () => {
    let ms = 6e4;
    let calcDelay = (bpm) => {
        return Math.round(ms / bpm * 100) / 100;
    };
    return calcDelay;
};

// variable "quarternote" contain function calcDelay with access to variable "ms"
const quarternote = delayCounter();

usersInput.addEventListener("keyup",(event) => {
    const keyName = event.key;
    if(keyName === 'Enter'){
        if(!usersInput.value){
            bpmDelay.innerHTML = `Don't Forget to enter BPM value`;
        }else if(usersInput.value === 0){
            bpmDelay.innerHTML = `Really???`;
        }else{
            let usersBpm = usersInput.value;
            let result = quarternote(usersBpm);
            bpmDelay.innerHTML = `For ${usersBpm} BPM is Quarter note delay ${result} ms`;
            }
        }
    });