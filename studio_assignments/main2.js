var objects = [
	{
		"name": "teddy",
		"color": "white",
		"size": "big",
		"pic": "<img id='teddy' src='http://www.pngmart.com/files/10/Teddy-Bear-PNG-File.png' alt='teddy bear'>"
	},
	{
		"name": "medicine",
		"color": "yellow",
		"size": "small",
	    "pic": "<img id='medicine' src='https://i-cf5.gskstatic.com/content/dam/cf-consumer-healthcare/panadol/en_in/adult/productshots/crocinpainrelief/Crocin%20Pain%20Relief-Web%20Banner_455x455.png?auto=format' alt='medicine'>"

	},
	
	{
		"name": "hoodie",
		"color": "grey",
		"size": "big",
        "pic": "<img id='hoodie' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngguru.com%2Ffree-transparent-background-png-clipart-nzcwn&psig=AOvVaw1iTOGoHJYE2YLVwA1Y5Utn&ust=1587698534669000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjaoYvM_egCFQAAAAAdAAAAABAE' alt='hoodie'>"

	}
]

// WALLPAPERS
var wallpapers = [

{
    "name": "teddywallpaper",
    "pic": "<img id='teddywall' src='teddywallpaper.png' alt='wallpaper with teddy bears on it'>"
},

{
    "name": "medicinewallpaper",
    "pic": "<img id='medicinewall' src='medicinewallpaper.png' alt='wallpaper with medicines on it'>"
},

{
    "name": "hoodiewallpaper",
    "pic": "<img id='hoodie' src='hoodiewallpaper.png' alt='wallpaper with hoodie on it'>"
}
]

$(document).ready(function(){
  $(".teddyb").click(function(){
    $("#wallpaperbox").css('backgroundImage', 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ch%2Fpin%2F591660469768371008%2F&psig=AOvVaw2tsBbNftXEC-shE5Df9eC2&ust=1587702668653000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCK3L7b_egCFQAAAAAdAAAAABAE)');
  });
});
