function readMore() {
    var dots = document.getElementById('dots');
    var more = document.getElementById('more');
    var btn = document.getElementById('btn');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btn.innerHTML = 'Читать всё';
        more.style.display = 'none';
    }
    else {
        dots.style.display = 'none';
        btn.innerHTML = 'Скрыть';
        more.style.display = 'block';
    }
}

window.onscroll = function() {
    let up = document.getElementById('scrollUp');

    if(document.documentElement.scrollTop > 200) {
        up.style.display = 'block';
    }
    else {
        up.style.display = 'none';
    }
    
}


var modal = document.getElementById('modalCom');
var btn = document.getElementById('myBtn');

btn.onclick = function(){
    modal.style.display = 'block';
};

$(document).ready(function() {
    $('.bottom-btn').magnificPopup();
});

$(document).ready(function() {
    $('#lightgallery').lightGallery( {
        showThumbByDefault: false,
        thumbnail: false,
    } );
});

