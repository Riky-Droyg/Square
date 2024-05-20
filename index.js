document.addEventListener('DOMContentLoaded', function () {
    const cube = document.querySelector('.cube');
    let isDragging = false;
    let startX, startY, currentX = 0, currentY = 0;
    
    document.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            // Забороняємо виділення тексту під час перетягування
            document.body.style.userSelect = 'none';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        // Дозволяємо виділення тексту після відпускання кнопки миші
        document.body.style.userSelect = '';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            currentX -= deltaY * 0.5; // Міняємо знак на "-" для зворотнього руху
            currentY += deltaX * 0.5;
            cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
            startX = e.clientX;
            startY = e.clientY;
        }
    });
});
