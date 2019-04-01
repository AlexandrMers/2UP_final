let ToaddResident = (function() {

    const inputName = document.getElementById('name');
    const inputGenderMale = document.getElementById('gender-male');
    const inputGenderFemale = document.getElementById('gender-female');
    const inputFloor = document.getElementById( 'floor' );
    const inputCountRoom = document.getElementById('count-room');

    const inputAddPets = document.getElementById('check-pets');
    const inputAddTv = document.getElementById('check-tv');
    const inputAddInternet = document.getElementById('check-internet');

    const inputCountPeople = document.getElementById('count-people');  
    const btnForm = document.getElementById('button-form');

    const windowsHouse = document.querySelectorAll('.floor__window');
    const floor = document.querySelectorAll('.house__floor');

    // Глобальная функция для добавления информации из формы в требуемую квартиру
    return {
        toAdd: function(object) {
            const arr = Array.prototype.slice.call(windowsHouse); // делаем из псевдомассива обычный массив.

            arr.forEach( function(item,i) {

                if(item.classList.contains('window_active') ) {

                    object[i] = {
                        'name' : inputName.value,
                        'gender' : inputGenderMale.checked ? inputGenderMale.value : inputGenderFemale.value,
                        'floor' : inputFloor.value,
                        'rooms' : inputCountRoom.value,
                        'people' : inputCountPeople.value,
                        'additional' : [inputAddPets.checked, inputAddTv.checked , inputAddInternet.checked ]
                    };

                    localStorage.setItem( i, JSON.stringify(object[i]) );

    
                    windowActiveFromLocalStorage.toActive( i, item );

                    cleaner.toCleanActive( windowsHouse, 'window_active' );
                    cleaner.toCleanActive( floor, 'floor_active' );
                } 
            });
        }
    }

} () );