var objects = [
	{
		"name": "teddy",
		"location": "bed",
		"description": "A big white teddy bear gifted to me by my best friend. Couldn't sleep without him.",
		"pic": "<img id='teddy' src='teddy.png'>",
		"backgroundPic": "url(teddywallpaper.png)"
	},
	{
		"name": "medicine",
		"location": "bathroom cabinet",
		"description": "A medicine for headaches my mom used to give me as a child. Reminds me of home.",
	    "pic": "<img id='medicine' src='meds.png' alt='medicine'>",
        "backgroundPic": "url(pills.png)"
	},
	{
		"name": "hoodie",
		"location": "closet",
		"description": "A soft hoodie I've been wearing for years that keeps me warm on cold days",
        "pic": "<img id='hoodie' src='hoodie.png' alt='hoodie'>",
        "backgroundPic": "url(jacketwallpaper.png)"
	},
	{
		"name": "heart",
		"location": "bed",
		"description": "A heart shaped pillow given to me by my best friend",
        "pic": "<img id='heart' src='heart' alt='poster of me and my bf'>",
        "backgroundPic": "url(heartwallpaper.png)"
	},
	{
		"name": "poster",
		"location": "shelf",
		"description": "A poster I designed for my boyfriend's birthday",
	    "pic": "<img id='poster' src='yashtiaart.png' alt='poster of me and my bf'>",
        "backgroundPic": "url(yashtiawallpaper.svg)"
	},
	{
		"name": "laptop",
		"location": "shelf",
		"description": "My laptop who has been through tough times with me.",
	    "pic": "<img id='laptop' src='laptop.png' alt='laptop illustration'>",
        "backgroundPic": "url(laptopwallpaper.svg)"
	},
]



$(document).ready(function(){

	$(".teddyappear").hover(function(){
    $(".teddyappear").html(objects[0].description)

  });
	$(".medsappear").hover(function(){
    $(".medsappear").html(objects[1].description)

  });
	$(".hoodieappear").hover(function(){
    $(".hoodieappear").html(objects[2].description)

  });
	$(".heartappear").hover(function(){
    $(".heartappear").html(objects[3].description)

  });
	$(".pictureappear").hover(function(){
    $(".pictureappear").html(objects[4].description)

  });
	$(".laptopappear").hover(function(){
    $(".laptopappear").html(objects[5].description)

  });


  $(".teddyb").click(function(){
    $("#wallpaperbox").css({'background-image': objects[0].backgroundPic, 'background-repeat': 'repeat', 'background-size': '60px'})

  });

 $(".meds").click(function(){
    $("#wallpaperbox").css({'background-image': objects[1].backgroundPic, 'background-repeat': 'repeat', 'background-size': '60px'})

  });

  $(".hood").click(function(){
    $("#wallpaperbox").css({'background-image': objects[2].backgroundPic, 'background-repeat': 'repeat',  'background-size': '120px'})

  });
    $(".heart").click(function(){
    $("#wallpaperbox").css({'background-image': objects[3].backgroundPic, 'background-repeat': 'repeat',  'background-size': '60px'})

  });
      $(".picture").click(function(){
    $("#wallpaperbox").css({'background-image': objects[4].backgroundPic, 'background-repeat': 'repeat',  'background-size': '100px'})

  });
        $(".laptop").click(function(){
    $("#wallpaperbox").css({'background-image': objects[5].backgroundPic, 'background-repeat': 'repeat',  'background-size': '150px'})

  });
});