const resultElement = document.getElementById('result');

async function translateText() {
const url = 'https://text-translator2.p.rapidapi.com/translate';
const options = {
    method: 'POST',
    headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'd7b1fb6ca8msh05b66b74da6f812p1daa04jsna547c25aaf25',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: new URLSearchParams({
    source_language: 'auto',
    target_language: 'id',
    text: 'What is your name?'
    })
};

try {
    const response = await fetch(url, options);
    const { data } = await response.json();
    resultElement.innerHTML = data.translations[0].translated_text;
} catch (error) {
    resultElement.innerHTML = 'Ocurrió un error al traducir el texto';
}
}

translateText();