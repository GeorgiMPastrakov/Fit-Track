function calculateScore() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    const scoreSpan = document.getElementById('score');
    let score = 0;

    const formData = new FormData(form);

    formData.forEach(value => {
        score += parseInt(value);
    });

    scoreSpan.textContent = score;
    resultDiv.style.display = 'block';

    let message = '';
    if (score >= 40) {
        message = 'Excellent! You have a very healthy lifestyle.';
    } else if (score >= 30) {
        message = 'Good job! Your lifestyle is quite healthy.';
    } else if (score >= 20) {
        message = 'Not bad, but there is room for improvement.';
    } else {
        message = 'You might want to consider making some healthier choices.';
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }