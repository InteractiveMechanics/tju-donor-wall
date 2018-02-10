Search = (function() {

    // per keyboard demo
    var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
    "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript",
    "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

	 var init = function() {
        bindEvents();
    }

    
    var openSearch = function() {  
        $('#search').removeClass('hidden fadeOutRight').addClass('animated slideInRight flex-container');
        $('#search-btn').addClass('animated fadeOut');

        setTimeout(function(){ $('#search-close').addClass('animated fadeIn').removeClass('fadeOut').css('display', 'flex'); }, 750);
        
        $('main').addClass('close-panel');

    }

    var openKeyboard = function() {
        $('#donor-name')
            .keyboard({ 
                layout: 'qwerty',
                usePreview: false
            })

        .addTyping();
    }

    var openYearKeyboard = function() {
        $('#donor-year')
        .keyboard({
            layout : 'num',
            restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
            preventPaste : true,  // prevent ctrl-v and right click
            autoAccept : true
        })
        .addTyping();
    }

    var openYearMaxKeyboard = function() {
        $('#donor-year-max')
        .keyboard({
            layout : 'num',
            restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
            preventPaste : true,  // prevent ctrl-v and right click
            autoAccept : true
        })
        .addTyping();
    }






    var closeSearch = function() {
        $('#search').removeClass('slideInRight').addClass('fadeOutRight');
        $('#search-btn').removeClass('fadeOut').addClass('fadeIn');
        $('#search-close').removeClass('fadeIn').addClass('fadeOut').css('display', 'none');
    }



    var bindEvents = function() {
    	$(document).on('click tap', '#search-btn', openSearch);
        $(document).on('click tap', '#search-close', closeSearch);
        $(document).on('click tap', '#donor-name', openKeyboard);
        $(document).on('click tap', '#donor-year', openYearKeyboard);
        $(document).on('click tap', '#donor-year-max', openYearMaxKeyboard);
    }


  	return {
        init: init
    }

})();
