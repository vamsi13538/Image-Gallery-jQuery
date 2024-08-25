$(document).ready(function(){
    // Defining the click funciton for navbar links
    $('.navUl a').on('click', function(){
        // Toggling current class to highlight the selected section
        $('nav li.current').removeClass('current');
        $(this).parent().addClass('current');

        $('.galleryHeading h2').text($(this).text())
    });


    // Toggling color to highlight the selected section on clicking the hamburger list 
    $('.navUlBars a').on('click', function(){

        $('.navUlBars a').css({color: 'white'});
        $(this).css({color: 'green'});

        $('.galleryHeading h2').text($(this).text())
    });

    // Filtering the images on the selected category
    function filterImages(filter){
        if(filter === 'all-projects'){
            $('.galleryImage').fadeOut(200, function(){
                $(this).addClass('visible').fadeIn(200);
            });
        }else{
            $('.galleryImage').fadeOut(200, function(){
                $(this).removeClass('visible');
                if($(this).hasClass(filter)){
                    $(this).addClass('visible').fadeIn(200);
                }
            });
        }
    }

    // Initial display of all images
    filterImages('all-projects');

    // Click event for navbar links
    $('.navbarLink a').on('click', function(e) {
        e.preventDefault();
        var filter = $(this).text().toLowerCase().replace(' ', '-');
        filterImages(filter);
    });

    // Adding slidingtoggle animation on clcing the hamburgericon
    $('.fa-bars').on('click', function(){
        $('.navUlBars').slideToggle(1000);
    })
});
