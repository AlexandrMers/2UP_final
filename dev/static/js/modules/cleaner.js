    // Модуль, отвечающий за очистку активных классов, служащих для обозначения выбора текущего этажа и квартиры
  let cleaner = (function() {

        return {
            toCleanActive : function(object, classEl) {
                for (let elem of object) {
                    elem.classList.remove(classEl);
                }
            }
        }
    }());
 
    // Модуль, отвечающий за очистку активных классов, служащих для обозначения выбора текущего этажа и квартиры
// **********************************************************
