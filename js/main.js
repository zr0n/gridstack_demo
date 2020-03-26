function saveData() {
    var items = [];

    $('.grid-stack-item.ui-draggable').each(function () {
        var $this = $(this);
        items.push({
            x: $this.attr('data-gs-x'),
            y: $this.attr('data-gs-y'),
            w: $this.attr('data-gs-width'),
            h: $this.attr('data-gs-height'),
            content: $('.grid-stack-item-content', $this).html()
        });
    });

    alert(JSON.stringify(items));
}

document.addEventListener('keypress', (keyevent) => keyevent.key === 's' && saveData());