// Gera uma quantidade específica de flocos de neve
function createSnowflakes(amount) {
    const container = document.getElementById('snow-container');

    for (let i = 0; i < amount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        container.appendChild(snowflake);

        // Posiciona aleatoriamente cada floco de neve
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        snowflake.style.left = `${randomX}px`;
        snowflake.style.top = `${randomY}px`;
    }
}

// Chama a função para criar os flocos de neve
createSnowflakes(50); // Ajuste a quantidade conforme necessário
