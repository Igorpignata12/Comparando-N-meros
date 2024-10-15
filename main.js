function validateNumbers(e) {
    e.preventDefault(); 

    const numA = parseFloat(document.getElementById('numA').value);
    const numB = parseFloat(document.getElementById('numB').value);
    const resultElement = document.getElementById('result');

    resultElement.classList.remove('error', 'success');

    if (isNaN(numA) || isNaN(numB)) {
        resultElement.innerHTML = 'Por favor, insira valores válidos.';
        resultElement.classList.add('error');
    } else if (numA > numB) {
        resultElement.innerHTML = `${numA} é maior que ${numB}, o formulário não pôde ser enviado!`;
        resultElement.classList.add('error');
    } else if (numA < numB) {
        resultElement.innerHTML = `${numA} é menor que ${numB}, o formulário pôde ser enviado com sucesso!`;
        resultElement.classList.add('success');
    } else {
        resultElement.innerHTML = `${numA} é igual a ${numB}.`;
        resultElement.classList.add('error');
    }
}

function setupFormListener() {
    const form = document.getElementById('numberForm');
    form.addEventListener('submit', validateNumbers); 
}

setupFormListener();