$(document).ready(function () {

    var indietro = $('.sinistra');
    var avanti = $('.destra');
    
       
//RICHIAMO FUNZIONE
    avanti.click(next); 
    indietro.click(back); 
    //AVANTI E INDIETRO CON TASTIERA
    $(document).keydown(function (e) { 
        if (e.keyCode == 37) {
            back()
        } else if (e.keyCode == 39) {
            next()
        }
    });
    $(document).keydown(function (e) {
        console.log(e.keyCode);
        
    })

//CREAZIONE FUNZIONE 
function next() {
        var imageSelected = $('.active');
        var nextImage = imageSelected.next();
        imageSelected.removeClass('active');
        if (imageSelected.hasClass('last')) {
             $('.first').addClass('active');
        } else {
            nextImage.addClass('active')
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
        
    });
    

    


















    
//END READY    

