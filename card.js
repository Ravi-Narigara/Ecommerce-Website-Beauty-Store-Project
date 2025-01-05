let cartdiv = document.querySelector(".cart-div");
let main = document.querySelector(".main-div");
let trend = document.querySelector(".trend");
let heroDiv = document.querySelector(".hero-div");
let blogs = document.querySelector(".blog");
let dilvry = document.querySelector(".dilivery-div");
let card2 = document.querySelector(".crd2");
let cart_div = document.querySelector(".card_div");
let cart_div2 = document.querySelector(".card_div2");

let shopAlls = document.querySelector(".shop_all");

let makeupAlls = document.querySelector(".makeup_all");

// let cart_div2 = document.querySelector(".card_div2");

let cardSection = document.querySelector(".card_section");

function shopalls() {
  main.style.display = "flex";
  cartdiv.style.display = "none";
  trend.style.display = "none";
  heroDiv.style.display = "none";
  blogs.style.display = "none";
  dilvry.style.display = "none";
  crd.style.display = "none";
  cardSection.style.display = "none";
  shopAlls.style.display = "none";
  makeupAlls.style.display = "none";

}

function makups() {
  main.style.display = "flex";
  cartdiv.style.display = "none";
  trend.style.display = "none";
  heroDiv.style.display = "none";
  blogs.style.display = "none";
  dilvry.style.display = "none";
  crd.style.display = "none";
  cardSection.style.display = "none";
  shopAlls.style.display = "none";
  makeupAlls.style.display = "none";


}

// function skins() {
//   main.style.display = "flex";
//   cartdiv.style.display = "none";
//   trend.style.display = "none";
//   heroDiv.style.display = "none";
//   blogs.style.display = "none";
//   dilvry.style.display = "none";
//   crd.style.display = "none";
//   cardSection.style.display = "none";
//   shopAlls.style.display = "none";


// }

function servicess() {
  main.style.display = "flex";
  cartdiv.style.display = "none";
  trend.style.display = "none";
  heroDiv.style.display = "none";
  blogs.style.display = "none";
  dilvry.style.display = "none";
  crd.style.display = "none";
  cardSection.style.display = "none";
  shopAlls.style.display = "none";
  makeupAlls.style.display = "none";


}

function abouts() {
  main.style.display = "flex";
  cartdiv.style.display = "none";
  trend.style.display = "none";
  heroDiv.style.display = "none";
  blogs.style.display = "none";
  dilvry.style.display = "none";
  crd.style.display = "none";
  cardSection.style.display = "none";
  shopAlls.style.display = "none";
  makeupAlls.style.display = "none";

}

function contects() {
  main.style.display = "flex";
  cartdiv.style.display = "none";
  trend.style.display = "none";
  heroDiv.style.display = "none";
  blogs.style.display = "none";
  dilvry.style.display = "none";
  crd.style.display = "none";
  cardSection.style.display = "none";
  shopAlls.style.display = "none";
  makeupAlls.style.display = "none";

  


}

function show(img) {
  let newImg = document.getElementById("newImg");
  console.log(img);

  newImg.src = img.src;

  main.style.display = "none";
  cartdiv.style.display = "none";
  trend.style.display = "none";
  heroDiv.style.display = "none";
  blogs.style.display = "none";
  dilvry.style.display = "none";
  // shopAlls.style.display = "none";


  document.querySelector(".card_section").style.display = "flex";
  document.querySelector(".cart_div").style.display = "flex";

}

function image(img) {
  let newImg = document.getElementById("newImg");
  console.log(img);
   newImg.src = img.src;

  // main.style.display = "none";
  // cartdiv.style.display = "none";
  // trend.style.display = "none";
  // heroDiv.style.display = "none";
  // blogs.style.display = "none";
  // dilvry.style.display = "none";
  shopAlls.style.display = "none";
  // makeupAlls.style.display = "none";


  document.querySelector(".card_section").style.display = "flex";
  document.querySelector(".cart_div").style.display = "flex";

}

function show1(img) {
  let newImg = document.getElementById("newImg");
  console.log(img);
   newImg.src = img.src;

  // main.style.display = "none";
  // cartdiv.style.display = "none";
  // trend.style.display = "none";
  // heroDiv.style.display = "none";
  // blogs.style.display = "none";
  // dilvry.style.display = "none";
  // shopAlls.style.display = "none";
  // makeupAlls.style.display = "none";
  makeupAlls.style.display = "none";



  document.querySelector(".card_section1").style.display = "flex";
  document.querySelector(".cart_div").style.display = "flex";

}

// function imag2(img) {
//   let newImg2 = document.getElementById("newImg2");
//   console.log(img);
//    newImg2.src = img.src;

//   // main.style.display = "none";
//   // cartdiv.style.display = "none";
//   // trend.style.display = "none";
//   // heroDiv.style.display = "none";
//   // blogs.style.display = "none";
//   // dilvry.style.display = "none";
//   shopAlls.style.display = "none";


//   document.querySelector(".card_section").style.display = "flex";
//   document.querySelector(".cart_div2").style.display = "flex";

// }

function addcart() {
  alert("Added To Cart");
  location.reload();
}

function buynow() {
  location.reload();
}

// function show(cardtext){
//   let cardtext = document.getElementById("cardtext");
//   console.log(cardtext);

//   cardtext = text;

//   // main.style.display = "none";
//   //   cartdiv.style.display = "none";
//   //   trend.style.display = "none";
//   //   heroDiv.style.display = "none";
//   //   blogs.style.display = "none";
//   //   dilvry.style.display = "none";

// }


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayTimeout:3000,
  dots:false,

  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

AOS.init();
