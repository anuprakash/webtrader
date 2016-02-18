define(["jquery","jquery-ui","color-picker"],function(a){function b(){a(this).dialog("close")}function c(c,d){require(["css!charts/indicators/macd/macd.css"]),require(["text!charts/indicators/macd/macd.html"],function(e){e=a(e),e.appendTo("body"),e.find("#macd_line_stroke,#signal_line_stroke,#macd_hstgrm_color").each(function(){a(this).colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})}),a("#macd_line_stroke").css("background","#2a277a"),a("#signal_line_stroke").css("background","red"),a("#macd_hstgrm_color").css("background","#7e9fc9"),e.dialog({autoOpen:!1,resizable:!0,width:390,modal:!0,my:"center",at:"center",of:window,buttons:[{text:"OK",click:function(){var c=!0;a(".macd_input_width_for_period").each(function(){if(!isNumericBetween(parseInt(a(this).val()),parseInt(a(this).attr("min")),parseInt(a(this).attr("max")))){var b=a(this);return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),void(c=!1)}}),c&&(require(["charts/indicators/highcharts_custom/macd"],function(b){b.init();var c={fastPeriod:parseInt(a("#macd_fast_period").val()),slowPeriod:parseInt(a("#macd_slow_period").val()),signalPeriod:parseInt(a("#macd_signal_period").val()),fastMaType:a("#macd_fast_ma_type").val(),slowMaType:a("#macd_slow_ma_type").val(),signalMaType:a("#macd_signal_ma_type").val(),macdStroke:a("#macd_line_stroke").css("background-color"),signalLineStroke:a("#signal_line_stroke").css("background-color"),macdHstgrmColor:a("#macd_hstgrm_color").css("background-color"),strokeWidth:parseInt(a("#macd_stroke_width").val()),dashStyle:a("#macd_dash_style").val(),appliedTo:parseInt(a("#macd_applied_to").val())};a(a(".macd").data("refererChartID")).highcharts().series[0].addMACD(c)}),b.call(e))}},{text:"Cancel",click:function(){b.call(this)}}]}),a.isFunction(d)&&d(c)})}return{open:function(b){return 0===a(".macd").length?void c(b,this.open):void a(".macd").data("refererChartID",b).dialog("open")}}});