 
document.getElementById("shop").style.visibility = "hidden"
document.getElementById("shop-exit").style.visibility = "hidden"
document.getElementById("shop-item-1").style.visibility = "hidden"

var increaser=1
  var num=99
  
  function moneyClicker() {   
  	num+=increaser;
  	document.getElementById("demo").innerHTML = num;
  	
  	if(num==100)
  	{
  		document.getElementById("shop").style.visibility = "visible";
  	}
  }

var keyShop=0;
function shop() {	
	
	if((keyShop % 2)!=0)
		{
			document.getElementById("shop").style.visibility = "visible";
			document.getElementById("shop-item-1").style.visibility = "hidden" ;
			document.getElementById("shop-exit").style.visibility = "hidden";
		}
	else
		{
			document.getElementById("shop").style.visibility = "hidden";
			document.getElementById("shop-item-1").style.visibility = "visible";	
			document.getElementById("shop-exit").style.visibility = "visible";
		}
	
  document.getElementById("ok").innerHTML = keyShop;
	keyShop+=1;
}

function sair(){
			document.getElementById("shop").style.visibility = "visible";
			document.getElementById("shop-item-1").style.visibility = "hidden" ;
			document.getElementById("shop-exit").style.visibility = "hidden";
}