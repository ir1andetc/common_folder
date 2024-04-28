function pad(string, symbol, count, addToStart) {
    // Перевірка на валідність вхідних даних
    if (typeof string !== 'string' || typeof symbol !== 'string' || typeof count !== 'number' || typeof addToStart !== 'boolean') {
        throw new Error('Некоректні вхідні дані. Усі аргументи мають бути відповідного типу.');
    }

    // Перевірка на невід'ємність кількості символів для додавання
    if (count < 0) {
        throw new Error('Кількість символів для додавання повинна бути не менше нуля.');
    }

    // Перевірка, чи рядок вже має достатню довжину
    if (string.length >= count) {
        return string; // Якщо так, повертаємо рядок без змін
    }

    // Обчислення кількості символів, які потрібно додати
    const symbolsToAdd = count - string.length;
    // Створення рядка з необхідною кількістю символів
    const padding = symbol.repeat(symbolsToAdd);

    // Вибір напрямку додавання символів: на початок або в кінець
    if (addToStart) {
        return padding + string; 
    } else {
        return string + padding; 
    }
}

// Виведення даних:
try {
    const paddedString = pad('qwerty', '§', 10, true);
    console.log(paddedString); // Виведе: "§§§§qwerty"
} catch (error) {
    console.error('Сталася помилка:', error.message); 
    // У випадку pad('qwerty', '§', one, true) отрімаємо помілку
}
