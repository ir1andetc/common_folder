const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(companyName, company, parentCompany = null, foundCompanies = []) {
    try {
        // Перевіряємо, чи JSON валідний
        if (typeof company === 'string') {
            JSON.parse(company); // Перевірка на помилки при розпарсюванні
        }

        // Перевіряємо, чи це шукана компанія
        if (company.name === companyName) {
            foundCompanies.push({ company, parentCompany });
        }

        // Перевіряємо, чи є підкомпанії або партнери
        const entities = [...(company.clients || []), ...(company.partners || [])];
        
        // Сортуємо масив об'єктів за назвою або createdAt, якщо властивість доступна
        entities.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            if (a.createdAt && b.createdAt) return a.createdAt - b.createdAt;
            return 0;
        });
        
        for (const entity of entities) {
            // Рекурсивно викликаємо findValueByKey для кожного клієнта або партнера
            findValueByKey(companyName, entity, company, foundCompanies);
        }

        // Повертаємо масив знайдених компаній
        return foundCompanies;
    } catch (error) {
        console.error('Помилка в процесі пошуку:', error);
        return null; // Повертаємо null у випадку помилки
    }
}

const result = findValueByKey('Клієнт 1.1', company);
if (result && result.length > 0) {
    console.log('Знайдені компанії:');
    result.forEach(({ company: companyInfo, parentCompany }) => {
        console.log('Інформація про компанію:', companyInfo);
        if (parentCompany !== null) {
            if (parentCompany.type !== 'subCompany') {
                console.log('Інформація про батьківську компанію:');
                console.log('  name:', parentCompany.name);
                console.log('  type:', parentCompany.type);
                switch (true) {
                    case parentCompany.platform !== undefined && parentCompany.sellsSolution !== undefined:
                        console.log('  platform:', parentCompany.platform);
                        console.log('  sellsSolution:', parentCompany.sellsSolution);
                        break;
                    case parentCompany.uses !== undefined && parentCompany.sells !== undefined:
                        console.log('  uses:', parentCompany.uses);
                        console.log('  sells:', parentCompany.sells);
                        break;
                    default:
                        console.log('  Немає інформації про платформу, рішення для продажу, використання або продаж');
                }
            }
        } else {
            console.log('Це останній об\'єкт в ієрархії.');
        }
    });
} else {
    console.log('Компанії не знайдено.');
}
