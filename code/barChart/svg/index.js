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

function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}

const svg = document.getElementById("container-svg");
// 设置 svg 的坐标原点和大小
svg.setAttribute('width', containerWidth)
svg.setAttribute('height', containerHeight)
svg.setAttribute('viewBox', [0, 0, containerWidth, containerHeight])

// 创建一个 g 元素用于平移
const g = createSVGElement('g')
g.setAttribute('transform', `translate(${margin}, ${margin})`)
svg.appendChild(g)


// 绘制柱状图
for (const i of indices) {
    // 取得对应的属性
    const x = xs[i]
    const barHeight = barHeights[i]
    const value = values[i]
    const color = colors[i]

   // 绘制条 坐标，宽高
   const rect = createSVGElement('rect')
   rect.setAttribute('width', barWidth)
   rect.setAttribute('height', barHeight)
   rect.setAttribute('x', x)
   rect.setAttribute('y', y - barHeight)
   rect.setAttribute('fill', color)
   g.appendChild(rect)

    // 绘制值
    const text = createSVGElement('text')
    text.textContent = value;
    text.setAttribute('fill', 'white')
    text.setAttribute('font-family', "PingFangSC-Regular, sans-serif")
    text.setAttribute('font-size', 25)
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("alignment-baseline", "middle");
    text.setAttribute("x", x + barWidth / 2);
    text.setAttribute("y", y - barHeight / 2);
    g.appendChild(text)

}
