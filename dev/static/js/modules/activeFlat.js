
( function() {
    const floorWrap = document.querySelector('.house__floor-wrap');
    const floor = document.querySelectorAll( '.house__floor' );
    const houseWindows = document.querySelectorAll( '.floor__window' );
    const countFloor = document.getElementById('floor');
    
    function toClickHouse(event) {
        let target = event.target;
        let conditionFloor = target.classList.contains('house__floor');
        let conditionWindow = ( target.classList.contains('floor__window') && target.parentElement.classList.contains('house__floor') );
        
        if ( conditionFloor ) {
            cleaner.toCleanActive( floor, 'floor_active' );
            cleaner.toCleanActive( houseWindows, 'window_active' );
            target.classList.add('floor_active');
            toCountFloor();
        }
        if ( conditionWindow ) {
            cleaner.toCleanActive( floor, 'floor_active' );
            cleaner.toCleanActive( houseWindows, 'window_active' );
            target.classList.add('window_active');
            target.parentElement.classList.add('floor_active');
            toCountFloor();
            toShowPopup(target);
        }
    }

    // функция для вывода текущего этажа в поле "этаж"
    function toCountFloor() {
        for (let i = 0, j = floor.length; i < floor.length; i++, j--) {
            const element = floor[i];
            let number = j;
            if (element.classList.contains('floor_active') ) {
                countFloor.value = number;
            }
        }
    }


    // функция для показа/скрытия попап
    function toShowPopup(element) {
        const popup = document.querySelector('.popup');
        const form = document.querySelector('.house-form');
        const switchTheme = document.querySelector('.house__form-wrap');
        const closePopup = document.querySelector('.popup-close');
        

        if( element.classList.contains('active-male') || element.classList.contains('active-female') ) {

            if( element.classList.contains('filter_none') ) {
                alert('Квартира уже занята, выберите другую!');
                cleaner.toCleanActive( floor, 'floor_active' );
                cleaner.toCleanActive( houseWindows, 'window_active' );

            } else {
                toInfoPopup.addInfo(element);
                
                popup.classList.add('popup_visible');
                form.classList.add('hidden');
                switchTheme.classList.add('hidden');
            }

            
            
        } else {
            popup.classList.remove('popup_visible');
            form.classList.remove('hidden');
            switchTheme.classList.remove('hidden');
        }


        // Если кликаем по крестику, то закрываем попап и очищаем активные классы на доме.
        closePopup.onclick = function() {
            popup.classList.remove('popup_visible');
            form.classList.remove('hidden');
            switchTheme.classList.remove('hidden');

            cleaner.toCleanActive( floor, 'floor_active' );
            cleaner.toCleanActive( houseWindows, 'window_active' );
        }
    }
    // Обработка события
    floorWrap.addEventListener('click', toClickHouse);
})();
