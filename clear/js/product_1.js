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



var allBan = $c("p_lunbo")[0];
var oBan = $c("banner")[0].getElementsByTagName("img");
var oLi = $c("point")[0].getElementsByTagName("li");
//   点击右侧
var g = 0;

function lbright() {
	g++;
	if (g == oBan.length) {
		g = 0;
	}
	for (let j = 0; j < oBan.length; j++) {
		oLi[j].style.backgroundColor = "";
		oBan[j].style.opacity = "0";
	}
	oLi[g].style.backgroundColor = "#42a29b";
	oBan[g].style.opacity = "1";
}

for (let i = 0; i < oLi.length; i++) {
	oLi[i].onclick = function() {
		for (let j = 0; j < oBan.length; j++) {
			oLi[j].style.backgroundColor = "";
			oBan[j].style.opacity = "0";
		}
		oLi[i].style.backgroundColor = "#42a29b";
		oBan[i].style.opacity = "1";
		g = i;
	}
}
// 计时器,移入框体中断,移出则启动计时器
var timeon = setInterval(lbright, 4000);

allBan.onmouseover = function() {
	clearInterval(timeon);
}

allBan.onmouseout = function() {
	timeon = setInterval(lbright, 4000);
}