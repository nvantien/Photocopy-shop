$(".btn_themcthd").click(function(){
    var maspcthd=$(".txt_maspcthd").val();
    var sohdct=$(".txt_sohdct").val();
    var sl=$(".txt_sl").val();
    var dongia=$(".txt_dongia").val();
    if(maspcthd==""){
        alert_info("Mã Sản Phẩm Không Hợp Lệ");
    }else if(sohdct=="")
        {
            alert_info("Số Hóa Đơn Không Hợp Lệ");  
        }
    else if(sl=="" || isNumber(sl)==false){
        alert_info("Số Lượng Không Hợp Lệ");
       }else if(dongia=="" || isNumber(dongia)==false){
           alert_info("Đơn Giá Không hợp lệ");
           }else{
               var datasend={
                   event:"insertcthd",
                   maspcthd:maspcthd,
                   sohdct:sohdct,   
                   sl:sl,
                   dongia:dongia
               }
               queryDataGET_JSON("php/chitiethoadon.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["insertcthd"]==1){
                                                                         alert_info("Thêm Thành Công");
                                                                         builddscthd(cthd_current,recordcthd);
                                                                         $(".txt_maspcthd").val("");
                                                                         $(".txt_sohdct").val("");
                                                                         $(".txt_sl").val("");
                                                                         $(".txt_dongia").val("")
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlaicthd").click(function(){
    $(".txt_maspcthd").val("");
    $(".txt_sohdct").val("");
    $(".txt_sl").val("");
    $(".txt_dongia").val("")
    });

$(".btn_xoacthd").click(function(){
    var maspcthd=$(".txt_maspcthd").val();
    var sohdct=$(".txt_sohdct").val();
    var sl=$(".txt_sl").val();
    var dongia=$(".txt_dongia").val();
    if(maspcthd==""){
        
        alert_info("Mã Sản Phẩm khác khoảng trống");
}
    else
    {
        bootbox.confirm("Bạn có chắc xóa "+maspcthd+" không?",function(res){
        if(res==true){ 
            var datasend={
                event:"deletecthd",
                maspcthd:maspcthd,
                sohdct:sohdct,
                sl:sl,
                dongia:dongia
        }
        queryDataGET_JSON("php/chitiethoadon.php",datasend,function(res){
        console.log(res);
        if(res["deletecthd"]==1){
            alert_info("Xóa Thành Công");
            builddscthd(cthd_current,recordcthd);
            $(".txt_maspcthd").val("");
            $(".txt_sohdct").val("");
            $(".txt_sl").val("");
            $(".txt_dongia").val("")
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
$(".btn_luucthd").click(function(){
    var maspcthd=$(".txt_maspcthd").val();
    var sohdct=$(".txt_sohdct").val();
    var sl=$(".txt_sl").val();
    var dongia=$(".txt_dongia").val();
    if(maspcthd==""){
        alert("Mã Sản Phẩm khác khoảng trống");}
    else
    {   
        bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
            if(result==true){
                queryDataGET_JSON("php/chitiethoadon.php",datasend,function(res){
                console.log(res);
                if(res["updatecthd"]==1)
                    {
                    alert_info("Sửa thành công");
                    builddscthd(cthd_current,recordcthd);
                    $(".txt_maspcthd").val("");
                    $(".txt_sohdct").val("");
                    $(".txt_sl").val("");
                    $(".txt_dongia").val("")
                    }
                    else
                    {
                    alert_info("Sửa không thành công");
                    }
                    });
            }
            else{}});
                var datasend={
                    event:"updatecthd",
                    maspcthd:maspcthd,
                    sohdct:sohdct,
                    sl:sl,
                    dongia:dongia
                }	
            }
    })
                       


function builddscthd(page,record) {
    var dataSend={
    event:"getDSCTHD",
    page:page,
    record:record
    }
$(".listdscthd").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/chitiethoadon.php",dataSend,function (res)
    {
        $(".listdscthd").html("");
        buildHTMLcthdData(res);
 
}); 
}

function buildHTMLcthdData(res) {
    if(res.total==0){
        $(".listdscthd").html("Chưa có nội dung");
    }else{  
var data = res.items;
resallcthd=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recordcthd,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-maspcthd="' + list.maspcthd + '" data-sohdct="'+list.sohdct + '" data-sl="'+list.sl + '" data-dongia="'+list.dongia+'" data-vt="' + list.maspcthd + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.maspcthd+'</td>'+
'<td>' + list.sohdct+'</td>'+
'<td>' + list.sl+'</td>'+
'<td>' + list.dongia+'</td>'+
'<td class="click_sua_chi_tiet_hoa_don"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdscthd").html(html)
}
    buildSlidePage($(".pagenumbercthd"),5,res.page,res.totalpage);
}
}
var cthd_current=0;

$(".pagenumbercthd").on('click','button',function () {

cthd_current=$(this).val();
builddscthd($(this).val(),recordspth);

});


$(".listdscthd").on('click',".click_sua_chi_tiet_hoa_don",function(){

    var maspcthd=($(this).parents("tr").attr("data-maspcthd"));
    var sohdct=($(this).parents("tr").attr("data-sohdct"));
    var sl=($(this).parents("tr").attr("data-sl"));
    var dongia=($(this).parents("tr").attr("data-dongia"));
    $(".txt_maspcthd").val(maspcthd);
    $(".txt_sohdct").val(resallcthd[maspcthd].sohdct);
    $(".txt_sl").val(resallcthd[maspcthd].sl);
    $(".txt_dongia").val(resallcthd[maspcthd].dongia);		  
});
