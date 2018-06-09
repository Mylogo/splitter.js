function initHorizontalSplitter(splitterSelector) {
    initSplitter(splitterSelector, 'hor');
}

function initVerticalSplitter(splitterSelector) {
    initSplitter(splitterSelector, 'ver');
}

function initSplitter(splitterSelector, direction) {
    var splitter = $(splitterSelector);
    if (splitter.length != 1) {
        alert('Selector must match exactly one');
        return;
    }
    var left = splitter.prev();
    var right = splitter.next();
    if (left.length != 1 || right.length != 1) {
        alert('Need one previous and one next element');
        return;
    }

    function _initSplitter(splitter, right, left, dir) {
        var dragging = false;
        var start;
        var isOver = false;

        var getKey, minProperty, setter, getter;
        if (dir === 'hor') {
            getKey = function(jsonObject) { return jsonObject.x; };
            minProperty = 'min-width';
            setter = function(jQueryObject, value) { jQueryObject.width(value); };
            getter = function(jQueryObject) { return jQueryObject.width(); };
        } else if (dir === 'ver') {
            getKey = function(jsonObject) { return jsonObject.y; };
            minProperty = 'min-height';
            setter = function(jQueryObject, value) { jQueryObject.height(value); };
            getter = function(jQueryObject) { return jQueryObject.height(); };
        } else {
            alert('Invalid direction');
            return;
        }
        splitter.css('user-select', 'none'); // user could select text while dragging
        splitter.mousedown(function(e) {
            dragging = true;
            start = {x: e.pageX, y: e.pageY};
        });
        splitter.mouseenter(function() {
            isOver = true;
        });
        splitter.mouseout(function() {
            isOver = false;
        })
        var doc = $(document);
        doc.mouseup(function() {
            dragging = false;
            start = null;
        });
        doc.mousemove(function(e) {
            if (dragging) {
                first = splitter.prev();
                second = splitter.next();
                var newPoint = {x: e.pageX, y: e.pageY};
                var delta = {x: start.x - newPoint.x, y: start.y - newPoint.y};

                var newFirst = getter(left) - getKey(delta);
                var newSecond = getter(right) + getKey(delta);
                start = newPoint;
                var minFirst  = parseInt(first.css(minProperty).replace('px', ''))
                var minSecond = parseInt(second.css(minProperty).replace('px', ''))

                function minimize(toMin, toMax, min) {
                    var delta = getter(toMin) - min;
                    setter(toMin, min);
                    setter(toMax, getter(toMax) + delta);
                }

                if (newFirst < minFirst || newSecond < minSecond) {
                    if (newFirst < minFirst) {
                        minimize(first, second, minFirst);
                    } else {
                        minimize(second, first, minSecond);
                    }
                    dragging = false;
                    return;
                }
                if (newFirst < 0 || newSecond < 0) {
                    // avoid weird behavior
                    dragging = false;
                    return;
                }
                setter(first, newFirst);
                setter(second, newSecond);
            }
        });
                    
    }
    _initSplitter(splitter, right, left, direction);
}



