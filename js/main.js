/**
 * jQuery Collision
 * https://github.com/dsbaars/jquery-collision
 */

!function(t){function i(t,i){if(t)if("offset"in t){var s=t.data("jquery-collision-coordinates");if(s)this.x1=s.x1,this.y1=s.y1,this.x2=s.x2,this.y2=s.y2;else if(i&&i.length&&i.length>=4)this.x1=i[0],this.y1=i[1],this.x2=i[2]+t.outerWidth(!0),this.y2=i[3]+t.outerHeight(!0);else if(t.parent().length<=0)this.x1=parseInt(t.css("left"))||0,this.y1=parseInt(t.css("top"))||0,this.x2=parseInt(t.css("width"))||0,this.y2=parseInt(t.css("height"))||0,this.x2+=this.x1,this.x2+=(parseInt(t.css("margin-left"))||0)+(parseInt(t.css("border-left"))||0)+(parseInt(t.css("padding-left"))||0)+(parseInt(t.css("padding-right"))||0)+(parseInt(t.css("border-right"))||0)+(parseInt(t.css("margin-right"))||0),this.y2+=this.y1,this.y2+=(parseInt(t.css("margin-top"))||0)+(parseInt(t.css("border-top"))||0)+(parseInt(t.css("padding-top"))||0)+(parseInt(t.css("padding-bottom"))||0)+(parseInt(t.css("border-bottom"))||0)+(parseInt(t.css("margin-bottom"))||0);else{var r=t.offset();this.x1=r.left-(parseInt(t.css("margin-left"))||0),this.y1=r.top-(parseInt(t.css("margin-top"))||0),this.x2=this.x1+t.outerWidth(!0),this.y2=this.y1+t.outerHeight(!0)}this.proto=t}else"x1"in t&&(this.x1=t.x1,this.y1=t.y1,this.x2=t.x2,this.y2=t.y2,this.proto=t);else this.x1=this.y1=this.x2=this.y2=0,this.proto=null;"dir"in t&&(this.dir=t.dir)}function s(t,i,s,r){this.target=t,this.obstacle=i,this.overlap=s,this.overlapType=r}function r(t,i,s){this.targets=t,this.obstacles=i,this.collisions=null,this.cache=null,s?this.containment=s:this.containment=null}function o(s){return t(s).get().map(function(s,r,o){return new i(t(s))})}function n(i){for(var s=t(),r=0;r<i.length;r++)s=s.add(i[r]);return s}i.prototype.innerContainer=function(){var t=new i(this);return this.proto.css&&(t.x1+=parseInt(this.proto.css("margin-left"))||0,t.x1+=parseInt(this.proto.css("border-left"))||0,t.x1+=parseInt(this.proto.css("padding-left"))||0,t.x2-=parseInt(this.proto.css("padding-right"))||0,t.x2-=parseInt(this.proto.css("border-right"))||0,t.x2-=parseInt(this.proto.css("margin-right"))||0,t.y1+=parseInt(this.proto.css("margin-top"))||0,t.y1+=parseInt(this.proto.css("border-top"))||0,t.y1+=parseInt(this.proto.css("padding-top"))||0,t.y2-=parseInt(this.proto.css("padding-bottom"))||0,t.y2-=parseInt(this.proto.css("border-bottom"))||0,t.y2-=parseInt(this.proto.css("margin-bottom"))||0),t},i.prototype.move=function(t,i){return this.x1+=t,this.x2+=t,this.y1+=i,this.y2+=i,this},i.prototype.update=function(t){if("x1"in t&&(this.x1=t.x1),"x2"in t&&(this.x1=t.x2),"y1"in t&&(this.x1=t.y1),"y2"in t&&(this.x1=t.y2),"left"in t){var i=this.x2-this.x1;this.x1=t.left,this.x2=this.x1+i}if("top"in t){var s=this.y2-this.y1;this.y1=t.top,this.y2=this.y1+s}if("offset"in t){var r=t.offset();this.update(r),this.x2=this.x1+t.width(),this.y2=this.y1+t.height()}return"dir"in t&&(this.x1=t.dir),this},i.prototype.width=function(){return this.x2-this.x1},i.prototype.height=function(){return this.y2-this.y1},i.prototype.centerx=function(){return(this.x1+this.x2)/2},i.prototype.centery=function(){return(this.y1+this.y2)/2},i.prototype.toString=function(){return(this.proto.get?"#"+this.proto.get(0).id:"")+"["+[this.x1,this.y1,this.x2,this.y2].join(",")+"]"},i.EPSILON=.001,i.prototype.containsPoint=function(t,s,r){r||(r=!1);var o=(r?-1:1)*i.EPSILON;return t>this.x1+o&&t<this.x2-o&&s>this.y1+o&&s<this.y2-o?!0:!1},i.prototype.overlaps=function(t,i){var s=this._overlaps(t,i);return s.length>0?s:(s=t._overlaps(this,i),s.length>0&&(s[0].dir="Inside"==s[0].dir?"Outside":"Outside"==s[0].dir?"Inside":"N"==s[0].dir?"S":"S"==s[0].dir?"N":"W"==s[0].dir?"E":"E"==s[0].dir?"W":"NE"==s[0].dir?"SW":"SW"==s[0].dir?"NE":"SE"==s[0].dir?"NW":"NW"==s[0].dir?"SE":void 0),s||[])},i.prototype._overlaps=function(t,s){var r=t,o=this;s||(s=!1);for(var n=r.centerx(),e=r.centery(),h=[[r.x1,r.y1,"SE"],[r.x2,r.y1,"SW"],[r.x2,r.y2,"NW"],[r.x1,r.y2,"NE"],[n,r.y1,"S"],[r.x2,e,"W"],[n,r.y2,"N"],[r.x1,e,"E"],[n,e,void 0]],a=null,p={NW:!1,N:!1,NE:!1,E:!1,SE:!1,S:!1,SW:!1,W:!1},l=0;l<h.length;l++)if(this.containsPoint(h[l][0],h[l][1],s)){if(h[l][2]&&(p[h[l][2]]=!0),a)continue;a=[new i({x1:Math.max(r.x1,o.x1),y1:Math.max(r.y1,o.y1),x2:Math.min(r.x2,o.x2),y2:Math.min(r.y2,o.y2),dir:h[l][2]})]}return a&&(p.NW&&p.NE&&(a[0].dir="N"),p.NE&&p.SE&&(a[0].dir="E"),p.SE&&p.SW&&(a[0].dir="S"),p.SW&&p.NW&&(a[0].dir="W"),p.NW&&p.NE&&p.SE&&p.SW&&(a[0].dir="Outside"),p.NW||p.NE||p.SE||p.SW||p.N||p.E||p.S||p.W||(a[0].dir="Inside")),a||[]},i.prototype._protrusion=function(t,s,r){var o=this.overlaps(new i(t),!1);return o.length<=0?r:(o[0].dir=s,r.push(o[0]),r)},i.prototype.protrusions=function(t){var i=[],s=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY,o=t.x1,n=t.x2,e=t.y1,h=t.y2;return i=this._protrusion({x1:o,y1:s,x2:n,y2:e},"N",i),i=this._protrusion({x1:n,y1:s,x2:r,y2:e},"NE",i),i=this._protrusion({x1:n,y1:e,x2:r,y2:h},"E",i),i=this._protrusion({x1:n,y1:h,x2:r,y2:r},"SE",i),i=this._protrusion({x1:o,y1:h,x2:n,y2:r},"S",i),i=this._protrusion({x1:s,y1:h,x2:o,y2:r},"SW",i),i=this._protrusion({x1:s,y1:e,x2:o,y2:h},"W",i),i=this._protrusion({x1:s,y1:s,x2:o,y2:e},"NW",i)},s.prototype.distance=function(t){var i=c.target,s=c.overlap;return Math.sqrt((i.centerx()-s.centerx())*(i.centerx()-s.centerx())+(i.centery()-s.centery())*(i.centery()-s.centery()))},r.prototype.getCollisions=function(t){if(null!==this.collisions)return this.collisions;if(this.cache={},this.collisions=[],t||(t="collision"),"collision"!=t&&"protrusion"!=t)return[];for(var i=[],r=this.targets,o=this.obstacles,n=0;n<r.length;n++)for(var e=r[n],h=0;h<o.length;h++)for(var a=o[h],p="collision"==t?e.overlaps(a):e.protrusions(a.innerContainer()),l=0;l<p.length;l++)i.push(new s(r[n],o[h],p[l],t));return this.collisions=i,i},t.fn.collision=function(i,s){s||(s={});var e="collision",h=null,a=null,p=null,l=null,c="body";"protrusion"==s.mode&&(e=s.mode),s.as&&(h=s.as),s.colliderData&&(a=s.colliderData),s.obstacleData&&(p=s.obstacleData),s.directionData&&(l=s.directionData),s.relative&&(c=s.relative);var y,x=new r(o(this),o(i)),u=x.getCollisions(e);return y=h?t.map(u,function(i,s,r){var o=i.overlap.x1,n=i.overlap.y1;if(c&&"body"!=c){var e=t("collider"==c?i.target.proto:"obstacle"==c?i.obstacle.proto:c);if(e.length>0){var y=e.offset();o-=y.left,n-=y.top}}var x=t(h).offset({left:o,top:n}).width(i.overlap.width()).height(i.overlap.height());return a&&x.data(a,t(i.target.proto)),p&&x.data(p,t(i.obstacle.proto)),l&&i.overlap.dir&&x.data(l,i.overlap.dir),x}):t.map(u,function(t,i,s){return t.obstacle.proto}),n(y)}}(jQuery);

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
    
    var gcArrows = $('.game-controls__arrows > ul');
    
    /**
     * 120bpm
     * 120/60
     * 20 * 100
     * 2000
     */
    
    /**
     * Functions
     */
    
    /**
     * Populate arrows
     */
    function randomize(){
        gcArrows.empty();
        for(var i = 0; i < level; i++){
            var containerPushVar = directions[Math.floor((Math.random() * directionsLength) + 1)];
            container.push(containerPushVar);
            gcArrows.append('<li><span class="gca--' + containerPushVar + '"></span></li>');
        }
        console.log(container);
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
                // console.log(now + '/' + hitboxPosition);
                // console.log(fx);
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
     * Initialize the game
     */
    function init(){
        displayLevel();
        randomize();
        timingBar();
    }
    
    /**
     * Randomize arrows
     */
    $('#gd-randomize').click(function(e){
        randomize();
    });
    
    /**
     * Initialize
     */
    
    init();
    
    
    /**
     * KeyPress
     */
    
    var keyPos = 0;
    
    
    $(document).keydown(function(e){
        
        if(keyPos < level){
            switch(e.which){
                case 32:
                    console.log('space');
                    break;
                case 37:
                    container_user.push('left');
                    break;
                case 38:
                    container_user.push('up');
                    break;
                case 39:
                    container_user.push('right');
                    break;
                case 40:
                    container_user.push('down');
                    break;
            }
            console.log(container);
            console.log(container_user);
            keyPos++;
            console.log(keyPos + '/' + level);
            
            console.log(container[keyPos-1] + ' = ' + container_user[keyPos-1]);
            
            if(container[keyPos-1] === container_user[keyPos-1]){
                console.log('Compare succeed');
                var arrowItem = $('.game-controls__arrows__items > li:nth-child(' + keyPos + ')');
                if(arrowItem.length > 0){
                    arrowItem.find('span').addClass('gca--pressed');
                }
                console.log(arrowItem);
            }else{
                console.log('Compare failed');
                keyPos = 0;
                container_user = [];
                $('.game-controls__arrows__items > li > span.gca--pressed').removeClass('gca--pressed');
            }
            
        }else{
            console.log('shit');
            keyPos = 0;
            container_user = [];
        }
        
    });
    
});