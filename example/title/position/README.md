# myt-pie-chart
Simple pie chart library with D3

# Chart.Position Properties

## x

  _`pie.chart.position.setX(int)` - Optional, defaults to 150._

```JavaScript
pie.chart.position.setX(int); // Sets the x-position of the chart.
pie.chart.position.getX();       // Returns the x-position of the chart.
```
# y

  _`pie.chart.position.setY(int)` - Optional, defaults to 150._

```JavaScript
pie.chart.position.setY(int); // Sets the y-position of the chart.
pie.chart.position.getY();       // Returns the y-position of the chart.
```
# dx

  _`pie.chart.position.setDX(int)` - Optional, defaults to null._

```JavaScript
pie.chart.position.setDX(int); // Sets the x-offset of the chart.
pie.chart.position.getDX();       // Returns the x-offset of the chart.
```
# dy

  _`pie.chart.position.setDY(int)` - Optional, defaults to null._

```JavaScript
pie.chart.position.setDY(int); // Sets the y-offset of the chart.
pie.chart.position.getDY();       // Returns the y-offset of the chart.
```

## get Position

```JavaScript
pie.chart.position.getPosition() // Returns the properties of the chart.position object

// #=> {
//   x: ..,
//   y: ..,
//   dx: ..,
//   dy: ..
// };
```

## Examples

- example_position.html
![example_position](https://s31.postimg.org/vsh078ayz/example_position.png)
