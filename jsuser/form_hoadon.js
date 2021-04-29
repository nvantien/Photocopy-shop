$(".btn_themhoadon").click(function(){
    var sohd=$(".txt_sohd").val();
    var ngayhd=$(".txt_ngayhd").val();
    var manvhd=$(".txt_manvhd").val();
    var makhhd=$(".txt_makhhd").val();
    if(sohd==""){
        alert_info("Số Hóa Đơn Khác Khoảng Trống");
    }else if(ngayhd=="")
        {
            alert_info("Ngày Hóa Đơn Khác Khoảng Trống");  
        }
    else if(manvhd==""){
        alert_info("Mã Nhân Viên Không Hợp Lệ");
       }else if(makhhd==""){
           alert_info("Mã Khách Hàng Không hợp lệ");
           }else{
               var datasend={
                   event:"inserthd",
                   sohd:sohd,
                   ngayhd:ngayhd,
                   manvhd:manvhd,
                   makhhd:makhhd
               }
               queryDataGET_JSON("php/hoadon.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["inserthd"]==1){
                                                                         alert_info("Thêm Thành Công");
                                                                         builddshoadon(hoadon_current,recordhoadon);
                                                                         $(".txt_sohd").val("");
                                                                         $(".txt_ngayhd").val("");
                                                                         $(".txt_manvhd").val("");
                                                                         $(".txt_makhhd").val("")
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlaihoadon").click(function(){
    $(".txt_sohd").val("");
    $(".txt_ngayhd").val("");
    $(".txt_manvhd").val("");
    $(".txt_makhhd").val("")
    });

$(".btn_xoahoadon").click(function(){
    var sohd=$(".txt_sohd").val();
    var ngayhd=$(".txt_ngayhd").val();
    var manvhd=$(".txt_manvhd").val();
    var makhhd=$(".txt_makhhd").val();
    if(sohd==""){
        
        alert_info("Mã Hóa Đơn khác khoảng trống");
}
    else
    {
        bootbox.confirm("Bạn có chắc xóa hóa đơn "+sohd+" không?",function(res){
        if(res==true){ //nếu nhấn ok
            var datasend={
                event:"deletehd",
                sohd:sohd,
                ngayhd:ngayhd,
                manvhd:manvhd,
                makhhd:makhhd
        }
        queryDataGET_JSON("php/hoadon.php",datasend,function(res){
        console.log(res);
        if(res["deletehd"]==1){
            alert_info("Xóa Thành Công");
            builddshoadon(hoadon_current,recordhoadon);
            $(".txt_sohd").val("");
            $(".txt_ngayhd").val("");
            $(".txt_manvhd").val("");
            $(".txt_makhhd").val("")
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
$(".btn_luuhoadon").click(function(){
    var sohd=$(".txt_sohd").val();
    var ngayhd=$(".txt_ngayhd").val();
    var manvhd=$(".txt_manvhd").val();
    var makhhd=$(".txt_makhhd").val();
    if(sohd==""){
        alert("Số Hóa Đơn khác khoảng trống");}
    else
    {   
        bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
            if(result==true){
                queryDataGET_JSON("php/hoadon.php",datasend,function(res){
                console.log(res);
                if(res["updatehd"]==1)
                    {
                    alert_info("Sửa thành công");
                    builddshoadon(hoadon_current,recordhoadon);
                    $(".txt_sohd").val("");
                    $(".txt_ngayhd").val("");
                    $(".txt_manvhd").val("");
                    $(".txt_makhhd").val("")
                    }
                    else
                    {
                    alert_info("Sửa không thành công");
                    }
                    });
            }
            else{}});
                var datasend={
                    event:"updatehd",
                    sohd:sohd,
                    ngayhd:ngayhd,
                    manvhd:manvhd,
                    makhhd:makhhd
                }	
            }
    })
                       


function builddshoadon(page,record) {
    var dataSend={
    event:"getDSHoaDon",
    page:page,
    record:record
    }
$(".listdshoadon").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/hoadon.php",dataSend,function (res)
    {
        $(".listdshoadon").html("");
        buildHTMLhoadonData(res);
 
}); 
}

function buildHTMLhoadonData(res) {
    if(res.total==0){
        $(".listdshoadon").html("Chưa có nội dung");
    }else{  
var data = res.items;
resallhoadon=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recordhoadon,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-sohd="' + list.sohd + '" data-ngayhd="'+list.ngayhd + '" data-manvhd="'+list.manvhd + '" data-manvkh="'+list.manvkh+'" data-vt="' + list.sohd + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.sohd+'</td>'+
'<td>' + list.ngayhd+'</td>'+
'<td>' + list.manvhd+'</td>'+
'<td>' + list.makhhd+'</td>'+
'<td class="click_sua_hoa_don"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdshoadon").html(html)
}
    buildSlidePage($(".pagenumberhoadon"),5,res.page,res.totalpage);
}
}
var hoadon_current=0;

$(".pagenumberhoadon").on('click','button',function () {

hoadon_current=$(this).val();
builddshoadon($(this).val(),recordhoadon);

});


$(".listdshoadon").on('click',".click_sua_hoa_don",function(){
    //alert_info("ok");
    var sohd=($(this).parents("tr").attr("data-sohd"));
    var ngayhd=($(this).parents("tr").attr("data-ngayhd"));
    var manvhd=($(this).parents("tr").attr("data-manvhd"));
    var makhhd=($(this).parents("tr").attr("data-makhhd"));
    $(".txt_sohd").val(sohd);
    $(".txt_ngayhd").val(resallhoadon[sohd].ngayhd);
    $(".txt_manvhd").val(resallhoadon[sohd].manvhd);
    $(".txt_makhhd").val(resallhoadon[sohd].makhhd);		  
});
