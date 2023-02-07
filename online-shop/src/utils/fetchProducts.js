const data = {
    "products": [
      {
        "id": 1,
        "name": "Холодильник",
        "category": "Техника",
        "description": "Холодильник - описание",
        "img": "https://img.5element.by/import/images/ut/goods/good_7329f5e5-5e4a-11ec-bb94-0050560120e8/rb37a52n0b1-wt-holodilnik-samsung-1_600.jpg",
        "price": 375
      },
      {
        "id": 2,
        "name": "Телевизор",
        "category": "Техника",
        "description": "Телевизор - описание",
        "img": "https://www.maunfeld.by/upload/slam.image/iblock/d5a/4bm1dpj09otkq87wnmuv0xdl48hvxdlj/1000_1000_1/Maunfeld-MLT32HSX02_01_-90.png",
        "price": 520
      },
      {
        "id": 3,
        "name": "Микроволновая печь",
        "category": "Техника",
        "description": "Микроволновая печь - описание",
        "img": "https://images.deal.by/316599248_mikrovolnovaya-pech-bbk.jpg",
        "price": 130
      },
      {
        "id": 4,
        "name": "Велосипед",
        "category": "Спорт",
        "description": "Велосипед - описание",
        "img": "http://service.volkswagen.ru/eshop/uploads//items/41a889f37ea187065638053d0fb3d316e28c6261.jpg",
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


  export const fetchProducts = (time=1000) => { 
        return new Promise((res) => {
            setTimeout(() => {
                res(data);
            },time);
        });
  };