ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
           center: [55.686980, 37.529654],
            zoom: 16,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([55.686980, 37.529654], {
            hintContent: 'Улица строителей 15',
            balloonContent: 'Магазин Девайс'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://img.icons8.com/color/48/000000/marker.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -58]
        });

    myMap.geoObjects
        .add(myPlacemark)
});