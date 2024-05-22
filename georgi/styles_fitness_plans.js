const pplBtn = document.querySelector(".ppl-btn");
const ulBtn = document.querySelector(".ul-btn");
const workoutPlan = document.querySelector(".workout-plan");
const planDetails = document.querySelector(".plan-details");

pplBtn.addEventListener("click", function () {
  planDetails.innerHTML = `
    <h3>Push (Chest, Shoulders, Triceps)</h3>
    <ul>
        <li>Bench Press (3 sets of 8-12 reps)</li>
        </ul>
    <h3>Pull (Back, Biceps)</h3>
    <ul>
        <li>Pull-ups (3 sets to failure) OR Lat Pulldown (3 sets of 8-12 reps)</li>
        </ul>
    <h3>Legs & Core</h3>
    <ul>
        <li>Squats (3 sets of 8-12 reps)</li>
        </ul>
  `;
  workoutPlan.classList.remove("hidden");
});

ulBtn.addEventListener("click", function () {
  planDetails.innerHTML = `
    <h3>Upper Body (Chest, Back, Shoulders, Biceps, Triceps)</h3>
    <ul>
        <li>Bench Press (3 sets of 8-12 reps)</li>
        </ul>
    <h3>Lower Body (Legs & Core)</h3>
    <ul>
        <li>Squats (3 sets of 8-12 reps)</li>
        </ul>
  `;
  workoutPlan.classList.remove("hidden");
});
