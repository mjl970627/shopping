let arr = [false,false,false,false,false];
$('#uname').focus(function(){
    $(this).css('background-color','#EAF5FF');
    $(this).next().next().html('3~30位');
    $(this).next().next().css('color','#515151');
    $(this).next().css('display','none');
    $(this).next().next().html('3~30位！');
})
$('#uname').blur(function(){
    let re = /^([\u4e00-\u9fa5]){1,2}(.){1,}$/;
    let reg = /^\d+$/;
    if(reg.test($(this).val())){
        arr[0] = false;
        $(this).next().next().html('不能是纯数字！');
        $(this).next().next().css('color','#ff0000');
        $(this).css('background-color','#FFFDDF');
    }else if(re.test($(this).val())){
        arr[0] = true;
        $(this).next().css('display','inline-block');
        $(this).next().next().css('display','none');
    }else{
        arr[0] = false;
        $(this).css('background-color','#FFFDDF');
        $(this).next().next().css('color','#ff0000');
        $(this).next().next().html('用户名的长度应为3～30个字符之间(汉字占两个字符)！');
    }
})
$('#upwd').focus(function(){
    $(this).css('background-color','#EAF5FF');
    $(this).next().next().html('6~16位,建议使用字母、数字、特殊字符组合');
    $(this).next().next().css('color','#515151');
})
$('#upwd').blur(function(){
    let re = /^\w{6,16}$/;
    if(re.test($(this).val())){
        arr[0] = true;
        $(this).next().css('display','inline-block');
        $(this).next().next().css('display','none');
    }else{
        arr[0] = false;
        $(this).css('background-color','#FFFDDF');
        $(this).next().next().css('color','#ff0000');
        $(this).next().next().html('密码的长度应该为6～16个字符之间！');
    }
})
$('#sure').focus(function(){
    $(this).css('background-color','#EAF5FF');
})
$('#sure').blur(function(){
    if($(this).val() === $('#upwd').val()){
        arr[0] = true;
        $(this).next().css('display','inline-block');
        $(this).next().next().css('display','none');
    }else{
        arr[0] = false;
        $(this).css('background-color','#FFFDDF');
        $(this).next().next().css('color','#ff0000');
        $(this).next().next().html('请您再次输入密码！');
    }
})

$('#email').focus(function(){
    $(this).css('background-color','#EAF5FF');
})
$('#email').blur(function(){
    let re = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
    if(re.test($(this).val())){
        $(this).next().css('display','inline-block');
        $(this).next().next().css('display','none');
        arr[0] = true;
    }else if(re.test() !== $(this).val()){
        $(this).css('background-color','#FFFDDF');
        $(this).next().next().css('color','#ff0000');
        $(this).next().next().html('邮箱地址不正确！');
        arr[0] = false;
    }else{
        arr[0] = false;
        $(this).css('background-color','#FFFDDF');
        $(this).next().next().css('color','#ff0000');
        $(this).next().next().html('请输入邮箱地址！');
    }
})