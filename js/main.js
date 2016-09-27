/**
 * main.js
 * Created by Falmesino Abdul Hamid(http://falmesino.github.io)
 */

$(function(){
    
    /**
     * Variable declarations
     */
    
    var log = '';
    
    var level = 7;
    var directions = [ 'static', 'up', 'down', 'left', 'right'];
    var directionsLength = directions.length - 1;
    var container = [];
    var container_user = [];
    var keyPos = 0;
    
    /**
     * Functions
     */
    
    /**
     * Populate arrows
     */
    function randomize(){
        $('.game-controls__arrows > ul').empty();
        for(var i = 0; i < level; i++){
            var containerPushVar = directions[Math.floor((Math.random() * directionsLength) + 1)];
            container.push(containerPushVar);
            $('.game-controls__arrows > ul').append('<li><span class="gca--' + containerPushVar + '"></span></li>');
        }
    }
    
    /**
     * Display level number
     */
    function displayLevel()
    {
        $('.game-controls__level-box > h3 > span').html('' + level);
    }
    
    /**
     * Run the timing bar
     */
    function timingBar(){
        
        var tbRail = $('.game-controls__timing-bar');
        var tbBullet = $('.game-controls__timing-bar__bullet');
        
        var hitbox = $('.game-controls__timing-bar__hitbox');
        var hitboxWidth = hitbox.outerWidth();
        var hitboxPosition = hitbox.position().left;
        
        tbBullet.css('left', 'auto');
        
        tbBullet.stop().animate({right: 0}, {
            duration: 8000,
            easing: 'linear',
            step: function(now, fx){
                $(this).attr('data-pos', Math.ceil(now));
            },
            complete: function(){
                tbBullet.css({
                    left: 0,
                    right: 'auto'
                });
                timingBar();
            }
        });
        
    }
    
    /**
     * Reset
     */
    
    function reset(){
        keyPos = 0;
        container_user = [];
        $('.game-controls__arrows__items > li > span.gca--pressed').removeClass('gca--pressed');
    }
    
    /**
     * Initialize the game
     */
    function init(){
        displayLevel();
        randomize();
        timingBar();
        reset();
    }
    
    /**
     * Randomize arrows
     */
    $('#gd-randomize').click(function(e){
        reset();
        randomize();
    });
    
    /**
     * Initialize
     */
    
    init();
    
    function register_input(string){
        container_user.push(string);
        keyPos++;
        if(container[keyPos-1] === container_user[keyPos-1]){
            var arrowItem = $('.game-controls__arrows__items > li:nth-child(' + keyPos + ')');
            if(arrowItem.length > 0){
                arrowItem.find('span').addClass('gca--pressed');
                // SUCCESS
            }
        }else{
            reset();
            // FAILED
        }
    }
    
    /**
     * KeyPress
     */
    
    $(document).keydown(function(e){
        
        if(keyPos < level){
            switch(e.which){
                case 32:
                    console.log('space');
                    break;
                case 37:
                    register_input('left');
                    break;
                case 38:
                    register_input('up');
                    break;
                case 39:
                    register_input('right');
                    break;
                case 40:
                    register_input('down');
                    break;
            }
            
        }else{
            console.log('shit');
            reset();
        }
        
    });
    
});