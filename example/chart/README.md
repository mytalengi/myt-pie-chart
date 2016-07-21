# myt-pie-chart
Simple pie chart library with D3

# How it works:
## This is the <b>chart</b> section:
It contains the following:
- <b>Id:</b>

  Id of the chart object, defaults to the ID of the entire pie chart + '_chart' postfix

  It contains <code> setId(string) </code>, <code> getId() </code> and <code> getHashId() </code>

- <b>Font:</b> https://github.com/mytalengi/myt-pie-chart/tree/master/example/chart/font

  An object with font properties, refer to the link for more information

- <b>Position:</b> https://github.com/mytalengi/myt-pie-chart/tree/master/example/chart/position

  An object with position properties, refer to the link for more information

- <b>Dimension:</b> https://github.com/mytalengi/myt-pie-chart/tree/master/example/chart/dimension

  An object with dimension properties, refer to the link for more information
  
- <b> Label: </b>

  An object containing dx and dy positions of the chart label to access them use
  
  <code> chart.label.position.dx</code>
  
  <code> chart.label.position.dy</code>

- <b><code>getChart()</code>:</b> 

  This function returns an object with all of the properties of this object, without the functions
  
      {
        id: string,
        font: object,
        position: object,
        dimension: object,
        label: object
      }

Click on the links to see further information about each part of the library!
