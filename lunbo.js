//arr为数组，放置轮播图片路径的数组  outclass放置轮播的父级

var lun = (function() {
    function lunbo(arr, outclass) {
        var imgPath = arr,
            imglen = imgPath.length;
        //获取父级元素
        var outClass = document.getElementsByClassName(outclass)[0];
        //添加轮播div ul  li img 元素
        outClass.innerHTML = '<div></div>';
        var div = outClass.getElementsByTagName('div')[0];
        // div.innerHTML = '<ul></ul><span><</span><span>></span><ol></ol>';
        div.innerHTML = '<ul></ul><ol></ol>';

        var ul = document.getElementsByTagName('ul')[0];
        var ol = document.getElementsByTagName('ol')[0];
        var span = document.getElementsByTagName('span');
        //添加dom结构
        for (var i = 0; i < imglen; i++) {
            ul.innerHTML += '<li></li>';
            ol.innerHTML += '<li>' + parseInt(i + 1) + '</li>'
            var li = document.getElementsByTagName('li');
            li[i].innerHTML = '<img src=' + arr[i] + '>';
        }
        var img = document.getElementsByTagName('img');

        //设置div样式
        div.style.position = 'absolute';
        div.style.width = '600px';
        div.style.height = '300px';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.marginLeft = '-300px';
        div.style.marginTop = '-150px';
        div.style.overflow = 'hidden';
        div.style.border = '1px solid black';
        div.style.boxShadow = '5px -5px 10px white';

        div.style.borderRadius = '25px';

        //设置ul样式
        var ulWidth = imglen * 200;
        ul.style.position = 'absolute';
        ul.style.left = '0px';
        ul.style.listStyle = 'none';
        ul.style.width = ulWidth + '%';
        ul.style.height = '100%';
        //设置span样式
        // for (var i = 0; i < span.length; i++) {
        //     span[i].style.position = 'absolute'
        //     span[i].style.width = '30px';
        //     span[i].style.height = '30px';
        //     span[i].style.lineHeight = '30px';
        //     span[i].style.marginTop = '-15px';
        //     span[i].style.top = '50%';
        //     span[i].style.color = '#fff';
        //     span[i].style.textAlign = 'center';
        //     span[i].style.fontWeight = 'bolder';
        //     span[i].style.backgroundColor = 'gray';
        //     span[i].style.opacity = '0.8';
        //     span[i].style.fontSize = '18px';
        //     span[i].style.borderRadius = '50%';
        //     span[i].style.cursor = 'pointer';

        // }
        // span[0].style.left = '0px';
        // span[1].style.right = '0px';
        //设置li样式  设置图片样式
        for (var i = 0; i < imglen; i++) {
            li[i].style.position = 'relative';
            li[i].style.width = '600px';
            li[i].style.height = '300px';
            li[i].style.cssFloat = 'left';
            // li[i].style.border = '1px solid red';

            img[i].style.width = '100%';
            img[i].style.height = '100%';
        }
        //设置ol样式
        ol.style.position = 'absolute';
        ol.style.listStyle = 'none';
        ol.style.width = 30 * imglen + 10 + 'px';
        console.log('ol的宽度为：' + ol.style.width);
        ol.style.height = '20px';
        ol.style.bottom = '10px';
        var olWidth = parseInt(ol.style.width) / 2;
        ol.style.marginLeft = -olWidth + 'px';
        console.log(olWidth);
        // console.log(ol.style.marginLeft);
        ol.style.left = '50%';
        ol.style.paddingLeft = '10px';
        ol.style.boxSizing = 'border-box';
        //设置ol 下的li
        for (var i = imglen; i < li.length; i++) {
            li[i].style.width = '20px';
            li[i].style.height = '20px';
            li[i].style.backgroundColor = 'gray';
            li[i].style.cssFloat = 'left';
            li[i].style.borderRadius = '50%';
            li[i].style.marginRight = '10px';
            li[i].style.fontSize = '16px';
            li[i].style.textAlign = 'center';
            li[i].style.color = "#fff";
            li[i].style.fontWeight = "bloder";
        }
        //设置轮播
        var key = 1,
            oi = imglen,
            oii = 0;

        li[oi].style.backgroundColor = 'orange';

        time = setInterval(function() {

            if (key < imglen) {
                oii = oi + key - 1;
                li[oii].style.backgroundColor = 'gray';
                li[oii + 1].style.backgroundColor = 'orange';
                ul.style.left = parseInt(ul.style.left) + -600 + 'px';
                console.log('我应该变值-' + ul.style.left);
                key++;
            } else {
                ul.style.left = '0px';
                li[oii + 1].style.backgroundColor = 'gray';
                oii = 0;
                key = 1;
                li[oi].style.backgroundColor = 'orange';
                console.log('我恢复初始值' + ul.style.left);
            }

        }, 2000);

    }
    //停止轮播
    function stop() {
        clearInterval(time);

    }

    return { 'lunbo': lunbo, 'stop': stop }
})();