# myt-pie-chart
Simple pie chart library with D3

# Chart.Label Properties

## active

  _`pie.chart.label.setActive(boolean)` - Optional, defaults to true._
  _Defines if chart labels are active or not._
```JavaScript
pie.chart.label.setActive(bool); // Sets the activity of the chart labels.
```

## opacity

  _`pie.chart.label.setOpacity(int/decimal)` - Optional, defaults to 1._
  _Defines if chart labels are visible or not._
```JavaScript
pie.chart.label.setOpacity(int/decimal); // Sets the opacity of the chart labels.
```

## textFunc

  _`pie.chart.label.setTextFunc(function)` - Optional, defaults to:._
```JavaScript
  function(d){
    return d.data.name; // d contains data of the appropriate slice
  }
```

```JavaScript
pie.chart.label.setTextFunc(function(d){}/String); // Sets the text of the chart labels.
```

## position

```JavaScript
pie.chart.position.dx // X offset of the chart labels.
pie.chart.position.dy // Y offset of the chart labels
```

## getLabel
```JavaScript
pie.chart.label.getLabel() // Returns the properties of the chart.label object
// #=> {
//   active: ..,
//   positions: {
//     dx: ..,
//     dy: ..
//   }
// }
```

## Examples

- example_label.html
![example_label](https://s31.postimg.org/3xed7y4rf/example_label.png)
