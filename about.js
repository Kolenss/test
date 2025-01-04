var albion = document.getElementById('albion');
var about = document.getElementById('about');
var academic = document.getElementById('academic');
var hobby = document.getElementById('hobby');
var contact = document.getElementById('contact');
var iframe = document.getElementById('iframe');


var cat = document.getElementById('catsimg');
var random = document.getElementById('randomimg');
var mp3 = document.getElementById('mp3img');
var check = document.getElementById('check');
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

check.onclick = function(){
    document.getElementById('cats').classList.remove('hidden');
    document.getElementById('random').classList.remove('hidden');
    document.getElementById('mp3').classList.remove('hidden');
    document.getElementById('dice').classList.add('hidden');
}

cat.onclick = function(){
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('main').classList.add('hidden');
    document.getElementById('iframe').classList.remove('hidden');
    document.body.style.height = "100vh";
    document.getElementById('header').style.height = "6%";
    document.getElementById('footer').style.height = "6%";

}
random.onclick = function(){
    document.getElementById('cats').classList.add('hidden');
    document.getElementById('random').classList.add('hidden');
    document.getElementById('mp3').classList.add('hidden');
    document.getElementById('dice').classList.remove('hidden');
}
mp3.onclick = function(){
    windows.location.href = ""
}
