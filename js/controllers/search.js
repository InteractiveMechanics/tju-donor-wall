Search = (function() {

    // per keyboard demo
    var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure",
    "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript",
    "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme" ];

	 var init = function() {
        bindEvents();
    }

    
    var openSearch = function() {
        $('#right-panel').removeClass('hidden fadeOutRight').addClass('animated slideInRight flex-container');  
        $('#search').removeClass('hidden');
        $('#search-btn').addClass('animated fadeOut');

        setTimeout(function(){ $('#search-close').addClass('animated fadeIn').removeClass('fadeOut').css('display', 'flex'); }, 750);
        
        $('main').addClass('close-panel');

    }

    var openKeyboard = function() {
        $('#donor-name')
            .keyboard({ 
                layout: 'custom',
                usePreview: false,
                customLayout: {
                    'normal': [
                        '1 2 3 4 5 6 7 8 9 0 {del}',
                        'Q W E R T Y U I O P',
                        'A S D F G H J K L {enter}',
                        'Z X C V B N M , . \'',
                        '{accept:Accept} {space} {left} {right} {undo:Undo} {redo:Redo} -'
                    ]
                },
                display: {
                    del: '\u232b:Delete',
                    'enter': 'ENTER',
                    'accept' : 'DONE',
                    'space' : 'SPACE'

                }
            })

        .addTyping();
    }

    var openYearKeyboard = function() {
        $('#donor-year')
        .keyboard({
            layout : 'custom',
            restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
            preventPaste : true,  // prevent ctrl-v and right click
            autoAccept : true,
            customLayout: {
                'normal': [
                    '{left} {right} {del}',
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '0 {accept}'
                ]
            },
            display: {
                del: '\u232b:Delete',
                'accept' : 'DONE'
            }
        })
        .addTyping();
    }

    var openYearMaxKeyboard = function() {
        $('#donor-year-max')
        .keyboard({
            layout : 'custom',
            restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
            preventPaste : true,  // prevent ctrl-v and right click
            autoAccept : true,
            customLayout: {
                'normal': [
                    '{left} {right} {del}',
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '0 {accept}'
                ]
            },
            display: {
                del: '\u232b:Delete',
                'accept' : 'DONE'
            }

        })
        .addTyping();
    }


    var resetSelect = function() {
        $("#donor-colleges").val('default');
        $("#donor-colleges").selectpicker("refresh");
    }

    var checkforErrors = function() {
        console.log('here is a thing');
        var donorYear = $('#donor-year').val();
        if (donorYear > 2015 && donorYear < 1800) {
            $('#search-er').removeClass('hidden');
        }
    }




    var closeSearch = function() {
        $('#right-panel').removeClass('slideInRight').addClass('fadeOutRight');
        //$('#search').removeClass('fadeIn').addClass('hidden fadeOutRight');
        setTimeout(function(){ $('#search').addClass('hidden'); }, 750);
        setTimeout(function(){ $('#give-panel').addClass('hidden');}, 750);
        $('#search-btn').removeClass('fadeOut').addClass('fadeIn');
        $('#search-close').removeClass('fadeIn').addClass('fadeOut').css('display', 'none');
        $('#search-er').addClass('hidden');
    }



    var bindEvents = function() {
    	$(document).on('click tap', '#search-btn', openSearch);
        $(document).on('click tap', '#search-close', closeSearch);
        $(document).on('click tap', '#donor-name', openKeyboard);
        $(document).on('click tap', '#donor-year', openYearKeyboard);
        $(document).on('click tap', '#donor-year-max', openYearMaxKeyboard);
        $(document).on('click tap', '#reset', resetSelect);
    }


  	return {
        init: init
    }

})();
