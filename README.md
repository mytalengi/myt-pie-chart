# myt-pie-chart
Simple pie chart library with D3

# How to use:

- include <code>scripts/d3.js</code> and <code>scripts/mytPieChart.js</code>
- create a new instance of the pie chart as example below
- <code> var pie = mytPieChart.newChart(); </code>
- set pie data with <code> pie.setData(data) </code>
- data format: [{
  name: string,
  value: int,
  bgColor: string,
  color: string
}]
- set width with <code> pie.setWidth(width) </code>
- set height with <code> pie.setHeight(height) </code>
- set containerId with <code> pie.setContainerId(containerId) </code>
  
  ContainerID must be passed else the chart won't display properly.

- set chart id with <code> pie.setId(id) </code>

  Id required for proper display of tooltips.

- display the chart with <code> pie.draw() </code>
- if you want to redraw the chart simply call <code> pie.draw() </code> again
- examples are inside <code>index.html</code>
