define(function(require, exports, module) {

    var $ = require('$');
    var list = require('./tpl/list_1');
    var listData = require('./config');

    var node = {
        listCt: $('#list_ct')
    };

    $(function(){
        var html = list.render({
            list: listData.data
        });
        node.listCt[0].innerHTML = html;
    });

});
