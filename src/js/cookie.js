//创建cookie
function createCookie(key,value,json){
    //初始化json参数
    json = json || {};
    let cookie_str = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    //有效期
    if(!isNaN(JSON.expires)){
        let date = new Date();
        date.setDate(date.getDate() + json.expires);
        cookie_str += ';expires=' + date;
    }
    //path
    if(json.path){
        cookie_str += ';path=' + json.path;
    }
    //domain
    if(json.domain){
        cookie_str += ';domain=' + json.domain;
    }
    //secure
    if(json.secure){
        cookie_str += ';secure';
    }
    document.cookie = cookie_str;
}
// alert(decodeURIComponent(document.cookie));
// createCookie('name','tom',{expires : 2,path : '/'});
// createCookie('url','tom.126.com',{expires : 3,path : '/'});
// createCookie('email','tom@126.com',{expires : 4,path : '/'});
// createCookie('url','',{expires : -1,path : '/'});


// function getCookie(key){
//     //查找的子串
//     let cookie_key = encodeURIComponent(key) + '=';
//     //cookie父串
//     let cookie_str = document.cookie;
//     //查找开始位置
//     let start = cookie_str.indexOf(cookie_key);
//     //如果找到了开始位置，则找结束位置
//     if(start !== -1){
//         //查找结束位置
//         let end = cookie_str.indexOf(';',start);
//         //如果是最后一个，没有分号，则截取的end值为父串的长度
//         if(end === -1){
//             end = cookie_str.length;
//         }
//         //截取出查找的结果
//         return decodeURIComponent(cookie_str.substring(start + cookie_key.length,end));
//     }
// }
// alert(getCookie('name'));


function getCookie(key){
    let arr = document.cookie.split('; ');
    for(let i = 0,len = arr.length;i < len;i++){
        let list = arr[i].split('=');
        if(encodeURIComponent(key) === list[0]){
            return decodeURIComponent(list[1]);
        }
    }
}
// alert(getCookie('name'));
// alert(getCookie('email'));
// alert(getCookie('url'));



function removeCookie(key,json){
    json = json || {};
    if(json.path){
        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(1) + ';path=' + json.path;
    }else{
        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(2);    
    }
}
removeCookie('name',{path : '/'});