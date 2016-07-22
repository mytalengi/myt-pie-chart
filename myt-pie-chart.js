(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    // If AMD is used
    define(["myt-pie-chart_"], function(mytPieChart){
      return (root.mytPieChart = factory(mytPieChart));
    });
  } else if(typeof module === "object" && module.exports) {
    // If require is used
    module.exports = (root.mytPieChart = factory(require("myt-pie-chart_")));
  } else {
    root.mytPieChart = factory(root.mytPieChart);
  }
}(this, function(mytPieChart){

  mytPieChart = {

    newChart: function() {

      id = this.randomId();

      return {

        data: [],
        // Data to be displayed in the chart_
        setData: function(d){
          this.data = d;
          this.graphics.data = d;

          this.chart.label.dx = "-2.5em";
          this.chart.label.dy = "0.1em";

          return this;
        },
        getData: function(){
          return this.data;
        },

        width: 450,
        // Width of the SVG element
        setWidth: function(w){
          this.width = w;
          this.chart.dimension.setRadius(Math.min(this.width, this.height) / 2);
          this.chart.position.setX(this.width / 3);
          this.chart.position.setY(this.height / 2);
          this.tooltip.position.setX(this.width / 1.6);

          return this;
        },
        getWidth: function(){
          return this.width;
        },

        height: 300,
        // Height of the SVG element
        setHeight: function(h){
          this.height = h;
          this.chart.dimension.setRadius(Math.min(this.width, this.height) / 2);
          this.chart.position.setX(this.width / 3);
          this.chart.position.setY(this.height / 2);
          this.tooltip.position.setY(this.height / 10);

          return this;
        },
        getHeight: function(){
          return this.height;
        },

        container: 'body',
        // Container for the SVG element
        // Id is expected to be passed else
        // it won't work as expected
        // Defaults to 'body'
        setContainer: function(c){
          this.container = c;

          return this;
        },
        getContainer: function(){
          return this.container;
        },

        id: id,
        // Id of the SVG element
        // Chart id --> id + '_chart'
        // Tooltip id --> id + '_tooltip'
        setId: function(i){
          this.id = i;
          this.chart.setId(i);
          this.tooltip.setId(i);
          this.graphics.id = i;

          return this;
        },
        getId: function(){
          return this.id;
        },

        chart: {

          id: id + '_chart',
          // Id of the chart element
          setId: function(i){
            this.id = i + '_chart';

            return this;
          },
          getId: function(){
            return this.id;
          },
          getHashId: function(){
            return '#' + this.id;
          },

          font: {

            family: "'Arial', Helvetica, sans-serif",
            // Font family used to display tooltip text
            setFamily: function(f){
              this.family = f;
              return this;
            },
            getFamily: function(){
              return this.family;
            },

            size: 14,
            // Font size to display tooltip text
            setSize: function(s){
              this.size = s;

              return this;
            },
            getSize: function(){
              return this.size;
            },

            sizeType: "px",
            // Font size type, either 'px','em' or '%'
            setSizeType: function(st){
              this.sizeType = st;

              return this;
            },
            getSizeType: function(){
              return this.sizeType;
            },

            variant: "normal",
            // Font variant, either 'normal' or 'small-caps'
            setVariant: function(v){
              this.variant = v;

              return this;
            },
            getVariant: function(){
              return this.variant;
            },

            weight: "normal",
            // Font weight, either 'normal', 'bold', 'bolder', 'lighter' or number-value
            setWeight: function(w){
              this.weight = w;

              return this;
            },
            getWeight: function(){
              return this.weight;
            },

            style: "normal",
            // Font style, either 'normal', 'italic' or 'oblique'
            setStyle: function(s){
              this.style = s;

              return this;
            },
            getStyle: function(){
              return this.style;
            },

            // Returns all properties of this font
            getFont: function(){
              return {
                family: this.family,
                size: this.size,
                sizeType: this.sizeType,
                variant: this.variant,
                weight: this.weight,
                style: this.style
              }
            }

          },

          position: {

            x: 150,
            setX: function(x){
              this.x = x;

              return this;
            },
            getX: function(){
              return this.x;
            },

            y: 150,
            setY: function(y){
              this.y = y;

              return this;
            },
            getY: function(){
              return this.y;
            },

            dx: null,
            setDX: function(dX){
              this.dx = dX;

              return this;
            },
            getDX: function(){
              return this.dx;
            },

            dy: null,
            setDY: function(dY){
              this.dy = dY;

              return this;
            },
            getDY: function(){
              return this.dy;
            },

            // Returns all position properties
            getPosition: function(){
              return {
                x: this.x,
                y: this.y,
                dx: this.dx,
                dy: this.dy
              }
            }

          },

          dimension: {

            radius: 150,
            // Width of tooltip rectangle
            setRadius: function(r){
              this.radius = r;

              return this;
            },
            getRadius: function(){
              return this.radius;
            },

            // Returns all dimension properties
            getDimension: function(){
              return {
                radius: this.radius
              }
            }

          },

          label: {
            position: {
              dx: "-2.5em",
              dy: "0.1em"
            },

            getLabel: function(){
              return {
                positions: {
                  dx: this.position.dx,
                  dy: this.position.dy
                }
              }
            }
          },

          getChart: function(){
            return {
              id: this.id,
              font: this.font.getFont(),
              position: this.position.getPosition(),
              dimension: this.dimension.getDimension(),
              label: this.label.getLabel()
            }
          }

        },

        tooltip: {

          id: id + '_tooltip',
          // Id of the tooltip element
          setId: function(i){
            this.id = i + '_tooltip';

            return this;
          },
          getId: function(){
            return this.id;
          },
          getHashId: function(){
            return '#' + this.id;
          },

          font: {

            family: "'Arial', Helvetica, sans-serif",
            // Font family used to display tooltip text
            setFamily: function(f){
              this.family = f;
              return this;
            },
            getFamily: function(){
              return this.family;
            },

            size: 14,
            // Font size to display tooltip text
            setSize: function(s){
              this.size = s;

              return this;
            },
            getSize: function(){
              return this.size;
            },

            sizeType: "px",
            // Font size type, either 'px','em' or '%'
            setSizeType: function(st){
              this.sizeType = st;

              return this;
            },
            getSizeType: function(){
              return this.sizeType;
            },

            variant: "normal",
            // Font variant, either 'normal' or 'small-caps'
            setVariant: function(v){
              this.variant = v;

              return this;
            },
            getVariant: function(){
              return this.variant;
            },

            weight: "normal",
            // Font weight, either 'normal', 'bold', 'bolder', 'lighter' or number-value
            setWeight: function(w){
              this.weight = w;

              return this;
            },
            getWeight: function(){
              return this.weight;
            },

            style: "normal",
            // Font style, either 'normal', 'italic' or 'oblique'
            setStyle: function(s){
              this.style = s;

              return this;
            },
            getStyle: function(){
              return this.style;
            },

            // Returns all properties of this font
            getFont: function(){
              return {
                family: this.family,
                size: this.size,
                sizeType: this.sizeType,
                variant: this.variant,
                weight: this.weight,
                style: this.style
              }
            }

          },

          position: {

            x: 281.25,
            setX: function(x){
              this.x = x;

              return this;
            },
            getX: function(){
              return this.x;
            },

            y: 30,
            setY: function(y){
              this.y = y;

              return this;
            },
            getY: function(){
              return this.y;
            },

            dx: null,
            setDX: function(dX){
              this.dx = dX;

              return this;
            },
            getDX: function(){
              return this.dx;
            },

            dy: null,
            setDY: function(dY){
              this.dy = dY;

              return this;
            },
            getDY: function(){
              return this.dy;
            },

            nameX: 4,
            setNameX: function(nx){
              this.nameX = nx;

              return this;
            },
            getNameX: function(){
              return this.nameX;
            },

            nameY: 14,
            setNameY: function(ny){
              this.nameY = ny;

              return this;
            },
            getNameY: function(){
              return this.nameY;
            },

            valueX: 4,
            setValueX: function(vx){
              this.valueX = vx;

              return this;
            },
            getValueX: function(){
              return this.valueX;
            },
            valueY: 31,
            setValueY: function(vy){
              this.valueY = vy;

              return this;
            },
            getValueY: function(){
              return this.valueY;
            },

            // Returns all position properties
            getPosition: function(){
              return {
                x: this.x,
                y: this.y,
                dx: this.dx,
                dy: this.dy
              }
            }

          },

          dimension: {

            width: 150,
            // Width of tooltip rectangle
            setWidth: function(w){
              this.width = w;

              return this;
            },
            getWidth: function(){
              return this.width;
            },

            height: 35,
            // Height of tooltip rectangle
            setHeight: function(h){
              this.height = h;

              return this;
            },
            getHeight: function(){
              return this.height;
            },

            // Returns all dimension properties
            getDimension: function(){
              return {
                width: this.width,
                height: this.height
              }
            }
          },

          getTooltip: function(){
            return {
              id: this.id,
              font: this.font.getFont(),
              position: this.position.getPosition(),
              dimension: this.dimension.getDimension()
            }
          }

        },

        graphics: {
          data: null,
          id: null,
          chart: this.chart,
          tooltip: this.tooltip,
          pie: null,
          arc: null,
          labelArc: null,
          svg: null,
          g: null
        },

        getGraphics: function(){
          return this.graphics;
        },

        color: d3.scale.ordinal()
          .range([
            // Blue,     Green,     Yellow,     Purple,    Red,      Brown,     Pink,      Orange,    L.Blue,   L.Green
            "#ccccff", "#ccffcc", "#ffffcc", "#f2ccff", "#ffcccc", "#f2e6d9", "#ffccff", "#ffe0cc", "#ccffff", "#e6ffcc", // 1st layer at 90%
            "#b3b3ff", "#b3ffb3", "#ffffb3", "#ecb3ff", "#ffb3b3", "#ecd9c6", "#ffb3ff", "#ffd1b3", "#b3ffff", "#d9ffb3", // 2nd layer at 85%
            "#9999ff", "#99ff99", "#ffff99", "#e699ff", "#ff9999", "#e6ccb3", "#ff99ff", "#ffc299", "#99ffff", "#ccff99", // 3rd layer at 80%
            "#8080ff", "#80ff80", "#ffff80", "#df80ff", "#ff8080", "#dfbf9f", "#ff80ff", "#ffb380", "#80ffff", "#bfff80", // 4th layer at 75%
            "#6666ff", "#66ff66", "#ffff66", "#d966ff", "#ff6666", "#d9b38c", "#ff66ff", "#ffa366", "#66ffff", "#b3ff66", // 5th layer at 70%
            "#4d4dff", "#4dff4d", "#ffff4d", "#d24dff", "#ff4d4d", "#d2a679", "#ff4dff", "#ff944d", "#4dffff", "#a6ff4d", // 6th layer at 65%
            "#3333ff", "#33ff33", "#ffff33", "#cc33ff", "#ff3333", "#cc9966", "#ff33ff", "#ff8533", "#33ffff", "#99ff33", // 7th layer at 60%
            "#1a1aff", "#1aff1a", "#ffff1a", "#c61aff", "#ff1a1a", "#c68c53", "#ff1aff", "#ff751a", "#1affff", "#8cff1a", // 8th layer at 55%
            "#0000ff", "#00ff00", "#ffff00", "#bf00ff", "#ff0000", "#bf8040", "#ff00ff", "#ff6600", "#00ffff", "#80ff00", // 9th layer at 50%
            "#0000e6", "#00e600", "#e6e600", "#ac00e6", "#e60000", "#ac7339", "#e600e6", "#e65c00", "#00e6e6", "#73e600", // 10th layer at 45%
          ]),

        display: function(){
          var id = this.id;
          var container = this.container == 'body' ? this.container : ('#' + this.container);

          var color = this.color;
          var chart = this.chart;
          var tooltip = this.tooltip;
          var data = this.data;

          this.graphics.data = this.data;

          // Create chart arc
          this.graphics.arc = d3.svg.arc()
            .outerRadius(chart.dimension.getRadius() - 10)
            .innerRadius(0);

          // Create label arc
          this.graphics.labelArc = d3.svg.arc()
            .outerRadius(chart.dimension.getRadius() - 30)
            .innerRadius(chart.dimension.getRadius() - 130);

          // Create pie layout
          this.graphics.pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d.value; });

          if(this.graphics.svg)
            this.graphics.svg.remove();

          // Create SVG element
          this.graphics.svg = d3.select(container).append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('id', this.id);

          // Create chart container within svg
          this.graphics.g = this.graphics.svg.append('g')
            .attr('transform', 'translate(' + chart.position.getX() + ', ' + chart.position.getY() + ')')
            .attr('id', chart.getId());

          // Create tooltip container within svg
          this.graphics.tooltip = this.graphics.svg.append('g')
            .attr('transform', 'translate(' + tooltip.position.getX() + ', ' + tooltip.position.getY() + ')')
            .attr('id', tooltip.getId())
            .attr('opacity', 0);

          // Add rectangle
          this.graphics.svg.select('#' + tooltip.getId()).append('rect')
            .attr('width', tooltip.dimension.getWidth())
            .attr('height', tooltip.dimension.getHeight());

          // Add first text
          this.graphics.svg.select('#' + this.id + '_tooltip').append('text')
            .attr('x', tooltip.position.getNameX())
            .attr('y', tooltip.position.getNameY())
            .style("font-family", tooltip.font.getFamily())
            .style("font-size", tooltip.font.getSize() + tooltip.font.getSizeType())
            .style("font-variant", tooltip.font.getVariant())
            .style("font-style", tooltip.font.getStyle())
            .style("font-weight", tooltip.font.getWeight())
            .attr('id', tooltip.getId() + '_name');

          // Add second text
          this.graphics.svg.select('#' + this.id + '_tooltip').append('text')
            .attr('x', tooltip.position.getValueX())
            .attr('y', tooltip.position.getValueY())
            .style("font-family", tooltip.font.getFamily())
            .style("font-size", tooltip.font.getSize() + tooltip.font.getSizeType())
            .style("font-variant", tooltip.font.getVariant())
            .style("font-style", tooltip.font.getStyle())
            .style("font-weight", tooltip.font.getWeight())
            .attr('id', tooltip.getId() + '_value');

          // Draw the slices
          var g = this.graphics.svg.select('#' + chart.getId()).selectAll('.arc')
            .data(this.graphics.pie(this.data))
            .enter().append('g')
            .attr('class', 'arc')
            .attr('transition', 0.5)
            .on('mouseover', function(d){
              d3.select('#' + tooltip.getId())
                .attr('opacity', 1)
                .attr('fill', d.data.bgColor ? d.data.bgColor : color(d.data.name));

              d3.select('#' + tooltip.getId() + '_name')
                .attr('fill', d.data.color ? d.data.color : 'black')
                .text('Name: ' + d.data.name);

              d3.select('#' + tooltip.getId() + '_value')
                .attr('fill', d.data.color ? d.data.color : 'black')
                .text('Value: ' + d.data.value);
            })
            .on('mouseout', function(d){
              d3.select('#' + tooltip.getId())
                .attr('opacity', 0);
            });

            g.append("path")
              .attr("d", this.graphics.arc)
              .style("fill", function(d) { return d.data.bgColor ? d.data.bgColor : color(d.data.name); })
              .style("opacity", "0.7")
              .on('mouseover', function() { d3.select(this).style("opacity", 1); })
              .on('mouseout', function() { d3.select(this).style("opacity", 0.7); });

            var graphics = this.graphics;
            g.append("text")
              .attr("transform", function(d) { return "translate(" + graphics.labelArc.centroid(d) + ")"; })
              .attr('fill', function(d){
                return d.data.color ? d.data.color :'black';
              })
              .attr("dx", chart.label.position.dx)
              .attr("dy", chart.label.position.dy)
              .style("opacity", "1")
              .style("font-family", chart.font.getFamily())
              .style("font-size", chart.font.getSize() + chart.font.getSizeType())
              .style("font-variant", chart.font.getVariant())
              .style("font-style", chart.font.getStyle())
              .style("font-weight", chart.font.getWeight())
              .text(function(d) { return d.data.name; });
        }
      }
    },
    randomId: function(){
      var id = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for( var i = 0; i < 5; i++ )
        id += possible.charAt(Math.floor(Math.random() * possible.length));
        return id;
    }
  }

  return mytPieChart;

}));
