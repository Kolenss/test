var home = document.getElementsByClassName('home')[0];
var features = document.getElementsByClassName('features')[0];
var gallery = document.getElementsByClassName('gallery')[0];
var contact = document.getElementsByClassName('contact')[0];
var login = document.getElementsByClassName('login')[0];


var homebody = document.getElementsByClassName('home1')[0];
var featuresbody = document.getElementsByClassName('features1')[0];
var gallerybody = document.getElementsByClassName('gallery1')[0];
var contactbody = document.getElementsByClassName('contact1')[0];


home.onclick = function() {
    featuresbody.classList.add('hidden');
    gallerybody.classList.add('hidden');
    contactbody.classList.add('hidden');
    
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('home').classList.remove('hidden');
};

features.onclick = function() {
    homebody.classList.add('hidden');
    gallerybody.classList.add('hidden');
    contactbody.classList.add('hidden');
    
    document.getElementById('features').classList.remove('hidden');
};

gallery.onclick = function() {
    featuresbody.classList.add('hidden');
    homebody.classList.add('hidden');
    contactbody.classList.add('hidden');
    
    document.getElementById('gallery').classList.remove('hidden');
};

contact.onclick = function() {
    featuresbody.classList.add('hidden');
    gallerybody.classList.add('hidden');
    homebody.classList.add('hidden');
    
    document.getElementById('contact').classList.remove('hidden');
};
login.onclick = function() {
    homebody.classList.add('hidden');
    featuresbody.classList.add('hidden');
    gallerybody.classList.add('hidden');
    contactbody.classList.add('hidden');
    document.getElementById('login-popup').classList.remove('hidden');
  };
  
function toggleLoginPopup() {
    document.getElementById('login-popup').classList.add('hidden');
    homebody.classList.remove('hidden');
};