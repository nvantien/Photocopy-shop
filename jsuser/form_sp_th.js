$(".btn_themspth").click(function(){
    var chucnangchinh=$(".txt_chucnangchinh").val();
    var mathuonghieu=$(".txt_mathuonghieu").val();
    var masanpham=$(".txt_masanpham").val();
    var giaban=$(".txt_giaban").val();
    if(chucnangchinh==""){
        alert_info("Chức Năng Chính của Sản Phẩm Khác Khoảng Trống");
    }else if(mathuonghieu=="")
        {
            alert_info("Mã Thương Hiệu Không Hợp Lệ");  
        }
    else if(masanpham==""){
        alert_info("Mã Sản Phẩm Không Hợp Lệ");
       }else if(giaban=="" || isNumber(giaban)==false){
           alert_info("Giá Bán Không hợp lệ");
           }else{
               var datasend={
                   event:"insertspth",
                   chucnangchinh:chucnangchinh,
                   mathuonghieu:mathuonghieu,
                   masanpham:masanpham,
                   giaban:giaban
               }
               queryDataGET_JSON("php/spth.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["insertspth"]==1){
                                                                         alert_info("Thêm Thành Công");
                                                                         builddsspth(spth_current,recordspth);
                                                                         $(".txt_chucnangchinh").val("");
                                                                         $(".txt_mathuonghieu").val("");
                                                                         $(".txt_masanpham").val("");
                                                                         $(".txt_giaban").val("")
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlaispth").click(function(){
    $(".txt_chucnangchinh").val("");
    $(".txt_mathuonghieu").val("");
    $(".txt_masanpham").val("");
    $(".txt_giaban").val("")
    });

$(".btn_xoaspth").click(function(){
    var chucnangchinh=$(".txt_chucnangchinh").val();
    var mathuonghieu=$(".txt_mathuonghieu").val();
    var masanpham=$(".txt_masanpham").val();
    var giaban=$(".txt_giaban").val();
    if(chucnangchinh==""){
        
        alert_info("Chức năng chính khác khoảng trống");
}
    else
    {
        bootbox.confirm("Bạn có chắc xóa Sản Phẩm Thương Hiệu "+chucnangchinh+" không?",function(res){
        if(res==true){ 
            var datasend={
                event:"deletespth",
                chucnangchinh:chucnangchinh,
                mathuonghieu:mathuonghieu,
                masanpham:masanpham,
                giaban:giaban
        }
        queryDataGET_JSON("php/spth.php",datasend,function(res){
        console.log(res);
        if(res["deletespth"]==1){
            alert_info("Xóa Thành Công");
            builddsspth(spth_current,recordspth);
            $(".txt_chucnangchinh").val("");
            $(".txt_mathuonghieu").val("");
            $(".txt_masanpham").val("");
            $(".txt_giaban").val("")
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
$(".btn_luuspth").click(function(){
    var chucnangchinh=$(".txt_chucnangchinh").val();
    var mathuonghieu=$(".txt_mathuonghieu").val();
    var masanpham=$(".txt_masanpham").val();
    var giaban=$(".txt_giaban").val();
    if(chucnangchinh==""){
        alert("Chức Năng Chính khác khoảng trống");}
    else
    {   
        bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
            if(result==true){
                queryDataGET_JSON("php/spth.php",datasend,function(res){
                console.log(res);
                if(res["updatespth"]==1)
                    {
                    alert_info("Sửa thành công");
                    builddsspth(spth_current,recordspth);
                    $(".txt_chucnangchinh").val("");
                    $(".txt_mathuonghieu").val("");
                    $(".txt_masanpham").val("");
                    $(".txt_giaban").val("")
                    }
                    else
                    {
                    alert_info("Sửa không thành công");
                    }
                    });
            }
            else{}});
                var datasend={
                    event:"updatespth",
                    chucnangchinh:chucnangchinh,
                    mathuonghieu:mathuonghieu,
                    masanpham:masanpham,
                    giaban:giaban
                }	
            }
    })
                       


function builddsspth(page,record) {
    var dataSend={
    event:"getDSSPTH",
    page:page,
    record:record
    }
$(".listdsspth").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/spth.php",dataSend,function (res)
    {
        $(".listdsspth").html("");
        buildHTMLspthData(res);
 
}); 
}

function buildHTMLspthData(res) {
    if(res.total==0){
        $(".listdsspth").html("Chưa có nội dung");
    }else{  
var data = res.items;
resallspth=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recordspth,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-chucnangchinh="' + list.chucnangchinh + '" data-mathuonghieu="'+list.mathuonghieu + '" data-masanpham="'+list.masanpham + '" data-giaban="'+list.giaban+'" data-vt="' + list.chucnangchinh + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.chucnangchinh+'</td>'+
'<td>' + list.mathuonghieu+'</td>'+
'<td>' + list.masanpham+'</td>'+
'<td>' + list.giaban+'</td>'+
'<td class="click_sua_san_pham_thuong_hieu"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdsspth").html(html)
}
    buildSlidePage($(".pagenumberspth"),5,res.page,res.totalpage);
}
}
var spth_current=0;

$(".pagenumberspth").on('click','button',function () {

spth_current=$(this).val();
builddsspth($(this).val(),recordspth);

});


$(".listdsspth").on('click',".click_sua_san_pham_thuong_hieu",function(){

    var chucnangchinh=($(this).parents("tr").attr("data-chucnangchinh"));
    var mathuonghieu=($(this).parents("tr").attr("data-mathuonghieu"));
    var masanpham=($(this).parents("tr").attr("data-masanpham"));
    var giaban=($(this).parents("tr").attr("data-giaban"));
    $(".txt_chucnangchinh").val(chucnangchinh);
    $(".txt_mathuonghieu").val(resallspth[chucnangchinh].mathuonghieu);
    $(".txt_masanpham").val(resallspth[chucnangchinh].masanpham);
    $(".txt_giaban").val(resallspth[chucnangchinh].giaban);		  
});
