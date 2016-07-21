# myt-pie-chart
Simple pie chart library with D3

# How to use:

- install via the npm <code> npm install myt-pie-chart </code>
- create a new instance of the pie chart <code>var pie = mytPieChart.newChart();</code>
- set pie data with <code> pie.setData(data) </code>

    <code>
        data = [{
          name: string,
          value: int,
          bgColor: string,
          color: string
        }]
    </code>
 
 

    name & value are required, bgColor has calculated default value and color has 'black' default value

- set width with <code> pie.setWidth(int) </code>
- set height with <code> pie.setHeight(int) </code>
- set containerId with <code> pie.setContainerId(string) </code>
  
  ContainerID must be passed else the chart will be displayed in 'body'.

  (ID of an existing element that the chart will be displayed in)

- set chart id with <code> pie.setId(string) </code>

  (A string that will be used to identify svg and tooltip elements)

- display the chart with <code> pie.display() </code>

- if you want to redraw the chart simply call <code> pie.display() </code> again

---------

# How it works
- Simplest use was explained above, for further reference please check:

    https://github.com/mytalengi/myt-pie-chart/tree/master/example
