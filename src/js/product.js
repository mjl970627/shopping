
function convertStrToObj(str){
    if(!str){
        return {};
    }
    return JSON.parse(str);
}
$('#buyR').click(function(){
    location.href = 'cart.min.html';
})
$('#add').click(function(event){
    console.log(1);
    let good_id = $('.rig').attr('data-good-id');
    let good_name = $('.rig h3').children('#gname').html();
    let good_price = $('.money').html();
    // console.log(good_id,good_name)
    let cookie_str =getCookie('carts') ? getCookie('carts') : '';
    let cookie_obj = convertStrToObj(cookie_str);
    let cookie_num = $('.ip').val();
    cookie_num ++;
    $('.ip').val(cookie_num);
    console.log(cookie_obj)
    if(good_id in cookie_obj){
        cookie_obj[good_id].num ++;
    }else{
        cookie_obj[good_id] = {
            name : good_name,
            price : good_price,
            num : 1
        }
    }
    createCookie('carts',JSON.stringify(cookie_obj),{expires : 1,path : '/'});
})
function init(){
    //获取cookie
    let cookie_str = getCookie('carts') ? getCookie('carts') : '';
    //转对象
    let cookie_obj = convertStrToObj(cookie_str);
    //总和
    let sum  = 0;
    for(let key in cookie_obj){
        sum += cookie_obj[key].num;
    }
    $('.ip').val(`${sum}`);
    $('.cat').html(` 购物车：
    <b>${sum}</b>
    件`);
}
$(()=>{
    init();
})

$('#reduce').click(function(event){
    console.log(1);
    let good_id = $('.rig').attr('data-good-id');
    let good_name = $('.rig h3').children('#gname').html();
    let good_price = $('.money');
    // console.log(good_id,good_name)
    let cookie_str =getCookie('carts') ? getCookie('carts') : '';
    let cookie_obj = convertStrToObj(cookie_str);
    let cookie_num = $('.ip').val();
    cookie_num --;
    $('.ip').val(cookie_num);
    if(/^\d+$/.test($('.ip').val(cookie_num))){
        cookie_obj[good_id].num = $('.ip').val(cookie_num);
    }else{
        cookie_obj[good_id].num = 0;
    }
    console.log(cookie_obj)
    if(good_id in cookie_obj){
        cookie_obj[good_id].num --;
    }else{
        cookie_obj[good_id] = {
            name : good_name,
            price : good_price,
            num : 1
        }
    }
    createCookie('carts',JSON.stringify(cookie_obj),{expires : 1,path : '/'});
})
function info(){
    //获取cookie
    let cookie_str = getCookie('carts') ? getCookie('carts') : '';
    //转对象
    let cookie_obj = convertStrToObj(cookie_str);
    //总和
    let sum  = 0;
    for(let key in cookie_obj){
        sum += cookie_obj[key].num;
    }
    $('.ip').val(`${sum}`);
    $('.cat').html(` 购物车：
    <b>${sum}</b>
    件`);
}
$(()=>{
    info();
})
