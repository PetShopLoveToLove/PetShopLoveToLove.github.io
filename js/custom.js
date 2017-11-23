
var $ = function (selector) {
    return document.querySelector(selector);
  };

// google map
function initMap() {
  var uluru = {
    lat: 44.745,
    lng: 20.435
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// 'hidden nav' animation
var logo = $('.logo-holder');
var petNav = $('.pet-nav');
var petMainNav = $('.pet-main-nav');

// 'side bar' animation
var sideBarHolder = $('.pet-large-screen-side-bar-solution');
var sideBarHolderHidden = $('.pet-side-bar-holder-hidden');

//'o nama' animation
var imgAnim1 = $('.pet-img-anim1');
var txtAnim2 = $('.pet-txt-anim2');
var txtAnim3 = $('.pet-txt-anim3');
var imgAnim4 = $('.pet-img-anim4');
var spanAnim1 = $('.pet-ex-span-anim1');
var spanAnim2 = $('.pet-ex-span-anim2');

function anim() {

  // 'hidden nav' animation
  if (window.pageYOffset > 290) {
    logo.style.marginTop = '-150px';
    logo.style.transition = '1s';
    petNav.style.height = '50px';
    petNav.style.transition = '1s';
  }

  else {
    logo.style.marginTop = '0';
    logo.style.transition = '1s';
    petNav.style.height = '103px';
    petNav.style.transition = '1s';
  }
  
  // 'side bar' animation
  if (window.pageYOffset > 290) {
    sideBarHolder.style.left = '-200px';
    sideBarHolder.style.transition = '1s';

    sideBarHolderHidden.style.marginLeft = 0;
    sideBarHolderHidden.style.transition = '1.5s';
  }
  else {
    sideBarHolder.style.left = '0';
    sideBarHolder.style.transition = '1.5s';

    sideBarHolderHidden.style.marginLeft = '-43px';
    sideBarHolderHidden.style.transition = '1s';
  }
  
  //'o nama' animation
  if (window.pageYOffset > 725) { 
    imgAnim1.style.height = '302px';
    imgAnim1.style.transition = '1s';
    imgAnim1.style.bottom = '0';

    imgAnim4.style.height = '302px';
    imgAnim4.style.transition = '1s';
    imgAnim4.style.top = '0';

    txtAnim2.style.height = '302px';
    txtAnim2.style.transition = '1s';
    txtAnim2.style.bottom = '0';

    txtAnim3.style.height = '302px';
    txtAnim3.style.transition = '1s';
    txtAnim3.style.top = '0';

    spanAnim1.style.opacity = '1';
    spanAnim1.style.transition = '5s';

    spanAnim2.style.opacity = '1';
    spanAnim2.style.transition = '5s';
  }
};

document.addEventListener('scroll', anim);









