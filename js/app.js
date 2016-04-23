//calculate the number of pages needed and add the appropriate number of links to the bottom of the page


var $pageNumber = Math.ceil($(".student-list li").length / 10);


//Hide all but the first 10 students when the page loads

//$hidden = $("<style></style>").css("");
//$head.append($hidden);
        /**
        This CSS is for illustrative purposes. 
        All elements should still be in the DOM, but hidden.
        **/



//When a user clicks on “2” in the pagination, students 11 through 20 are shown
var $pagination = $("<div></div>").addClass("pagination");
var $pages;
var $unorderedList = $("<ul></ul>");

for (i=0; i < $pageNumber; i ++) {
	
	var $listItems = $("<li></li>")
	var $anchor = $("<a></a>");
	$anchor.attr("href", i+1);
	listItems.append($anchor);
	
	//$listItems;
	
	$unorderedList.append($listItems);

	console.log($listItems);
	//if $(".li a").click(function(){
	//	$(this).addClass("active");
	//})
}

$pagination.append($unorderedList);
$(".page").append($pagination);
//When a user clicks “3”, students 21 through 30 are shown.
//And so on. When “6” is clicked 51 through 55 should be shown

//add the student search markup as presented in the filters-example.html file to the index.html file
var $search = $("<div></div>").addClass("student-search");
var $input = $("<input>").attr("placeholder", "Search for students...");
var $searchButton = $("<button>Search</button>");
$search.append($input);
$search.append($searchButton);
$(".page-header").append($search);          
        
//Add an event listener to the search button
//When the user clicks on the button it should use the text in the search input to filter the results

//Users should be able to search by name or e-mail address
//Search results should also be paginated.
//For example, if the search returns more than 10 results, those results should be paginated too