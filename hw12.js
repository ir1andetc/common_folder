var services = {
    "FE Engineer": 1000,        
    "BE Engineer": 1200,        
    "QA Engineer": 1500         
  };
  
  // Додати нового спеціаліста та їх вартість
  services['DevOps'] = 2000;
  services['Project Manager'] = 800;
  
  // Метод для обчислення загальної вартості наданих спеціалістів
  function price() {
    var totalPrice = 0;
    // Пройтися по кожному спеціалісту і додати їх вартість до загальної суми
    for (var service in services) {
      totalPrice += services[service];
    }
    return totalPrice;  // Повернути загальну вартість
  }
  
  // Метод для знаходження мінімальної вартості серед наданих спеціалістів
  function minPrice() {
    var min = Infinity;
    // Пройтися по кожному спеціалісту і знайти мінімальну вартість
    for (var service in services) {
      if (services[service] < min) {
        min = services[service];
      }
    }
    return min;  // Повернути мінімальну вартість
  }
  
  // Метод для знаходження максимальної вартості серед доступних спеціалістів
  function maxPrice() {
    var max = -Infinity;
    // Пройтися по кожному специалисту і знайти максимальну вартість
    for (var service in services) {
      if (services[service] > max) {
        max = services[service];
      }
    }
    return max;  // Повернути максимальну вартість
  }
  
  // Перевірка результатів
  console.log("Загальна вартість спеціалістів: " + price() + " грн");
  console.log("Мінімальна вартість спеціаліста: " + minPrice() + " грн");
  console.log("Максимальна вартість спеціаліста: " + maxPrice() + " грн");