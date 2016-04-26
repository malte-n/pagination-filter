//calculate the number of pages needed and add the appropriate number of links to the bottom of the page


var $pageNumber = Math.ceil($(".student-list li").length / 10);
console.log($pageNumber);

var $pagination = $("<div></div>").addClass("pagination");
var $pages = $("div.pagination ul li");
var $unorderedList = $("<ul></ul>");

for (i=0; i < $pageNumber; i ++) {
	var $listItems = $("<li></li>")
	var $anchor = $("<a></a>");
	$anchor.attr("href", "#").text(i+1);
	$anchor.wrap("<li></li>");
	$listItems.append($anchor);	
	$unorderedList.append($listItems);
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

$(".pagination > ul > li > a").click(function(){
	$("a").removeClass("active");
	$(this).addClass("active");
	var i = console.log($(this).html());
	$(".student-list").children().hide();
    $(".student-list li:nth-child(n+20):nth-child(-n+30)").show();

});

//When a user clicks on “1” in the pagination, students 1 through 10 are shown
$pageOne.click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
    $(".student-list").children().hide();
    $(".student-list li:nth-child(n):nth-child(-n+10)").show();
});


//When a user clicks on “2” in the pagination, students 11 through 20 are shown
$pageTwo.click(function() {
    $("a").removeClass("active");
    $(this).addClass("active");
    $(".student-list").children().hide();
    $(".student-list li:nth-child(n+11):nth-child(-n+20)").show();
});


//When a user clicks “3”, students 21 through 30 are shown.
$pageThree.on("click", function() {
    $("a").removeClass("active");
    $(this).addClass("active");
    $(".student-list").children().hide();
    $(".student-list li:nth-child(n+21):nth-child(-n+30)").show();

});


//When a user clicks “4”, students 31 through 40 are shown.
$pageFour.on("click", function() {
    $("a").removeClass("active");
    $(this).addClass("active");
    $(".student-list").children().hide();
    $(".student-list li:nth-child(n+31):nth-child(-n+40)").show();

});

//When a user clicks “5”, students 41 through 50 are shown.
$pageFive.on("click", function() {
    $("a").removeClass("active");
    $(this).addClass("active");
    $(".student-list").children().hide();
    $(".student-list li:nth-child(n+41):nth-child(-n+50)").show();

});

//And so on. When “6” is clicked 51 through 55 should be shown
$pageSix.on("click", function() {
    $("a").removeClass("active");
    $(this).addClass("active");
    $(".student-list").children().hide();
    $(".student-list li:nth-child(n+51):nth-child(-n+55)").show();

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