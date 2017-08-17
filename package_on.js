/**
 * Created by Administrator on 2017/8/7.
 */
//封装on方法。
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