$(document).ready(function () {

    var indietro = $('.sinistra');
    var avanti = $('.destra');

//PER PALLINI MENU


    
       
//RICHIAMO FUNZIONE
    avanti.click(next); 
    avanti.click(nextPoint);
    indietro.click(back); 
    indietro.click(prevPoint);

    //AVANTI E INDIETRO CON TASTIERA
    $(document).keydown(function (e) { 
        if (e.keyCode == 37) {
            back();
        } else if (e.keyCode == 39) {
            next()
        }
    });

    $(document).keydown(function (e) { 
        if (e.keyCode == 37) {
            prevPoint();
        } else if (e.keyCode == 39) {
            nextPoint();
        }
    });
    

//CREAZIONE FUNZIONE 
function next() {
        var imageSelected = $('.active');
        var nextImage = imageSelected.next();

        
        imageSelected.removeClass('active');
        
        if (imageSelected.hasClass('last')) {
             $('.first').addClass('active');
             
        } else {
            nextImage.addClass('active');
            
        }
  }

function back() {
    var imageSelected = $('.active');
    var prevImage = imageSelected.prev();
    
    
    imageSelected.removeClass('active')
    

    if (imageSelected.hasClass('first')) {
        $('.last').addClass('active');
        
    } else {
        prevImage.addClass('active')
        
    }
}

//Funzione per pallino
function nextPoint() {
    //seleziono primo pallino 
    var primo = $('.green');
    var succ = primo.next();
    primo.removeClass('green');

    if (primo.hasClass('ultimo')) {
        $('.primo').addClass('green');
    } else {
        succ.addClass('green')
    }

}
function prevPoint() {
    //seleziono primo pallino 
    var primo = $('.green');
    var prev = primo.prev();
    primo.removeClass('green');

    if (primo.hasClass('primo')) {
        $('.ultimo').addClass('green');
    } else {
        prev.addClass('green')
    }

}
   
    }); //END 
    

    


















   

