(function (root, factory) {
  if(typeof define === "function" && define.amd) {
    // If AMD is used
    define(["myt-pie-chart"], function(mytPieChart){
      return factory(mytPieChart);
    });
  } else if(typeof module === "object" && module.exports) {
    // If require is used
    module.exports = factory(require("myt-pie-chart"));
  } else {
    root.mytPieChart = factory("myt-pie-chart");
  }
}(this, function(){

  mytPieChart = {

    newChart: function(container) {

      var id = this.randomId();

      var chart = {

        _data: [],
        // Data to be displayed in the chart_
        setData: function(d){
          this._data = d;

          return this;
        },

        _width: 450,
        // Width of the SVG element
        setWidth: function(w){
          if(w)
            this._width = w;

          return this;
        },

        height: 300,
        // Height of the SVG element
        setHeight: function(h){
          if(h)
            this.height = h;

          return this;
        },

        container: 'body',
        // Container for the SVG element
        // Id is expected to be passed else
        // it won't work as expected
        // Defaults to 'body'
        setContainer: function(c){
          if(c){
            this.container = c;
            this.setHeight(document.getElementById(container).offsetHeight);
            this.setWidth(document.getElementById(container).offsetWidth);
          }
          else {
            this.setHeight(document.getElementsByTagName('body')[0].offsetHeight);
            this.setWidth(document.getElementsByTagName('body')[0].offsetWidth);
          }
          return this;
        },

        id: id,
        // Id of the SVG element
        // Chart id --> id + '_chart'
        // Tooltip id --> id + '_tooltip'
        setId: function(i){
          this.id = i;
          this.chart.setId(i);
          this.tooltip.setId(i);
          this.title.setId(i);

          return this;
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

          label: {
            active: true,
            setActive: function(a){
              this.active = a;

              return this;
            },

            opacity: 1,
            setOpacity: function(o){
              this.opacity = o;

              return this;
            },

            textFunc: function(d){
              return d.data.label ? d.data.label : d.data.name;
            },
            setTextFunc: function(tf){
              this.textFunc = tf;

              return this;
            },

            position: {
              dx: "-2.5em",
              dy: "0em"
            },

            getLabel: function(){
              return {
                active: this.active,
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
              label: this.label.getLabel(),
              events: this.events.getEvents()
            }
          }

        },

        tooltip: true,
        tooltipText: function(d){
          if(d.data.label)
            return '<p style="margin: 0">' + d.data.label + '</p><p style="margin: 0; text-align: right">' + d.data.value + '</p>';

          return '<p style="margin: 0">' + d.data.name + '</p><p style="margin: 0; text-align: right">' + d.data.value + '</p>';
        },

        events: {
          onClick: function(d){},

          onMouseOver: function(d){},

          onMouseEnter: function(d){},

          onMouseLeave: function(d){}
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

        radius: 0,
        svg: null,
        g_chart: null,
        g_tooltip: null,
        g_title: null,
        pie: null,
        arc: null,
        labelArc: null,
        arcs: null,

        display: function(){
          this.radius = (Math.min(this._width, this.height)-20) / 2;

          this.pie = d3.layout.pie()
            .value(function(d) { return d.value; })
            .sort(null);

          this.arc = d3.svg.arc()
            .innerRadius(0)
            .outerRadius(this.radius);

          var offset = 0;
          if(this.chart.font.getSizeType() === "px"){
            offset = (this.chart.font.getSize() - 20) / 2 * 20;
          }
          this.labelArc = d3.svg.arc()
            .outerRadius(this.radius - 40 - offset)
            .innerRadius(this.radius - 130);

          // Check if tooltip is set to active
          if(this.tooltip){
            // Create tooltip container
            document.getElementById(this.container).innerHTML += "<div id='" + this.container + "_tooltip' style='position: absolute; display: none'></div>";
          }

          if(this.svg != null){
            return this.update();
          }

          // Create svg container
          this.svg = d3.select('#' + this.container).append("svg")
              .attr("width", this.radius * 2 + 10)
              .attr("height", this.radius * 2 + 10)
              .attr("id", this.container + '_chart');

          // Create chart container
          this.g_chart = this.svg.append("g")
              .attr("transform", "translate(" + (this.radius + 5) + ", " + (this.radius + 5) + ")");

          this.arcs = this.svg.select("g").selectAll(".arc");

          var tooltip = this.tooltip;
          var tooltipText = this.tooltipText;
          var container = this.container;

          this.events.onMouseOver = function(d){
            var angle = d.endAngle - ( (d.endAngle - d.startAngle) / 2 );
            var x = Math.sin(angle) * 5;
            var y = - Math.cos(angle) * 5;
            this.setAttribute('transform', 'translate(' + x + ',' + y + ')');

            if(tooltip){
              this.onmousemove = function(e){
                var t = document.getElementById(container + '_tooltip');
                t.style.display = 'block';
                t.style.top = e.clientY + 15;
                t.style.left = e.clientX + 15;
                t.innerHTML = tooltipText(d);
              }
            }
          }

          this.events.onMouseLeave = function(d){
            this.setAttribute('transform', '');

            if(tooltip){
              document.getElementById(container + '_tooltip').style.display = 'none';
            }
          }

          this.update();
        },

        update: function(){
            color = this.color;

            // Removed unused tags
            this.svg.selectAll('.arc').each(function(){
                if(!d3.select(this).select('path')[0][0])
                  d3.select(this).remove();
              });
            var data0 = this.arcs.length != 0 ? this.arcs.data() : this.pie([]),
                data1 = this.pie(this._data);

            this.arcs = this.arcs.data(data1, key);

            var g = this.arcs.enter()
              .append("g")
                .attr("class", "arc")
                .on("click", this.events.onClick)
                .on("mouseover", this.events.onMouseOver)
                .on("mouseenter", this.events.onMouseEnter)
                .on("mouseout", this.events.onMouseLeave);

            var arc = this.arc;
            g.append("path")
              .each(function(d, i) { this._arc = arc; this._current = findNeighborArc(i, data0, data1, key) || d; })
              .attr("fill", function(d) { return d.data.bgColor ? d.data.bgColor : color(d.data.name); })
              .style("opacity", 1);

            var labelArc = this.labelArc;
            g.append("text")
              .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
              .attr("fill", function(d){ return d.data.color ? d.data.color : 'black'; })
              .attr("dx", this.chart.label.position.dx)
              .attr("dy", this.chart.label.position.dy)
              .style("opacity", 1)
              .style("font-family", this.chart.font.getFamily())
              .style("font-size", this.chart.font.getSize() + this.chart.font.getSizeType())
              .style("font-variant", this.chart.font.getVariant())
              .style("font-style", this.chart.font.getStyle())
              .style("font-weight", this.chart.font.getWeight())
              .text(this.chart.label.textFunc);

            if(this.chart.label.active){
              g.select('text')
                .transition()
                  .duration(1250)
                  .style("opacity", this.chart.label.opacity);
            } else {
              this.svg.selectAll('.arc').select('text').remove();
            }

            if(this.tooltip.isActive){
              this.svg.select(this.tooltip.getHashId()).style("opacity", this.tooltip.opacity);
              this.svg.select(this.tooltip.getHashId()).select("rect")
                .attr("fill", 'lightgray');
              this.svg.select(this.tooltip.getHashId() + '_name')
                .text(this.tooltip.nameText);
              this.svg.select(this.tooltip.getHashId() + '_value')
                .text(this.tooltip.valueText);

              this.svg.select(this.tooltip.getHashId()).selectAll("text")
                .style("font-family", this.tooltip.font.getFamily())
                .style("font-size", this.tooltip.font.getSize() + this.tooltip.font.getSizeType())
                .style("font-variant", this.tooltip.font.getVariant())
                .style("font-style", this.tooltip.font.getStyle())
                .style("font-weight", this.tooltip.font.getWeight());
            }

            var g_remove = this.arcs.exit();
            g_remove.select("path")
                .datum(function(d, i) { return findNeighborArc(i, data1, data0, key) || d; })
              .transition()
                .duration(750)
                .attrTween("d", arcTween)
                .remove();

            g_remove.select("text")
                .datum(function(d, i) { return findNeighborArc(i, data1, data0, key) || d; })
              .transition()
                .duration(450)
                .style("opacity", 0)
                .remove();

            this.arcs.select("path")
              .transition()
                .duration(750)
                .attrTween("d", arcTween);
            this.arcs.select("text")
                .style("opacity", 0)
                .text(this.chart.label.textFunc)
                .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
                .transition()
                  .duration(750)
                  .style("opacity", this.chart.label.opacity);

            function key(d) {
              return d.data.name;
            }

            function type(d) {
              d.count = +d.count;
              return d;
            }

            function findNeighborArc(i, data0, data1, key) {
              var d;
              return (d = findPreceding(i, data0, data1, key)) ? {startAngle: d.endAngle, endAngle: d.endAngle}
                : (d = findFollowing(i, data0, data1, key)) ? {startAngle: d.startAngle, endAngle: d.startAngle}
                : null;
            }

            // Find the element in data0 that joins the highest preceding element in data1.
            function findPreceding(i, data0, data1, key) {
              var m = data0.length;
              while (--i >= 0) {
                var k = key(data1[i]);
                for (var j = 0; j < m; ++j) {
                  if (key(data0[j]) === k) return data0[j];
                }
              }
            }

            // Find the element in data0 that joins the lowest following element in data1.
            function findFollowing(i, data0, data1, key) {
              var n = data1.length, m = data0.length;
              while (++i < n) {
                var k = key(data1[i]);
                for (var j = 0; j < m; ++j) {
                  if (key(data0[j]) === k) return data0[j];
                }
              }
            }

            function arcTween(d) {
              var arc = this._arc;
              var i = d3.interpolate(this._current, d);
              this._current = i(0);
              return function(t) { return arc(i(t)); };
            }
        },

        delete: function(){
          this.svg = null;
          d3.select('#' + this.container).select("svg").remove();
        },

        restart: function(){
          this.delete();
          this.display();
        }
      }

      if(container) chart.setContainer(container);
      else chart.setContainer();

      if(document.getElementById(container))
        window.addEventListener('resize', function(){
          chart.setHeight(document.getElementById(container).offsetHeight);
          chart.setWidth(document.getElementById(container).offsetWidth);
          chart.restart();
        });
      else {
        window.addEventListener('resize', function(){
          chart.setWidth(document.getElementsByTagName('body')[0].clientWidth);
          chart.restart();
        });
      }

      return chart;
    },
    randomId: function(){
      var id = 'A';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for( var i = 0; i < 5; i++ )
        id += possible.charAt(Math.floor(Math.random() * possible.length));
        return id;
    }
  }

  return mytPieChart;

}));
