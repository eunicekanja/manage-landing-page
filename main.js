'use strict'
const reviews=[
    {
       img:'./images/avatar-ali.png',
       name:'Ali Bravo',
       text:'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'
    },
    {
       img:'./images/avatar-anisha.png',
       name:'Anisha Li',
       text:'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.'
    },
    {
       img:'./images/avatar-richard.png',
       name:'Richard Watts',
       text:'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.'
    },
    {
       img:'./images/avatar-shanai.png',
       name:'Shanai Gough',
       text:'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!'
    },
]
//variables 
const linkContainer=document.querySelector('.linksContainer');
const linkItem=document.querySelectorAll('.link-item');
let reviewerName=document.querySelector('.reviewerName');
let reviewImage=document.querySelector('.reviewerImage');
let reviewText=document.querySelector('.review-text')
const dots=document.querySelectorAll('.dot')
const dotsContainer=document.querySelector('.dots')
const hamburger=document.querySelector('.hamburger')
let reviewNumber=0;

//functions
function changeReviewer(reviewNum){
    let current=reviews[reviewNum]
    reviewImage.src=current.img;
    reviewerName.textContent=current.name;
    reviewText.textContent=`"${current.text}"`;
}

//event listeners
//menu
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active')
    linkContainer.classList.toggle('active')
    document.body.classList.toggle('noScroll')
})

window.addEventListener('DOMContentLoaded',function(){
    changeReviewer(reviewNumber)
})

//change reviews
dotsContainer.addEventListener('click',function(e){
    e.preventDefault();
    const id=e.target.dataset.id;
    if(id){
        changeReviewer(id)
    }
})

//active  link


// linkContainer.addEventListener('click',function(e){
//     e.preventDefault()
//     linkItem.forEach(link=>{
//         link.classList.remove('active');
//         e.target.classList.add('active')
//     })
    
// })