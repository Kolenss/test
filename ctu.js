var contentimg = document.getElementById('picture');
var login = document.getElementById('login');
var main = document.getElementById('main-container');
var form = document.getElementById('form');
var logo = document.getElementById('cclogo');

var visit = document.getElementById('visit');
var athletics = document.getElementById('athletics');
var events = document.getElementById('events');
var buildings = document.getElementById('buildings');

var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');

var about = document.getElementById('about');
var academic = document.getElementById('academic');
var hobby = document.getElementById('hobby');
var contact = document.getElementById('contact');
var loginbtn = document.getElementById('loginbtn');
var signupbtn = document.getElementById('signupbtn');
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


visit.onclick = function() {
    contentimg.style.background = "none";
    image1.src = '/pictures/centrum.jpg';
    image2.src = '/pictures/oval.jpg';
    image3.src = '/pictures/entrance.jpg';
    image4.src = '/pictures/teachers.jpg';

    image1.style.display = 'flex';
    image2.style.display = 'flex';
    image3.style.display = 'flex';
    image4.style.display = 'flex';

    document.getElementById('text1').innerHTML = "CTU Danao is set against the coastal backdrop of Danao City, offering students a refreshing blend of urban life and natural beauty. The lush greenery surrounding the campus, along with scenic views of nearby hills, creates a serene environment conducive to both study and relaxation. The nearby beaches and parks provide a perfect getaway for students after class hours.";
    document.getElementById('text2').innerHTML = "From certain vantage points on campus, students can catch glimpses of the distant hills and the shimmering sea, which provide an inspiring backdrop, especially during sunrise and sunset. The nearby beaches and parks offer a relaxing escape from academic life, allowing students to enjoy both nature and campus life in harmony.";
    document.getElementById('slider').style.animation = 'slide 12s infinite';
}

athletics.onclick = function() {
    contentimg.style.background = "none";
    image1.src = '/pictures/basket.jpg';
    image2.src = '/pictures/baseball.jpg';
    image3.src = '/pictures/volleyball.jpg';
    image4.src = '/pictures/tennis.jpg';

    image1.style.display = 'flex';
    image2.style.display = 'flex';
    image3.style.display = 'flex';
    image4.style.display = 'flex';

    document.getElementById('text1').innerHTML = "CTU Danao strongly encourages physical wellness and team spirit through its various athletic programs. The university's sports facilities include basketball courts, volleyball courts, and open fields for track and field activities, which are utilized by students for both competitive and recreational purposes.";
    document.getElementById('text2').innerHTML = "Every year, CTU Danao organizes intramural competitions, where students from different departments compete in a variety of sports. This fosters a strong sense of camaraderie, school pride, and healthy competition among students. The athletic facilities also support training for regional athletic meets, providing students with the opportunity to showcase their skills and represent the university at higher levels. Regular training sessions and workshops led by experienced coaches ensure that students develop not only their athletic abilities but also teamwork and discipline, essential traits for success in both sports and academics.";
    document.getElementById('slider').style.animation = 'slide 12s infinite';
}

events.onclick = function() {
    contentimg.style.background = "none";
    image1.src = '/pictures/yell.jpg';
    image2.src = '/pictures/parade.jpg';
    image3.src = '/pictures/rotc.jpg';
    image4.src = '/pictures/a.jpg';
    
    image1.style.display = 'flex';
    image2.style.display = 'flex';
    image3.style.display = 'flex';
    image4.style.display = 'flex';

    document.getElementById('text1').innerHTML = "The academic calendar at CTU Danao is filled with a variety of events that highlight student creativity, leadership, and innovation. One of the most anticipated events is the annual foundation day, a grand celebration where students participate in cultural performances, parades, and academic showcases.";
    document.getElementById('text2').innerHTML = "Throughout the year, the university also hosts technical exhibits, especially in its engineering and industrial technology programs, where students display their projects and innovations. Additionally, leadership workshops, student forums, and outreach programs are regularly conducted, promoting community engagement and enhancing student skills beyond the classroom. These events often attract community participation, allowing CTU Danao to strengthen its relationship with the surrounding areas and encourage student involvement in civic and cultural activities.";
    document.getElementById('slider').style.animation = 'slide 12s infinite';
}

buildings.onclick = function() {
    contentimg.style.background = "none";
    image1.src = '/pictures/cot.jpg';
    image2.src = '/pictures/engr.jpg';
    image3.src = '/pictures/main.jpg';
    image4.src = '/pictures/lib.jpg';

    image1.style.display = 'flex';
    image2.style.display = 'flex';
    image3.style.display = 'flex';
    image4.style.display = 'flex';

    document.getElementById('text1').innerHTML = "The campus features a blend of traditional and modern architecture, with buildings designed to meet the demands of the university’s specialized programs. Engineering, technology, and industrial courses benefit from state-of-the-art laboratories and workshops equipped with the latest tools and machinery for hands-on learning.";
    document.getElementById('text2').innerHTML = "The lecture halls are spacious and well-ventilated, offering a comfortable learning environment. In addition to academic buildings, the campus has designated study areas, libraries, and multi-purpose halls that serve as venues for student meetings, study groups, and larger school events. The well-maintained infrastructure reflects the university’s commitment to providing quality education and a conducive atmosphere for student activities. Furthermore, the buildings are strategically placed, ensuring that students have easy access to essential resources, promoting a balanced academic and extracurricular life on campus.";
    document.getElementById('slider').style.animation = 'slide 12s infinite';
}
