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

          return this;
        },
        getData: function(){
          return this.data;
        },

        width: 450,
        // Width of the SVG element
        setWidth: function(w){
          if(w)
            this.width = w;
          this.chart.dimension.setRadius(Math.min(this.width, this.height) / 2);
          this.chart.dimension.setCenterRadius(this.chart.dimension.getRadius());

          this.chart.position.setX(this.width / 2);
          this.chart.position.setY(this.chart.dimension.radius);

          this.tooltip.position.setX(this.chart.dimension.getRadius() / 1.5 + this.width / 2);
          this.tooltip.position.setY(this.height / 10);

          this.title.position.setX(this.width / 2.2);

          return this;
        },
        getWidth: function(){
          return this.width;
        },

        height: 300,
        // Height of the SVG element
        setHeight: function(h){
          if(h)
            this.height = h;
          this.chart.dimension.setRadius(Math.min(this.width, this.height) / 2);
          this.chart.dimension.setCenterRadius(this.chart.dimension.getRadius());

          this.chart.position.setY(this.chart.dimension.radius);

          this.tooltip.position.setX(this.chart.dimension.getRadius() / 1.5 + this.width / 2);
          this.tooltip.position.setY(this.height / 10);

          this.title.position.setY(this.height / 12);

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
          this.title.setId(i);

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

            centerRadius: 150,
            setCenterRadius: function(cr){
              this.centerRadius = cr;

              return this;
            },

            // Returns all dimension properties
            getDimension: function(){
              return {
                radius: this.radius,
                centerRadius: this.centerRadius
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
              return d.data.name;
            },
            setTextFunc: function(tf){
              this.textFunc = tf;

              return this;
            },

            position: {
              dx: "-1.5em",
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

          // Events on each slice
          events: {
            onClick: function(d){},
            setOnClick: function(f){
              this.onClick = f;

              return this;
            },

            onMouseOver: function(d){},
            setOnMouseOver: function(f){
              this.onMouseOver = f;

              return this;
            },

            onMouseEnter: function(d){},
            setOnMouseEnter: function(f){
              this.onMouseEnter = f;

              return this;
            },

            onMouseLeave: function(d){},
            setOnMouseLeave: function(f){
              this.onMouseLeave = f;

              return this;
            },

            getEvents: function(){
              return {
                onClick: this.onClick,
                onMouseOver: this.onMouseOver,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave
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

          opacity: 1,
          setOpacity: function(o){
            this.opacity = o;

            return this;
          },

          isActive: false,
          setActive: function(a){
            this.isActive = a;

            return this;
          },

          nameText: function(d){},
          setNameText: function(nt){
            this.nameText = nt;

            return this;
          },

          valueText: function(d){},
          setValueText: function(vt){
            this.valueText = vt;

            return this;
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

        title: {

          id: id + '_title',
          // Id of the tooltip element
          setId: function(i){
            this.id = i + '_title';

            return this;
          },
          getId: function(){
            return this.id;
          },
          getHashId: function(){
            return '#' + this.id;
          },

          isActive: false,
          setActive: function(a){
            this.isActive = a;

            return this;
          },

          textFunc: function(d){},
          setTextFunc: function(tf){
            this.textFunc = tf;

            return this;
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

            x: 100,
            setX: function(x){
              this.x = x;

              return this;
            },
            getX: function(){
              return this.x;
            },

            y: 100,
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

          getTooltip: function(){
            return {
              id: this.id,
              font: this.font.getFont(),
              position: this.position.getPosition()
            }
          }

        },

        // Events on entire chart
        events: {
          onClick: function(d){},
          setOnClick: function(f){
            this.onClick = f;

            return this;
          },

          onMouseOver: function(d){},
          setOnMouseOver: function(f){
            this.onMouseOver = f;

            return this;
          },

          onMouseEnter: function(d){},
          setOnMouseEnter: function(f){
            this.onMouseEnter = f;

            return this;
          },

          onMouseLeave: function(d){},
          setOnMouseLeave: function(f){
            this.onMouseLeave = f;

            return this;
          },
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
          this.radius = Math.min(this.width, this.height) / 2;

          this.pie = d3.layout.pie()
            .value(function(d) { return d.value; })
            .sort(null);

          this.arc = d3.svg.arc()
            .innerRadius(this.radius - this.chart.dimension.centerRadius)
            .outerRadius(this.chart.dimension.radius);

          var offset = 0;
          if(this.chart.font.getSizeType() === "px"){
            offset = (this.chart.font.getSize() - 20) / 2 * 15;
          }
          this.labelArc = d3.svg.arc()
            .outerRadius(this.radius - 40 - offset)
            .innerRadius(this.radius - 130);

          if(this.svg != null){
            return this.update();
          }

          // Create svg container
          this.svg = d3.select('#' + this.getContainer()).append("svg")
              .attr("width", this.width)
              .attr("height", this.height);

          // Create chart container
          this.g_chart = this.svg.append("g")
              .attr("transform", "translate(" + this.chart.position.getX() + "," + this.chart.position.getY() + ")")
              .attr("dx", this.chart.position.getDX())
              .attr("dy", this.chart.position.getDY())
              .attr("id", this.chart.getId())
              .on("mouseover", this.events.onMouseOver)
              .on("mouseenter", this.events.onMouseEnter)
              .on("mouseout", this.events.onMouseLeave)
              .on("click", this.events.onClick);

          // Check if tooltip is set to active
          if(this.tooltip.isActive){

            // Create tooltip container
            this.g_tooltip = this.svg.append("g")
              .attr("transform", "translate(" + this.tooltip.position.getX() + "," + this.tooltip.position.getY() + ")")
              .attr("dx", this.tooltip.position.getDX())
              .attr("dy", this.tooltip.position.getDY())
              .attr("width", this.tooltip.dimension.getWidth())
              .attr("height", this.tooltip.dimension.getHeight())
              .attr("id", this.tooltip.getId());

              this.g_tooltip.append("rect")
                  .attr("width", this.tooltip.dimension.getWidth())
                  .attr("height", this.tooltip.dimension.getHeight());

              this.g_tooltip.append("text")
                  .attr("dx", this.tooltip.position.getNameX())
                  .attr("dy", this.tooltip.position.getNameY())
                  .attr("id", this.tooltip.getId() + "_name");

              this.g_tooltip.append("text")
                  .attr("dx", this.tooltip.position.getValueX())
                  .attr("dy", this.tooltip.position.getValueY())
                  .attr("id", this.tooltip.getId() + "_value");
          }

          if(this.title.isActive){
            // Create title
            this.svg.append("text")
              .attr("transform", "translate(" + this.title.position.getX() + "," + this.title.position.getY() + ")")
              .attr("dx", this.title.position.getDX())
              .attr("dx", this.title.position.getDY())
              .attr("id", this.title.getId());
          }
          this.arcs = this.svg.select("g").selectAll(".arc");

          this.update();
        },

        update: function(){

            color = this.color;

            this.svg.select(this.title.getHashId())
              .style("font-family", this.title.font.getFamily())
              .style("font-size", this.title.font.getSize() + this.title.font.getSizeType())
              .style("font-variant", this.title.font.getVariant())
              .style("font-style", this.title.font.getStyle())
              .style("font-weight", this.title.font.getWeight())
              .text(this.title.textFunc);

            // Removed unused tags
            this.svg.selectAll('.arc').each(function(){
                if(!d3.select(this).select('path')[0][0])
                  d3.select(this).remove();
              });

            var data0 = this.arcs.length != 0 ? this.arcs.data() : this.pie([]),
                data1 = this.pie(this.data);

            this.arcs = this.arcs.data(data1, key);

            var g = this.arcs.enter()
              .append("g")
                .attr("class", "arc")
                .on("click", this.chart.events.onClick)
                .on("mouseover", this.chart.events.onMouseOver)
                .on("mouseenter", this.chart.events.onMouseEnter)
                .on("mouseout", this.chart.events.onMouseLeave);

            var arc = this.arc;
            g.append("path")
              .each(function(d, i) { this._arc = arc; this._current = findNeighborArc(i, data0, data1, key) || d; })
              .attr("fill", function(d) { return d.data.bgColor ? d.data.bgColor : color(d.data.name); })
              .style("opacity", 1);

            var labelArc = this.labelArc;
            // Need to reorganize code so the label text can be displayed again if user wants it to.
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
          d3.select('#' + this.id).select("svg").remove();
        },

        restart: function(){
          this.delete();
          this.display();
        }
      }.setWidth(450).setHeight(300)
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
