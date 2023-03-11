# Purr-meme-Picker
Allows  users express emotions  using  cat images and gifs


//FAILED ATTEMPTS 

/1/ I tried to declare  DOCUMENT.QUERYSELECTOR(INPUT[TYPE="RADIO"]:CHECKED) as a variable at the top of script.js.
it didn't work because /:CHECKED/ occurs after the highlight function. Declaring DOCUMENT.QUERYSELECTOR[INPUT[TYPE="RADIO"]:CHECKED] after highlight function works. This error reinforced a new learning I made whilst building the cookie consent app.


/2/USING E.TARGET.ID INSTEAD OF DOCUMENT.QUERYSELECTOR[INPUT[TYPE="RADIO"]:CHECKED]
  because e.target.id requires that an event occur on the radio button and there isn't a convenient way to connect e.target.id. JS however can specifically grab the       checked input.
  Difference is JS has to listen for one,whilst searching through html for the other.
  
  
UNRESOLVED FAILED ATTEMPTS 

/3/ if(isGif){   THIS THREW AN ERROR saying moodArray wasnt defined
       const moodArray = catsData.filter(cat => cat.emotionTags.includes(selectedRadio) && cat.isGif)
       }else{
       const moodArray = catsData.filter(cat => cat.emotionTags.includes(selectedRadio))
      }
      
/4/ Trying to use forEach to double iterate // still trying to figure this out.
//catsData.forEach(cats => cats.emotionTags)
//emotions.forEach(emotion => emotionsArray.push(emotion))
//console.log(emotions)

NEW LEARNING
An alternative to listening for the element that an event occurred on, is to seek an element in the HTML bearing the direct/expected consequences of the event.   

 

