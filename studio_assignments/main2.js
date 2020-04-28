var objects = [
	{
		"name": "teddy",
		"location": "bed",
		"description": "A big white teddy bear gifted to me by my best friend. Couldn't sleep without him.",
		"pic": "<img id='teddy' src='http://www.pngmart.com/files/10/Teddy-Bear-PNG-File.png' alt='teddy bear'>",
		"backgroundPic": "url(https://images-na.ssl-images-amazon.com/images/I/71FppCB1D-L._AC_SL1000_.jpg)"
	},
	{
		"name": "medicine",
		"location": "bathroom cabinet",
		"description": "A medicine for headaches my mom used to give me as a child. Reminds me of home.",
	    "pic": "<img id='medicine' src='https://i-cf5.gskstatic.com/content/dam/cf-consumer-healthcare/panadol/en_in/adult/productshots/crocinpainrelief/Crocin%20Pain%20Relief-Web%20Banner_455x455.png?auto=format' alt='medicine'>"
        "backgroundPic": "url(https://images-na.ssl-images-amazon.com/images/I/71FppCB1D-L._AC_SL1000_.jpg)"
	},
	
	{
		"name": "hoodie",
		"location": "closet",
		"description": "A soft hoodie I've been wearing for years that keeps me warm on cold days",
        "pic": "<img id='hoodie' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngguru.com%2Ffree-transparent-background-png-clipart-nzcwn&psig=AOvVaw1iTOGoHJYE2YLVwA1Y5Utn&ust=1587698534669000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjaoYvM_egCFQAAAAAdAAAAABAE' alt='hoodie'>"
        "backgroundPic": "url(https://images-na.ssl-images-amazon.com/images/I/71FppCB1D-L._AC_SL1000_.jpg)"
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
    $("#wallpaperbox").css({'background-image': objects[0].backgroundPic, 'background-repeat': repeat-y;});

  });
});



