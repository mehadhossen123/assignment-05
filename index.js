
// Hire Love react Increasing section done 

const allHeart=document.getElementsByClassName('all-heart');
for(let heart of allHeart){
    heart.addEventListener('click',function(){
        const beforeLove = parseInt(   document.getElementById("before-love").innerText );
        const totalLove=beforeLove+1;
        document.getElementById("before-love").innerText=totalLove;
        
        
    })
}