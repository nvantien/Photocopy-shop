$(".btn_themctdh").click(function(){
    var id=$(".txt_id").val();
    var sodhct=$(".txt_sodhct").val();
    var maspct=$(".txt_maspct").val();
    var soluong=$(".txt_soluong").val();
    var giatien=$(".txt_giatien").val();
    if(id==""){
        alert_info("ID Không Hợp Lệ");
    }else if(sodhct=="")
        {
            alert_info("Số Đơn Hàng Không Hợp Lệ");  
        }
    else if(maspct=="" ){
        alert_info("Mã Sản Phẩm Không Hợp Lệ");
       }else if(soluong=="" || isNumber(soluong)==false){
           alert_info("Số Lượng Không hợp lệ");
           }else if(giatien=="" || isNumber(giatien)==false){
            alert_info("Giá Tiền Không hợp lệ");
            }
           else{
               var datasend={
                   event:"insertctdh",
                   id:id,
                   sodhct:sodhct,
                   maspct:maspct,
                   soluong:soluong,
                   giatien:giatien
               }
               queryDataGET_JSON("php/chitietdonhang.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["insertctdh"]==1){
                                                                         alert_info("Thêm Thành Công");
                                                                         builddsctdh(ctdh_current,recordctdh);
                                                                         $(".txt_id").val("");
                                                                         $(".txt_sodhct").val("");
                                                                         $(".txt_maspct").val("");
                                                                         $(".txt_soluong").val("");
                                                                         $(".txt_giatien").val("")
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlaictdh").click(function(){
    $(".txt_id").val("");
    $(".txt_sodhct").val("");
    $(".txt_maspct").val("");
    $(".txt_soluong").val("");
    $(".txt_giatien").val("")
    });

$(".btn_xoactdh").click(function(){
    var id=$(".txt_id").val();
    var sodhct=$(".txt_sodhct").val();
    var maspct=$(".txt_maspct").val();
    var soluong=$(".txt_soluong").val();
    var giatien=$(".txt_giatien").val();
    if(id==""){
        
        alert_info("ID khác khoảng trống");
}
    else
    {
        bootbox.confirm("Bạn có chắc xóa "+id+" không?",function(res){
        if(res==true){ 
            var datasend={
                event:"deletectdh",
                id:id,
                sodhct:sodhct,
                maspct:maspct,
                soluong:soluong,
                giatien:giatien
        }
        queryDataGET_JSON("php/chitietdonhang.php",datasend,function(res){
        console.log(res);
        if(res["deletectdh"]==1){
            alert_info("Xóa Thành Công");
            builddsctdh(ctdh_current,recordctdh);
            $(".txt_id").val("");
            $(".txt_sodhct").val("");
            $(".txt_maspct").val("");
            $(".txt_soluong").val("");
            $(".txt_giatien").val("")
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
$(".btn_luuctdh").click(function(){
    var id=$(".txt_id").val();
    var sodhct=$(".txt_sodhct").val();
    var maspct=$(".txt_maspct").val();
    var soluong=$(".txt_soluong").val();
    var giatien=$(".txt_giatien").val();
    if(id==""){
        alert("ID khác khoảng trống");}
    else
    {   
        bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
            if(result==true){
                queryDataGET_JSON("php/chitietdonhang.php",datasend,function(res){
                console.log(res);
                if(res["updatectdh"]==1)
                    {
                    alert_info("Sửa thành công");
                    builddsctdh(ctdh_current,recordctdh);
                    $(".txt_id").val("");
                    $(".txt_sodhct").val("");
                    $(".txt_maspct").val("");
                    $(".txt_soluong").val("");
                    $(".txt_giatien").val("")
                    }
                    else
                    {
                    alert_info("Sửa không thành công");
                    }
                    });
            }
            else{}});
                var datasend={
                    event:"updatectdh",
                    id:id,
                    sodhct:sodhct,
                    maspct:maspct,
                    soluong:soluong,
                    giatien:giatien
                }	
            }
    })
                       


function builddsctdh(page,record) {
    var dataSend={
    event:"getDSCTDH",
    page:page,
    record:record
    }
$(".listdsctdh").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/chitietdonhang.php",dataSend,function (res)
    {
        $(".listdsctdh").html("");
        buildHTMLctdhData(res);
 
}); 
}

function buildHTMLctdhData(res) {
    if(res.total==0){
        $(".listdsctdh").html("Chưa có nội dung");
    }else{  
var data = res.items;
resallctdh=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recordctdh,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-id="' + list.id + '" data-sodhct="'+list.sodhct + '" data-maspct="'+list.maspct + '" data-soluong="'+list.soluong+ '" data-giatien="'+list.giatien+'" data-vt="' + list.id + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.id+'</td>'+
'<td>' + list.sodhct+'</td>'+
'<td>' + list.maspct+'</td>'+
'<td>' + list.soluong+'</td>'+
'<td>' + list.giatien+'</td>'+
'<td class="click_sua_chi_tiet_don_hang"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdsctdh").html(html)
}
    buildSlidePage($(".pagenumberctdh"),5,res.page,res.totalpage);
}
}
var ctdh_current=0;

$(".pagenumberctdh").on('click','button',function () {

ctdh_current=$(this).val();
builddsctdh($(this).val(),recordctdh);

});


$(".listdsctdh").on('click',".click_sua_chi_tiet_don_hang",function(){

    var id=($(this).parents("tr").attr("data-id"));
    var sodhct=($(this).parents("tr").attr("data-sodhct"));
    var maspct=($(this).parents("tr").attr("data-maspct"));
    var soluong=($(this).parents("tr").attr("data-soluong"));
    var giatien=($(this).parents("tr").attr("data-giatien"));
    $(".txt_id").val(id);
    $(".txt_sodhct").val(resallctdh[id].sodhct);
    $(".txt_maspct").val(resallctdh[id].maspct);
    $(".txt_soluong").val(resallctdh[id].soluong);
    $(".txt_giatien").val(resallctdh[id].giatien);		  
});
