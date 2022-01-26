function namePicker (array) {
    var person = array[Math.floor(Math.random() * array.length)]
    return person;
}


console.log(namePicker(["Matthew", "Mark", "Luke", "John"]));