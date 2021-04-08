$(document).ready(function(){
	start=document.getElementById('start');
	arr=[["./images/img1.png","chandni chowk to china"],["./images/img2.png","saat khoon maaf"],["./images/img3.png","house full"]
	,["./images/img4.png","no one killed jessica"],["./images/img5.png","udtaa punjab"],["./images/img6.png","student of the year"]
	,["./images/img7.png","mr india"],["./images/img8.png","garam masala"],["./images/img9.png","rockstar"],["./images/img10.png","dil dhadakne do"]];
	x = Math.floor((Math.random() * 10));
	console.log(x);
	start.addEventListener("click",()=>{
		
		str="";
		
		str=`
		<div class="image">
			<img src="${arr[x][0]}">
		</div>
		<div class="ans">
			<h3> Note:- Write answer in Lower case 	</h3>
			<input type="text" id="ans" >
		</div>
		<div class="submit">
			<button type="button" id="submit"><b>Submit</b></button>
		</div>
		`;
		// console.log(str);
		replace=document.getElementById('main');
		replace.innerHTML=str;
	
		submit=document.getElementById('submit');
		submit.addEventListener("click",()=>{
			ans=document.getElementById('ans');
			ans=ans.value;
			if(ans==arr[x][1]){
				str=""
				str=`
				<div class="final">
					<h1>VICTORY !</h1>
					<p>Congrats you won!<br> but if u wanna try again then just click on the button</p>
				</div>
				<div class="again">
					<button type="button"><a href="index.html">Play Again</a></button>
				</div>
				`;
				replace=document.getElementById('main');
				replace.innerHTML=str;
			}else{
				str=""
				str=`
				<div class="final">
					<h1>BETTER LUCK NEXT TIME !</h1>
					<h2>Answer is - ${arr[x][1]}.</h2>
					<p>Don't lose hope<br> just try again by clicking on the button</p>
				</div>
				<div class="again">
					<button type="button"><a href="index.html">Play Again</a></button>
				</div>
				`;
				replace=document.getElementById('main');
				replace.innerHTML=str;

			}

		});
		
	});
	
	



});