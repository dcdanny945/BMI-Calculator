function bmiCalculator(kg,height){
    let bmi = Math.round(kg/(height*height));
    return bmi;
}

console.log("My BMI is "+bmiCalculator(76,1.78)+".");