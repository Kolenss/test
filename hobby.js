var albion = document.getElementById('albion');
var about = document.getElementById('about');
var academic = document.getElementById('academic');
var hobby = document.getElementById('hobby');
var contact = document.getElementById('contact');
var cclogo = document.getElementById('cclogo');


cclogo.onclick = function(){
    window.location.href = "index.html";
}


about.onclick = function(){
    window.location.href = "aboutunfinish.html";
}
academic.onclick = function(){
    window.location.href = "ctu.html";
}
hobby.onclick = function(){
    window.location.href = "hobbyunfi.html";
}
contact.onclick = function(){
    window.location.href = "contact.html";
}

albion.onclick = function() {
    const image = document.getElementById('me');
    const video = document.getElementById('albionvid');

    image.classList.toggle('hidden');
    video.classList.toggle('hidden');

    if(image.classList.contains('hidden')){
        video.play();
        video.muted = false;
    }
    else{
        video.pause();
        video.muted = true;
    }
};

