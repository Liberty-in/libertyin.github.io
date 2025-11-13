// Базовые JavaScript функции
document.addEventListener('DOMContentLoaded', function() {
    console.log('Портфолио загружено!');
    
    // Простая функция для демонстрации
    function showWelcomeMessage() {
        const now = new Date();
        const hours = now.getHours();
        let greeting;
        
        if (hours < 12) greeting = "Доброе утро!";
        else if (hours < 18) greeting = "Добрый день!";
        else greeting = "Добрый вечер!";
        
        console.log(greeting + " Добро пожаловать в мое портфолио.");
    }
    
    showWelcomeMessage();
});