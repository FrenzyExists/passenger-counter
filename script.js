// Counter thingy, pretty simple thing

let count = 0;
const laps = [34, 33, 36]
let laps_counted = 0;


// Lesson: learning about math operations, Dog Years
const human_to_dog = (age) => {
    return age * 7;
}

const increment = () => { 
    count++;
    console.log("more H U M A N S");
    document.getElementById('human-counter').innerText = count
}

// Lesson: create a function that automates something
const countdown = (n) => {
    for (i = n; i >= 0; i--) { console.log(i) }
}

// Lesson: sum a bunch of given laps
const sum_laps = (lap_list) => {
    return lap_list.reduce( (a, b) => {return a + b}, 0 );
}

// Lesson: Create a function which saves the value
const save = () => {
    console.log(count)
}

countdown(5);
console.log(sum_laps(laps));

console.log(human_to_dog(23))


