let selectedOperator = '+';

document.getElementById('calculate').addEventListener('click', async () => {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const resultDiv = document.getElementById('result');

  if (!num1 || !num2) {
    resultDiv.textContent = 'Please enter both numbers';
    resultDiv.className = 'error';
    return;
  }

  try {
    const response = await fetch('/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ num1, num2, operator: selectedOperator }),
    });

    const data = await response.json();

    if (response.ok) {
      resultDiv.textContent = `Result: ${data.result}`;
      resultDiv.className = 'success';
    } else {
      resultDiv.textContent = data.error;
      resultDiv.className = 'error';
    }
  } catch (error) {
    resultDiv.textContent = 'An error occurred';
    resultDiv.className = 'error';
  }
});

// Operator button selection
document.querySelectorAll('.operator-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove selected class from all buttons
    document.querySelectorAll('.operator-btn').forEach(b => b.classList.remove('selected'));
    // Add selected class to clicked button
    btn.classList.add('selected');
    selectedOperator = btn.dataset.op;
  });
});

// Set default selected operator
document.querySelector('.operator-btn[data-op="+"]').classList.add('selected');