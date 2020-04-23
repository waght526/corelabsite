var title = document.getElementById("title")
var title2 = document.getElementById("title2")
var title3 = document.getElementById("title3")
var i = document.getElementById("i")
var j = document.getElementById("j")
var h = document.getElementById("h")
var k = document.getElementById("k")

title.onmouseover =
  function(){
  title.style.color="red";
}
title.onmouseleave =
  function(){
  title.style.color="darkblue";
}

title2.onmouseover =
  function(){
  title2.style.color="red";
}
title2.onmouseleave =
  function(){
  title2.style.color="lightblue";
}

title3.onmouseover =
  function(){
  title3.style.color="red";
}
title3.onmouseleave =
  function(){
  title3.style.color="lightblue";
}


i.onmouseover =
  function(){
  title.style.visibility ="hidden";
}

i.onmouseleave =
  function(){
  title.style.visibility ="visible";
}

j.onmouseover =
  function(){
  i.style.visibility ="hidden";
  title.style.visibility ="hidden";
  
}

j.onmouseleave =
  function(){
  i.style.visibility ="visible";
  title.style.visibility ="visible";
  
}

h.onmouseover =
  function(){
  j.style.visibility ="hidden";
  title.style.visibility ="hidden";
  i.style.visibility ="hidden";
  
}

h.onmouseleave =
  function(){
  j.style.visibility ="visible";
  title.style.visibility ="visible";
  i.style.visibility ="visible";
  
}

k.onmouseover =
  function(){
  j.style.visibility ="hidden";
  title.style.visibility ="hidden";
  i.style.visibility ="hidden";
  h.style.visibility ="hidden";
  
}

k.onmouseleave =
  function(){
  j.style.visibility ="visible";
  title.style.visibility ="visible";
  i.style.visibility ="visible";
  h.style.visibility ="visible";
  
}


