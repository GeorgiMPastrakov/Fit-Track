function calculateBMI() {
  const height = document.getElementById("height").value / 100;
  const weight = document.getElementById("weight").value;

  if (height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter valid values for height and weight.";
    return;
  }

  const bmi = weight / (height * height);
  const bmiRounded = bmi.toFixed(2);

  let interpretation;
  if (bmi < 18.5) {
    interpretation = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Healthy weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    interpretation = "Overweight";
  } else {
    interpretation = "Obese";
  }

  document.getElementById(
    "result"
  ).innerHTML = `Your BMI is ${bmiRounded}. You are currently in the ${interpretation} category.`;
}
