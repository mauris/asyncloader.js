/*
 * Copyright (C) 2013 Sam-Mauris Yong. All rights reserved.
 * This file is part of the asyncloader.js project, which is released under New BSD 3-Clause license.
 * See file LICENSE or go to http://opensource.org/licenses/BSD-3-Clause for full license details.
 */

var AsyncLoader = (function(loader, d){
    var s = 'script',
        fjs = d.getElementsByTagName(s)[0],
        waiting = [];

    var removeInArray = function(arr) {
        var what, a = arguments, L = a.length, ax;
        while (L > 1 && arr.length) {
            what = a[--L];
            while ((ax = arr.indexOf(what)) !== -1) {
                arr.splice(ax, 1);
            }
        }
        return arr;
    };

    var processWaiting = function(id){
        for (var idx in waiting) {
            var item = waiting[idx];
            item.depends = removeInArray(item.depends, id);
            if (item.depends.length == 0) {
                if( typeof item.url === 'function') {
                    item.url();
                } else {
                    loader.add(item.url, item.id, item.load);
                }
            }
        }
    };

    loader.add = function(u, id, load) {
        if (d.getElementById(id)) {return;}
        var js = d.createElement(s);
        js.src = u;
        id && (js.id = id);
        js.onload = function(){
            load && load.call(this);
            processWaiting(id);
        };
        fjs.parentNode.insertBefore(js, fjs);
    };

    loader.depends = function(depends, url, id, load){
        depends = typeof depends == 'string' ? [depends] : depends;
        waiting.push({
            depends: depends || [],
            url: url,
            id: id,
            load: load
        });
    };

    return loader;
})(AsyncLoader || {}, document);