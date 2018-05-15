Search = (function() {


	 var init = function() {
        bindEvents();
    }

    
    var openSearch = function() {
        Panel.closePanel();
        TweenMax.pauseAll();
        
        $('#right-panel').removeClass('hidden fadeOutRight').addClass('animated slideInRight flex-container');  
        $('#search').removeClass('hidden');
        $('#search-btn').addClass('animated fadeOut');

        setTimeout(function(){ $('#search-close').addClass('animated fadeIn').removeClass('fadeOut').css('display', 'flex'); }, 750);
        
        $('main').addClass('close-panel');

    }

    var openKeyboard = function() {
        $('#donor-name')
            .bind('keyboardChange', function (e, keyboard, el) {
                Utilities.resetTimeout();
            })
            .keyboard({ 
                layout: 'custom',
                autoAccept : true,
                usePreview: false,
                customLayout: {
                    'normal': [
                        'Q W E R T Y U I O P {b}',
                        'A S D F G H J K L {accept:Accept}',
                        'Z X C V B N M , . \'',
                        '{space} {left} {right} {undo:Undo} {redo:Redo} -'
                    ]
                },
                display: {
                    'b' : '\u232b:Delete',
                    'enter': 'ENTER',
                    'accept' : 'DONE',
                    'space' : 'SPACE'

                }
            });
    }

    var openYearKeyboard = function() {
        $('#donor-year')
        .bind('keyboardChange', function (e, keyboard, el) {
                Utilities.resetTimeout();
        })
        .keyboard({
            layout : 'custom',
            usePreview: false,
            restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
            preventPaste : true,  // prevent ctrl-v and right click
            autoAccept : true,
            customLayout: {
                'normal': [
                    '{left} {right} {b}',
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '0 {accept}'
                ]
            },
            display: {
                'b': '\u232b:Delete',
                'accept' : 'DONE'
            }
        })
        .addTyping();
    }

    var openYearMaxKeyboard = function() {
        $('#donor-year-max')
        .bind('keyboardChange', function (e, keyboard, el) {
                Utilities.resetTimeout();
        })
        .keyboard({
            layout : 'custom',
            usePreview: false,
            restrictInput : true, // Prevent keys not in the displayed keyboard from being typed in
            preventPaste : true,  // prevent ctrl-v and right click
            autoAccept : true,
            customLayout: {
                'normal': [
                    '{left} {right} {b}',
                    '7 8 9',
                    '4 5 6',
                    '1 2 3',
                    '0 {accept}'
                ]
            },
            display: {
                'b': '\u232b:Delete',
                'accept' : 'DONE'
            }

        });
    }


    var resetSelect = function() {
        $('#reset').addClass('active-reset');
        setTimeout(function() {
            //River.resetRiver();
            //Data.resetData();
            $("#donor-colleges").val('default');
            $("#donor-colleges").selectpicker("refresh");
            $('#search-er').addClass('fadeOut hidden').removeClass('fadeIn flex-container');
            //closeSearch();
        }, 1250);
    }

    var closeKeyboards = function() {
        var donorYearKeyboard = $('#donor-year').keyboard().getkeyboard();
        donorYearKeyboard.destroy();

        var donorYearMaxKeyboard = $('#donor-year-max').keyboard().getkeyboard();
        donorYearMaxKeyboard.destroy();

        var donorNameKeyboard = $('#donor-name').keyboard().getkeyboard();
        donorNameKeyboard.destroy();
    }


   


    var closeSearch = function() {
            $('#right-panel').removeClass('slideInRight').addClass('fadeOutRight');
            setTimeout(function(){ $('#search').addClass('hidden'); }, 750);
            setTimeout(function(){ $('#give-panel').addClass('hidden');}, 750);
            $('#search-btn').removeClass('fadeOut').addClass('fadeIn');
            $('#search-close').removeClass('fadeIn pulse active-search-close').addClass('fadeOut').css('display', 'none');
            $('#search-er').addClass('hidden');
            closeKeyboards();
    }

    var resetSearch = function() {
         $('#search-close').addClass('pulse active-search-close');
         setTimeout(function() { closeSearch(); }, 1250)
    }

    // var animateSearch = function(event) {
    //     event.preventDefault();
    //     $('#submit').addClass('active-search');
    //     setTimeout(function(){ River.getResults}, 1250);
    // }

   



    var bindEvents = function() {
    	$(document).on('click tap', '#search-btn', openSearch);
        $(document).on('click tap', '#search-close', resetSearch);
        $(document).on('focus', '#donor-name', openKeyboard);
        $(document).on('focus', '#donor-year', openYearKeyboard);
        $(document).on('focus', '#donor-year-max', openYearMaxKeyboard);
        $(document).on('click tap', '#reset', resetSelect);
        $(document).on('click tap', '#reset-search-btn', River.resetRiver);
        $(document).on('submit', River.getResults);
    }


  	return {
        init: init,
        closeSearch: closeSearch
    }

})();
