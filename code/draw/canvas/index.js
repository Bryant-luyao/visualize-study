const canvas = document.getElementById('canvas')

// 设置 canvas 的样式宽高
// 样式宽高决定了 canvas 在画布上呈现的大小
canvas.style.width = 400 + "px";
canvas.style.height = 200 + "px"

canvas.width = 400
canvas.height = 200

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'red'; // 设置填充颜色
ctx.strokeStyle = 'yellow'; // 边框颜色
ctx.lineWidth = 10; // 边框线宽度
ctx.strokeRect(0, 0, 100, 100); // 绘制边框
ctx.fillRect(5, 5, 95, 95); // 绘制填充部分

// 绘制文字
ctx.fillStyle = "black"; // 设置文字的颜色
ctx.font = "25px PingFangSC-Regular, sans-serif"; // 设置文字的大小和字体
ctx.fillText('hello world', 150, 100)
