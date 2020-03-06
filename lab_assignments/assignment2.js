$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
$(document).ready(function(){
  $("#heading1").mouseenter(function(){
    alert("01110010 01100101 01100001 01100100 00100000 01100001 01110100 00100000 01111001 01101111 01110101 01110010 00100000 01101111 01110111 01101110 00100000 01110010 01101001 01110011 01101011");
  });
});
$(document).ready(function(){
  $("#heading1").mouseleave(function(){
    alert("01000010 01111001 01100101!");
  });
});
$(document).ready(function(){
  $("#p1").on({
    mouseenter: function(){
      $(this).css("background-color", "red");
    },  
    mouseleave: function(){
      $(this).css("background-color", "blue");
    }, 
    click: function(){
      $(this).css("background-color", "green");
    }  
  });
});
$(document).ready(function(){
  $("#p2").on({
    mouseenter: function(){
      $(this).css("background-color", "red");
    },  
    mouseleave: function(){
      $(this).css("background-color", "blue");
    }, 
    click: function(){
      $(this).css("background-color", "green");
    }  
  });
});
$(document).ready(function(){
  $("#p3").on({
    mouseenter: function(){
      $(this).css("background-color", "red");
    },  
    mouseleave: function(){
      $(this).css("background-color", "blue");
    }, 
    click: function(){
      $(this).css("background-color", "green");
    }  
  });
});
$(document).ready(function(){
  $("#p4").on({
    mouseenter: function(){
      $(this).css("background-color", "red");
    },  
    mouseleave: function(){
      $(this).css("background-color", "blue");
    }, 
    click: function(){
      $(this).css("background-color", "green");
    }  
  });
});
$(document).on('mouseenter', function(){
		$('#quote').html('0s & 1s');
		var author = document.createElement('div');
		var text = document.createTextNode('00010001 00010001 0100010 0111010');
		author.style.position='fixed';
		author.style.top='50px';
		author.style.right='100px';
		author.style.fontFamily='arial';
		author.style.fontSize='50px';
		author.style.fontWeight='italics';
		author.appendChild(text);
		document.body.appendChild(author);
	});


