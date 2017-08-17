/**
 * Created by Administrator on 2017/8/7.
 */
//
/*封装组合选择器。
document.getElementsByClassName这个方法存在兼容性的缺陷,较低版本的IE浏览器不支持该方法。
document.getElementsByTagName和document.getElementById则不存在兼容性缺陷。


 */
//"span,div,.box,#demo"
function $combine(string){
    //1.对字符串进行逗号切割
    var element=string.split(',');
    var result=[];
    //2.遍历切割后的数组，逐一进行操作
    for (var i =0;i<element.length;i++)
    {
        //3.切割后的每一个字符串在第一个字符上存在差别，对此作出判断，分类进行操作。
        var firstChar = element[i].charAt(0);
        switch (firstChar){
            case ".":
                //根据类名查找元素
                var r1 = byClassname(element[i].substr(1));
                Array.prototype.push.apply(result,r1);
                break;
            case "#":
                //根据id查找元素
                var r2 = [byId(element[i].substr(1))];
                Array.prototype.push.apply(result,r2);
                break;
            default:
                //根据标签名查找元素
                var r3 = byTagname(element[i]);
                Array.prototype.push.apply(result,r3);
        }
    }
    return result;
}
function byTagname(tag){
    return document.getElementsByTagName(tag);
}
function byId(id){
    return document.getElementById(id);
}
function byClassname(classname){
    var classNames = classname.split(",");
    var arr = [];
    var nodes = document.getElementsByTagName("*");
    for(var i = 0; i < nodes.length;i++){
        for(var j = 0; j < classNames.length;j++){
            if(classNames[j] == nodes[i].className){
                arr[arr.length] = nodes[i];
            }
        }
    }
    return arr;
}