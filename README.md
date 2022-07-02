# Task

## Instalation

You can install repository in 1 command : `git clone git@github.com:Alvetron666/Task.git <directory>`

<img src="https://user-images.githubusercontent.com/38918732/176991056-b1fc0389-bc59-4bb9-8f02-d02adf181700.png" alt="git clone in practice" width="900"/>

***Second way***, it's just download code from repository. Just click button *"Code"* and *"Download ZIP"*

<img src="https://user-images.githubusercontent.com/38918732/176991231-95e15ce8-f853-49d5-95bc-889972ba0fb2.png" alt="download repository in simple way" width="900"/>

We are installed repository, and can now check code of application :)

***HTML***

In html we have a markup with tags and attributes . Everywhere we use `required`, because this required by task. In textarea we add attribute maxlength, for limit 255 
characters. In markup i am use a lot `div` for styles. Also we can use `fieldset` instead `div` , but `fieldset` how semantic tag used for group `inputs`, but we not need 
it.



***CSS***

In css wy have just styles.
`box-sizing: border-box` switch box system, this we do for comfortable development. 
Example: if by default we have `width : 400px, padding : 40px` block will be 440px in sum, buy thanking `border-box' , we have 400px(360width and 40px padding).
Also to pretefy my code, i use some rules. My code should look like :
.block {
  position
  block-model
  text(font-size, text-dec ...)
  design (background, border ...)
  animation
  other (content  ...)
}


***JS***

Everything is more interesting here :)
In top we create variable and put DOM  element in this for further manipulation 
First deal what we do, is uncheck radio button, because of its alone, we can't do this in HTML.

*Function counter :*
 In this function we check if characters less than 255 we will add to `descCounter.textContent` string.length(char quantity). But if  we have 255, we will add class `db`,
 to the error elements in DOM, and if characters we have less will remove this class.
 
 *Function optionChecker :*
 Here we check select value and if value is not equal  to "choose", we delete attribute disabled from button. Also we add function bruttoCalc, thanking this if user
 switch 19% to 21%, he can see result instantly.
 
  *Function bruttoCalc :*
  There we use rexExp for check input , and if all is ok, function calculating brutto.
  
   *Function catchBruttoError :*
   This function will catch error, if we have symbols, letters except numbers, we will show error message.
   
   *Function CloseError :*
   This function is for close error message, this error will be shown, if we have problems with sending info to API.
   
   *Function formChecker :*
   Function checks elements, and if required input is empty show error message.
   
   *Function sendData :*
   This send data to specified API and give response. If response is ok , we have on screen "SUCCESS" , but if not, we have "ERROR" modal window.
   
  
   
   In last strings we listeting events how "oninput, onclick, onsubmit"  for initializate function.
   
   Please send me opinion about my work, What skills should I spend more time ? 
   That's end :) Thank you!
   
 
 
 
 

