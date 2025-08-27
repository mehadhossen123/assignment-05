
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
          const mainTitle = eachButton.parentNode.parentNode.children[0].innerText;
         
           const beforeCoin = parseInt(
             document.getElementById("before-coin").innerText
           );
           
            const currentCoin = beforeCoin - 20;

            if (currentCoin < 0) {
              alert(
                "You hove no sufficient coin.You need to 20 coin for  each call"
              );
              return;
            }
        
           alert(
             "📞" + " " + "Calling" + " " + title + " " + allNumber + "..."
           );


        
          document.getElementById("before-coin").innerText=currentCoin;
         
          
          
           
        //   calling story start form here 
         const time = new Date().toLocaleTimeString();
        const storyContainer = document.getElementById("story-add");
        const div=document.createElement('div');
        div.innerHTML = `
         <div class="flex justify-between py-3 px-3 items-center">
                   <div>
                     <h1 class="font-bold">${mainTitle}</h1>
                    <p>${allNumber}</p>
                   </div>
                   <p>${time}</p>

                </div>

        `;
        storyContainer.append(div);
          
         
        
    })

 }

