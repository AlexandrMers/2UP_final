let toInfoPopup = (function() {
    const name = document.querySelector('.popup__title-name');
    const icon = document.querySelector('.popup__icon');
    const genderInf = document.querySelector('.info_gender');
    const rooms = document.querySelector('.info_rooms');
    const people = document.querySelector('.info_people');
    const floor = document.querySelector('.info_floor');
    const additional = document.querySelector('.info_additional');


    return {

        addInfo: function(current) {
            let count = current.getAttribute('data-count');
            
            name.innerText = objectResidents[count]['name'];
            
            // добавляем иконку в попап в зависимости от пола и в текстовое поле
            if( objectResidents[count]['gender'] == 'мужской' ) {
                icon.classList.remove('popup__icon_female');
                icon.classList.add('popup__icon_male');
                genderInf.innerText = 'мужской';
            } else if( objectResidents[count]['gender'] == 'женский' ) {
                icon.classList.remove('popup__icon_male');
                icon.classList.add('popup__icon_female');
                genderInf.innerText = 'женский';
            }

            rooms.innerText = objectResidents[count]['rooms'];
            people.innerText = objectResidents[count]['people'];
            floor.innerText = objectResidents[count]['floor'];
            
            const arrFromAdditional = objectResidents[count]['additional'];
            const arrayInfo = ['Домашние животные  ', '  ТВ' , '  Интернет'];

            additional.innerText = '';
            arrFromAdditional.some(function(item, i) {
                if( item === true) {
                    additional.innerText += arrayInfo[i];
                }
            });
           
        }

    }
}());