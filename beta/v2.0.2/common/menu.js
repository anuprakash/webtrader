define(["jquery","navigation/navigation","common/util"],function(a,b){"use strict";function c(b){return a.isArray(b)&&(b.sort(sortAlphaNum("display_name")),a.each(b,function(b,d){a.each(d,function(b,d){a.isArray(d)&&c(d)})})),b}function d(c,e,f){e.forEach(function(b){var e=b.submarkets||b.instruments,g="<span class='nav-submenu-caret'></span>",h=e?b.display_name+g:b.display_name,i=a("<a href='#'>"+h+"</a>");e&&i.addClass("nav-dropdown-toggle");var j=a("<li>").append(i).data("symbol",b.symbol).data("delay_amount",b.delay_amount).appendTo(c);if(e){var k=a("<ul>");k.appendTo(j),d(k,b.submarkets||b.instruments,f)}else f&&i.click(function(){var b=a(this).parent();f(b)})}),b.updateDropdownToggles()}return{extractMenu:function(a,b){var c=a.trading_times.markets.map(function(a){var c={name:a.name,display_name:a.name};return c.submarkets=a.submarkets.map(function(a){var c={name:a.name,display_name:a.name},d=a.symbols;return b&&b.filter&&(d=d.filter(b.filter)),c.instruments=d.map(function(a){return{symbol:a.symbol,display_name:a.name,delay_amount:a.delay_amount||0}}),c}),c});return c},sortMenu:c,refreshMenu:d}});