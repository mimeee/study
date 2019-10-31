const $ = require('./$');

/**
 * 插入的标签
 * @type {*|jQuery}
 */
let $label = $('<div class="hhm-label">').css({
    position: 'absolute',
    right: '20px',
    bottom: '10px',
    color: '#FFF',
    'font-size': '12px',
    'line-height': '28px',
    'border-radius': '14px',
    padding: '0 14px',
    background: '#4F91FF'
});

$('<span>').css({
    display: 'inline-block',
    width: '24px',
    height: '24px',
    margin: '2px 5px 0 0',
    background: 'center no-repeat url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIHRSTlMAlPQZxkk+OLvh6nRZIwxwMb6NaWFS2QaunIN6py9EFaB/yOQAAAH2SURBVFjD7VdZloMgEBQFjeISlxiXmHj/U44C/QTigDMmf9RHFoGyu6ob0XNwcHB4RxA9b00xIDQUze0ZBf+guE9NVSazhqSsmun+h0DqcjagrINDLAWercCFjSu6zAdxiQw0oUrjYzTQOiVRRNKaDgj7KlX4WzSlxNGNJNjJm4ydxFbuRZWjzRxEJGuyME3DTDKUoM1OlOs81xjGHvJtSJ8I8p7IwT9gdnxVeVJfpIQyWTOsWCVrkiFYkco8BUT6kq+iWQOSR18wXLzxxKEi2mXH81wxOdaYyK5wwIMrSisMTLsGEZEuz7bxFCDBHgjj4b86q+E6ZdKtb1ptgie6r1oV3iBQ+Fl7KjDjWcK5U5y0hAXFmLA2seZhwJJOGQTZpqViWhZ7zmISgqjoGL0Y9fV26IUe0cwRbLr1etswia/eyJdoSPjqvBXVLtawGlcmAv3IpdabLxPh0vW7paGiXKY3O5c7XjNTBsCzii9spfKquG8a/NUX9tnqQ+m6gPIMqQcQEab67JbFYiRqIQA7kTk14gud7amZxfZy7vsBsc32b7Daby7IDdaCNLaI1LK2FrE2rYC1aW3byHRwG/nYxvbZrfb85v/Zx9H5B+QXHtnnDxHnjzVfOWidP/qdP4yePx5/88Buf4VYVF40568QDg4ODm/4AbXgjrC7OH0cAAAAAElFTkSuQmCC")',
    backgroundSize: '100%',
    verticalAlign: 'top'
}).appendTo($label);

$('<span>').text('净化阅读').appendTo($label);

module.exports = $label;