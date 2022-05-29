"use strict";
const color = ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"];
const formatDateTime = (timeStamp, returnType) => {
  var date = new Date();
  date.setTime(timeStamp * 1e3);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  var h = date.getHours();
  h = h < 10 ? "0" + h : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  if (returnType == "full") {
    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  }
  if (returnType == "y-m-d") {
    return y + "-" + m + "-" + d;
  }
  if (returnType == "h:m") {
    return h + ":" + minute;
  }
  if (returnType == "h:m:s") {
    return h + ":" + minute + ":" + second;
  }
  return [y, m, d, h, minute, second];
};
const cfu = {
  "type": ["pie", "ring", "rose", "word", "funnel", "map", "arcbar", "line", "column", "mount", "bar", "area", "radar", "gauge", "candle", "mix", "tline", "tarea", "scatter", "bubble", "demotype"],
  "range": ["\u997C\u72B6\u56FE", "\u5706\u73AF\u56FE", "\u73AB\u7470\u56FE", "\u8BCD\u4E91\u56FE", "\u6F0F\u6597\u56FE", "\u5730\u56FE", "\u5706\u5F27\u8FDB\u5EA6\u6761", "\u6298\u7EBF\u56FE", "\u67F1\u72B6\u56FE", "\u5C71\u5CF0\u56FE", "\u6761\u72B6\u56FE", "\u533A\u57DF\u56FE", "\u96F7\u8FBE\u56FE", "\u4EEA\u8868\u76D8", "K\u7EBF\u56FE", "\u6DF7\u5408\u56FE", "\u65F6\u95F4\u8F74\u6298\u7EBF", "\u65F6\u95F4\u8F74\u533A\u57DF", "\u6563\u70B9\u56FE", "\u6C14\u6CE1\u56FE", "\u81EA\u5B9A\u4E49\u7C7B\u578B"],
  "categories": ["line", "column", "mount", "bar", "area", "radar", "gauge", "candle", "mix", "demotype"],
  "instance": {},
  "option": {},
  "formatter": {
    "yAxisDemo1": function(val, index, opts) {
      return val + "\u5143";
    },
    "yAxisDemo2": function(val, index, opts) {
      return val.toFixed(2);
    },
    "xAxisDemo1": function(val, index, opts) {
      return val + "\u5E74";
    },
    "xAxisDemo2": function(val, index, opts) {
      return formatDateTime(val, "h:m");
    },
    "seriesDemo1": function(val, index, series, opts) {
      return val + "\u5143";
    },
    "tooltipDemo1": function(item, category, index, opts) {
      if (index == 0) {
        return "\u968F\u4FBF\u7528" + item.data + "\u5E74";
      } else {
        return "\u5176\u4ED6\u6211\u6CA1\u6539" + item.data + "\u5929";
      }
    },
    "pieDemo": function(val, index, series, opts) {
      if (index !== void 0) {
        return series[index].name + "\uFF1A" + series[index].data + "\u5143";
      }
    }
  },
  "demotype": {
    "type": "line",
    "color": color,
    "padding": [15, 10, 0, 15],
    "xAxis": {
      "disableGrid": true
    },
    "yAxis": {
      "gridType": "dash",
      "dashLength": 2
    },
    "legend": {},
    "extra": {
      "line": {
        "type": "curve",
        "width": 2
      }
    }
  },
  "pie": {
    "type": "pie",
    "color": color,
    "padding": [5, 5, 5, 5],
    "extra": {
      "pie": {
        "activeOpacity": 0.5,
        "activeRadius": 10,
        "offsetAngle": 0,
        "labelWidth": 15,
        "border": true,
        "borderWidth": 3,
        "borderColor": "#FFFFFF"
      }
    }
  },
  "ring": {
    "type": "ring",
    "color": color,
    "padding": [5, 5, 5, 5],
    "rotate": false,
    "dataLabel": true,
    "legend": {
      "show": true,
      "position": "right",
      "lineHeight": 25
    },
    "title": {
      "name": "\u6536\u76CA\u7387",
      "fontSize": 15,
      "color": "#666666"
    },
    "subtitle": {
      "name": "70%",
      "fontSize": 25,
      "color": "#7cb5ec"
    },
    "extra": {
      "ring": {
        "ringWidth": 30,
        "activeOpacity": 0.5,
        "activeRadius": 10,
        "offsetAngle": 0,
        "labelWidth": 15,
        "border": true,
        "borderWidth": 3,
        "borderColor": "#FFFFFF"
      }
    }
  },
  "rose": {
    "type": "rose",
    "color": color,
    "padding": [5, 5, 5, 5],
    "legend": {
      "show": true,
      "position": "left",
      "lineHeight": 25
    },
    "extra": {
      "rose": {
        "type": "area",
        "minRadius": 50,
        "activeOpacity": 0.5,
        "activeRadius": 10,
        "offsetAngle": 0,
        "labelWidth": 15,
        "border": false,
        "borderWidth": 2,
        "borderColor": "#FFFFFF"
      }
    }
  },
  "word": {
    "type": "word",
    "color": color,
    "extra": {
      "word": {
        "type": "normal",
        "autoColors": false
      }
    }
  },
  "funnel": {
    "type": "funnel",
    "color": color,
    "padding": [15, 15, 0, 15],
    "extra": {
      "funnel": {
        "activeOpacity": 0.3,
        "activeWidth": 10,
        "border": true,
        "borderWidth": 2,
        "borderColor": "#FFFFFF",
        "fillOpacity": 1,
        "labelAlign": "right"
      }
    }
  },
  "map": {
    "type": "map",
    "color": color,
    "padding": [0, 0, 0, 0],
    "dataLabel": true,
    "extra": {
      "map": {
        "border": true,
        "borderWidth": 1,
        "borderColor": "#666666",
        "fillOpacity": 0.6,
        "activeBorderColor": "#F04864",
        "activeFillColor": "#FACC14",
        "activeFillOpacity": 1
      }
    }
  },
  "arcbar": {
    "type": "arcbar",
    "color": color,
    "title": {
      "name": "\u767E\u5206\u6BD4",
      "fontSize": 25,
      "color": "#00FF00"
    },
    "subtitle": {
      "name": "\u9ED8\u8BA4\u6807\u9898",
      "fontSize": 15,
      "color": "#666666"
    },
    "extra": {
      "arcbar": {
        "type": "default",
        "width": 12,
        "backgroundColor": "#E9E9E9",
        "startAngle": 0.75,
        "endAngle": 0.25,
        "gap": 2
      }
    }
  },
  "line": {
    "type": "line",
    "color": color,
    "padding": [15, 10, 0, 15],
    "xAxis": {
      "disableGrid": true
    },
    "yAxis": {
      "gridType": "dash",
      "dashLength": 2
    },
    "legend": {},
    "extra": {
      "line": {
        "type": "straight",
        "width": 2
      }
    }
  },
  "tline": {
    "type": "line",
    "color": color,
    "padding": [15, 10, 0, 15],
    "xAxis": {
      "disableGrid": false,
      "boundaryGap": "justify"
    },
    "yAxis": {
      "gridType": "dash",
      "dashLength": 2,
      "data": [
        {
          "min": 0,
          "max": 80
        }
      ]
    },
    "legend": {},
    "extra": {
      "line": {
        "type": "curve",
        "width": 2
      }
    }
  },
  "tarea": {
    "type": "area",
    "color": color,
    "padding": [15, 10, 0, 15],
    "xAxis": {
      "disableGrid": true,
      "boundaryGap": "justify"
    },
    "yAxis": {
      "gridType": "dash",
      "dashLength": 2,
      "data": [
        {
          "min": 0,
          "max": 80
        }
      ]
    },
    "legend": {},
    "extra": {
      "area": {
        "type": "curve",
        "opacity": 0.2,
        "addLine": true,
        "width": 2,
        "gradient": true
      }
    }
  },
  "column": {
    "type": "column",
    "color": color,
    "padding": [15, 15, 0, 5],
    "xAxis": {
      "disableGrid": true
    },
    "yAxis": {
      "data": [{ "min": 0 }]
    },
    "legend": {},
    "extra": {
      "column": {
        "type": "group",
        "width": 30,
        "activeBgColor": "#000000",
        "activeBgOpacity": 0.08
      }
    }
  },
  "mount": {
    "type": "mount",
    "color": color,
    "padding": [15, 15, 0, 5],
    "xAxis": {
      "disableGrid": true
    },
    "yAxis": {
      "data": [{ "min": 0 }]
    },
    "legend": {},
    "extra": {
      "mount": {
        "type": "mount",
        "widthRatio": 1.5
      }
    }
  },
  "bar": {
    "type": "bar",
    "color": color,
    "padding": [15, 30, 0, 5],
    "xAxis": {
      "boundaryGap": "justify",
      "disableGrid": false,
      "min": 0,
      "axisLine": false
    },
    "yAxis": {},
    "legend": {},
    "extra": {
      "bar": {
        "type": "group",
        "width": 30,
        "meterBorde": 1,
        "meterFillColor": "#FFFFFF",
        "activeBgColor": "#000000",
        "activeBgOpacity": 0.08
      }
    }
  },
  "area": {
    "type": "area",
    "color": color,
    "padding": [15, 15, 0, 15],
    "xAxis": {
      "disableGrid": true
    },
    "yAxis": {
      "gridType": "dash",
      "dashLength": 2
    },
    "legend": {},
    "extra": {
      "area": {
        "type": "straight",
        "opacity": 0.2,
        "addLine": true,
        "width": 2,
        "gradient": false
      }
    }
  },
  "radar": {
    "type": "radar",
    "color": color,
    "padding": [5, 5, 5, 5],
    "dataLabel": false,
    "legend": {
      "show": true,
      "position": "right",
      "lineHeight": 25
    },
    "extra": {
      "radar": {
        "gridType": "radar",
        "gridColor": "#CCCCCC",
        "gridCount": 3,
        "opacity": 0.2,
        "max": 200
      }
    }
  },
  "gauge": {
    "type": "gauge",
    "color": color,
    "title": {
      "name": "66Km/H",
      "fontSize": 25,
      "color": "#2fc25b",
      "offsetY": 50
    },
    "subtitle": {
      "name": "\u5B9E\u65F6\u901F\u5EA6",
      "fontSize": 15,
      "color": "#1890ff",
      "offsetY": -50
    },
    "extra": {
      "gauge": {
        "type": "default",
        "width": 30,
        "labelColor": "#666666",
        "startAngle": 0.75,
        "endAngle": 0.25,
        "startNumber": 0,
        "endNumber": 100,
        "labelFormat": "",
        "splitLine": {
          "fixRadius": 0,
          "splitNumber": 10,
          "width": 30,
          "color": "#FFFFFF",
          "childNumber": 5,
          "childWidth": 12
        },
        "pointer": {
          "width": 24,
          "color": "auto"
        }
      }
    }
  },
  "candle": {
    "type": "candle",
    "color": color,
    "padding": [15, 15, 0, 15],
    "enableScroll": true,
    "enableMarkLine": true,
    "dataLabel": false,
    "xAxis": {
      "labelCount": 4,
      "itemCount": 40,
      "disableGrid": true,
      "gridColor": "#CCCCCC",
      "gridType": "solid",
      "dashLength": 4,
      "scrollShow": true,
      "scrollAlign": "left",
      "scrollColor": "#A6A6A6",
      "scrollBackgroundColor": "#EFEBEF"
    },
    "yAxis": {},
    "legend": {},
    "extra": {
      "candle": {
        "color": {
          "upLine": "#f04864",
          "upFill": "#f04864",
          "downLine": "#2fc25b",
          "downFill": "#2fc25b"
        },
        "average": {
          "show": true,
          "name": ["MA5", "MA10", "MA30"],
          "day": [5, 10, 20],
          "color": ["#1890ff", "#2fc25b", "#facc14"]
        }
      },
      "markLine": {
        "type": "dash",
        "dashLength": 5,
        "data": [
          {
            "value": 2150,
            "lineColor": "#f04864",
            "showLabel": true
          },
          {
            "value": 2350,
            "lineColor": "#f04864",
            "showLabel": true
          }
        ]
      }
    }
  },
  "mix": {
    "type": "mix",
    "color": color,
    "padding": [15, 15, 0, 15],
    "xAxis": {
      "disableGrid": true
    },
    "yAxis": {
      "disabled": false,
      "disableGrid": false,
      "splitNumber": 5,
      "gridType": "dash",
      "dashLength": 4,
      "gridColor": "#CCCCCC",
      "padding": 10,
      "showTitle": true,
      "data": []
    },
    "legend": {},
    "extra": {
      "mix": {
        "column": {
          "width": 20
        }
      }
    }
  },
  "scatter": {
    "type": "scatter",
    "color": color,
    "padding": [15, 15, 0, 15],
    "dataLabel": false,
    "xAxis": {
      "disableGrid": false,
      "gridType": "dash",
      "splitNumber": 5,
      "boundaryGap": "justify",
      "min": 0
    },
    "yAxis": {
      "disableGrid": false,
      "gridType": "dash"
    },
    "legend": {},
    "extra": {
      "scatter": {}
    }
  },
  "bubble": {
    "type": "bubble",
    "color": color,
    "padding": [15, 15, 0, 15],
    "xAxis": {
      "disableGrid": false,
      "gridType": "dash",
      "splitNumber": 5,
      "boundaryGap": "justify",
      "min": 0,
      "max": 250
    },
    "yAxis": {
      "disableGrid": false,
      "gridType": "dash",
      "data": [{
        "min": 0,
        "max": 150
      }]
    },
    "legend": {},
    "extra": {
      "bubble": {
        "border": 2,
        "opacity": 0.5
      }
    }
  }
};
exports.cfu = cfu;
