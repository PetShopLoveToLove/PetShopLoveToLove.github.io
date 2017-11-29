
var $ = selector => document.querySelector(selector);

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

function animLogoSideBarOnama() {

  // 'lg screen' hidden nav' animation
  if (window.innerWidth > 991 && window.pageYOffset > 50) {
    logo.style.marginTop = '-150px';
    logo.style.opacity = '0.3';
    logo.style.transition = '1s';
    petNav.style.height = '50px';
    petNav.style.transition = '1s';
  }

  else if(window.innerWidth>991){
    logo.style.marginTop = '0';
    logo.style.opacity = '1';
    logo.style.transition = '1s';
    petNav.style.height = '103px';
    petNav.style.transition = '1s';
  }

  // 'lg screen side bar' animation
  if (window.pageYOffset > 15) {
    sideBarHolder.style.left = '-200px';
    sideBarHolder.style.transition = '1s';

    sideBarHolderHidden.style.opacity = '1';
    sideBarHolderHidden.style.marginLeft = 0;
    sideBarHolderHidden.style.transition = '1.8s';
  }
  else {
    sideBarHolder.style.left = '0';
    sideBarHolder.style.transition = '1.5s';

    sideBarHolderHidden.style.opacity = '0';
    sideBarHolderHidden.style.marginLeft = '-53px';
    sideBarHolderHidden.style.transition = '1s';
  }

  //'o nama' animation
  if (window.pageYOffset > 550) {
    imgAnim1.style.height = '100%';
    imgAnim1.style.width = '100%';
    imgAnim1.style.transition = '1s';
    imgAnim1.style.bottom = '0';

    imgAnim4.style.height = '100%';
    imgAnim4.style.width = '100%';
    imgAnim4.style.transition = '1s';
    imgAnim4.style.top = '0';

    txtAnim2.style.height = '100%';
    txtAnim2.style.transition = '1s';
    txtAnim2.style.bottom = '0';

    txtAnim3.style.height = '100%';
    txtAnim3.style.transition = '1s';
    txtAnim3.style.top = '0';

    spanAnim1.style.opacity = '1';
    spanAnim1.style.transition = '5s';

    spanAnim2.style.opacity = '1';
    spanAnim2.style.transition = '5s';
  }
};

var sideBarNotOnama = $('.pet-side-bar-holder-hidden-not_o_nama');

function animHiddenSideBarNotOnamaPages() {

// 'hidden not_o_nama nav' animation
  if (window.pageYOffset > 100) {
    sideBarNotOnama.style.marginLeft = '0';
    sideBarNotOnama.style.transition = '1s';
  }
  else {
    sideBarNotOnama.style.marginLeft = '-60px';
  }
};

var hiddenLogo = $('.pet-hidden-logo-img');

function hiddenLogoShow() {

  if (window.innerWidth > 991 && window.pageYOffset > 150) {
    hiddenLogo.style.opacity = '1';
    hiddenLogo.style.transition = '1.5s';
  }
  else {
    hiddenLogo.style.opacity = '0';
    hiddenLogo.style.transition = '1s';
  }
};


document.addEventListener('scroll', animLogoSideBarOnama);
document.addEventListener('scroll', hiddenLogoShow);
document.addEventListener('scroll', animHiddenSideBarNotOnamaPages);
