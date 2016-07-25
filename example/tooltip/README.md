# myt-pie-chart
Simple pie chart library with D3

# Tooltip properties

## Tooltip ID

_`pie.tooltip.setId(str)` - Optional, defaults to `<SVGId>_tooltip`._

```JavaScript
pie.tooltip.setId(string); // Sets the id of the <g> element.
pie.tooltip.getId();       // Returns the id of the <g> element.
pie.tooltip.getHashId();   // Returns the id of the <g> element with '#' prefix.
```

## Tooltip font

_Optional._

Please see [extended font documentation](font/).

## Tooltip position

_Optional._

Please see [extended position documentation](position/).

## Tooltip dimension

_Optional._

Please see [extended dimension documentation](dimension/).

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
