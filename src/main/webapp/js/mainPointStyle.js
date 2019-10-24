var vectorPointStyle =
    {
        'red': new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: "rgba(255, 0, 0, 0.8)"
                }),
                stroke: new ol.style.Stroke({
                    color: "#FF0000",
                    width: 1
                })
            })
        }),
        'orange': new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: "rgba(255, 130, 14, 0.8)"
                }),
                stroke: new ol.style.Stroke({
                    color: "#ff820e",
                    width: 1
                })
            })
        }),
        'yellow': new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: "rgba(255, 246, 12, 0.8)"
                }),
                stroke: new ol.style.Stroke({
                    color: "#fff60c",
                    width: 1
                })
            })
        }),
        'green': new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: "rgba(0, 167, 43, 0.8)"
                }),
                stroke: new ol.style.Stroke({
                    color: "#00a72b",
                    width: 1
                })
            })
        }),
        'blue': new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: "rgba(0, 7, 255, 0.8)"
                }),
                stroke: new ol.style.Stroke({
                    color: "#0007ff",
                    width: 1
                })
            })
        }),
        'pink': new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: "rgba(255, 127, 246, 0.8)"
                }),
                stroke: new ol.style.Stroke({
                    color: "#ff7ff6",
                    width: 1
                })
            })
        }),
        'violet': new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({
                    color: "rgba(166, 0, 255, 0.8)"
                }),
                stroke: new ol.style.Stroke({
                    color: "#a600ff",
                    width: 1
                })
            })
        })
    };

var styleKeys = ['red','orange','yellow','green','blue','pink','violet'];

//20
var mainPointStyle = {

    color1 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(255, 0, 0, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color2 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(255, 153, 0, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color3 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
//                color: "rgba(51, 204, 204, 0.8)"
                color: "rgba(0, 147, 0, 0.8)"
            }),
            stroke: new ol.style.Stroke({
//                color: "#33cccc",
                color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color4 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(255, 0, 255, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color5 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(153, 0, 255, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color6 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
//                color: "rgba(59,255,240, 0.8)"
                	color: "rgba(255,255,90,0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color7 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(0, 255, 0, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color8 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(102, 0, 204, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color9 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(51, 51, 255, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color10 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(153, 0, 153, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color11 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(153, 0, 0, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color12 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(204, 102, 153, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color13 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(102, 153, 255, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color14 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(102, 102, 153, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color15 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(0, 0, 153, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color16 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(162, 168, 255, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color17 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(102, 51, 0, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color18 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(255, 204, 102, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color19 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(77, 255, 136, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    }),
    color20 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5.2,
            fill: new ol.style.Fill({
                color: "rgba(255,209,249, 0.8)"
            }),
            stroke: new ol.style.Stroke({
            	color: "#FFFFFF",
                width: 2
            })
        })
    })
}

var mainPointStyleKeys = ['color1','color2','color3','color4','color5','color6','color7','color8','color9','color10','color11','color12','color13','color14','color15','color16','color17','color18','color19','color20'];

var mainPointStyle2 = {

    color1 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#FF0000",
                width: 2
            })
        })
    }),
    color2 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#ff9900",
                width: 2
            })
        })
    }),
    color3 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#33cccc",
                width: 2
            })
        })
    }),
    color4 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#ff00ff",
                width: 2
            })
        })
    }),
    color5 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#9900ff",
                width: 2
            })
        })
    }),
    color6 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#3bfff0",
                width: 2
            })
        })
    }),
    color7 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#00ff00",
                width: 2
            })
        })
    }),
    color8 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#6600cc",
                width: 2
            })
        })
    }),
    color9 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#3333ff",
                width: 2
            })
        })
    }),
    color10 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#990099",
                width: 2
            })
        })
    }),
    color11 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#990000",
                width: 2
            })
        })
    }),
    color12 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#cc6699",
                width: 2
            })
        })
    }),
    color13 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#6699ff",
                width: 2
            })
        })
    }),
    color14 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#666699",
                width: 2
            })
        })
    }),
    color15 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#000099",
                width: 2
            })
        })
    }),
    color16 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#ff4be3",
                width: 2
            })
        })
    }),
    color17 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#663300",
                width: 2
            })
        })
    }),
    color18 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#ffcc66",
                width: 2
            })
        })
    }),
    color19 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#4dff88",
                width: 2
            })
        })
    }),
    color20 : new ol.style.Style({
        image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
                color: "rgba(255, 255, 255, 0.3)"
            }),
            stroke: new ol.style.Stroke({
                color: "#006600",
                width: 2
            })
        })
    })
}

var mainPointStyleKeys2 = ['color1','color2','color3','color4','color5','color6','color7','color8','color9','color10','color11','color12','color13','color14','color15','color16','color17','color18','color19','color20'];

var digitalMapStyle = {
    color1 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(255, 130, 14, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#FF0000",
            width: 3
        })
    }),
    color2 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(255, 153, 0, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#ff9900",
            width: 3
        })
    }),
    color3 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(51, 204, 204, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#33cccc",
            width: 3
        })
    }),
    color4 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(255, 0, 255, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#ff00ff",
            width: 3
        })
    }),
    color5 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(153, 0, 255, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#9900ff",
            width: 3
        })
    }),
    color6 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(59, 255, 240, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#3bfff0",
            width: 3
        })
    }),
    color7 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(0, 255, 0, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#00ff00",
            width: 3
        })
    }),
    color8 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(102, 0, 204, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#6600cc",
            width: 3
        })
    }),
    color9 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(51, 51, 255, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#3333ff",
            width: 3
        })
    }),
    color10 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(153, 0, 153, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#990099",
            width: 3
        })
    }),
    color11 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(153, 0, 0, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#990000",
            width: 3
        })
    }),
    color12 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(204, 102, 153, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#cc6699",
            width: 3
        })
    }),
    color13 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(102, 153, 255, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#6699ff",
            width: 3
        })
    }),
    color14 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(102, 102, 153, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#666699",
            width: 3
        })
    }),
    color15 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(0, 0, 153, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#000099",
            width: 3
        })
    }),
    color16 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(255, 75, 227, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#ff4be3",
            width: 3
        })
    }),
    color17 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(102, 51, 0, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#663300",
            width: 3
        })
    }),
    color18 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(255, 204, 102, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#ffcc66",
            width: 3
        })
    }),
    color19 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(77, 255, 136, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#4dff88",
            width: 3
        })
    }),
    color20 : new ol.style.Style({
        fill: new ol.style.Fill({
            color: "rgba(0, 102, 0, 0.1)"
        }),
        stroke: new ol.style.Stroke({
            color: "#006600",
            width: 3
        })
    })
}

var digitalMapStyleKeys = ['color1','color2','color3','color4','color5','color6','color7','color8','color9','color10','color11','color12','color13','color14','color15','color16','color17','color18','color19','color20'];

var addrStyle = {
    color1 : new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: "#FF0000",
            width: 2
        })
    }),
}

var addrStyleKeys = ['color1'];