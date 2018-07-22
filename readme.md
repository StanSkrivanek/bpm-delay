# Calculation of the delay timet for a note at given tempo in BPM

This mini project starts as an exercise for closure that is in file "quarternote.js".

Used Function:
```javascript
const delayCounter = () => {
    let ms = 6e4;
    let calcDelay = (bpm) => {
        return Math.round(ms / bpm * 100) / 100;
    };
    return calcDelay;
};

// variable "quarternote" contain function calcDelay with access to variable "ms"
const quarternote = delayCounter();
```


Then I have decided to calculate values for multiple note lenghts and result is in "multicalc.js". I have created object "notes" where property name is note lenght and value is function with calculation formula

Example:
```javascript
let notes = {
    noteQuarter : (bpm) => Math.round( 6e4 / bpm * 1000 ) / 1000
}
```
Function calculateBpm take "usersBpm" as input, then loop thru object "notes". Each loop store function ( property value ) in variable "values", then stored function is envoked and its result is stored in array "delayTime".
```javascript
const calculateBpm = (usersBpm) => {
    // loop thru object "notes"
    for(let delay in notes){
        // store property value (inthis case function in variable "values")
        const values = notes[delay];
        // run each function and push results into array "delayTime"
        delayTime.push(values(usersBpm));
    }
};

```
To show results on front end is used function "print()"

Example:
```javascript
let print = () =>{
    noteQuarter.innerHTML = delayTime[3];
}
```

Because this exercise is focused for javaScript, HTML and CSS is just very basic.

Feel free to use and customized this exercise code to your needs.# bpm-delay
# bpm-delay
