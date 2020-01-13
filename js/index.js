const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const title = document.querySelector('h1');
title.textContent = siteContent["cta"]["h1"];

const linksbar = document.querySelectorAll('a');
linksbar[0].textContent = siteContent["nav"]["nav-item-1"];
linksbar[1].textContent = siteContent["nav"]["nav-item-2"];
linksbar[2].textContent = siteContent["nav"]["nav-item-3"];
linksbar[3].textContent = siteContent["nav"]["nav-item-4"];
linksbar[4].textContent = siteContent["nav"]["nav-item-5"];
linksbar[5].textContent = siteContent["nav"]["nav-item-6"];

const button = document.querySelector(".cta-text button");
button.textContent = siteContent["cta"]["button"];

const mainContH4 = document.querySelectorAll('.text-content h4');
mainContH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContH4[4].textContent = siteContent["main-content"]["vision-h4"];

const mainP = document.querySelectorAll('p');
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
contactP[0].innerText = siteContent['contact']['address'];
contactP[1].innerText = siteContent['contact']['phone'];
contactP[2].innerText = siteContent['contact']['email'];

const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];