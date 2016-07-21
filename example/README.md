# myt-pie-chart
Simple pie chart library with D3

# How to use:

- install via the npm <code> npm install myt-pie-chart </code>
- create a new instance of the pie chart as example below
- <code> var pie = myt-pie-chart.newChart(); </code>
- set pie data with <code> pie.setData(data) </code>
- data format: [{
  name: string,
  value: int,
  bgColor: string,
  color: string
}]
 
  name & value are required, bgColor has calculated default value and color has 'black' default value

- set width with <code> pie.setWidth(int) </code>
- set height with <code> pie.setHeight(int) </code>
- set containerId with <code> pie.setContainerId(string) </code>
  
  ContainerID must be passed else the chart won't display properly.

  (ID of an existing element that the chart will be displayed in)

- set chart id with <code> pie.setId(string) </code>

  Id required for proper display of tooltips.
  
  (A string that will be used to identify svg and tooltip elements)

- display the chart with <code> pie.draw() </code>
- if you want to redraw the chart simply call <code> pie.draw() </code> again
- examples are inside <code>index.html</code>
