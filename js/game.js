// Click Game Start
function display( notifier, str )
{
    document.getElementById( notifier ).innerHTML = str;
}

function toMinuteAndSecond( x )
{
    return Math.floor( x / 60 ) + ':' +  ( x % 60 );
}

function setTimer( remain, actions )
{
    ( function countdown()
    {
        display( 'countdown', toMinuteAndSecond( remain ) );
        actions[remain] && actions[remain]();
        (remain -= 1) >= 0 && setTimeout( arguments.callee, 1000 );
        if (true) {};
    })();
}

document.getElementById( 'buttonn' ).onclick = function()
{
    setTimer( 20, {
        20: function()
        {
            display( 'notifier', 'seconds');
        },
        1: function()
        {
            display( 'notifier', 'second');
        },
        0: function()
        { 
            display( 'notifier', 'seconds');
        }
    } );
}

// Get dem points 