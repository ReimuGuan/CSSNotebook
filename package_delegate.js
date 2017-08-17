/**
 * Created by Administrator on 2017/8/7.
 */
//封装delegate方法。
function Mydelegate(parentNode,childNode,type,fn)
{
    // on(parentNode,type,fn);
    parentNode.addEventListener(type,function(e){
        var event = e || window.event;
        var node = event.target;
        if(childNode == node.nodeName.toLowerCase()){
            fn.call(node);
        }
    });
}
function on(nodeName,operation,fn){
    if (nodeName.addEventListener)
    {
        nodeName.addEventListener(operation,function(event){
            fn.call(this,event || window.event);
        });
    }
    else{
        nodeName.attachEvent('on'+operation,function(event){
            fn.call(this,event || window.event);
        });
    }
}