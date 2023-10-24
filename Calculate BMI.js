function bmi(weight, height) {
  bmi_ = weight / height**2
  if (bmi_ <= 18.5){
    return "Underweight"
  } else if (bmi_ <= 25){
    return "Normal"
  } else if (bmi_ <= 30){
    return "Overweight"
  } else {
    return "Obese"
  }
}