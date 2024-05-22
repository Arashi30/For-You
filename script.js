document.getElementById('change').addEventListener('click', function() {
    hideButtons();
    document.getElementById('text').innerHTML = '';
});

document.getElementById('change2').addEventListener('click', function() {
    hideButtons();
    document.getElementById('text').innerHTML = '';
});

function hideButtons() {
    document.getElementById('change').style.display = 'none';
    document.getElementById('change2').style.display = 'none';
}

document.getElementById('change').style.display = 'none';
document.getElementById('change2').style.display = 'none';
document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('change').style.display = 'inline-block';
    document.getElementById('change2').style.display = 'inline-block';
    document.getElementById('text').innerHTML = 'Which one do you prefer? Fireworks or Flowers?';
    
    document.getElementById('yes').style.display = 'none';
});
