
const selected = document.getElementById('selected');
const exercises = ['Arrow functions! ','Switch! ','Splice! ','Map! ','Reduce! ','Find! ','Filter! ','Spread! ','Rest! ']

function selectExercises(number = 5) {
    const toDo = [];
    const done = [];
    for (let i = 0;i < number;++i) {
        let suggestion = randomElement(exercises);
        while (done.includes(suggestion)) {
           suggestion = randomElement(exercises);
        }
        toDo.push(suggestion);
        done.push(suggestion);
    }
    return toDo;
}

selected.textContent = selectExercises(/* HERE HERE HERE*/).reduce((ac,cv) => ac += cv);

function randomElement(array) {
    return array[randomInt(0,array.length-1)];
}

function randomInt(min,max) {
    const diff = (max)-min;
    return min + Math.round(diff * Math.random());
}