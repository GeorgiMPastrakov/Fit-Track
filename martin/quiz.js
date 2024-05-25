function calculateScore() 
{
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

}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
