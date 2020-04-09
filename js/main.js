$(document).ready(function () {

    var indietro = $('.sinistra');
    var avanti = $('.destra');
    
       

    avanti.click(function () { 
        
        var imageSelected = $('.active');
        var nextImage = imageSelected.next();
    
    
        if (imageSelected.hasClass('active')) {
            imageSelected.removeClass('active');
            nextImage.addClass('active');
        }
    
});
        indietro.click(function () { 
             var imageSelected = $('.active');
             var prevImage = imageSelected.prev();

        if (imageSelected.hasClass('active')) {
        imageSelected.removeClass('active');
        prevImage.addClass('active');
        }

});
        
    });
    
    


















    
//END READY    

