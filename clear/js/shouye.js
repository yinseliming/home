function $c(cl) {
	return document.getElementsByClassName(cl);
}
var allBan = $c("lunbo")[0];
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

//第一个tab切换部分
var oAn = $c("unslider-arrow");
var oBli = $c("tabone_cont")[0].getElementsByTagName("ul");
var oTli = $c("dots")[0].getElementsByTagName("li");
oAn[1].onclick = tboneright;
oAn[0].onclick = tboneleft;
var x = 0,
	kai = true;

function tboneright() {
	if (kai) {
		kai = false;
		x++;
		oBli[0].style.left = -1280 * (x + 1) + "px";
		oBli[0].style.transition = "all ease 1s";
		if (x == oTli.length) {
			x = 0;
		}
		for (let j = 0; j < oTli.length; j++) {
			oTli[j].className = "dot";
		}
		oTli[x].className = "dot dactive";
		setTimeout(function() {
			if (x == 0) {
				oBli[0].style.transition = "none";
				oBli[0].style.left = -1280 + "px";
			}
			kai = true;
		}, 1000);
	}
}

function tboneleft() {
	if (kai) {
		kai = false;
		x--;
		oBli[0].style.left = -1280 * (x + 1) + "px";
		oBli[0].style.transition = "all ease 1s";
		if (x == -1) {
			x = oTli.length - 1
		}
		for (let j = 0; j < oTli.length; j++) {
			oTli[j].className = "dot";
		}
		oTli[x].className = "dot dactive";
		setTimeout(function() {
			if (x == oTli.length - 1) {
				oBli[0].style.transition = "none";
				oBli[0].style.left = -3840 + "px";
			}
			kai = true;
		}, 1000);
	}
}

for (let i = 0; i < oTli.length; i++) {
	oTli[i].onclick = function() {
		x = i;
		for (let j = 0; j < oTli.length; j++) {
			oTli[j].className = "dot";
		}
		oTli[i].className = "dot dactive";
		oBli[0].style.transition = "all ease 1s";
		oBli[0].style.left = -1280 * (i + 1) + "px";
	}
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
	// console.log(top_div)
	if (t > 200) { //判断
		top_div.style.backgroundColor= "#000";
		top_div.style.color = "white";
		oBon.style.display = "block";
	} else {
		top_div.style.backgroundColor = " #f2f2f2";
		top_div.style.color = "black";
		oBon.style.display = "none";
	}
}
setTimeout(scrollev,0);
