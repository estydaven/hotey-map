// Скрипт табов

(function tabs($) {
	$(function () {
	
	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
		  .addClass('active').siblings().removeClass('active')
		  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
	
	});
	})(jQuery);

// Скрипт карты и маркеров

ymaps.ready(init);           
            
function init () {

	$('#tabs');

	var center1 = [55.7995988293779, 37.54119678836058];
	var myMap = new ymaps.Map('map-rus', {
		center: center1, 
		zoom: 16
	});

	var center2 = [53.86510657069037, 27.524272499999977];
	 var myMap2 = new ymaps.Map('map-blr', {
		center: center2, 
		zoom: 16
	});

	var center3 = [50.47051707299949, 30.519620008598245];
	myMap3 = new ymaps.Map('map-ua', {
		center: center3, 
		zoom: 16
	});

	var center4 = [54.697626, 25.266975];
	myMap4 = new ymaps.Map('map-ltu', {
		center: center4, 
		zoom: 16
	});

	var center5 = [56.95844098295402, 24.121345966270425];
	myMap5 = new ymaps.Map('map-lva', {
		center: center5, 
		zoom: 16
	});
	
	var center6 = [50.11046036410496, 14.515222169044497];
	myMap6 = new ymaps.Map('map-cze', {
		center: center6, 
		zoom: 16
	});
   
	$('#tabs').bind('tabsshow', function (event, ui) {
		myMap.container.fitToViewport();
	});

// маркеры карт

var myPlacemark1 = new ymaps.Placemark(center1, {
	hintContent: 'Hotey Technology Company'
}, {
	iconLayout: 'default#image',
	iconImageHref: 'img/Placemark.png',
	iconImageSize: [58, 56],
});

var myPlacemark2 = new ymaps.Placemark(center2, {
	hintContent: 'Hotey Technology Company'
}, {
	iconLayout: 'default#image',
	iconImageHref: 'img/Placemark.png',
	iconImageSize: [58, 56],
});
var myPlacemark3 = new ymaps.Placemark(center3, {
hintContent: 'Hotey Technology Company'
}, {
	iconLayout: 'default#image',
	iconImageHref: 'img/Placemark.png',
	iconImageSize: [58, 56],
});
var myPlacemark4 = new ymaps.Placemark(center4, {
hintContent: 'Hotey Technology Company'
}, {
	iconLayout: 'default#image',
	iconImageHref: 'img/Placemark.png',
	iconImageSize: [58, 56],
});
var myPlacemark5 = new ymaps.Placemark(center5, {
hintContent: 'Hotey Technology Company'
}, {
	iconLayout: 'default#image',
	iconImageHref: 'img/Placemark.png',
	iconImageSize: [58, 56],
});
var myPlacemark6 = new ymaps.Placemark(center6, {
hintContent: 'Hotey Technology Company'
}, {
	iconLayout: 'default#image',
	iconImageHref: 'img/Placemark.png',
	iconImageSize: [58, 56],
});
myMap.geoObjects.add(myPlacemark1);
myMap2.geoObjects.add(myPlacemark2);
myMap3.geoObjects.add(myPlacemark3);
myMap4.geoObjects.add(myPlacemark4);
myMap5.geoObjects.add(myPlacemark5);
myMap6.geoObjects.add(myPlacemark6);
}
