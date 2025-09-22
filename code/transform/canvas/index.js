const canvas = document.getElementById('canvas')

// 设置 canvas 的样式宽高
// 样式宽高决定了 canvas 在画布上呈现的大小
canvas.style.width = 400 + "px";
canvas.style.height = 200 + "px"

canvas.width = 400
canvas.height = 200

const ctx = canvas.getContext('2d')

ctx.fillStyle = 'red'; // 设置填充颜色
ctx.fillRect(0, 0, 50, 50); // 绘制填充部分

ctx.fillStyle = 'blue'
ctx.translate(50, 50)
ctx.rotate(-Math.PI / 6)
ctx.scale(2, 3)
ctx.fillRect(0, 0, 50, 50)

