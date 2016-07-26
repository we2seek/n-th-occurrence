'use strict';

// Find 0-based index of n-th occurrence of given character from tail
function find(source, pattern, count){
    var parsedCount = parseInt(count, 10);

    // Couldn't cast to int
    if (!(count === parsedCount)) {
        return -1;
    }

    // find more than first occurrence
    if (parsedCount < 1) {
        return -1;
    }

    // Start index by default is equals to its length (from docs)
    var pos = source.length;

    while (--parsedCount >= 0 && pos >= 0) {
        pos = source.lastIndexOf(pattern, pos - 1);
    }

    return pos;
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
    module.exports = find;
}

// var mockString = 'aaa-)-';
// console.log(find(mockString, '-', '2'));