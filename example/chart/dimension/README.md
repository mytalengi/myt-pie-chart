# myt-pie-chart
Simple pie chart library with D3

# Chart.Dimension Properties

## radius

  _`pie.chart.dimension.setRadius(int)` - Optional, defaults to 150._
  _Distance from center to the edges._
```JavaScript
pie.chart.dimension.setRadius(int); // Sets the radius of the chart.
pie.chart.dimension.getRadius();       // Returns the radius of the chart.
```

## centerRadius

  _`pie.chart.dimension.setCenterRadius(int)` - Optional, defaults to 150._
  _Distance from edges to the center._

```JavaScript
pie.chart.dimension.setCenterRadius(int); // Sets the centerRadius of the chart.
```

## get Dimension

```JavaScript
pie.chart.dimension.getDimension() // Returns the properties of the chart.dimension object

// #=> {
//   radius: ..
// };
```
