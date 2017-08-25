/**
 * Created by 云龙你好 on 2015/8/17.
 */
$("document").ready(function()
{
    /*判断邮箱格式*/
        $("#email").blur(
       function isEmail( str ){
            var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
            if(myReg.test(str))
            {
             alert("true");
            }
            else{
                alert("邮箱格式不正确");
            }
        })
    /*判断密码格式*/
    $("#psw_info").hide();
    $("#psw").focus(function(){
        $("#psw_info").show();

    });
    $("#psw").blur(function(){
        $("#psw_info").hide();

    });
    $("#psw").keyup(function () {
        var len = $("#psw").val().length;
        if ((len < 6 && len !== 0) || len > 14) {
            $("#condition1").addClass("red");
        } else {
            $("#condition1").removeClass("red");
        }

        if ($("#psw").val().indexOf(" ") >= 0) {
            $("#condition2").addClass("red");
        } else {
            $("#condition2").removeClass("red");
        }
    });
/**/

  $("#sel1").click(function(){
      $("#btn1").text("1");
    /*  $("#btn2").hide();
      $("#btn3").hide();
      $("#btn4").hide();*/

      });
    $("#sel2").click(function(){
        $("#btn1").text("2");

    });
    $("#sel3").click(function(){
        $("#btn1").text("3");

});
    $("#last").click(function(){
        $("#btn1").text("4");



    });
   /* $('video').mediaelementplayer({
        alwaysShowControls: true,
        videoVolume: 'horizontal',
        features: ['playpause','progress','volume','fullscreen']
    });*/
    var i=1;
    $("#zan").click(function(){
        if(i==1) {
            $("#andone").text("1");
            $("#zan").text("取消赞");
        i=0;
        }
        else
        {

                $("#andone").text("0");
                $("#zan").text("赞");
            i=1;
        }
    });
    $("#gz").click(function(){
        var a=parseInt($("#badge").text());
        a++;
        $("#badge").text(a);
    });




$("#hf_btn").click(function(){
    var tex1=$("#hf_ta").val();
    $("#hf_a").after("<br/>","我："+tex1);
    $("#hf_ta").val("");
});
    /**/



   /* var obox = $("#box");
    var odiv = $("#div1");
    var ach = odiv.getElementsByTagName ("input");
    obox.click(function(){
        for(var i=0;i<ach.length;i++)
        {ach[i].checked=true;}
    });
    for ( var i = 0; i < ach.length; i++)
    {ach[i].onclick = function ()
    {if ( !this.checked )
    {obox.checked = false;}};}*/


    $('#handle').click(function(){

        if($(this).attr('checked')==true){
            $('.toggle').removeAttr('checked');

        }
        else{

            $('.toggle').attr('checked','false');

        }
    });
    $('.toggle').click(function(){
        if($('.toggle:checked').length==$('.toggle').length){
            $('#handle').attr('checked','true');
        }
        else{
            $('#handle').removeAttr('checked');
        }
    });




    $('#loader').shCircleLoader();


    /*视频*/
    $("#vd").mediaelementplayer({
        alwaysShowControls: true,
        videoVolume: 'horizontal',
        features: ['playpause','progress','volume','fullscreen']
    });



    $("#loader").animate({display:"none"},3000)
});
