var intro = document.getElementsByClassName('intro')[0];
var breeds = document.getElementsByClassName('breeds')[0];
var tips = document.getElementsByClassName('tips')[0];
var facts = document.getElementsByClassName('facts')[0];
var introbody = document.getElementsByClassName('1')[0];
var breedsbody = document.getElementsByClassName('2')[0];
var tipsbody = document.getElementsByClassName('3')[0];
var factsbody = document.getElementsByClassName('4')[0];

intro.onclick = function() {
    breedsbody.classList.add('hidden');
    tipsbody.classList.add('hidden');
    factsbody.classList.add('hidden');
    
    document.getElementById('intro').classList.remove('hidden');
};

breeds.onclick = function() {
    introbody.classList.add('hidden');
    tipsbody.classList.add('hidden');
    factsbody.classList.add('hidden');
    
    document.getElementById('breeds').classList.remove('hidden');
};

tips.onclick = function() {
    introbody.classList.add('hidden');
    breedsbody.classList.add('hidden');
    factsbody.classList.add('hidden');
    
    document.getElementById('care').classList.remove('hidden');
};

facts.onclick = function() {
    introbody.classList.add('hidden');
    tipsbody.classList.add('hidden');
    breedsbody.classList.add('hidden');
    
    document.getElementById('fun-facts').classList.remove('hidden');
};

function toggleLoginPopup() {
    const popup = document.getElementById('login-popup');
    
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'flex';
    }
}
