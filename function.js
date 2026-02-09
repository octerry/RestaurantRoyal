//ON RECUPERE LES ELEMENTS NECESSAIRES
let buttonToPresentation = document.getElementById('goto_presentation');
let buttonToRules = document.getElementById('goto_rules');
let buttonToCrowdfunding = document.getElementById('inner3');
let buttonToThanks = document.getElementById('goto_thanks');
let buttonToCredits = document.getElementById('goto_credits');

let presentationRepresentation = document.getElementById('section_presentation');
let crowdfundingRepresentation = document.getElementById('section_footer')
let thanksRepresentation = document.getElementById('title')
let creditsRepresentation = document.getElementById('credits_scrollref')

let couvercleBoite = document.getElementById('couvercle_boite')

const circle = document.querySelector('.circle');

function init() {
    scene = new THREE. Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);

    hlight = new THREE.AmbientLight (0x404040,100);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body. appendChild(renderer.domElement);
};


//BOUTONS DU SOMMAIRE REACTIF
function goTo (scrollValueGoal) {
    window.scrollTo({
        top: scrollValueGoal,
        behavior: "smooth"
    })
}

buttonToPresentation.addEventListener('click', function() {
    goTo(presentationRepresentation.offsetTop)
});

buttonToRules.addEventListener('click', function() {
    goTo(presentationRepresentation.offsetTop)
});

buttonToCrowdfunding.addEventListener('click', function() {
    goTo(crowdfundingRepresentation.offsetTop)
})

buttonToThanks.addEventListener('click', function() {
    goTo(thanksRepresentation.offsetTop)
})

buttonToCredits.addEventListener('click', function() {
    goTo(credits_scrollref.offsetTop)
})


//ANIMATION BOITE TRAILER
couvercleBoite.addEventListener('click', function() {
    this.classList.add('changed')
})

window.addEventListener('scroll', function() {
    if (this.scrollY > (couvercleBoite.offsetTop) || this.scrollY < (couvercleBoite.offsetTop - this.innerHeight/1.5) ) {
        couvercleBoite.classList.remove('changed')
    }

    if (this.scrollY > 0) {
        circle.style.opacity = '0'
    } else {
        circle.style.opacity = '1'
    }
})

//"SCROLL ME" CERCLE QUI SUIS
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  circle.style.left = `${mouseX}px`;
  circle.style.top = `${mouseY}px`;
});