document.getElementById('calculate').addEventListener('click', async () => {
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;
  const operator = document.getElementById('operator').value;
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
      body: JSON.stringify({ num1, num2, operator }),
    });

    const data = await response.json();

    if (response.ok) {
      resultDiv.textContent = `Result: ${data.result}`;
      resultDiv.className = '';
    } else {
      resultDiv.textContent = data.error;
      resultDiv.className = 'error';
    }
  } catch (error) {
    resultDiv.textContent = 'An error occurred';
    resultDiv.className = 'error';
  }
});