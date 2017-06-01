// Scripts
// Store Banner Images
//var img0 = '../img/banner/hoglake.jpg';
//var img1 = '../img/banner/colechuck.jpg';
//var img2 = '../img/banner/leaf.jpeg';

// Random Number Generator
var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

// Swap Out Banner
//$('header img').attr('src', eval('img' + randNum) );

// Lightgallery
$('figure').lightGallery({
    selector: 'a', 
    mode: 'lg-rotate-rev',
    thumbnail: true
});

// Random Background
$('body').addClass( 'bg' + randNum );