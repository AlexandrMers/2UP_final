let windowActiveFromLocalStorage = (function(){

    return {
        toActive: function(i, element) {
            if( i == 0 || i && element ) {

                element.setAttribute('data-count', i);

                if( objectResidents[i]['gender'] == 'мужской' ) {
                    element.classList.remove('active-male');
                    element.classList.add('active-male');
                } else if( objectResidents[i]['gender'] == 'женский' ) {
                    element.classList.remove('active-female');
                    element.classList.add('active-female');
                }

            } else {
                const windows = document.querySelectorAll('.floor__window');
             
                for (let i in objectResidents) {

                    windows[+i].setAttribute('data-count', i);

                    if (objectResidents.hasOwnProperty(i)) {
                        
                        if( objectResidents[i]['gender'] == 'мужской') {
                            windows[+i].classList.remove('active-male');
                            windows[+i].classList.add('active-male');
                        } 
                        if (objectResidents[i]['gender'] == 'женский' ) {
                            windows[+i].classList.remove('active-female');
                            windows[+i].classList.add('active-female');
                        }
                        
                    }
                }
            }
        }
    }

}());


(function() {

    if( localStorage.length > 0 ) {
        
        for (let i = 0; i < localStorage.length; i++) {
 
          let key = JSON.parse(localStorage.key(i));
          let value = JSON.parse(localStorage.getItem(key));
          
          objectResidents[key] = value;

        }

        windowActiveFromLocalStorage.toActive(); // Если localStorage не пустой, тогда запускаем функцию, добавляющую информацию о жильцах

    } 

}());