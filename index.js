
// Hire Love react Increasing section done 

const allHeart=document.getElementsByClassName('all-heart');
for(let heart of allHeart){
    heart.addEventListener('click',function(){
        const beforeLove = parseInt(   document.getElementById("before-love").innerText );
        const totalLove=beforeLove+1;
        document.getElementById("before-love").innerText=totalLove;
        
        
    })
}



// Button and alert and calling function is here 
const allButton = document.getElementsByClassName("all-button");
 for(let eachButton  of allButton ){
    eachButton.addEventListener('click',function(){
         const title=eachButton.parentNode.parentNode.children[1].innerText;
        
          const allNumber = eachButton.parentNode.parentNode.children[2].innerText;
          
          alert('📞'+"Calling"+title+allNumber+'...');
          
          const beforeCoin = parseInt(
            document.getElementById("before-coin").innerText
          );
           
          
          
         
        
    })

 }

