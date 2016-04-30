//add the pagination to the page
var $studentList = $(".student-list li");
var $pageNumber;
var $pagination = $("<div></div>").addClass("pagination");
var $pages = $("div.pagination ul li");
var $unorderedList = $("<ul></ul>");
var $activePage;
var $anchor = $(".pagination ul li a");
$pagination.append($unorderedList);
$(".page").append($pagination);


//add the student search markup as presented in the filters-example.html file to the index.html file
var $studentSearch = $("<div></div>").addClass("student-search");
var $input = $("<input>").attr("placeholder", "Search for students...");
var $searchButton = $("<button>Search</button>");
$studentSearch.append($input);
$studentSearch.append($searchButton);
$(".page-header").append($studentSearch);   
var $searchResult;
var $values = $("input").val();
var $studentNames = $(".student-list h3");
var $activePage;
var i;

//used to calculate pagenumbers
var x = new Array;
$studentList.each(function(i, li) {
  x.push($(li));
});

//displays the needed page numbers based on the displayed items
var showPagination = function() {
	$pageNumber = Math.ceil(x.length / 10);
	for (i=0; i < $pageNumber; i ++) {
		var $listItems = $("<li></li>");
		var $anchorTags = $("<a></a>");
		$anchorTags.attr("href", "#").text(i+1);
		$listItems.append($anchorTags);	
		$unorderedList.append($listItems);
	}
	
	$firstPage = $(".pagination ul li a:first").addClass("active");
	i = $firstPage.text();
	console.log("Number of pages: " + $pageNumber);
}

	$(".student-list").children().hide();
	$(".student-list li:nth-child(n):nth-child(-n+10)").show();

$input.on( "keyup", function() {
	$values = $("input").val();
	$(".student-list").children().hide();
	var name;
	x = [];

	$studentNames.each(function( index, value ) {
		//Users should be able to search by name or e-mail address
		name = value.innerHTML;
		if (name.indexOf($values) !== -1 && name.length > 0 ) {
			$searchResult = $(this).parent().parent().show();
			console.log("Found: " + name + ", " + index);

			x.push($searchResult);
		}
	})

	$unorderedList.children().remove();
	showPagination();
	console.log(x.length);
})

showPagination();

$(".pagination > ul > li > a").click(function(){
	$("a").removeClass("active");
	$(this).addClass("active");	
	i = $(this).text();
	console.log(i);
	$(".student-list").children().hide();
    $(".student-list li").slice(10*(i-1), i*10).show();
});

//change page
function showPage(i) {
	console.log("Shows what page is shown: " + i);
	$(".student-list").children().hide();
    $(".student-list li").slice(10*(i-1), i*10).show();
}
