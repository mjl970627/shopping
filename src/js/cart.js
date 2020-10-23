function convertStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}

//获取cookie
let cookie_str = getCookie('carts') ? getCookie('carts') : '';
//转对象
let cookie_obj = convertStrToObj(cookie_str);

let tog = 0;
//遍历对象
console.log(cookie_str)
for(let key in cookie_obj){
    let good = cookie_obj[key];
    $('.cartList').append(`
        <tr class="goodinfo" data-good-id = "${key}">
            <td width="36" height="33">${key}</td>
            <td width="554" height="33" style="text-align: left;"><a href="javascripy:;">${good.name}</a></td>
            <td width="41" height="33">100ml</td>
            <td width="49" height="33">500</td>
            <td width="47" height="33">${good.price}</td>
            <td width="29" height="33" class="num">${good.num}</td>
            <td width="59" height="33" class="total">${good.price * good.num}</td>
            <td width="70" height="33">转入收藏夹</td>
            <td width="45" height="33"><a href="javascript:;" class="del">删除</a></td>
        </tr>
    `);
    tog += good.price * good.num;
} 
$('.sho').html(tog);