/**
 * Created by Administrator on 2017/8/7.
 */
/*
封装层级选择器
针对 div ul li 这样的输入方式

*/
function $layer(seletor) {
    var arr = seletor.split(" ");
    var parents = [document]; //装父级元素,寻找时,应该在父级元素的基础上寻找
    var temp = [];
    arr.forEach(function (t) {
        var firstChar = t.charAt(0);
        switch (firstChar){
            case ".":
                temp = [];
                for(var i = 0; i < parents.length;i++){
                    if(!parents[i]) continue;
                    var r = byClassname(t.substr(1),parents[i]);
                    Array.prototype.push.apply(temp,r);
                }
                parents = temp;
                break;
            case "#":
                temp = [];
                for(var i = 0; i < parents.length;i++){
                    if(!parents[i]) continue;
                    temp.push(byId(t.substr(1)));
                    if (temp.length) break;
                }
                parents = temp;
                break;
            default:
                temp = [];
                for(var i = 0; i < parents.length;i++){
                    if(!parents[i]) continue;
                    var r = byTagname(t,parents[i]);
                    Array.prototype.push.apply(temp,r);
                }
                parents = temp;
                break;
        }
    });
    return temp;
}
function byTagname(tag,parent){
    var node = parent || document;
    return node.getElementsByTagName(tag);
}
function byId(id){
    return document.getElementById(id);
}
function byClassname(classname,parent){
    var node = parent || document;
    var classNames = classname.split(",");
    var arr = [];
    var nodes = node.getElementsByTagName("*");
    for(var i = 0; i < nodes.length;i++){
        for(var j = 0; j < classNames.length;j++){
            if(classNames[j] == nodes[i].className){
                arr[arr.length] = nodes[i];
            }
        }
    }
    return arr;
}