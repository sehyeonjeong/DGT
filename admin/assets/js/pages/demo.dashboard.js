!function(o){"use strict";function e(){this.$body=o("body"),this.charts=[]}e.prototype.initCharts=function(){window.Apex={chart:{parentHeightOffset:0,toolbar:{show:!1}},grid:{padding:{left:0,right:0}},colors:["#727cf5","#0acf97","#fa5c7c","#ffbc00"]};var e=["#727cf5","#0acf97","#fa5c7c","#ffbc00"],t=o("#revenue-chart").data("colors"),r={chart:{height:370,type:"line",dropShadow:{enabled:!0,opacity:.2,blur:7,left:-7,top:7}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:4},series:[{name:"Current Week",data:[10,20,15,25,20,30,20]},{name:"Previous Week",data:[0,15,10,30,15,35,25]}],colors:e=t?t.split(","):e,zoom:{enabled:!1},legend:{show:!1},xaxis:{type:"string",categories:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tooltip:{enabled:!1},axisBorder:{show:!1}},grid:{strokeDashArray:7},yaxis:{labels:{formatter:function(e){return e+"k"},offsetX:-15}}},e=(new ApexCharts(document.querySelector("#high-performing-product"),r).render(),["#727cf5","#0acf97","#fa5c7c","#ffbc00"]),r={chart:{height:202,type:"donut"},legend:{show:!1},stroke:{colors:["transparent"]},series:[6500,1500,1500,500],labels:["공인중개사","법무사","경매","기타"],colors:e=(t=o("#average-sales").data("colors"))?t.split(","):e,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]};new ApexCharts(document.querySelector("#average-sales"),r).render(),r={chart:{height:202,type:"donut"},legend:{show:!1},stroke:{colors:["transparent"]},series:[50,15,30,5],labels:["공인중개사","법무사","경매","기타"],colors:e=(t=o("#average-sales1").data("colors"))?t.split(","):e,responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]};new ApexCharts(document.querySelector("#average-sales1"),r).render()},e.prototype.init=function(){o("#dash-daterange").daterangepicker({singleDatePicker:!0}),this.initCharts(),this.initMaps()},o.Dashboard=new e,o.Dashboard.Constructor=e}(window.jQuery),function(t){"use strict";t(document).ready(function(e){t.Dashboard.init()})}(window.jQuery);