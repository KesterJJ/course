function BMICalculator (weight, height) {
var BMI = Math.round(weight / (height * height));
   // return Math.round(BMI);
    if (BMI < 18.5) {
        return `Your BMI is ${BMI}, so you are underweight`;
    } else if (BMI < 24.9) {
        return `Your BMI is ${BMI}, so you have a normal weight`;
    } else {
        return `Your BMI is ${BMI}, so you are overweight`;
    }
}

console.log(BMICalculator(80, 1.8));