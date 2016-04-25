//calculate the number of pages needed and add the appropriate number of links to the bottom of the page


var $pageNumber = Math.ceil($(".student-list li").length / 10);
console.log($pageNumber);

var $pagination = $("<div></div>").addClass("pagination");
var $pages = $("div.pagination ul li a");
var $unorderedList = $("<ul></ul>");
var $anchor;

for (i=0; i < $pageNumber; i ++) {
	var $listItems = $("<li></li>")
	$anchor = $("<a></a>");
	$anchor.attr("href", "#");
	$anchor.text(i+1);
	$listItems.append($anchor);	
	$unorderedList.append($listItems);
	console.log($listItems);
}

$pagination.append($unorderedList);
$(".page").append($pagination);

//Hide all but the first 10 students when the page loads
var $pageOne = $anchor.parent().parent().children().first().children().addClass("active");
var $pageTwo = $pageOne.parent().next().children();
var $pageThree = $pageTwo.parent().next().children();
var $pageFour = $pageThree.parent().next().children();
var $pageFive = $pageFour.parent().next().children();
var $pageSix = $anchor;


$style = $("<style></style>");
var $hidden;


//When a user clicks on “1” in the pagination, students 11 through 20 are shown
$pageOne.click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
});
if ($pageOne.hasClass("active")) {
	$hidden = $(".student-item.cf:nth-of-type(n+11)").css("display", "none");
} 

//When a user clicks on “2” in the pagination, students 11 through 20 are shown
$pageTwo.on("click", function() {
    $("a").removeClass("active");
    $(this).addClass("active");
    if ($pageTwo.hasClass("active")) {
		$hidden = $(".student-item.cf:nth-of-type(n+11)").css("display", "");
		$hidden = $(".student-item.cf:nth-of-type(n+21)").css("display", "none");
}
	$style.append($hidden);
	$("head").append($style);
});


//When a user clicks “3”, students 21 through 30 are shown.
$pageThree.click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
});
if ($pageThree.hasClass("active")) {
	$hidden = $(".student-item.cf:nth-of-type(n+21)").css("display", "none");
}

//When a user clicks “4”, students 31 through 40 are shown.
$pageFour.click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
});

//When a user clicks “3”, students 21 through 30 are shown.
$pageFive.click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
});

//And so on. When “6” is clicked 51 through 55 should be shown
//When a user clicks “3”, students 21 through 30 are shown.
$pageSix.click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
});


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