function $c(cl) {
	return document.getElementsByClassName(cl);
}
var oBon = $c("topbon")[0];
oBon.addEventListener("click", function(ev) {
	var ev = window.event || e;
	var timeon = setInterval(function() {
		var a = document.documentElement.scrollTop;
		if (a > 0) {
			window.scrollTo(0, a - 80); //实现动画的关键
		} else {
			window.clearInterval(timeon);
		}
	}, 16);
});

window.onscroll = scrollev;
function scrollev() { //绑定scroll事件
	var t = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
	var top_div = $c("header")[0]; //查询并定义div元素
	// console.log(top_div);
	if (t > 200) { //判断
		top_div.style.background = "#000";
		top_div.style.color = "white";
		oBon.style.display = "block";
	} else {
		top_div.style.backgroundColor = " #f2f2f2";
		top_div.style.color = "black";
		oBon.style.display = "none";
	}
}
setTimeout(scrollev,0);
let i=0,j=0,k=10;
var showtime = setInterval(function() {
	var oCom=document.getElementById("community");
		if (i<=50) {
			oCom.innerHTML=i+"+";
			i++;
		} else {
			window.clearInterval(showtime);
		}
}, 16);
var showtimet = setInterval(function() {
	var oFot=document.getElementById("footstep");
		if (j<=100) {
			oFot.innerHTML=j+"+";
			j++;
		} else {
			window.clearInterval(showtimet);
		}
}, 8);

var showtimeth = setInterval(function() {
	var oSer=document.getElementById("service");
		if (k<=70) {
			oSer.innerHTML="1,"+k+parseInt(10*Math.random())+","+parseInt(1000*Math.random())+"+";
			k++;
		} else {
			window.clearInterval(showtimeth);
			oSer.innerHTML="1,700,000+";
		}
}, 20);
var oLi=$c("point")[0].getElementsByTagName("li");
var oUl=$c("carousel-inner")[0];
var oLbon=$c("left")[0].getElementsByTagName("img")[0];
var oRbon=$c("right")[0].getElementsByTagName("img")[0];
oRbon.addEventListener("click", right);
oLbon.addEventListener("click", left);
var g = 0,kai = true;
function right() {
	if (kai) {
		kai = false;
		g++;
		for(let i=0;i<oLi.length;i++){
			oLi[i].className="";
		}
		if(g<=14){
			oLi[g].className="active";
		}else{
			oLi[0].className="active";
		}
		oUl.style.transition = "all 0.5s ease";
		oUl.style.left = -(g + 1) * 1100 + "px";
		setTimeout(function() {
		if (oUl.style.left == "-17600px") {
			g = 0;
			oUl.style.transition = "none";
			oUl.style.left = -1100 + "px";
		}
		}, 500);
		setTimeout(function() {
			kai = true;
		}, 510
		);
	}
}

var timeon = setInterval(right, 1500);

allBan.onmouseover = function() {
	clearInterval(timeon);
}

allBan.onmouseout = function() {
	timeon = setInterval(right, 1500);
}

function left() {
	if (kai) {
		kai = false;
		g--;
		for(let i=0;i<oLi.length;i++){
			oLi[i].className="";
		}
		if(g>=0){
			oLi[g].className="active";
		}else{
			oLi[14].className="active";
		}
		oUl.style.transition = "all 0.5s ease";
		oUl.style.left = -(g + 1) * 1100 + "px";
		setTimeout(function() {
		if (oUl.style.left == "0px") {
			g = 14;
			oUl.style.transition = "none";
			oUl.style.left = -16500 + "px";
		}
		}, 500);
		setTimeout(function() {
			kai = true;
		}, 510);
	}
}
for(let i=0;i<oLi.length;i++){
	oLi[i].onclick=function(){
		for(let j=0;j<oLi.length;j++){
			oLi[j].className="";
		}
		oLi[i].className="active";
		oUl.style.left = -(i + 1) * 1100 + "px";
		g=i;
	}
}