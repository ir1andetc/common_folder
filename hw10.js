function checkProbabilityTheory(count) {
    let min = 100;
    let max = 1000;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        // Генеруємо випадкове число в діапазоні від min до max
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        // Перевіряємо, чи є число парним чи непарним
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Обчислюємо відсоткове співвідношення парних до не парних
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    // Виводимо інформацію
    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", evenPercentage.toFixed(2) + "%", "до", oddPercentage.toFixed(2) + "%");
}

// Приклад використання:
checkProbabilityTheory(1000);
