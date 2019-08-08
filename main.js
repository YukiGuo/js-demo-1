var div1 = document.createElement("div")
div1.className = "demo1"
document.body.append(div1)
var dragging = false;//设置一个开关，保证鼠标摁下的时候可以移动，松开时不能移动
var lastX
var lastY
div1.onmousedown = function (e) {
	dragging = true
	lastX = e.clientX//获取鼠标摁下时候的坐标
	lastY = e.clientY
}
document.body.onmousemove = function (e) {//此处设置主体，可以有三个，一个body(必须设置body的 height =100vh,因为div脱离文档流，body没有高度) ,一个div1(鼠标快速移动时会有bug)
	if (dragging === true) {//判断什么时候可以拖动--鼠标摁下的时候可以拖动
		var deltaY = e.clientY - lastY //获取原始坐标和现在鼠标位置的差值
		var deltaX = e.clientX - lastX
		var nowY = parseInt(div1.style.top) || 0; //获取当前鼠标的位置，只能获取内敛属性的top值，或者nan,nan时设置为0
		var nowX = parseInt(div1.style.left) || 0;
		var resultX = nowX + deltaX
		var resultY = nowY + deltaY
		if (resultX < 0) { resultX = 0 }
		if (resultY < 0) { resultY = 0 }
		div1.style.top = resultY + "px"  //根据鼠标移动的距离，设置当前的位置
		div1.style.left = resultX + "px"
		lastX = e.clientX//别忘记更新lastX的值
		lastY = e.clientY
	}
}

// }
div1.onmouseup = function () {
	dragging = false;
}
