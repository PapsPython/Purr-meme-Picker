import { catsData } from './data.js';

const emotionsArray = []
const radioedEmotion = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById("get-image-btn")
const memeModal = document.getElementById("meme-modal")
const memeModalInner = document.getElementById("meme-modal-inner")
const gifsOnlyOption = document.getElementById("gifs-only-option")
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")
 

// show me the list of emotions to choose from

//organize list of emotions for easy manipulation 
for (let cat of catsData) {
  for (let emotion of cat.emotionTags) {
    if (!emotionsArray.includes(emotion))
      emotionsArray.push(emotion)
  }
}


//render emotions into the div in the html
let html = ""
for (let feeling of emotionsArray) {
  html +=
    `
   <div class="radio">
     <label for="${feeling}">${feeling}</label>
     <input type="radio" name ="chosen-item" id ="${feeling}" value 
       ="${feeling}" >
   </div>
   `
  radioedEmotion.innerHTML = html
}

//highlight the button that is clicked
radioedEmotion.addEventListener("click",highlightRadioBtn)

function highlightRadioBtn(e) {
const radioArray = document.getElementsByClassName("radio")
 for(let radioBtn of radioArray){
   radioBtn.classList.remove('highlight')
 } 
  document.getElementById(e.target.id).parentElement.classList.add("highlight")
  getImageBtn.textContent = "Get Image"
}

//click the getImage button
 getImageBtn.addEventListener("click",function(){
  
  
   //how do i find selected button 
   // i  know the target id. however i am clicking the get image button not the radiio button 
   if(document.querySelector('input[type="radio"]:checked')){
     
     const selectedRadio = document.querySelector('input[type="radio"]:checked').value
     const isGif = gifsOnlyOption.checked
     const  moodArray = catsData.filter(cat => (isGif === true) ? cat.emotionTags.includes(selectedRadio) && cat.isGif :  cat.emotionTags.includes(selectedRadio)
     )
       
    // iterate over moodArray to randomly choose an index to show.
     const randomindex =(moodArray.length === 1) ? 0 : Math.floor(Math.random()*moodArray.length) 
     const selectedOutput = moodArray[randomindex]
     //not using an if else statement because of moodArray.length counting 
     
     memeModal.style.setProperty("display","flex")
     memeModalInner.innerHTML = 
    `<img 
    src="images/${selectedOutput.image}"
     alt = "${selectedOutput.alt}"
    >
   `
   }  else{
      getImageBtn.textContent = "Select An Emotion Above"
   }
})

memeModalCloseBtn.addEventListener("click",function(){
  memeModal.style.setProperty("display","none")
})




//FAILED ATTEMPTS 

//I tried to declare  DOCUMENT.QUERYSELECTOR[INPUT[TYPE="RADIO"]:CHECKED] as a variable at the top of script.js.
// it didn't work because :checked occurs after the highlight fxn. Declaring   DOCUMENT.QUERYSELECTOR[INPUT[TYPE="RADIO"]:CHECKED] after highlight fxn works 


 // if(isGif){ THIS THREW AN ERROR  REEALLY DUNNOO WHY
     // const moodArray = catsData.filter(cat => cat.emotionTags.includes(selectedRadio) && cat.isGif)
     // }else{
     // const moodArray = catsData.filter(cat => cat.emotionTags.includes(selectedRadio))
     // }

//USING E.TARGET ID INSTEAD OF ]
// because e.target.id requires that an event occur on the radio button and there
  //isn't a convenient way to connect e.target.id. JS however can specifically grab the checked input.
   //e.target.id === input[type=radio]:checked. Difference is JS has to listen for one, search through html for the other


//Trying to use forEach to double iterate
//catsData.forEach(cats => cats.emotionTags)
//emotions.forEach(emotion => emotionsArray.push(emotion))
//console.log(emotions)
