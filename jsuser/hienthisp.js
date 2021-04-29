function builddshienthisp(page,record) {
   
    var dataSend={
		event:"getDShienthisp",
		page:page,
        record:record
    }

    $(".listdshienthisp").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/hienthisp.php",dataSend,function (res) {
            $(".listdshienthisp").html("");
            buildHTMLhienthispData(res);
            //alert_info("Đã lấy được dữ liệu " + res);
    });
}

var resallhienthisp;
function buildHTMLhienthispData(res) {
    if(res.total==0){
    
         $(".listdshienthisp").html("Chưa có nội dung");
         
    }else{
     var data = res.items;
    
     resallhienthisp=data;
     var stt=1;
    var currentpage=parseInt(res.page);
     stt=printSTT(recordhienthisp,currentpage);
     var html='';
     var vt=0;
     for (item in data) {
        var list=data[item];
        if(list.khuyenmai > 0){
            html=html +
            '<div class="box_user">'+
            '<a href="#"><img class="photoshop" align="center" src="./images/gallery/'+list.hinhanhsp+'"/></a><p>&nbsp;</p>'+
            '<center class="font_white font_name"><b>'+list.tensp+'</b></center>'+
            '<center><del class="font_lightblue">'+'</del>&nbsp;<b class="font_yellow">'+list.giabansp+
            'đ</b><span class="font_lightgreen">(-'+list.khuyenmai+'%)</span></center>'+
            '<div align="center" data-maspgh = '+list.masp+' data-tenspgh'+list.masp+'>'+
                   '<button type="button" class="btn btn-round btn-danger btn_themgiohang font_white">'+
                   'Thêm vào giỏ'+
                   '</button></a>&nbsp;'+
                   '<button type="button" class="btn btn-success btn_muahang">Mua ngay</button>&nbsp;'+
               '</div>'+
           '</div>';
        stt++;

        $(".listdshienthisp").html(html)
        }else{
            html=html +
            '<div class="box_user">'+
            '<a href="#"><img class="photoshop" align="center" src="./images/gallery/'+list.hinhanhsp+'"/></a><p>&nbsp;</p>'+
            '<center class="font_white font_name"><b>'+list.tensp+'</b></center>'+
            '<center><del class="font_lightblue">'+'đ</del>&nbsp;<b class="font_yellow">'+list.giabansp+
            '<div align="center" data-maspgh = '+list.masp+' data-tenspgh'+list.masp+'>'+
            '<div align="center">'+
                   '<button type="button" class="btn btn-round btn-danger btn_themgiohang font_white">'+
                   'Thêm vào giỏ'+
                   '</button></a>&nbsp;'+
                   '<button type="button" class="btn btn-success btn_muahang">Mua ngay</button>&nbsp;'+
               '</div>'+
           '</div>';
        stt++;

        $(".listdshienthisp").html(html)
        }
       
         
    }
    buildSlidePage($(".pagenumberhienthisp"),5,res.page,res.totalpage);
    }
}

 var hienthisp_current=0;
 $(".pagenumberhienthisp").on('click','button',function () {
     
     hienthisp_current=$(this).val();
     builddshienthisp($(this).val(),recordhienthisp);
     
 });

 $(".listdshienthisp").on('click','.btn_themgiohang',function(){
    var masp=($(this).parents("div").attr("data-maspgh"));
    masp=resallhienthisp[masp].masp;
    tensp=resallhienthisp[masp].tensp;
    hinhanhsp=resallhienthisp[masp].hinhanhsp;
    giabansp=resallhienthisp[masp].giabansp;
    soluongsp=1;
    var datasend={
        event:"insert",
        masp:masp,
        tensp:tensp,
        hinhanhsp:hinhanhsp,
        giabansp:giabansp,
        soluongsp:soluongsp
    }
    queryDataGET_JSON("php/giohang.php",datasend,function(res){
        console.log(res);
        if(res["insert"]==1){
            alert_success("Thêm thành công vào giỏ hàng!");
        }
        else{
            alert_error("Mặt hàng đã có trong giỏ!");}
    });
});