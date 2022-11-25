!function(o) {
    "use strict";
    function e() {
        this.$body = o("body"),
        this.charts = []
    }
    e.prototype.initCharts = function() {
        window.Apex = {
            chart: {
                parentHeightOffset: 0,
                toolbar: {
                    show: !1
                }
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                }
            },
            colors: ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"]
        };
        var e = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"]
          , t = o("#revenue-chart").data("colors")
          , r = {
            chart: {
                height: 202,
                type: "donut"
            },
            legend: {
                show: !1
            },
            stroke: {
                colors: ["transparent"]
            },
            series: [6500, 1500, 1500, 500],
            labels: ["공인중개사", "경매", "법무사", "기타"],
            colors: e = (t = o("#average-sales").data("colors")) ? t.split(",") : e,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }]
        };
        new ApexCharts(document.querySelector("#average-sales"),r).render(),
        r = {
            chart: {
                height: 202,
                type: "donut"
            },
            legend: {
                show: !1
            },
            stroke: {
                colors: ["transparent"]
            },
            series: [50, 30, 15, 5],
            labels: ["공인중개사", "경매", "법무사", "기타"],
            colors: e = (t = o("#average-sales1").data("colors")) ? t.split(",") : e,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            }]
        };
        new ApexCharts(document.querySelector("#average-sales1"),r).render()
    }
    ,
    e.prototype.init = function() {
        o("#dash-daterange").daterangepicker({
            singleDatePicker: !0
        }),
        this.initCharts()
    }
    ,
    o.Dashboard = new e,
    o.Dashboard.Constructor = e
}(window.jQuery),
function(t) {
    "use strict";
    t(document).ready(function(e) {
        t.Dashboard.init()
    })
}(window.jQuery);

!function(e) {
    "use strict";
    function t() {
        this.$body = e("body"),
        this.charts = []
    }
    t.prototype.init = function() {
        this.initCharts()
    }
    ,
    t.prototype.initCharts = function() {
        var t = ["#727cf5", "#0acf97"]
          , o = e("#crm-project-statistics").data("colors")
          , r = {
            chart: {
                height: 326,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    horizontal: !1,
                    endingShape: "rounded",
                    columnWidth: "30%"
                }
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                show: !0,
                width: 3,
                colors: ["transparent"]
            },
            colors: t = o ? o.split(",") : t,
            series: [{
                name: "2021",
                data: [50, 60, 75, 100, 130, 150, 140, 133, 245, 205, 260, 280]
            }, {
                name: "2022",
                data: [100, 110, 124, 160, 210, 255, 245, 230, 310, 340, 355, 365]
            }],
            xaxis: {
                categories: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
            },
            legend: {
                offsetY: 7
            },
            fill: {
                opacity: 1
            },
            grid: {
                row: {
                    colors: ["transparent", "transparent"],
                    opacity: .2
                },
                borderColor: "#f1f3fa",
                padding: {
                    bottom: 5
                }
            }
        }
          , t = (new ApexCharts(document.querySelector("#crm-project-statistics"),r).render(),["#727cf5", "#0acf97"])
          , o = e("#crm-project-statistics1").data("colors")
          , r = {
            chart: {
                height: 326,
                type: "bar",
                toolbar: {
                    show: !1
                }
            },
            plotOptions: {
                bar: {
                    horizontal: !1,
                    endingShape: "rounded",
                    columnWidth: "30%"
                }
            },
            dataLabels: {
                enabled: !1
            },
            stroke: {
                show: !0,
                width: 3,
                colors: ["transparent"]
            },
            colors: t = o ? o.split(",") : t,
            series: [{
                name: "2021",
                data: [200, 230, 290, 380, 450, 650, 750, 680, 990, 1180, 1200, 1120]
            }, {
                name: "2022",
                data: [400, 430, 500, 620, 820, 1010, 900, 790, 1550, 1450, 1500, 1300]
            }],
            xaxis: {
                categories: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
            },
            legend: {
                offsetY: 7
            },
            fill: {
                opacity: 1
            },
            grid: {
                row: {
                    colors: ["transparent", "transparent"],
                    opacity: .2
                },
                borderColor: "#f1f3fa",
                padding: {
                    bottom: 5
                }
            }
        }
          , t = (new ApexCharts(document.querySelector("#crm-project-statistics1"),r).render(),["#727cf5", "#0acf97"])
    }
    ,
    e.CrmProject = new t,
    e.CrmProject.Constructor = t
}(window.jQuery),
function(o) {
    "use strict";
    o(document).ready(function(t) {
        o.CrmProject.init()
    })
}(window.jQuery);
var colors = ["#727cf5", "#0acf97", "#fa5c7c", "#ffbc00"]
  , dataColors = $("#project-overview-chart").data("colors")
  , options = {
    chart: {
        height: 326,
        type: "radialBar"
    },
    colors: colors = dataColors ? dataColors.split(",") : colors,
    series: [85, 70, 80, 65],
    labels: ["Product Design", "Web Development", "Illustration Design", "UI/UX Design"],
    plotOptions: {
        radialBar: {
            track: {
                margin: 5
            }
        }
    }
}
  , chart = new ApexCharts(document.querySelector("#project-overview-chart"),options);

