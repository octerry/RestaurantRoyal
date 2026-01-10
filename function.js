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
})