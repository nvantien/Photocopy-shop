$(".btn_themnhanvien").click(function(){
    var manv=$(".txt_manv").val();
    var hotennv=$(".txt_hotennv").val();
    var gt=$(".txt_gt").val();
    var ns=$(".txt_ns").val();
    
    if(manv==""){
        alert_info("Mã Nhân Viên Khác Khoảng Trống");
    }else if(hotennv=="")
        {
            alert_info("Tên Nhân Viên Khác Khoảng Trống");  
       }
       else if(gt=="")
        {
            alert_info("Giới Tính Nhân Viên Khác Khoảng Trống");  
       }
       else if(isNumber(ns)==false || ns=="" || ns.length!=4){
           alert_info("Năm Sinh Không Hợp Lệ");
           }else{
               var datasend={
                   event:"insertnv",
                   manv:manv,
                   hotennv:hotennv,
                   gt:gt,
                   ns:ns
               }
               queryDataGET_JSON("php/nhanvien.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["insertnv"]==1){
                                                                         alert_info("Thêm Thành Công");
                                                                         builddsnhanvien(nhanvien_current,recordnhanvien);
                                                                         $(".txt_manv").val("");
                                                                         $(".txt_hotennv").val("");
                                                                         $(".txt_gt").val("");
                                                                         $(".txt_ns").val("")
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlainhanvien").click(function(){
    $(".txt_manv").val("");
    $(".txt_hotennv").val("");
    $(".txt_gt").val("");
    $(".txt_ns").val("")
    });

$(".btn_xoanhanvien").click(function(){
    var manv=$(".txt_manv").val();
    var hotennv=$(".txt_hotennv").val();
    var gt=$(".txt_gt").val();
    var ns=$(".txt_ns").val();
        if(manv==""){
            alert_info("Mã Nhân Viên khác khoảng trống");
    }
        else
        {
            bootbox.confirm("Bạn có chắc xóa Nhân Viên : "+manv+" không?",function(res){
            if(res==true){ //nếu nhấn ok
                var datasend={
                    event:"deletenv",
                    manv:manv,
                    hotennv:hotennv,
                    gt:gt,
                    ns:ns
            }
            queryDataGET_JSON("php/nhanvien.php",datasend,function(res){
            console.log(res);
            if(res["deletenv"]==1){
                alert_info("Xóa Thành Công");
                builddsnhanvien(nhanvien_current,recordnhanvien);
                $(".txt_manv").val("");
                $(".txt_hotennv").val("");
                $(".txt_gt").val("");
                $(".txt_ns").val("")
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
    $(".btn_luunhanvien").click(function(){
        var manv=$(".txt_manv").val();
        var hotennv=$(".txt_hotennv").val();
        var gt=$(".txt_gt").val();
        var ns=$(".txt_ns").val();
        if(manv==""){
            alert("Mã Nhân Viên khác khoảng trống");}
        else
        {   
            bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
                if(result==true){
                    queryDataGET_JSON("php/nhanvien.php",datasend,function(res){
                    console.log(res);
                    if(res["updatenv"]==1)
                        {
                        alert_info("Sửa thành công");
                        builddsnhanvien (nhanvien_current,recordnhanvien);
                        $(".txt_manv").val("");
                        $(".txt_hotennv").val("");
                        $(".txt_gt").val("");
                        $(".txt_ns").val("");
                        }
                        else
                        {
                        alert_info("Sửa không thành công");
                        }
                        });
                }
                else{}});
                    var datasend={
                        event:"updatenv",
                        manv:manv,
                        hotennv:hotennv,
                        gt:gt,
                        ns:ns
                    }	
                }
        })
                           
                       


function builddsnhanvien(page,record) {
    var dataSend={
    event:"getDSNhanVien",
    page:page,
    record:record
    }
$(".listdsnhanvien").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/NhanVien.php",dataSend,function (res)
    {
        $(".listdsnhanvien").html("");
        buildHTMLnhanvienData(res);
        //alert_info("Đã Lấy Dữ Liệu Được" + res); 
}); 
}

function buildHTMLnhanvienData(res) {
    if(res.total==0){
        $(".listdsnhanvien").html("Chưa có nội dung");
    }else{  
var data = res.items;
resallnhanvien=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recordnhanvien,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-manv="' + list.manv + '" data-name="'+list.hotennv + '" data-gt="'+list.gt + '" data-ns="'+list.ns+'" data-vt="' + list.manv + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.manv+'</td>'+
'<td>' + list.hotennv+'</td>'+
'<td>' + list.gt+'</td>'+
'<td>' + list.ns+'</td>'+
'<td class="click_sua_nhan_vien"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdsnhanvien").html(html)
}
    buildSlidePage($(".pagenumbernhanvien"),5,res.page,res.totalpage);
}
}
var nhanvien_current=0;
$(".pagenumbernhanvien").on('click','button',function () {

nhanvien_current=$(this).val();
builddsnhanvien($(this).val(),recordnhanvien);

});


$(".listdsnhanvien").on('click',".click_sua_nhan_vien",function(){
    //alert_info("ok");
    var manv=($(this).parents("tr").attr("data-manv"));
    var hotennv=($(this).parents("tr").attr("data-name"));
    var gt=($(this).parents("tr").attr("data-gt"));
    var ns=($(this).parents("tr").attr("data-ns"));
    $(".txt_manv").val(manv);
    $(".txt_hotennv").val(resallnhanvien[manv].hotennv);
    $(".txt_gt").val(resallnhanvien[manv].gt);
    $(".txt_ns").val(resallnhanvien[manv].ns);		  
});
