function change(sheet){
	alert("Theme selected: "+sheet);
	document.getElementById('pagestylesheet').setAttribute('href',sheet);
}
function postcomment(){
	
	var comments = document.getElementById("inpcomment").value;
	var name = document.getElementById("inpname").value;
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.setAttribute("id", "comment");
	li.setAttribute("class", "media");
	var str = '<a href="#" class="pull-left"><img src="avatar.jpg" alt="" class="img-circle"></a><div class="media-body"><span class="text-muted pull-right"><small id="time" class="text-muted">30 min ago</small></time></span><strong id="name" class="text-success">@'+name+'</strong><p id="comment">'+comments+'</p></div>';
	li.innerHTML=str;
	ul.appendChild(li);
                                            
	
}