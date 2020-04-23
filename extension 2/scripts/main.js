$('.icon.icon--logo-mobile').click( function() {$(this).css({"transform" : "rotate(180deg)", "width" : "600px"})})


	$("h4").html("ALL OF THE FOLLOWING INFORMATION IS PRETENTIOUS. WE DON'T REALLY CARE ABOUT YOU, JUST YOUR MONEY");
	$('.g-alert__content p:first').html("Coronavirus won't kill you before homelessness and brokeness from our CRAZY tuition will. Btw we're increasing tuition next year! Adios! ");
	$('.g-alert__content p:first').css({'font-weight': 'bold','color': 'black', 'font-size': '18px', 'padding-top': '5px','line-height': '20px', 'padding-bottom': '10px'});

	$('.o-landing__title-wrapper h1').html("Pretentious pictures that makes our university look less like a hell-hole:");
	$('.m-bannerMessage__content p').html("It's not what you're expecting. Don't come to Parsons. Kids are depressed and everyone is planning on dropping out. I got insomnia, alcoholic, and nicotine addiction after I came to this school. This school is harmful for your mental health. If you've got into this school pls reconsider attending this school for your mental health-One of our many great reviews :)");
	$('.m-bannerMessage__content p').css({'font-weight': 'bold','color': 'orange', 'font-size': '13px', 'padding-top': '5px','line-height': '20px', 'padding-bottom': '10px'});
	$('.columns.small-10.large-11 p').html("We're thieves and robbers that will leech off your money. You're already paying rent in one of the most expensive cities in the world. We're here to add to that burden with our unreasonable tuition. Financial aid doesn't care. have fun :)");
	$('.columns.small-10.large-11 p').css({'font-weight': 'bold','color': 'lightblue', 'font-size': '40px', 'padding-top': '50px','line-height': '40px', 'padding-bottom': '50px'});
	$('.m-bannerMessage').css( {"background-image" : 'url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/yellow-and-black-danger-sign-bigalbaloo-stock.jpg"'});
	$('h3.m-collegeList__title').html("ALSO STAY AWAY FROM-");
    $('h3.m-collegeList__title').css({'font-weight': 'bold','color': 'darkred', 'font-size': '40px', 'padding-top': '50px','line-height': '40px', 'padding-bottom': '50px'});


	$('.o-landing__title.o-landing__title--top').html("Pretentious pictures that makes our university look less like a hell-hole:");
	$('h2.m-interactiveImages__title').html("USING STUDENT WORK FOR CLOUT-");
	$('.columns.small-10.large-9.large-offset-6.xlarge-offset-5 p').html("We only care about our students when it comes to showing off their talent for financial gain. No wonder we have no alumni funding...");
	$('.columns.small-10.large-8.large-push-5 p').html("Dont be fooled by these images. We have NO sense of cummunity. It's hard to make friends in a city as it is. but our lack of clubs and social areas will make it even harder for you. Have fun living lonely isolated lives in one of the most crowded cities in the country! ");
    $('h2.m-diagonalCarousel__title').html("WHY HAVE YOU REACHED THIS FAR. GO TO SAIC INSTEAD.");
    $('.columns.xsmall-14.small-10.large-8.large-push-5 p').html("If you haven't spent time as a student here, don't rate it based on your tour or the impression they give the visiting public. It's all form over function and so post-modern than good technique and students that actually care about what they're doing (or cared to begin with) are in the minority. I'm embarrassed to say I went there, but I did have a few good individual professors that also seemed to hate what the institution has morphed into. It's a scam of an institution, and it seems like their investments are all going towards one publicity stunt after the next... IE, the totally unneeded multi-million dollar rebranding- Another one of our great student reviews");
    $('.columns.xsmall-14.small-10.large-8.large-push-5 p').css({'font-weight': 'italics','color': 'lightgreen', 'font-size': '20px', 'padding-top': '50px','line-height': '40px', 'padding-bottom': '50px'});
    
    $('.carousel-cell.is-selected img').attr("src","https://media.makeameme.org/created/run-for-your-895a661cad.jpg");
    $('h2.m-diagonalCarousel__title').css({'font-size': '70px', 'padding-top': '50px','line-height': '70px', 'padding-bottom': '50px'});

$(document).ready(function(){

	$('.m-bannerMessage').on('mouseenter', function(){
		$('.m-bannerMessage__content p').hide();
		$('.m-bannerMessage__cta').hide();
		$('.m-bannerMessage__cta').hide();
		});

		$('.m-bannerMessage').on('mouseleave', function(){
		$('.m-bannerMessage__content p').show();
		$('.m-bannerMessage__cta').show();
		});

		$('.o-landing__title-wrapper h1').click(function(){
		$('.columns.small-10.large-11 p').remove();
		$('.o-landing__cta').remove();
		$('img.o-landing__mediaImageRight.o-landing__mediaImageRight--academics').remove();
        var alternate=document.createElement('img');
		alternate.style.position='absolute';
		alternate.style.right='0px';
		alternate.style.bottom='-400px';
		alternate.style.width='400px';
		$(alternate).attr({'src':'https://i.imgflip.com/1740zd.jpg'})
		document.querySelector('.o-landing__title-wrapper h1').append(alternate);
			});
	});