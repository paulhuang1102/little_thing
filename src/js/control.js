const myMonster = $('.monster-holder');
const colorControl = $('.color-control');
const colorSelect = $('.color-select');
const moveControl = $('.move-control');

colorControl.click(function() {
    if (colorSelect.css('display') === 'none') {
        colorSelect.css('display', 'block');
    } else {
        colorSelect.css('display', 'none');
    }
});

colorSelect.find('div').click(function(e) {
    $('.monster').css('background-color', e.target.className);
});

moveControl.click(function(e) {
	var top = Number(myMonster.css('top').replace('px', ''));
    var left = Number(myMonster.css('left').replace('px', ''));
    var direction = e.target.dataset.move;
    if (direction === 'up') {
        if (left <= 500 && top < 11) {
            if (top <= 10) {
                myMonster.css('top', 10);
                return;
            };
        }

        if (left > 500 && top >= 517) {
        	if (top >= 517) {
                myMonster.css('top', 517);
                return;
            };
        }
        myMonster.css('top', top - 10 );
    } else if (direction === 'left') {
       if (left <= 500 && top < 11) {
            if (left <= 0) {
                myMonster.css('left', 0);
                return;
            };
        }

        if (top > 10 && left <= 500) {
            if (left <= 500) {
                myMonster.css('left', 500);
                return;
            };
        }

        myMonster.css('left', left - 10 );
    } else if (direction === 'right') {
        if (left <= 500 && top < 11) {
            if (left >= 500) {
                myMonster.css('left', 500);
                return;
            };
        }

        if (top > 10 && top < 517) {
            if (left >= 500) {
                myMonster.css('left', 500);
                return;
            };
        }

        if (top >= 517 && left <= 800) {
      		if(left == 800) {
      			 myMonster.css('left', 800);
                return;
      		}
        }

        myMonster.css('left', left + 10 );
    } else if (direction) {
        if (left < 500 && top < 11) {
            if (top >= 10) {
                myMonster.css('top', 10);
                return;
            };
        }

        if (top >= 517 && left >= 500) {
            myMonster.css('top', 517);
            return;
        }

        myMonster.css('top', top + 10);
    }

});

$(window).keydown(function(e) {
    var top = Number(myMonster.css('top').replace('px', ''));
    var left = Number(myMonster.css('left').replace('px', ''));
    if (e.key === 'ArrowUp') {
        if (left <= 500 && top < 11) {
            if (top <= 10) {
                myMonster.css('top', 10);
                return;
            };
        }

        if (left > 500 && top >= 517) {
        	if (top >= 517) {
                myMonster.css('top', 517);
                return;
            };
        }
        myMonster.css('top', top - 10 );
    } else if (e.key === 'ArrowLeft') {
        if (left <= 500 && top < 11) {
            if (left <= 0) {
                myMonster.css('left', 0);
                return;
            };
        }

        if (top > 10 && left <= 500) {
            if (left <= 500) {
                myMonster.css('left', 500);
                return;
            };
        }

        myMonster.css('left', left - 10 );
    } else if (e.key === 'ArrowRight') {
        if (left <= 500 && top < 11) {
            if (left >= 500) {
                myMonster.css('left', 500);
                return;
            };
        }

        if (top > 10 && top < 517) {
            if (left >= 500) {
                myMonster.css('left', 500);
                return;
            };
        }

        if (top >= 517 && left <= 800) {
      		if(left == 800) {
      			 myMonster.css('left', 800);
                return;
      		}
        }

        myMonster.css('left', left + 10 );
    } else if (e.key === 'ArrowDown') {
        if (left < 500 && top < 11) {
            if (top >= 10) {
                myMonster.css('top', 10);
                return;
            };
        }

        if (top >= 517 && left >= 500) {
            myMonster.css('top', 517);
            return;
        }

        myMonster.css('top', top + 10);
    }
})
