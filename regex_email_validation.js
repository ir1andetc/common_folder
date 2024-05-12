var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName: "Ernest",
        lastName: "Heminguey",
        email: "lolkek@ukr.net" // Нам такі не підходять
    }
];

// Регулярний вираз для валідації електронних адрес
var emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;

// Фільтруємо масив за допомогою регулярного виразу
var trustedEmails = arr.filter(function(obj) {
    return emailRegex.test(obj.email);
}).map(function(obj) {
    return obj.email;
});

console.log(trustedEmails); // Очікуваний результат: ["test.test@gmail.com", "dmitro.porohov@yahoo.com"]
