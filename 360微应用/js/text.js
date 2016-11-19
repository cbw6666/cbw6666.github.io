$('document').ready(function() {
	$('#txt').hide();

	$('#pdf').hide();

	$('.txt').click(function(event) {
		event.preventDefault();
		$('#pdf').hide();
//		$('#txt').hide();
		$('#txt').show();
		$("#files").trigger("click");
	});

	$('.pdf').click(function(event) {
		event.preventDefault();
		$('#txt').hide();
//		$('#pdf').hide();
		$('#pdf').show();
		$('#secondaryOpenFile').trigger("click");
	});

	(function() {
		function encodeHTML(source) {
			return source
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/, '&quote;')
				.replace(/'/, '&#39;');
		};

		function fileSelect(e) {
			e = e || window.event;

			var files = this.files;
			var p = document.getElementById('preview');
			p.innerHTML = ''; //第二次选择文件时清空上一次的
			for(var i = 0, f; f = files[i]; i++) {
				var reader = new FileReader();
				reader.onload = (function(file) {
					return function(e) {
						var div = document.createElement('div');
						div.className = "text"
						div.innerHTML = encodeHTML(this.result);

						p.insertBefore(div, null);
					};
				})(f);
				//读取文件内容
				reader.readAsText(f, "gb2312");
			}
		}

		document.getElementById('files').addEventListener('change', fileSelect, false);
	})();

});