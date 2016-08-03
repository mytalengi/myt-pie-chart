# myt-pie-chart
Simple pie chart library with D3

# Chart.Events Properties

## onClick

  _`pie.chart.events.onClick` - Optional, defaults to empty function._
```JavaScript
pie.chart.events.setOnClick(function(d){}); // Sets the onClick slice function.
```

## onMouseOver

  _`pie.chart.events.onMouseOver` - Optional, defaults to empty function._
```JavaScript
pie.chart.events.setOnMouseOver(function(d){}); // Sets the onMouseOver slice function.
```

## onMouseEnter

  _`pie.chart.events.onMouseEnter` - Optional, defaults to empty function._
```JavaScript
pie.chart.events.setOnMouseEnter(function(d){}); //Sets the onMouseEnter slice function.
```

## onMouseLeave
  _`pie.chart.events.onMouseLeave` - Optional, defaults to empty function._
```JavaScript
pie.chart.events.setOnMouseLeave(function(d){}) // Sets the onMouseLeave slice function.
```

## getEvents
```JavaScript
pie.chart.events.getEvents() // Returns the properties of the chart.events object
// #=> {
//   onClick: ..,
//   onMouseOver: ..,
//   onMouseEnter: ..,
//   onMouseLeave: ..
// }
```
