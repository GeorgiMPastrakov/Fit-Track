document.addEventListener("DOMContentLoaded", function () {
  const pplBtn = document.querySelector(".ppl-btn");
  const ulBtn = document.querySelector(".ul-btn");
  const workoutPlan = document.querySelector(".workout-plan");
  const planDetails = document.querySelector(".plan-details");

  console.log("JavaScript is loaded and running");

  pplBtn.addEventListener("click", function () {
    planDetails.innerHTML = `
      <h3>Push Workout A - Chest, Shoulders & Triceps</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Rep Goal Total</th><th>Rest</th></tr>
        <tr><td>Flat Barbell Bench Press</td><td>5</td><td>15</td><td>90-120 sec</td></tr>
        <tr><td>Flat Barbell Bench Press (Use 20% less weight)</td><td>1</td><td>15</td><td>N/A</td></tr>
        <tr><td>Seated Behind the Neck Press</td><td>3</td><td>25</td><td>60 sec</td></tr>
        <tr><td>(Weighted) Tricep Dips</td><td>3</td><td>30</td><td>60 sec</td></tr>
        <tr><td>Standing Cable Crossovers</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Seated Tricep Extensions</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Seated Dumbbell Lateral Raises</td><td>5</td><td>50</td><td>15 sec</td></tr>
      </table>
      <h3>Pull Workout A - Back, Traps & Biceps</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Rep Goal Total</th><th>Rest</th></tr>
        <tr><td>Barbell Conventional Deadlift</td><td>5</td><td>15</td><td>90-120 sec</td></tr>
        <tr><td>Barbell Conventional Deadlift (Use 20% less weight)</td><td>1</td><td>15</td><td>N/A</td></tr>
        <tr><td>(Weighted) Chin-ups</td><td>3</td><td>25</td><td>60 sec</td></tr>
        <tr><td>Chest Supported Rows</td><td>3</td><td>30</td><td>60 sec</td></tr>
        <tr><td>Shrugs (Dumbbell, Barbell, or Trap Bar)</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Standing Barbell Curls</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Standing Cable Reverse Fly</td><td>5</td><td>50</td><td>15 sec</td></tr>
      </table>
      <h3>Legs Workout A - Quads, Hamstrings & Calves</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Rep Goal Total</th><th>Rest</th></tr>
        <tr><td>Barbell Back Squat</td><td>5</td><td>15</td><td>90-120 sec</td></tr>
        <tr><td>Barbell Back Squat (Use 20% less weight)</td><td>1</td><td>15</td><td>N/A</td></tr>
        <tr><td>Barbell Good Mornings</td><td>3</td><td>25</td><td>60 sec</td></tr>
        <tr><td>Leg Press</td><td>3</td><td>30</td><td>60 sec</td></tr>
        <tr><td>Reverse Hyperextension</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Leg Curl (Seated or Lying)</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Calf Raise (Seated or Standing)</td><td>5</td><td>50</td><td>15 sec</td></tr>
      </table>
      <h3>Push Workout B - Chest, Shoulders & Triceps</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Rep Goal Total</th><th>Rest</th></tr>
        <tr><td>Standing Overhead Press</td><td>5</td><td>15</td><td>90-120 sec</td></tr>
        <tr><td>Standing Overhead Press (Use 20% less weight)</td><td>1</td><td>15</td><td>N/A</td></tr>
        <tr><td>Incline Bench Press (Dumbbell or Barbell)</td><td>3</td><td>25</td><td>60 sec</td></tr>
        <tr><td>Close Grip Bench Press</td><td>3</td><td>30</td><td>60 sec</td></tr>
        <tr><td>Seated Machine Fly</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Standing Tricep Pushdown (Rope, V-bar, or Straight Bar)</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Standing Cable Lateral Raises</td><td>5</td><td>50</td><td>15 sec</td></tr>
      </table>
      <h3>Pull Workout B - Back, Traps & Biceps</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Rep Goal Total</th><th>Rest</th></tr>
        <tr><td>Barbell Snatch Grip Deadlift</td><td>5</td><td>15</td><td>90-120</td></tr>
        <tr><td>Barbell Snatch Grip Deadlift (Use 20% less weight)</td><td>1</td><td>15</td><td>N/A</td></tr>
        <tr><td>Barbell Rows</td><td>3</td><td>25</td><td>60 sec</td></tr>
        <tr><td>(Weighted) Pull-ups</td><td>3</td><td>30</td><td>60 sec</td></tr>
        <tr><td>1-arm Rows (Dumbbell or Barbell)</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Incline Dumbbell Curl</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Seated Machine Reverse Fly</td><td>5</td><td>50</td><td>15 sec</td></tr>
      </table>
      <h3>Legs Workout B - Quads, Hamstrings & Calves</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Rep Goal Total</th><th>Rest</th></tr>
        <tr><td>Barbell Front Squat</td><td>5</td><td>15</td><td>90-120 sec</td></tr>
        <tr><td>Barbell Front Squat (Use 20% less weight)</td><td>1</td><td>15</td><td>N/A</td></tr>
        <tr><td>Barbell Romanian Deadlifts</td><td>3</td><td>25</td><td>60 sec</td></tr>
        <tr><td>Barbell Hip Thrusts</td><td>3</td><td>30</td><td>60 sec</td></tr>
        <tr><td>Dumbbell Lunges</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Seated Leg Extensions</td><td>5</td><td>50</td><td>30 sec</td></tr>
        <tr><td>Hanging Leg Raises</td><td>5</td><td>50</td><td>15 sec</td></tr>
      </table>
    `;
    workoutPlan.classList.remove("hidden");
    workoutPlan.style.display = "block";
  });

  ulBtn.addEventListener("click", function () {
    planDetails.innerHTML = `
      <h3>Lower Body Workout A</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Reps</th></tr>
        <tr><td>Squats</td><td>3</td><td>6-12</td></tr>
        <tr><td>Stiff Leg Deadlifts</td><td>3</td><td>8-12</td></tr>
        <tr><td>Standing Calf Raise</td><td>3</td><td>10-15</td></tr>
        <tr><td>Leg Extensions - 3 sec negative</td><td>2</td><td>10-12</td></tr>
        <tr><td>Leg Curl - 3 sec negative</td><td>2</td><td>10-12</td></tr>
        <tr><td>Seated Calf Raise - 3 sec negative</td><td>2</td><td>10-12</td></tr>
        <tr><td>Cable Crunch - 3 sec negative</td><td>3</td><td>10-12</td></tr>
        <tr><td>Cable Pull Through w/Rope</td><td>3</td><td>10-12</td></tr>
      </table>
      <h3>Upper Body Workout</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Reps</th></tr>
        <tr><td>Incline Dumbbell Bench Press</td><td>3</td><td>8-12</td></tr>
        <tr><td>Rack Deadlifts - 3" to 5" off ground</td><td>3</td><td>5-8</td></tr>
        <tr><td>Military Press</td><td>3</td><td>8-12</td></tr>
        <tr><td>Machine Chest Press - 3 sec negative</td><td>2</td><td>8-12</td></tr>
        <tr><td>Pull Ups or Machine Rows - 3 sec negative</td><td>2</td><td>8-12</td></tr>
        <tr><td>Machine Shoulder Press - 3 sec negative</td><td>2</td><td>8-12</td></tr>
        <tr><td>Dumbbell Curls - 3 sec negative</td><td>3</td><td>8-12</td></tr>
        <tr><td>Machine Tricep Dip - 3 sec negative</td><td>3</td><td>8-12</td></tr>
      </table>
      <h3>Lower Body Workout B</h3>
      <table>
        <tr><th>Exercise</th><th>Sets</th><th>Reps</th></tr>
        <tr><td>Leg Press</td><td>3</td><td>10-20</td></tr>
        <tr><td>Dumbbell Stiff Leg Deadlifts</td><td>3</td><td>8-12</td></tr>
        <tr><td>Leg Press Calf Raise</td><td>3</td><td>10-15</td></tr>
        <tr><td>Hack Squat</td><td>2</td><td>8-12</td></tr>
        <tr><td>Seated Leg Curl - 3 sec negative</td><td>2</td><td>10-12</td></tr>
        <tr><td>Seated Calf Raise - 3 sec negative</td><td>2</td><td>10-12</td></tr>
        <tr><td>Planks</td><td>3</td><td>60 sec</td></tr>
        <tr><td>Hyperextension</td><td>3</td><td>10-12</td></tr>
      </table>
    `;
    workoutPlan.classList.remove("hidden");
    workoutPlan.style.display = "block";
  });
});
