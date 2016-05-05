(function() {
	//add pagination to the page
	var pagination = '<div class="pagination"><ul></ul></div>';

	//add the student search markup
	var search = '<div class="student-search"><input id="search" placeholder="Search for students..."><button>Search</button></div>';

	//append ul pagination to the page
	$(".page").append(pagination);

	//add search markup to the page
	$(".page-header").append(search);   

	//holds the number of items per page
	//thus easily adjustable
	var itemsPerPage = 10;
	//needed for animation in css
	$(".student-list").addClass("swing");

	//initiate array that holds the student list items
	var allListItems = new Array;

	//stores active page in a variable for showList function
	var currentPage = $(".active").html();

	//initiates after the page loads
	var initialState = function() {
		allListItems = $(".student-list li").toArray();
		$(".student-list").children().hide();
		$(".student-list li:nth-child(n):nth-child(-n+10)").show();
		$(".pagination ul li a:first").addClass("active");
		currentPage = 1;
	}
	initialState();


	//displays the array in the DOM according to the pagination
	var showList = function(studentArray) {
		$(studentArray).removeClass("show");
		if (allListItems.length > 0) {
			var tenPerPage = $(studentArray).hide().slice((currentPage - 1) * itemsPerPage, ((currentPage - 1) * itemsPerPage) + itemsPerPage).show();
		    
		    //adds a class to listItems that are shown, which triggers the animation
		    $(tenPerPage).each(function(value){
		    	setTimeout(function() {
		    		$(studentArray).addClass("show");
		  		}, 10);
		    })
	    } else {

	    	//if the search does not return any listItems ->
			var msgNostudent = '<li><div>There are no matches to your search.</div></li>';
			$(".student-list").append(msgNostudent);
			console.log(msgNostudent);
		}
	}


	//displays the needed page numbers based on the displayed items
	var showPagination = function(studentArray) {
		//gets rid of the previously generated pagination
		$(".pagination ul li").remove();
		var studentArrayLength = studentArray.length;
		//calculates the pageNumber based on the length of the studentArray
		var pageNumber = Math.ceil(studentArrayLength / itemsPerPage);
		//adds as many pageNumbers as needed in a loop until needed pageNumber is met
		for (i=0; i < pageNumber; i ++) {
			var listItems = "<li><a href='#'>"+ (i+1) +"</a></li>";	
			$(".pagination ul").append(listItems);
		}
		
		$(".pagination ul li a:first").addClass("active");
		console.log("Number of pages: " + pageNumber);
		showList(allListItems);
	}
	showPagination(allListItems);


	//on every input this function calls 
	$("#search").on( "keyup", function() {
		var values = $("input").val().toLowerCase();
		$(".student-list").children().hide();
		var name;
		var email;
		//empty array to fill only with filteredItems from the user input
		allListItems = [];

		//iterates over each listItem and checks if the input matches them
		$(".student-item").each(function( index, value ) {
			//Users should be able to search by name or e-mail address
			var searchValue = $(this).find('.student-details').text().toLowerCase();
			if ( searchValue.indexOf(values) !== -1 ) {
				//stores the item in the allListItems array to display the filtered result
				var filteredList = $(this)[0];
				allListItems.push(filteredList);
			}
		})
		//selects page 1 again for the showList function to display the first page again
		currentPage = 1;
		//calls the pagination function to adapt to the needed pageNumbers
		showPagination(allListItems);
	})

	//calls the showList function to display the correct page
	$(document).on('click', ".pagination > ul > li > a", function(){
		$("a").removeClass("active");
		$(this).addClass("active");	
		currentPage = $(this).text();
		console.log(currentPage);
		showList(allListItems);
	});
})()