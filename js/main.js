$(document).ready(function () {

    var indietro = $('.sinistra');
    var avanti = $('.destra');
    
       

    avanti.click(function () { 
        
        var imageSelected = $('.active');
        var nextImage = imageSelected.next();
        imageSelected.removeClass('active');
    
        if (imageSelected.hasClass('last')) {
             $('.first').addClass('active');
        } else {
            nextImage.addClass('active')
        }
    
});
        indietro.click(function () { 
             var imageSelected = $('.active');
             var prevImage = imageSelected.prev();
             imageSelected.removeClass('active')

        if (imageSelected.hasClass('first')) {
            $('.last').addClass('active');
        } else {
            prevImage.addClass('active')
        }

});
        
    });
    
    


















    
//END READY    

