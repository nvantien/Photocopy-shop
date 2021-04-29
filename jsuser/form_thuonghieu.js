$(".btn_themthuonghieu").click(function(){
    var math=$(".txt_math").val();
    var tenth=$(".txt_tenth").val(); // lay gia tri cua o nhap lieu
    if(math==""){
        alert_info("Mã Thể Loại Khác Khoảng Trống");
       }else if(tenth==""){
           //alert("Tên Thể Loại Trống");
           alert_info("Tên Thể Loại Khác Khoảng Trống");
           
           }else{
               var datasend={
                   event:"insertth",
                   math:math,
                   tenth:tenth
               }
               queryDataGET_JSON("php/thuonghieu.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["insertth"]==1){
                                                                         alert_info("Thêm Thành Công ");
                                                                         builddsthuonghieu(thuonghieu_current,recordthuonghieu);
                                                                         $(".txt_math").val("");
                                                                         $(".txt_tenth").val("");
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlaithuonghieu").click(function(){
    $(".txt_math").val("");
    $(".txt_tenth").val("");
    });

$(".btn_xoathuonghieu").click(function(){
    var math=$(".txt_math").val();//lay gia i tu ô nhập liệu mã thể loại
    var tenth=$(".txt_tenth").val();
    if(math==""){
        //alert("Mã thể loại khác khoảng trống");
        alert_info("Mã thể loại khác khoảng trống");
}
    else
    {
        bootbox.confirm("Bạn có chắc xóa thương hiệu "+math+" không?",function(res){
        if(res==true){ //nếu nhấn ok
            var datasend={
            event:"deleteth",
            math:math,
            tenth:tenth
        }
        queryDataGET_JSON("php/thuonghieu.php",datasend,function(res){
        console.log(res);
        if(res["deleteth"]==1){
            alert_info("Xóa Thành Công");
            builddsthuonghieu(thuonghieu_current,recordthuonghieu);
            $(".txt_math").val("");
            $(".txt_tenth").val("");
        }else{
            alert_error("Xóa khong thanh cong");
            }
        });
}
        else //Nếu nhấn cancel
        {

        }
        });
    }
});
$(".btn_luuthuonghieu").click(function(){
	var math=$(".txt_math").val();
	var tenth=$(".txt_tenth").val();
	if(math==""){
		alert("Mã Thương Hiệu khác khoảng trống");}
	else
		{
		bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
		if(result==true){
			queryDataGET_JSON("php/thuonghieu.php",datasend,function(res){
			console.log(res);
			if(res["updateth"]==1)
				{
				alert_info("Sửa thành công");
				builddsthuonghieu(thuonghieu_current,recordthuonghieu);
				$(".txt_math").val("");
				$(".txt_tenth").val("");
				}
				else
				{
				alert_info("Sửa không thành công");
				}
				});
		}
		else{}});
			var datasend={
				event:"updateth",
				math:math,
				tenth:tenth
			}	
		}
})
                       


function builddsthuonghieu(page,record) {
    var dataSend={
    event:"getDSThuongHieu",
    page:page,
    record:record
    }
$(".listdsthuonghieu").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/thuonghieu.php",dataSend,function (res)
    {
        $(".listdsthuonghieu").html("");
        buildHTMLThuongHieuData(res);
        //alert_info("Đã Lấy Dữ Liệu Được" + res); 
}); 
}

function buildHTMLThuongHieuData(res) {
    if(res.total==0){
        $(".listdsthuonghieu").html("Chưa có nội dung");
    }else{  
var data = res.items;
resallthuonghieu=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recordthuonghieu,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-math="' + list.math + '" data-name="'+list.tenth+'" data-vt="' + list.math + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.math+'</td>'+
'<td>' + list.tenth+'</td>'+
'<td class="click_sua_thuong_hieu"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdsthuonghieu").html(html)
}
    buildSlidePage($(".pagenumberthuonghieu"),5,res.page,res.totalpage);
}
}
var thuonghieu_current=0;
$(".pagenumberthuonghieu").on('click','button',function () {

thuonghieu_current=$(this).val();
builddsthuonghieu($(this).val(),recordthuonghieu);

});


$(".listdsthuonghieu").on('click',".click_sua_thuong_hieu",function(){
    //alert_info("ok");
    var math=($(this).parents("tr").attr("data-math"));
    var tenth=($(this).parents("tr").attr("data-name"));
    $(".txt_math").val(math);
    $(".txt_tenth").val(resallthuonghieu[math].tenth);		  
                               });
