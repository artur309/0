<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>

<body>
	
	Tag: <input type="text" id="tagText" name="tag" value="ninja">
	<button onclick="myFunction()">Try it</button>

	<div style="border-style: dashed; position: absolute;" id="demo"></div>

	<script type="text/javascript">

		function myFunction() {
			var tag = document.getElementById("tagText").value;

			if (/\s/.test(tag))
				var tag = tag.replace(/ /g, '&');

			var api_key = "VeFqzx9r7tO0lhf0XCqEZMoVxKF4eQG9";
			var link =`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}&rating=R`;

			console.log(link);

			var xhr = $.get(link);
			xhr.done(function(data){
				console.log("success got data", data);
				document.getElementById("demo").innerHTML = '<center><img src = "'+data.data.image_url+'"  title="GIF via Giphy"></center>';
			});
		}

	</script>

</body>
</html>