
# Graph properties

## Instantiate new chart

```JavaScript
var pie = mytPieChart.newChart(); // Creates and returns a new instance of the chart object.
```

## Set data, get data

_`setData(array)` - Required._

```JavaScript
var data = [{
  name: 'Users',      // Required. {string} - Data entry name.
  value: 28819,       // Required. {int}    - Data entry value.
  bgColor: '#747485', // Optional. {string} - defaults to ~random color.
  color: 'green'      // Optional. {string} - defaults to black.
}];

pie.setData(data);    // Binds the data to the chart.
pie.getData();        // Returns the chart data object.
```

## Set width, get width

_`setWidth(int)` - Optional, defaults to 450._

```JavaScript
pie.setWidth(int);    // Sets the width of the SVG object, defaults to 450.
pie.getWidht();       // Returns the width of the SVG object.
```

## Set height, get height

_`setHeight(int)` - Optional, defaults to 300._

```JavaScript
pie.setHeight(int);   // Sets the height of the SVG container.
pie.getHeight();      // Returns the height of the SVG container.
```

## Set container, get container

_`setContainer(str)` - Optional, defaults to `body`._

```JavaScript
pie.setContainer(str); // Sets the SVG container id.
pie.getContainer();       // Returns the SVG container id.
```

## Set ID, get ID

_`setID(str)` - Optional, defaults to randomly generated string._

```JavaScript
pie.setId(str); // Sets the SVG id.
pie.getId();       // Returns the SVG id.
```

## Display graph

_`display()` - Required, renders graph. If the graph exists already it deletes the existing graph and renders a new one._

```JavaScript
pie.display();
```

# Chart properties

## Chart ID

_All optional._

```JavaScript
pie.chart.setId(str); // Sets the id of the `<g>` element.
pie.chart.getId();       // Returns the id of the `<g>` element.
pie.chart.getHashId();   // Returns the id of the `<g>` element with '#' prefix.
```

## Chart font

_Optional._

Please see [extended font documentation](chart/font/).

## Chart position

_Optional._

Please see [extended position documentation](chart/position/).

## Chart dimension

_Optional._

Please see [extended dimension documentation](chart/dimension/).

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

# Tooltip properties

## Tooltip ID

_`tooltip.setId(str)` - Optional, defaults to `<SVGId>_tooltip`._

```JavaScript
pie.tooltip.setId(string); // Sets the id of the <g> element.
pie.tooltip.getId();       // Returns the id of the <g> element.
pie.tooltip.getHashId();   // Returns the id of the <g> element with '#' prefix.
```

## Tooltip font

_Optional._

Please see [extended font documentation](tooltip/font/).

## Tooltip position

_Optional._

Please see [extended position documentation](tooltip/position/).

## Tooltip dimension

_Optional._

Please see [extended dimension documentation](tooltip/dimension/).

## Tooltip get

_`tooltip.getTooltip()` - Optional, returns the properties of the tooltip object._

```JavaScript
pie.tooltip.getTooltip();

// #=> {
//   id: ..,
//   font: ..,
//   position: ..,
//   dimension: ..
// }
```
