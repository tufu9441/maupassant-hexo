(function($) {
	$.getUrlParam = function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r && r[2] && r[2] != 'null' && r[2] != 'undefined' && r[2] != '') {
			return unescape(r[2]);
		} else {
			return null;
		}
	}
})(jQuery);
jQuery(document).ready(function() {
	$("#github").attr('href', $.getUrlParam('GitHub') || "https://github.com/" + window.location.href.split(".github.io")[0].split("/").pop())
	var QRBox = $('#QRBox');
	var MainBox = $('#MainBox');
	var count = 0;
	$("li").hide();
	if($.getUrlParam('BTCQR') && $.getUrlParam('BTCKEY')) {
		var BTCQR = $.getUrlParam('BTCQR'); // 二维码路径
		var BTCKEY = $.getUrlParam('BTCKEY');
		count++;
		$("#BTC").show();
		$("#BTC").addClass('yc')
		$("#btc-key").attr("value",BTCKEY)
	}
	if($.getUrlParam('AliPayQR')) {
		var AliPayQR = $.getUrlParam('AliPayQR');
		count++;
		$("#AliPay").show();
	}
	if($.getUrlParam('WeChatQR')) {
		var WeChatQR = $.getUrlParam('WeChatQR');
		count++;
		$("#WeChat").show();
	}
	if($.getUrlParam('PayPal')) {
		var PayPal = $.getUrlParam('PayPal');
		count++;
		$("#PayPal a").attr("href",PayPal)
		$("#PayPal").show();
	}
	if(count == 0){
		$("#WeChat").after('<div id="ps">没有开启任何Donate选项!</div>');
	}
	$("#donateBox li,#donateBox li a").css("width", Math.ceil(74+(74*(4-count)/count))+"px");
	function showQR(QR) {
		if(QR) {
			MainBox.css('background-image', 'url(' + QR + ')');
		}
		$('#DonateText,#donateBox,#github').addClass('blur');
		QRBox.fadeIn(300, function(argument) {
			MainBox.addClass('showQR');
		});
	}

	$('#donateBox>li').click(function(event) {
		var thisID = $(this).attr('id');
		if(thisID === 'BTC') {
			showQR(BTCQR);
			new Clipboard('#BTCBn');
		} else if(thisID === 'AliPay') {
			showQR(AliPayQR);
		} else if(thisID === 'WeChat') {
			showQR(WeChatQR);
		}
	});

	MainBox.click(function(event) {
		MainBox.removeClass('showQR').addClass('hideQR');
		setTimeout(function(a) {
			QRBox.fadeOut(300, function(argument) {
				MainBox.removeClass('hideQR');
			});
			$('#DonateText,#donateBox,#github').removeClass('blur');
		}, 600);

	});
});
