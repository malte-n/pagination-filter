
//add pagination to the page
var pagination = '<div class="pagination"><ul></ul></div>';

//add the student search markup
var search = '<div class="student-search"><input id="search" placeholder="Search for students..."><button>Search</button></div>';

//append ul pagination to the page
$(".page").append(pagination);

//add search markup to the page
$(".page-header").append(search);   

//holdz the number of items per page
//thus easily adjustable
var itemsPerPage = 10;

//used to calculate pagenumbers

var allListItems = new Array;
var currentPage = $(".active").html();

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
    $(studentArray).hide().slice((currentPage - 1) * itemsPerPage, ((currentPage - 1) * itemsPerPage) + itemsPerPage).show();
}


//displays the needed page numbers based on the displayed items
var showPagination = function(studentArray) {
	$(".pagination ul li").remove();
	var studentArrayLength = studentArray.length;
	var pageNumber = Math.ceil(studentArrayLength / itemsPerPage);
	for (i=0; i < pageNumber; i ++) {
		var listItems = "<li><a href='#'>"+ (i+1) +"</a></li>";	
		$(".pagination ul").append(listItems);
	}
	
	$(".pagination ul li a:first").addClass("active");
	console.log("Number of pages: " + pageNumber);
	showList(allListItems);
}
showPagination(allListItems);


$("#search").on( "keyup", function() {
	values = $("input").val().toLowerCase();
	$(".student-list").children().hide();
	var name;

	allListItems = [];
		if ($("#search").val() == 0) {
		initialState();
		showPagination(allListItems);
		return false;
	}

	$(".student-list h3").each(function( index, value ) {
		//Users should be able to search by name or e-mail address
		name = value.innerHTML;
		if (name.indexOf(values) !== -1 && name.length > 0 ) {
			searchResult = $(this).parent().parent().show();
			console.log("Found: " + name + ", " + index);
			var filteredList = searchResult[0];
			allListItems.push(filteredList);
		}
	})

	console.log(allListItems.length);
	showPagination(allListItems);
	currentPage = 1;
})


$(document).on('click', ".pagination > ul > li > a", function(){
	$("a").removeClass("active");
	$(this).addClass("active");	
	currentPage = $(this).text();
	console.log(currentPage);
	showList(allListItems);
});