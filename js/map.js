ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
           center: [55.686980, 37.529654],
            zoom: 16,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([55.686980, 37.529654], {
            hintContent: 'Улица строителей 15',
            balloonContent: 'Магазин Девайс'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://img.icons8.com/color/48/000000/marker.png',
            iconImageSize: [48, 48],
            iconImageOffset: [-15, -58]
        });

    myMap.geoObjects
        .add(myPlacemark)
});

