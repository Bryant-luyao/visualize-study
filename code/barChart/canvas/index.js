const data = [
  { name: "questions", value: 17 },
  { name: "schools", value: 25 },
  { name: "philosophers", value: 35 },
];

const chartWidth = 480; // 图表宽度
const chartHeight = 300; // 图表高度
const margin = 15; // 边距
const containerWidth = chartWidth + margin * 2; // 容器宽度
const containerHeight = chartHeight + margin * 2; // 容器高度

const names = Array.from(data, (item) => item.name)
const values = Array.from(data, (item) => item.value)
const indices = Array.from(data, (_, i) => i)

// 计算每一个条左下顶点的横坐标
// 位置和在数组里面的 index 有关
const step = chartWidth / names.length
const barWidth = step * 0.8
const xs = Array.from(indices, (i) => i * step)

// 计算每一个条左下顶点的纵坐标
// 因为所有条底部都是对齐的，所以就是图表的高度
const y = chartHeight

// 获得每一个条的高度
// 条的高度应该和 value 线性相关的
const maxValue = Math.max(...values) // 取到最大值
const barHeights = Array.from(values, (v) => chartHeight * (v / maxValue)) // 计算出每条高度


// 获得每一个条的颜色
const nameColor = {
  questions: "#5B8FF9",
  philosophers: "#61DDAA",
  schools: "#65789B",
};

const colors = Array.from(names, (name) => nameColor[name]) // 取对应颜色

const canvas = document.getElementById('canvas')
canvas.style.width = containerWidth + 'px';
canvas.style.height = containerHeight + 'px';

// 下面把画布宽高设置为样式宽高的两倍主要是为了解决模糊问题
// canvas 绘制的大小不会随屏幕像素比变化而变化，所以会出现模糊问题
canvas.width = containerWidth * 2;
canvas.height = containerHeight * 2;

const ctx = canvas.getContext('2d')
// 抵消将画布宽高设置为样式宽高两倍的影响
ctx.scale(2, 2)
// 将坐标原点移动到绘制图表的区域
ctx.translate(margin, margin)

// 绘制柱状图
for (const i of indices) {
    
    const x = xs[i]
    const barHeight = barHeights[i]
    const value = values[i]
    const color = colors[i]

    ctx.fillStyle = color;
    ctx.fillRect(x, y - barHeight, barWidth, barHeight)
    console.log('color', x, y - barHeight, barWidth, barHeight);
    

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.font = "25px PingFangSC-Regular, sans-serif";
    ctx.fillText(value, x + barWidth / 2, y - barHeight / 2)
}
