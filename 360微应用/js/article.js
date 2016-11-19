$(document).ready(function() {
	var url_guoji = 'http://api.tianapi.com/world/?key=6e026afca8de8c550c4176f3a6f7339f&num=10';
	var url_yule = 'http://api.tianapi.com/huabian/?key=6e026afca8de8c550c4176f3a6f7339f&num=10';
	var url_tiyu = 'http://api.tianapi.com/tiyu/?key=6e026afca8de8c550c4176f3a6f7339f&num=10';
	var url_keji = 'http://api.tianapi.com/keji/?key=6e026afca8de8c550c4176f3a6f7339f&num=10';
	
	var $loading = $('<div id="loading"><img alt="加载中..." src="img/5-121204193951.gif" /></div>').insertBefore("#card");
	$('.url_guoji').click(function(event) {
		event.preventDefault();
		$('#card').empty();
		getJSON(url_guoji);
	}).trigger("click");
	$('.url_yule').click(function(event) {
		event.preventDefault();
		$('#card').empty();
		getJSON(url_yule);
	});
	$('.url_tiyu').click(function(event) {
		event.preventDefault();
		$('#card').empty();
		getJSON(url_tiyu);
	});
	$('.url_keji').click(function(event) {
		event.preventDefault();
		$('#card').empty();
		getJSON(url_keji);
	});

	function getJSON(url) {
		$.getJSON(url, function(data) {
			var html = '';
			var marray = $.makeArray(data);
			$.each(marray, function(entryIndex, entry) {
				$.each(entry.newslist, function(newlistIndex, list) {

					html += '<li name="li" class="' + list.url + '">';
					html += '<img src="' + list.picUrl + '">';
					html += '<div class="ui-li-aside" style="width: 180px; word-wrap:break-word;">';
					html += '<h1 >' + list.title + '</h1>';
					html += '<p>发表于' + list.ctime + '</p>';
					html += '</div>';
					html += '</li>';
				});
			});
			$('#card').html(html);
			var li = document.getElementsByName('li')
			for(var i = 0; i < 10; i++) {
				(function() {
					var temp = i;
					li[temp].onclick = function() {
						window.open("news_content2.html", "_balnk");
						localStorage.setItem("url", li[temp].className);
					}

				})();
			}
		});
	};

	$(document).ajaxStart(function() {
		$loading.show();
	}).ajaxStop(function() {
		$loading.hide();
	});
});
