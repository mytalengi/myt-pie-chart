# myt-pie-chart
Simple pie chart library with D3

# Chart properties

## Chart ID

_`pie.chart.setId(str)` - Optional, defaults to `<SVGId>_chart`._

```JavaScript
pie.chart.setId(str); // Sets the id of the `<g>` element.
pie.chart.getId();       // Returns the id of the `<g>` element.
pie.chart.getHashId();   // Returns the id of the `<g>` element with '#' prefix.
```

## Chart font

_Optional._

Please see [extended font documentation](font/).

## Chart position

_Optional._

Please see [extended position documentation](position/).

## Chart dimension

_Optional._

Please see [extended dimension documentation](dimension/).

## Get chart

_`chart.getChart()` - Optional, returns the properties of the chart object._

```JavaScript
pie.chart.getChart();

// #=> {
//   id: ..,
//   font: ..,
//   position: ..,
//   dimension: ..
// };
```
