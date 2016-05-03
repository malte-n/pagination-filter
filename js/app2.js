//append pagination elements to page
 var pagination = '<div class="pagination"><ul></ul></div>';
 $(".page").append(pagination);
//append search elements to page-header
var search = '<div class="student-search"><input placeholder="Search for students..."><button>Search</button></div>';
$(".page-header").append(search);

//create array of totalStudentList li elements
var totalStudentList = $(".student-list li").toArray();

//number of all student list items
var numTotalStudents = totalStudentList.length;

//define numberItemsPerPage of elements per pagination page
var numberItemsPerPage = 10;

/////////////
///Pagination
/////////////

//create showPagination function based on array length
function showPagination(studentListLength){
	var numOfPages = Math.ceil(studentListLength/numberItemsPerPage);
	var pagesNum = 1;
	var i = 0;
	//creates pagination navigation
	while (i < numOfPages){
		$('.pagination ul').append('<li><a href="#">' + pagesNum++ + '</a></li>');
		i++;
	}
	//console.log(i);
	
	//calls the showList function
	//showlist();
}

//create showList function based on studentList
function showList(studentList) {
	//displays numberItemsPerPage for array based on what page is active
}

//creates clickedPage function
function clickedPage() {
	//on click
	$(".pagination > ul > li > a").click(function(){
	$("a").removeClass("active");
	$(this).addClass("active");	
	i = $(this).text();
	console.log(i);
	$(".student-list").children().hide();

    $(".student-list li").slice(10*(i-1), i*10).show();
    })
	//captures the currentPage on

}


/////////////
///Search
/////////////

//create on.click event listener for searchButton
$('.student-search button').on('click', function(){
	searchStudents();
});

//create on.keyup event listener for searchInput
 $('.student-search input').on('keyup', function() {
 	searchStudents();
  });
//create search function
function searchStudents() {
	var filteredStudentList = [];
	//creates filteredStudentList array
	//create var inputVal that holds the inputfields value
	//calls the showPagination function with the length of the filteredStudentList
	showPagination(filteredStudentList.length);
	//displays the filteredStudentList
	showList(filteredStudentList);
}
