 function calculateSum() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            document.getElementById('result').textContent = `Result: ${num1 + num2}`;
        }
