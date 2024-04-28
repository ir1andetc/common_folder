const fs = require('fs');
const path = require('node:path');

// Функція для читання JSON-файлу
function readJSONFile(fileName, callback) {
    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
            console.error("Помилка читання файлу:", error);
            return;
        }

        try {
            const object = JSON.parse(data);
            callback(object);
        } catch (error) {
            console.error("Помилка розбору JSON:", error);
        }
    });
}

// Функція для пошуку користувача за їхнім id
function findUserById(id, users) {
    return users.find(user => user.id === id);
}

// Функція для відображення інформації про користувача
function getInfo(user) {
    // Проходимося по кожній властивості об'єкта
    for (const key in user) {
        // Перевіряємо, чи це власна властивість об'єкта
        if (user.hasOwnProperty(key)) {
            // Перевіряємо, чи значення властивості є об'єктом або масивом
            if (typeof user[key] === 'object' && user[key] !== null) {
                // Якщо значення є об'єктом або масивом, виводимо його знову за допомогою рекурсії
                console.log(`${key}:`);
                getInfo(user[key]);
            } else {
                // Якщо значення не є об'єктом або масивом, виводимо пару "ключ: значення"
                console.log(`${key}: ${user[key]}`);
            }
        }
    }
}

// Вказуємо правильний шлях до unique_users.json
const filePath = path.join(__dirname, 'unique_users.json');

// Читаємо файл unique_users.json та знаходимо користувача з id '0045'
readJSONFile(filePath, (users) => {
    const user = findUserById('0045', users);
    if (user) {
        getInfo(user);
        console.log("\nОновлені дані:");
        user.gender = 'PHP software engineer'; // Змінюємо дані користувача
        getInfo(user); // Відображаємо оновлену інформацію про користувача
    } else {
        console.log("Користувач з таким id не знайдений.");
    }
});
