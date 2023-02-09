const data = {
    "products": [
      {
        "id": 1,
        "name": "Холодильник",
        "category": "Техника",
        "description": "Холодильник - описание",
        "img": "https://на-скидке.бел/uploads/lotimages/633af9af47629.jpg",
        "price": 375
      },
      {
        "id": 2,
        "name": "Телевизор",
        "category": "Техника",
        "description": "Телевизор - описание",
        "img": "https://img.5element.by/import/images/ut/goods/good_95be4caf-ba5b-11ec-bb95-0050560120e8/43le7052d-televizor-horizont-2_600.jpg",
        "price": 520
      },
      {
        "id": 3,
        "name": "Микроволновая печь",
        "category": "Техника",
        "description": "Микроволновая печь - описание",
        "img": "https://img.5element.by/import/images/ut/goods/good_9aa9a192-4381-11eb-bb92-0050560120e8/cms20w-mikrovolnovaya-pech-candy-1_600.jpg",
        "price": 130
      },
      {
        "id": 4,
        "name": "Велосипед",
        "category": "Спорт",
        "description": "Велосипед - описание",
        "img": "https://thumb.tildacdn.com/tild3663-3665-4565-a633-666437346366/-/resize/480x/-/format/webp/123_1.jpg",
        "price": 850
      },
      {
        "id": 5,
        "name": "Шахматы",
        "category": "Спорт",
        "description": "Шахматы - описание",
        "img": "https://vseigrushki.by/wp-content/uploads/2020/12/d38d755de73e451fe68ff64ac2c5d63a.jpeg",
        "price": 50
      },
      {
        "id": 6,
        "name": "Душевая кабина",
        "category": "Сантехника",
        "description": "Душевая кабина - описание",
        "img": "https://sanit.by/files/catalog/products/product/8092-ER_4510TP_C4.jpg",
        "price": 560
      }
    ]
};

export const fetchProducts = (time = 1000) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, time);
    });
};
