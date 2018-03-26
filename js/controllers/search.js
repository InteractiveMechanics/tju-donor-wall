Search = (function() {


	 var init = function() {
        bindEvents();
    }

    
    var openSearch = function() {
        Panel.closePanel();
        //River.tweenRiverMain.pause();
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


    var resetSelect = function() {
        River.resetRiver();
        Data.resetData();
        $("#donor-colleges").val('default');
        $("#donor-colleges").selectpicker("refresh");
        $('#search-er').addClass('fadeOut hidden').removeClass('fadeIn flex-container');
        closeSearch();

    }

    


    var closeSearch = function() {
        $('#right-panel').removeClass('slideInRight').addClass('fadeOutRight');
        //River.tweenRiverMain.resume();
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
        $(document).on('submit', River.getResults);
    }


  	return {
        init: init,
        closeSearch: closeSearch
    }

})();
