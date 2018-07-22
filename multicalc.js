"use strict";

let notes = {
    noteHalf : (bpm) => Math.round((60000/bpm)*2*1000)/1000,
    noteHlafDot : (bpm) => Math.round(((60000/bpm)/2)*3*1000)/1000,
    noteHalfTrip : (bpm) => Math.round((60000/bpm)*2*2/3*1000)/1000,
    noteQuarter : (bpm) => Math.round( 6e4 / bpm * 1000 ) / 1000,
    noteQuarterDot : (bpm) => Math.round(( 6e4 / bpm / 2 )*3*1000) / 1000,
    noteQuarterTrip : (bpm) => Math.round(( 6e4 / bpm * 2 )/3*1000) / 1000,
    noteEighth: (bpm) => Math.round((60000/bpm)/2*1000)/1000,
    noteEighthDot: (bpm) => Math.round(((60000/bpm)/4)*3*1000)/1000,
    noteEighthTrip: (bpm) => Math.round((60000/bpm)/3*1000)/1000,
    noteSixth: (bpm) => Math.round((60000/bpm)/4*1000)/1000,
    noteSixthDot: (bpm) => Math.round((60000/bpm)/4*1.5*1000)/1000,
    noteSixthTrip: (bpm) => Math.round((60000/bpm)/6*1000)/1000,
    note32: (bpm) => Math.round((60000/bpm)/8*1000)/1000,
    note32Dot: (bpm) => Math.round((60000/bpm)/8*1.5*1000)/1000,
    note32Trip: (bpm) => Math.round((60000/bpm)/8*2/3*1000)/1000,
    note64: (bpm) => Math.round((60000/bpm)/16*1000)/1000,
    note64Dot: (bpm) => Math.round((60000/bpm)/16*1.5*1000)/1000,
    note64Trip: (bpm) => Math.round((60000/bpm)/16*2/3*1000)/1000
};


const usersInput = document.getElementById("bpmNumber");
const bpmDelay = document.getElementById("bmpDelayResult");
bpmDelay.innerHTML = "Enter BPM";

let print = () =>{
    noteHalf.innerHTML = delayTime[0];
    noteHalfDot.innerHTML = delayTime[1];
    noteHalfTrip.innerHTML = delayTime[2];
    noteQuarter.innerHTML = delayTime[3];
    noteQuarterDot.innerHTML = delayTime[4];
    noteQuarterTrip.innerHTML = delayTime[5];
    noteEighth.innerHTML = delayTime[6];
    noteEighthDot.innerHTML = delayTime[7];
    noteEighthTrip.innerHTML = delayTime[8];
    noteSixth.innerHTML = delayTime[9];
    noteSixthDot.innerHTML = delayTime[10];
    noteSixthTrip.innerHTML = delayTime[11];
    note32.innerHTML = delayTime[12];
    note32Dot.innerHTML = delayTime[13];
    note32Trip.innerHTML = delayTime[14];
    note64.innerHTML = delayTime[15];
    note64Dot.innerHTML = delayTime[16];
    note64Trip.innerHTML = delayTime[17];

};

let delayTime = [];

const calculateBpm = (usersBpm) => {
    // loop thru object "notes"
    for(let delay in notes){
        // store property value (inthis case function in variable "values")
        const values = notes[delay];
        // run each function and push results into array "delayTime"
        delayTime.push(values(usersBpm));
    }
};

// calculate on "Enter" key up
usersInput.addEventListener("keyup",(event) => {
    const keyName = event.key;
    if(keyName === 'Enter'){
    if(!usersInput.value){
        bpmDelay.innerHTML = `Don't Forget to enter BPM value`;
    }else if(usersInput.value === 0){
        bpmDelay.innerHTML = `Really???`;
    }else{
        // get user input value
        let usersBpm = usersInput.value;
        // empty array delayTime to have in array ONLY a new results
        delayTime.splice(0);
        if(usersInput.value > 0 && usersInput.value < 60){
            bpmDelay.innerHTML = `Your BPM is ${usersBpm}, consider 60 BPM or higher`;
            // run calculation
            calculateBpm(usersBpm);
            // print results to page
            print();
        }else{
        bpmDelay.innerHTML = `Results in 'ms' for ${usersBpm} BPM`;
        calculateBpm(usersBpm);
        print();
    }
    }
    }
});

// CLICK ON BUTTON
// const calc = document.getElementById("calc");
// calc.addEventListener("click",() => {
//     if(!usersInput.value){
//         bpmDelay.innerHTML = "Don't Forget to enter BPM value";
//     }else if(usersInput.value === 0){
//         bpmDelay.innerHTML = "Really???";
//     }else{
//         // get user input value
//         let usersBpm = usersInput.value;
//         // empty array delayTime to have in array ONLY a new results
//         delayTime.splice(0);
//         if(usersInput.value > 0 && usersInput.value < 60){
//             bpmDelay.innerHTML = "Your BPM is " + usersBpm + "but consider 60 BPM or higher";
//             // run calculation
//             calculateBpm(usersBpm);
//             // print results to page
//             print();
//         }else{
//         bpmDelay.innerHTML = "Delays for " + usersBpm + " BPM";
//         calculateBpm(usersBpm);
//         print();
//     }
//     }
// });
