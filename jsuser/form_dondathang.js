$(".btn_themdonhang").click(function(){
    var sodh=$(".txt_sodh").val();
    var ngaydh=$(".txt_ngaydh").val();
    var trangthaidh=$(".txt_trangthaidh").val();
    var ngaydukiengiao=$(".txt_ngaydukiengiao").val();  
    var manvdh=$(".txt_manvdh").val();
    var makhdh=$(".txt_makhdh").val();
    if(sodh==""){
        alert_info("Số Đơn Hàng Khác Khoảng Trống");
    }else if(ngaydh=="")
        {
            alert_info("Ngày Đơn Hàng Khác Khoảng Trống");  
           }
           else if(trangthaidh=="")
            {
            alert_info("Trạng Thái Đơn Hàng Khác Khoảng Trống");  
           }
           else if(ngaydukiengiao=="")
            {
            alert_info("Ngày Dự Kiến Giao Khác Khoảng Trống");  
           }
           else if(manvdh=="")
        {
            alert_info("Mã Nhân Viên Phụ Trách Đơn Hàng Khác Khoảng Trống");  
           }else if(makhdh=="")
           {
               alert_info("Mã Khách Hàng đặt Đơn Hàng Khác Khoảng Trống");  
              }
           else{
               var datasend={
                   event:"insertdh",
                   sodh:sodh,
                   ngaydh:ngaydh,
                   trangthaidh:trangthaidh,
                   ngaydukiengiao:ngaydukiengiao,
                   manvdh:manvdh,
                   makhdh:makhdh

               }
               queryDataGET_JSON("php/dondathang.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["insertdh"]==1){
                                                                         alert_info("Thêm Thành Công");
                                                                         builddsdonhang(donhang_current,recorddonhang);
                                                                         $(".txt_sodh").val("");
                                                                         $(".txt_ngaydh").val("");
                                                                         $(".txt_trangthaidh").val("");
                                                                         $(".txt_ngaydukiengiao").val("");
                                                                         $(".txt_manvdh").val("");
                                                                         $(".txt_makhdh").val("")
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlaidonhang").click(function(){
    $(".txt_sodh").val("");
    $(".txt_ngaydh").val("");
    $(".txt_trangthaidh").val("");
    $(".txt_ngaydukiengiao").val("");
    $(".txt_manvdh").val("");
    $(".txt_makhdh").val("")
    });

$(".btn_xoadonhang").click(function(){
    var sodh=$(".txt_sodh").val();
    var ngaydh=$(".txt_ngaydh").val();
    var trangthaidh=$(".txt_trangthaidh").val();
    var ngaydukiengiao=$(".txt_ngaydukiengiao").val();  
    var manvdh=$(".txt_manvdh").val();
    var makhdh=$(".txt_makhdh").val();
    if(sodh==""){
       
        alert_info("Mã Sản Phẩm khác khoảng trống");
}
    else
    {
        bootbox.confirm("Bạn có chắc xóa Đơn Đặt Hàng "+sodh+" không?",function(res){
        if(res==true){ //nếu nhấn ok
            var datasend={
                event:"deletedh",
                sodh:sodh,
                ngaydh:ngaydh,
                trangthaidh:trangthaidh,
                ngaydukiengiao:ngaydukiengiao,
                manvdh:manvdh,
                makhdh:makhdh
        }
        queryDataGET_JSON("php/dondathang.php",datasend,function(res){
        console.log(res);
        if(res["deletedh"]==1){
            alert_info("Xóa Thành Công");
            builddsdonhang(donhang_current,recorddonhang);
            $(".txt_sodh").val("");
            $(".txt_ngaydh").val("");
            $(".txt_trangthaidh").val("");
            $(".txt_ngaydukiengiao").val("");
            $(".txt_manvdh").val("");
            $(".txt_makhdh").val("")
        }else{
            alert_error("Xóa không thành công");
            }
        });
}
        else //Nếu nhấn cancel
        {

        }
        });
    }
});
$(".btn_luudonhang").click(function(){
    var sodh=$(".txt_sodh").val();
    var ngaydh=$(".txt_ngaydh").val();
    var trangthaidh=$(".txt_trangthaidh").val();
    var ngaydukiengiao=$(".txt_ngaydukiengiao").val();  
    var manvdh=$(".txt_manvdh").val();
    var makhdh=$(".txt_makhdh").val();
    if(sodh==""){
        alert("Mã sản phẩm khác khoảng trống");}
    else
    {   
        bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
            if(result==true){
                queryDataGET_JSON("php/dondathang.php",datasend,function(res){
                console.log(res);
                if(res["updatedh"]==1)
                    {
                    alert_info("Sửa thành công");
                    builddsdonhang(donhang_current,recorddonhang);
                    $(".txt_sodh").val("");
                    $(".txt_ngaydh").val("");
                    $(".txt_trangthaidh").val("");
                    $(".txt_ngaydukiengiao").val("");
                    $(".txt_manvdh").val("");
                    $(".txt_makhdh").val("")
                    }
                    else
                    {
                    alert_info("Sửa không thành công");
                    }
                    });
            }
            else{}});
                var datasend={
                    event:"updatedh",
                    sodh:sodh,
                    ngaydh:ngaydh,
                    trangthaidh:trangthaidh,
                    ngaydukiengiao:ngaydukiengiao,
                    manvdh:manvdh,
                    makhdh:makhdh
                }	
            }
    })
                       


