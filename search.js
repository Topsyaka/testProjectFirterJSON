var json;
function SendPost() {
    //отправляю POST запрос и получаю ответ
    $.ajax({
      type: 'GET',
      url: 'send.php',
      success: function(data){
         json =$.parseJSON(data);

      }
   });
}


$(document).ready(SendPost());


function filter(arr,comparator) {
	var res = new Array();
	if (comparator == ''){
		return arr;
	}
	if (comparator[0] != '-'){
		for(var i = 0;i<arr.length; i++){
			for (prop in arr[i]){
			if(arr[i][prop]!=null){
					if (typeof(arr[i][prop]) != 'number'){
						if (arr[i][prop].search(comparator) != -1 ){
							res.push(arr[i]);
                     break;
						}
					}else{
						if (arr[i][prop] === comparator ){
							res.push(arr[i]);
                     break;
						}
					}
				}
			}
		}
	}
	return res;
}


function multiSearch(arr,string) {
	var arrStr = string.split(' ');
	var res = new Array();
	for(var i = 0;i<arrStr.length;i++){
		if (res.length == 0){
			res = filter(arr,arrStr[i]);
		}else{
			res = filter(res,arrStr[i]);
		}
	}
	return res; 
}


function addDivToHTML(arr) {
	var el = document.getElementById('parent');
	while ( el.firstChild ) {
      el.removeChild( el.firstChild )
   };
	
	for(var i = 0;i<arr.length;i++){
	  if (arr[i]!= 'undefined'){	
	     var div = document.createElement('div');
	     div.className = 'player';
	     div.innerHTML = '<div class = "player_name"> Player name: '+arr[i].name+'</div>'+'<div class = "player_info"><p> Position: '+arr[i].position+'</p><p> Jersey number: '
            +arr[i].jerseyNumber+'</p><p> Date Of Birth: '+arr[i].dateOfBirth+'</p><p> Nationality:'+arr[i].nationality+'</p><p> Contract Until: '+arr[i].contractUntil+'</p><p> Market value: '+arr[i].marketValue.slice(0,arr[i].marketValue.length-1)+'$</p>'+'</div>';
	     el.appendChild(div);
	  }
	}

}

