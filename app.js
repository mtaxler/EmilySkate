$(document).ready(function(){

	// $.getJSON(url,function(data){

	// 	var allData = [];
		
	// 	$.each(data, function(key, val){
			
	// 		var title = '<h3>' + val.title + '</h3>';
	// 		var description = '<p>' + val.description + '</p>';
	// 		var link = val.link;

	// 		var content = title + description + link;
	// 		allData.push(content);
	// 	});

	// 	$('#exerciseButton').click(function(){
	// 		randomSkate(allData);
	// 	});
		
	// });

	var allData = [];
	
	$.each(mydata, function(key, val){
		
		var title = '<h3>' + val.title + '</h3>';
		var description = '<p>' + val.description + '</p>';
		var link = val.link;

		var content = title + description + link;
		allData.push(content);
	});

	$('#exerciseButton').click(function(){
		randomSkate(allData);
	});
		

	function randomSkate(tasks){
		// var tasks = ['RBO Loops','Kegels','Cattle Wrangling','Solve a mystery<br><ul>Steps:</ul>','Go Rescue Little Timmy from the old well','Re-elect Bronco Bama'];
		var thing = tasks[Math.floor(Math.random()*tasks.length)];
		$('#exercise').html(thing);
	}

});