function builddsdonhang(page,record) {
    var dataSend={
    event:"getDSDonHang",
    page:page,
    record:record
    }
$(".listdsdonhang").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/dondathang.php",dataSend,function (res)
    {
        $(".listdsdonhang").html("");
        buildHTMLdonhangData(res);
       
}); 
}

function buildHTMLdonhangData(res) {
    if(res.total==0){
        $(".listdsdonhang").html("Chưa có nội dung");
    }else{  
var data = res.items;
resalldonhang=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recorddonhang,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-sodh="' + list.sodh + '" data-ngaydh="'+list.ngaydh + '" data-trangthaidh="'+list.trangthaidh + '" data-ngaydukiengiao="'+list.ngaydukiengiao+'" data-manvdh="'+list.manvdh+'" data-makhdh="'+list.makhdh + '"  data-vt="' + list.sodh + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.sodh+'</td>'+
'<td>' + list.ngaydh+'</td>'+
'<td>' + list.trangthaidh+'</td>'+
'<td>' + list.ngaydukiengiao+'</td>'+
'<td>' + list.manvdh+'</td>'+
'<td>' + list.makhdh+'</td>'+
'<td class="click_sua_don_hang"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdsdonhang").html(html)
}
    buildSlidePage($(".pagenumberdonhang"),5,res.page,res.totalpage);
}
}
var donhang_current=0;

$(".pagenumberdonhang").on('click','button',function () {

donhang_current=$(this).val();
builddsdonhang($(this).val(),recorddonhang);

});


$(".listdsdonhang").on('click',".click_sua_don_hang",function(){
    //alert_info("ok");
    var sodh=($(this).parents("tr").attr("data-sodh"));
    var ngaydh=($(this).parents("tr").attr("data-ngaydh"));
    var trangthaidh=($(this).parents("tr").attr("data-trangthaidh"));
    var ngaydukiengiao=($(this).parents("tr").attr("data-ngaydukiengiao"));
    var manvdh=($(this).parents("tr").attr("data-manvdh"));
    var makhdh=($(this).parents("tr").attr("data-makhdh"));
    $(".txt_sodh").val(sodh);
    $(".txt_ngaydh").val(resalldonhang[sodh].ngaydh);
    $(".txt_trangthaidh").val(resalldonhang[sodh].trangthaidh);
    $(".txt_ngaydukiengiao").val(resalldonhang[sodh].ngaydukiengiao);
    $(".txt_manvdh").val(resalldonhang[sodh].manvdh);
    $(".txt_makhdh").val(resalldonhang[sodh].makhdh);

});
