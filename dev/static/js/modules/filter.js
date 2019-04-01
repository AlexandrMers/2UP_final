let filter =  ( function() {

    const windows = document.querySelectorAll('.floor__window');
    const male = document.querySelector('#gender-male-filter');
    const female = document.querySelector('#gender-female-filter');
    const countRoom = document.querySelector('#select-room-filter');
    const checkPets = document.querySelector('#check-pets-filter');
    const checkTv = document.querySelector('#check-tv-filter');
    const checkInternet = document.querySelector('#check-internet-filter');
    const countFloor = document.querySelector('#count-floor-filter');

    const btnFilter = document.querySelector('#btn-filter');



    male.addEventListener('input', function() {
        filter.toChangeData();
    });

    female.addEventListener('input', function() {
        filter.toChangeData();
    });

    countRoom.addEventListener('input', function() { 
        filter.toChangeData();
    });

    countFloor.addEventListener('input', function() {
        filter.toChangeData();
    });

    checkPets.addEventListener('input', function() {
        filter.toChangeData();
    });

    checkInternet.addEventListener('input', function() {
        filter.toChangeData();
    });

    checkTv.addEventListener('input', function() {
        filter.toChangeData();
    });


    btnFilter.addEventListener('click' , function() {
        filter.toChangeData('default');
    });


    return {
        toChangeData : function(categories) {
            if( categories == 'default' ) {

                for (let i = 0; i < windows.length; i++) {
                    let element = windows[i];
    
                    if(element.getAttribute('data-count')) {
                    element.classList.remove('filter_none');
                    }
    
                }


            } else {
                this.toRenderFilter(categories);
            }


        
        },
        toRenderFilter : function() {
      

                for (let i = 0; i < windows.length; i++) {
                    let element = windows[i];

                    if(element.getAttribute('data-count')) {
                    element.classList.add('filter_none');
                    }

                }
        
                const elemFilterNone = document.querySelectorAll('.filter_none');
                const genderCheck = document.querySelectorAll('.add-resident__radio[name="gender-filter"]');
                const checkbox = [checkPets.checked, checkTv.checked, checkInternet.checked];
                

                for (const active of genderCheck) {
                    
                    if(active.checked) {
                        var gender = active.value;
                        break;
                    } else {
                        var gender = "";
                    }
                }
                

                for (let i = 0; i < elemFilterNone.length; i++) {
                    let element = elemFilterNone[i];
                    let count = element.getAttribute('data-count');
                    let objectOriginal = objectResidents[count];
                    

                    if(checkbox[0] || checkbox[1] || checkbox[2]) {
                        var additionalVal = true;  
                    } else {
                        var additionalVal = false;
                    }
                    
                    
                if (  

                        (objectOriginal['gender'] == gender || gender == '') && 
                        (objectOriginal['rooms'] == countRoom.value || countRoom.value == '') && 
                        (objectOriginal['floor'] == countFloor.value || countFloor.value == '')

                    ) {
                        
                        if (additionalVal) {

                            if (

                                objectOriginal['additional'][0] == checkbox[0] &&
                                objectOriginal['additional'][1] == checkbox[1] &&
                                objectOriginal['additional'][2] == checkbox[2]
                                
                                ) {

                                    element.classList.toggle('filter_none');

                                }
                        }
                        else {
                            element.classList.toggle('filter_none');
                        }
                    
                    }
        

                }

            }
        
    }


}());