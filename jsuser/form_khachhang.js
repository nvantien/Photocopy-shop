$(".btn_themkhachhang").click(function(){
    var makh=$(".txt_makh").val();
    var tenkh=$(".txt_tenkh").val();
    var phone=$(".txt_phone").val();
    var email=$(".txt_email").val(); // lay gia tri cua o nhap lieu
    if(makh==""){
        alert_info("Mã Khách Hàng Khác Khoảng Trống");
    }else if(tenkh=="")
        {
            alert_info("Tên Khách Hàng Khác Khoảng Trống");  
        }
    else if(isNumber(phone)==false || phone=="" || phone.length!=10){
        alert_info("Số Điện Thoại Phải 10 Số và Khác Khoảng Trống");
       }else if(validateEmail(email)==false || email==""){
           alert_info("Email Không hợp lệ");
           }else{
               var datasend={
                   event:"insertkh",
                   makh:makh,
                   tenkh:tenkh,
                   phone:phone,
                   email:email
               }
               queryDataGET_JSON("php/khachhang.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["insertkh"]==1){
                                                                         alert_info("Thêm Thành Công");
                                                                         builddskhachhang(khachhang_current,recordkhachhang);
                                                                         $(".txt_makh").val("");
                                                                         $(".txt_tenkh").val("");
                                                                         $(".txt_phone").val("");
                                                                         $(".txt_email").val("")
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlaikhachhang").click(function(){
    $(".txt_makh").val("");
    $(".txt_tenkh").val("");
    $(".txt_phone").val("");
    $(".txt_email").val("")
    });

$(".btn_xoakhachhang").click(function(){
    var makh=$(".txt_makh").val();//lay gia i tu ô nhập liệu mã thể loại
    var tenkh=$(".txt_tenkh").val();
    var phone=$(".txt_phone").val();
    var email=$(".txt_email").val();
    if(makh==""){
        //alert("Mã thể loại khác khoảng trống");
        alert_info("Mã Khách hàng khác khoảng trống");
}
    else
    {
        bootbox.confirm("Bạn có chắc xóa khách hàng "+makh+" không?",function(res){
        if(res==true){ //nếu nhấn ok
            var datasend={
                event:"deletekh",
                makh:makh,
                tenkh:tenkh,
                phone:phone,
                email:email,
        }
        queryDataGET_JSON("php/khachhang.php",datasend,function(res){
        console.log(res);
        if(res["deletekh"]==1){
            alert_info("Xóa Thành Công");
            builddskhachhang(khachhang_current,recordkhachhang);
            $(".txt_makh").val("");
            $(".txt_tenkh").val("");
            $(".txt_phone").val("");
            $(".txt_email").val("")
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
$(".btn_luukhachhang").click(function(){
    var makh=$(".txt_makh").val();
    var tenkh=$(".txt_tenkh").val();
    var phone=$(".txt_phone").val();
    var email=$(".txt_email").val();
    if(makh==""){
        alert("Mã khách hàng khác khoảng trống");}
    else
    {   
        bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
            if(result==true){
                queryDataGET_JSON("php/khachhang.php",datasend,function(res){
                console.log(res);
                if(res["updatekh"]==1)
                    {
                    alert_info("Sửa thành công");
                    builddskhachhang (khachhang_current,recordkhachhang);
                    $(".txt_makh").val("");
                    $(".txt_tenkh").val("");
                    $(".txt_phone").val("");
                    $(".txt_email").val("");
                    }
                    else
                    {
                    alert_info("Sửa không thành công");
                    }
                    });
            }
            else{}});
                var datasend={
                    event:"updatekh",
                    makh:makh,
                    tenkh:tenkh,
                    phone:phone,
                    email:email
                }	
            }
    })
                       


function builddskhachhang(page,record) {
    var dataSend={
    event:"getDSKhachHang",
    page:page,
    record:record
    }
$(".listdskhachhang").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/khachhang.php",dataSend,function (res)
    {
        $(".listdskhachhang").html("");
        buildHTMLkhachhangData(res);
        //alert_info("Đã Lấy Dữ Liệu Được" + res); 
}); 
}

function buildHTMLkhachhangData(res) {
    if(res.total==0){
        $(".listdskhachhang").html("Chưa có nội dung");
    }else{  
var data = res.items;
resallkhachhang=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recordkhachhang,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-makh="' + list.makh + '" data-name="'+list.tenkh + '" data-phone="'+list.phone + '" data-email="'+list.email+'" data-vt="' + list.makh + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.makh+'</td>'+
'<td>' + list.tenkh+'</td>'+
'<td>' + list.phone+'</td>'+
'<td>' + list.email+'</td>'+
'<td class="click_sua_khach_hang"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdskhachhang").html(html)
}
    buildSlidePage($(".pagenumberkhachhang"),5,res.page,res.totalpage);
}
}
var khachhang_current=0;

$(".pagenumberkhachhang").on('click','button',function () {

khachhang_current=$(this).val();
builddskhachhang($(this).val(),recordkhachhang);

});


$(".listdskhachhang").on('click',".click_sua_khach_hang",function(){
    //alert_info("ok");
    var makh=($(this).parents("tr").attr("data-makh"));
    var tenkh=($(this).parents("tr").attr("data-name"));
    var phone=($(this).parents("tr").attr("data-phone"));
    var email=($(this).parents("tr").attr("data-email"));
    $(".txt_makh").val(makh);
    $(".txt_tenkh").val(resallkhachhang[makh].tenkh);
    $(".txt_phone").val(resallkhachhang[makh].phone);
    $(".txt_email").val(resallkhachhang[makh].email);		  
});
