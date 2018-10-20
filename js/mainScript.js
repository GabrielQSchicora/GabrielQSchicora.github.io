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
var currentPage = window.location.href.split('/')[4].split('.')[0]; //Current Page
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
   * Create input masks
   *
   */
  $(".fone-form").mask("(99) 9999-9999#"); //Use class fone-form
  $(".cpf-form").mask("999.999.999-99"); //Use class cpf-form
  $(".rg-form").mask("99.999.999-9"); //Use class rg-form 
  $(".cep-form").mask("99999-999"); //Use class cep-form
  $(".cnpj-form").mask("99.999.999/9999-99"); //Use class cnpj-form
  $(".data-form").mask("99/99/9999"); //Use class data-form
  $(".money-form").maskMoney({prefix:'R$ ', allowNegative: false, thousands:'.', decimal:','}); //Use class money-form

  /*
   *
   * Call function setMainMinimumHeight
   *
   */
  setMainMinimumHeight();

  /*
   *
   * Call funtion to stack fancyboxes
   *
   */
  stackFancyboxes();

  /*
   *
   * Close floating fancybox on click in "X"
   *
   */
  $('.messageBox img').click(function(){
    $(this).parent().fadeOut();
    clearTimeout(time);
  });//End close fancybox on click in "X"

  /*
   *
   * Close floating fancybox after 2,5 seconds
   *
   */
  setTimeout(function(){
    $('.messageBox').fadeOut('slow');
  }, 2500);//End close fancybox with timer

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
   * Create a mask for file inputs
   *
   */
    /*
     *
     * On click in field mask triggers click event to file field
     *
     */
    $('input.fileMask').click(function(){
  
      target = '#'+$(this).data('path_id');
      $(target).trigger('click');
  
    });//End fileMask click
  
    /*
     *
     * On change file field, set fiel mask value with archive path
     *
     */
    $('input[type=file]').change(function(){
  
      target = '.mask_for_'+$(this).prop('id');
      $(target).val($(this).val());
  
    });//End input file change

  /*
  *
  * Open and close menu
  *
  */
  $('header div.menuComand').click(function(){
    if($(this).parent().hasClass('openned')){
      $(this).parent().removeClass('openned');
    }else{
      $(this).parent().addClass('openned');
    }
  });

  /*
  *
  * Set height to first div
  *
  */
  $('div.home').css('height', screenHeight);

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
   * Remove 'smaller' class when the page width is less than 960px (Mobile resolution)
   *
   */
  if(screenWidth < mobileResolution){
    $('header, main').removeClass('smaller');
  }

  /*
   *
   * Show the menu if change from mobile view to desktop view with resize
   *
   */
  if(screenWidth > mobileResolution){
    $('.menu').show();
  }

  /*
  *
  * Set height to first div
  *
  */
  $('div.home').css('height', screenHeight);

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
   * Set smaller class to menu if not is in mobile
   *
   */
  if(screenWidth > mobileResolution){
    if($(window).scrollTop() > 50){
      $('header, main').addClass('smaller');
    }else{
      $('header, main').removeClass('smaller');
    }
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
 * Stack erros, sucess or warning floater fancyboxes
 *
 * @return void
 *
 */
function stackFancyboxes(){
  //Variables
  var lastMargin = 0;
  var lastHeight = 0;

  //Scrolls through all messageBox elements
  $('.messageBox').each(function(){

    //Adds margin top
    var margin = (lastMargin + lastHeight) + "px";

    //Apply margin and show messageBox
    $(this).css('margin-top', margin).fadeIn();

    //Add last margin and last height to use in next messageBox
    lastMargin = parseInt($(this).css('margin-top').replace(/px/, '')) + 20;
    lastHeight = $(this).outerHeight();

  });
}//End function stackFancyboxes

/*
 *
 * Send a link to the current page by email
 *
 * @return void
 *
 */
function sendEmailWithCurrentPage(){
	window.location.href="mailto:?subject="+document.title+"&body="+escape(window.location.href);
};//End function sendEmailWithCurrentPage

/*
 *
 * Open a fancybox manually
 *
 * @param href Path to fancybox content
 * @param link Link to redirect by click in fancybox
 * @param target Link opening type (_self, _blank, etc...)
 *
 */
function openFancybox(href,link,target){
  /*
   *
   *
   * @param href Path to fancybox content
   * @param padding Inner fancybox space
   * @param overlayShow Set if show a background overlay
   * @param overlayOpacity Set opacity of background overlay
   * @param overlayColor Set color of background overlay
   *
   */
  $.fancybox({
    'href'   : href,
    'padding'  : 10,
    'overlayShow': true,
    'overlayOpacity': 0.3,
    'overlayColor' : '#000000',
    afterLoad : function() {
      if(link != undefined){
        this.inner.wrap( '<a href="' + link + '" target="' + target + '" />' );
      }
    }
  });//End Function to call fancybox

}//End Function openFancybox

/*
 *
 * Facebook Script
 *
 */
/*(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.9";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));*/

/*
 *===============================================================
 *                                                              |
 *                          Utilities                           |
 *                                                              |
 *===============================================================
 */
/*
--------------- To Create Fancyboxes manualy ---------------

    //To Create errors messages, declare a errors array and use push method to add erros

    //Remove all messageBox from DOM
    $('.messageBox').remove();

    //Remove repeated elements
    errors = errors.filter(function(este, i) {
        return errors.indexOf(este) == i;
    })

    //Check for errors
    if(errors.length == 0){

      

    }else{

      for(var i = 0; i < errors.length; i++){

        //Add messages after header
        $('header').append("<div class='messageBox error'>"+errors[i]+"<img src='timthumb.php?src=img/close.png&w=25&h=25' alt='close'></div>");

      }
      
      //Hide all messageBox
      $('.messageBox').hide();

      //Call funtion to stack fancyboxes
      stackFancyboxes();

      //Close floating fancybox on click in "X"
      $('.messageBox img').click(function(){
        $(this).parent().fadeOut();
        clearTimeout(time);
      });

      //Close floating fancybox after 2,5 seconds
      var time = setTimeout(function(){
        $('.messageBox').fadeOut('slow');
      }, 2500);

    }
*/