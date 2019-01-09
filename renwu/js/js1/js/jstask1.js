
// function getRandomColor() {
//     return "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6);
// }
//获取随机颜色储存到变量里
//return表示代码执行并返回值到函数，然后终止计算
//随机读取0-16777215的数值然后再加0.5
//>>0不知道意思，
//toString(16)代表转换16进制，
//slice代表运算后删除该元素，删除-6是代表+6还是-6？
var div = document.getElementsByTagName('div');
var yellow = "#fc0";
//把div数组存储进变量里，方便调用
function
random() {
    var one = Math.floor(Math.random() * 9);
    var two = Math.floor(Math.random() * 9);
    var three = Math.floor(Math.random() * 9);
    var colorone = "#" + ("00000" + ((Math.random() * 16777216) >> 0).toString(16)).slice(-6);
    var colortwo = "#" + ("00000" + ((Math.random() * 16777216) >> 0).toString(16)).slice(-6);
    var colorthree = "#" + ("00000" + ((Math.random() * 16777216) >> 0).toString(16)).slice(-6);

    //3个变量分别读取3位0-9的随机数，按道理0-8对应div【0】-div【8】就可以实现9个div随机读取啊，
    //但是9变8不行，第9个div变不了颜色
    if (one !== two && two !== three && three !== one && colorone !== colortwo && colortwo !== colorthree && colorthree !== colorone && colorone !== yellow && colortwo !== yellow && colorthree !== yellow) {
        defaultColor();
        div[one].style.backgroundColor = colorone;
        div[two].style.backgroundColor = colortwo;
        div[three].style.backgroundColor = colorthree;

    }
    // 这里利用并且对比各数组是否为同一个，不同数组在执行
    else {
        random();
    }

    //有相同时重复执行，直到执行成功
}
var random1;
var random2;
//存储2个变量，方便后赋值，必须设置外部，好让不同函数读取
function defaultColor() {
    for (var i = 0; i < 9; i++) {
        div[i].style.backgroundColor = "#fc0";
    }
}
//利用循环把9个盒子背景颜色设为黄色
function start() {
    random1 = setInterval(random, 1500);

}
//把函数与按钮绑定，点击按钮时，1秒后设置随机颜色，1.5秒后设置背景颜色
function end() {
    clearInterval(random1);
    defaultColor();

}
//把函数与按钮绑定，点击按钮时，取消重复定时执行代码，在执行背景颜色还原