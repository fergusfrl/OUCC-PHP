
// Opens alert during development
$('#development').click(function(){
  alert("The link you are trying to reach is under developmet! Stay tuned for more.\nHave fun, look good, stay safe.");
});

// Changes name on click
$('h1').click(function(){
  var o = ['Organically', 'Openly', 'Opressingly', 'Optionily', 'Ostracised', 'Organised', 'Official'];
  var u = ['Using', 'Underating', 'Undulating', 'Unexpected', 'Uplifting', 'Unappealing', 'Unopposed'];
  var firstC = ['Celestrial', 'Candied', 'Candid', 'Crazy', 'Captivating', 'Cultish'];
  var lastC = ['Camels', 'Centaurs', 'Charmeleons', 'Children', 'Catapults', 'Catapillers', 'Cats', 'Carrots'];
  var a = Math.floor(Math.random() * o.length);
  var b = Math.floor(Math.random() * u.length);
  var c = Math.floor(Math.random() * firstC.length);
  var d = Math.floor(Math.random() * lastC.length);

  var str = o[a] + " " + u[b] + " " + firstC[c] + " " + lastC[d];
  $('#title').html('<span class="primary-text">' + str + '</span>');
});

// Creates slideshow
var images = new Array('img/slideshow/bluff.jpg', 'img/slideshow/hollyford.jpg', 'img/slideshow/Mavora.jpg', 'img/slideshow/taieri.jpg');
var captions = new Array('Citreon | Kawarau', 'Falls Creek | Hollyford', 'Makarora | Mavora Lakes', 'Pipeline | Taieri');
// Starts at random photo
var index = Math.floor(Math.random() * images.length);
var dots = document.getElementsByClassName('dot');

var timer = '';

startSlideShow(index);

// Changes photo when dot is clicked
function changeIndex(j){
  // Removes extra class names from dots
  for(var k = 0; k < dots.length; k++){
    dots[k].className = dots[k].className.replace(' active', '');
  }
  // Clears timeout variable so slideshow starts again
  clearTimeout(timer);
  startSlideShow(j);
}

// Slideshow that loops through photos in images
function startSlideShow(i){
  // Shades in the correct dot
  if(i >= images.length){
    i = 0;
    dots[dots.length-1].className = dots[dots.length-1].className.replace(' active', '');
  }
  if(i > 0){
    dots[i-1].className = dots[i-1].className.replace(' active', '');
  }
  dots[i].className += ' active';
  // Changes photo caption
  $('#caption').fadeOut(function(){
    $(this).text(captions[i++]).fadeIn();
  });
  // Changes backgroud image
  $('.pimg2')
  .css('background-image', 'url("' + images[i] + '")')
  .fadeIn(2000, function(){
    timer = setTimeout(function(){
      startSlideShow(i);
    }, 15000);
  });
}
