( function() {

    const nameInput = document.getElementById('name');
    const floor = document.getElementById('floor');
    const rooms = document.getElementById('count-room');
    const people = document.getElementById('count-people');
    const btnForm = document.getElementById('button-form');
    const form = document.getElementById('add-resident');

    let valueName = nameInput.value;
    let valueFloor = floor.value;


    function onInputName(event) {
        let newValue = event.target.value;
        if(newValue.match(/[^a-zA-Zа-яА-Я\s]/g) ) {
            nameInput.value = valueName;
            return;
        }
        valueName = newValue;
    }

    function onInputFloor(event) {
        let newValue = event.target.value;
        if(newValue.match(/[^a-zA-Zа-яА-Я\s]/g) ) {
            floor.value = valueFloor;
            return;
        }
        valueFloor = newValue;
    }
    
    function toAddAndValidResident(e) {

        let validName = nameInput.checkValidity();
        let validFloor = floor.checkValidity();
        let validRooms = rooms.checkValidity();
        let validPeople = people.checkValidity();

        if ( validName && validFloor && validRooms && validPeople ) {
            e.preventDefault();

            if( document.getElementsByClassName('window_active').length ) {

                ToaddResident.toAdd(objectResidents); //Вызов глобальной функции для добавления персонажа и информации о нем.
                
                filter.toChangeData(); // Запускаем рендер фильтра, чтобы проверить попадает ли добавленный персонаж под условия фильтра
             

                form.reset();

            } else {
                alert('Выберите квартиру');
            }

            
        }
    };  
    
    nameInput.addEventListener('input', onInputName);
    floor.addEventListener('input', onInputFloor);
    
    btnForm.addEventListener('click', toAddAndValidResident);
}());