const fs = require('fs');
const path = require('path');

// Function to read a JSON file
function readJSONFile(fileName, callback) {
    fs.readFile(fileName, 'utf8', (error, data) => {
        if (error) {
            console.error("Error reading file:", error);
            return;
        }

        try {
            const object = JSON.parse(data);
            callback(object);
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    });
}

// Function to find a user by their id
function findUserById(id, users) {
    return users.find(user => user.id === id);
}

// Function to display user information
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

// Specify the correct path to unique_users.json
const filePath = path.join(__dirname, 'unique_users.json');

// Read the unique_users.json file and find the user with number '0045'
readJSONFile(filePath, (users) => {
    const user = findUserById('0045', users);
    if (user) {
        getInfo(user);
        console.log("\nОновлені дані:");
        user.gender = 'PHP software engineer'; // Modify the user data
        getInfo(user); // Display updated user information
    } else {
        console.log("User with such number not found.");
    }
});
