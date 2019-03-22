/*
 * Javascript Utilities
 * version: 1.0 (2018-09-11)
 * @requires jQuery
 *
 * Copyright 2018 Gabriel Queiroz - gabriel.q.s@live.com
 *
 */

/*
 *===============================================================
 *                                                              |
 *                          Variables                           |
 *                                                              |
 *===============================================================
 */
var currentPage = window.location.href.split('/'); //Current Page
currentPage = currentPage[currentPage.length - 1].split('.')[0]; //Get last piece of URL
currentPage = (currentPage == '')? 'index' : currentPage ; //Set 'index' name if not implicit in URL
var screenHeight = $(window).height(); //Screen Height
var screenWidth = $(window).width(); //Screen Width
var mobileResolution = 960; //Default Mobile Resolution
var anchor = window.location.href.split("#")[1]; //Anchor
var headerHeight; //Header Height
var footerHeight; //Footer Height

/*
 *===============================================================
 *                                                              |
 *                        Document Ready                        |
 *                                                              |
 *===============================================================
 */
$(document).ready(function(){
  /*
   *
   * Variables
   *
   */
  headerHeight = $('header').outerHeight(); //Header Height
  footerHeight = $('footer').outerHeight(); //Footer Height

  /*
   *
   * Call function setMainMinimumHeight
   *
   */
  setMainMinimumHeight();

  /*
   *
   * Call fancybox on click on a object with class fancybox
   *
   */
  $(".fancybox").fancybox({
    helpers : { 
     title : { type : 'inside' }
    },
    beforeLoad: function() {
     this.title = $(this.element).attr('caption');
    }
  });//End Call fancybox

  /*
  *
  * Open and close menu
  *
  */
  $('header div.menuComand').click(function(){
    $(this).parent().toggleClass('openned');
  });

  /*
  *
  * Create anchor
  *
  */
  $('.scrollTarget').click(function(){
    var target = $(this).data('target');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

  /*
  *
  * Add active class on click in menu item
  *
  */
  $('nav.menu ul li').click(function(){
    $('header div.menuComand').trigger('click');
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  /*
  *
  * Change themes
  *
  */
  $('div.changeTheme input#darkTheme').change(function(){
    if($(this).is(':checked')){
      $('link.themeDefinition').attr('href', 'css/themes/dark.min.css');
    }else{
      $('link.themeDefinition').attr('href', 'css/themes/light.min.css');
    }
  });

});//End Document Ready

/*
 *===============================================================
 *                                                              |
 *                        Window Resize                         |
 *                                                              |
 *===============================================================
 */
$(window).resize(function(){
  /*
   *
   * Refresh the screen size variable when resizing window
   *
   */
  screenHeight = $(window).height(); //Screen Height
  screenWidth = $(window).width(); //Screen Width

  /*
   *
   * Call function setMainMinimumHeight
   *
   */
  setMainMinimumHeight();

  /*
   *
   * Show the menu if change from mobile view to desktop view with resize
   *
   */
  if(screenWidth > mobileResolution){
    $('.menu').show();
  }


});//End Window Resize

/*
 *===============================================================
 *                                                              |
 *                        Window Scroll                         |
 *                                                              |
 *===============================================================
 */
$(window).scroll(function(){

  /*
  *
  * Create efect on div item appear in 30% of window
  *
  */
  var objectOffset = $('h1#about-me').offset().top;
  var windowScroll = $(window).scrollTop();
  if(objectOffset <= (windowScroll + (screenHeight * 0.5))){
    $('div.about-me div.img, div.about-me div.text').addClass('show');
  }

  objectOffset = $('div.bgFormation').offset().top;
  if(objectOffset <= (windowScroll + (screenHeight * 0.5))){
    $('ul.time-line li:not(.line):not(.clear)').each(function(){
      $(this).addClass('show');
    });
  }

  objectOffset = $('h1#experience').offset().top;
  if(objectOffset <= (windowScroll + (screenHeight * 0.5))){
    $('ul.experiences li').each(function(){
      $(this).addClass('show');
    });
  }

  objectOffset = $('div.bgQualifications').offset().top;
  if(objectOffset <= (windowScroll + (screenHeight * 0.5))){
    $('ul.qualifications li').each(function(){
      $(this).children('div.percent').removeClass('zero');
    });
  }

  objectOffset = $('h1#projects').offset().top;
  if(objectOffset <= (windowScroll + (screenHeight * 0.5))){
    $('ul.projects li').each(function(){
      $(this).addClass('show');
    });
  }

  objectOffset = $('div.bgContact').offset().top;
  if(objectOffset <= (windowScroll + (screenHeight * 0.5))){
    $('ul.contact li').each(function(){
      $(this).addClass('show');
    });
  }

  if(windowScroll < (screenHeight * 0.5)){
    $('nav.menu ul li').removeClass('active');
    $('nav.menu ul li#home-menu-item').addClass('active');
  }else{
    $('h1.target').each(function(){
      if(windowScroll > ($(this).offset().top - (screenHeight * 0.25))){
        $('nav.menu ul li').removeClass('active');
        $('nav.menu ul li'+$(this).data('target')).addClass('active');
      }
    });
  }

});//End Window Scroll

/*
 *===============================================================
 *                                                              |
 *                          Functions                           |
 *                                                              |
 *===============================================================
 */
/*
 *
 * Set a minimun height for main tag
 *
 * @return void
 *
 */
function setMainMinimumHeight(){
	//Discounted footer height
	var finalHeight = screenHeight - footerHeight + "px";

	//Make an minimum height to page
	$('main').css('min-height', finalHeight);
}//End function setMainMinimumHeight

/*
 *
 * Return difference between two dates
 *
 * @param initialDate Initial date do get difference
 * @param finalDate Final date do get difference
 * @param type type of return (miliseconds, seconds, minutes, hours, days, months, years or text)
 *
 */
function getDateDiff(initialDate, finalDate, type = "days"){

  //Get Dates UTC
  var utc1 = Date.UTC(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate());
  var utc2 = Date.UTC(finalDate.getFullYear(), finalDate.getMonth(), finalDate.getDate());
  var division;
  var result = '';

  //Check return type and set division
  try{
    if(type == 'miliseconds'){
      division = 1;
    }else if(type == 'seconds'){
      division = 1000;
    }else if(type == 'minutes'){
      division = 1000 * 60;
    }else if(type == 'hours'){
      division = 1000 * 60 * 60;
    }else if(type == 'days'){
      division = 1000 * 60 * 60 * 24;
    }else if(type == 'months' || type == 'text'){
      division = 1000 * 60 * 60 * 24 * 30.5833333;
    }else if(type == 'years'){
      division = 1000 * 60 * 60 * 24 * 30.5833333 * 12;
    }else{
            //Throw type invalid Exception
          throw "Return date type "+type+" is invalid. Use miliseconds, seconds, minutes, hours, days, months, years or text.";
    }
  }catch(e){
        //Show errors on Log
    console.error(e);
    return false;
  }

  //Get difference between dates
  var diff = Math.floor(utc2 - utc1) / division;

  //If type is text, create a text with years and months
  if(type == 'text'){

    //Get amount of years
    var year = Math.floor(diff/12);
    //Get amount of months
    var month = Math.floor(diff%12);

    //Check if write years
    if(year > 0){
      result = year.toString() + ' ' 
      result += (year > 1)?'anos':'ano';
      result += (month > 0)?' e ':'';
    }
    //Check if write months
    if(month > 0){
      result += month.toString() + ' ';
      result += (month > 1)?'meses':'mês';
    }else{
      //If have lass than 1 month
      if(year < 1){
        result += '0 meses'
      }
    }

  }else{
    //If return type is not text, result receive difference
    result = Math.floor(diff);
  }

  return result;
}

/*
*
* Get Date and return formated (mm/yyyy)
*
* @param date Date to format
* @return mm/yyyy date formated
*
*/
function getDateFormatedToShow(date){
  month = (date.getMonth()+1 < 10)?'0'+(date.getMonth()+1):date.getMonth()+1;
  return  month + "/" + date.getFullYear();
}