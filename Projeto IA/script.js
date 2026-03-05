window.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn-analisar');
    const textarea = document.getElementById('user-text');
    const resultDiv = document.querySelector('.result-area .result');

    function analisarTexto(texto) {
        const lower = texto.toLowerCase();
        if (!texto.trim()) return 'neutro';
        const positivos = ['bom', 'ótimo', 'feliz', 'alegre', 'adoro', 'excelente'];
        const negativos = ['ruim', 'horrível', 'triste', 'ódio', 'péssimo', 'zangado'];

        for (let p of positivos) {
            if (lower.includes(p)) return 'positivo';
        }
        for (let n of negativos) {
            if (lower.includes(n)) return 'negativo';
        }
        return 'neutro';
    }

    button.addEventListener('click', () => {
        const texto = textarea.value;
        const sentimento = analisarTexto(texto);

        resultDiv.className = `result ${sentimento}`;
        resultDiv.textContent = sentimento.charAt(0).toUpperCase() + sentimento.slice(1);
    });
});