define("dist/app/index/index",["$","./tpl/list_1","./config"],function(a){var b=a("$"),c=a("./tpl/list_1"),d=a("./config"),e={listCt:b("#list_ct")};b(function(){var a=c.render({list:d.data});e.listCt[0].innerHTML=a})}),define("dist/app/index/tpl/list_1",[],function(){return{render:function(a){var b=[],c=[];for(var d in a)b.push(d),c.push(a[d]);return new Function(b,'var _s=[];_s.push(\'\');for(var i=0; i<list.length;i+=1){var item=list[i];_s.push(\' <div class="list-item"> <div class="list-item-hd"> <h4><a href="\',item.url,\'" target="_blank">\',item.title,\'</a></h4> </div> <a href="\',item.url,\'" class="img-box clearfix" target="_blank">\');if(item.imgCount == 1){_s.push(\' <img src="\',item.imgList[0],\'" alt="" class="maxpic" />\');}else{for(var e=0; e<item.imgList.length;e+=1){var img=item.imgList[e];if(e % 3 === 2){_s.push(\' <img src="\',img,\'" alt="" class="minpic noma" />\');}else{_s.push(\' <img src="\',img,\'" alt="" class="minpic" />\');}}}_s.push(\' </a> <div class="list-item-ft clearfix"> <a href="\',item.url,\'" class="btn-1 rt" target="_blank">去看看</a> <span class="tex">\',item.like,\'&nbsp;人喜欢</span> </div> </div>\');} return _s;').apply(null,c).join("")}}}),define("dist/app/index/config",[],function(){var a={total:10,data:[{title:"标题1",url:"http://www.baidu.com",imgCount:9,imgList:["http://news.demo.com/public/themes/default/images/ke_1.png","http://news.demo.com/public/themes/default/images/ke_1.png","http://news.demo.com/public/themes/default/images/ke_1.png","http://news.demo.com/public/themes/default/images/ke_1.png","http://news.demo.com/public/themes/default/images/ke_1.png","http://news.demo.com/public/themes/default/images/ke_1.png","http://news.demo.com/public/themes/default/images/ke_1.png","http://news.demo.com/public/themes/default/images/ke_1.png","http://news.demo.com/public/themes/default/images/ke_1.png"],like:123212},{title:"标题2",url:"http://www.baidu.com",imgCount:1,imgList:["http://news.demo.com/public/themes/default/images/ke.jpg"],like:123212}]};return a});