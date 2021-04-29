$(".btn_themsanpham").click(function(){
    var masp=$(".txt_masp").val();
    var tensp=$(".txt_tensp").val();
    var maloai=$(".txt_maloai").val();
    var hinhanhsp=$(".txt_hinhanhsp").val();
    var model=$(".txt_model").val(); 
    var mausac=$(".txt_mausac").val();
    var giabansp=$(".txt_giabansp").val();
    var khuyenmai=$(".txt_khuyenmai").val();
    if(masp==""){
        alert_info("Mã Sản Phẩm Khác Khoảng Trống");
    }else if(tensp=="")
        {
            alert_info("Tên Sản Phẩm Khác Khoảng Trống");  
           }
           else if(maloai=="")
            {
            alert_info("Mã Thể Loại Khác Khoảng Trống");  
           }
           else if(hinhanhsp=="")
            {
            alert_info("Mã Thể Loại Khác Khoảng Trống");  
           }
           else if(model=="")
            {
            alert_info("Model Sản Phẩm Khác Khoảng Trống");  
           }
           else if(mausac=="")
        {
            alert_info("Màu Sắc Sản Phẩm Khác Khoảng Trống");  
           }
           else if(giabansp==""|| isNumber(giabansp)==false)
            {
            alert_info("Giá Sản Phẩm không hợp lý");  
           }else{
               var datasend={
                   event:"insertsp",
                   masp:masp,
                   tensp:tensp,
                   maloai:maloai,
                   hinhanhsp:hinhanhsp,
                   model:model,
                   mausac:mausac,
                   giabansp:giabansp,
                   khuyenmai:khuyenmai
               }
               queryDataGET_JSON("php/sanpham.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res["insertsp"]==1){
                                                                         alert_info("Thêm Thành Công");
                                                                         builddssanpham(sanpham_current,recordsanpham);
                                                                         $(".txt_masp").val("");
                                                                         $(".txt_tensp").val("");
                                                                         $(".txt_maloai").val("");
                                                                         $(".txt_hinhanhsp").val("");
                                                                         $(".txt_model").val("");
                                                                         $(".txt_mausac").val("");
                                                                         $(".txt_giabansp").val("");
                                                                         $(".txt_khuyenmai").val("")
                                                                     }else{
                                                                         alert_info("Thêm Không Thành Công");
                                                                     }
                                                                     })
           }		
    });


$(".btn_lamlaisanpham").click(function(){
    $(".txt_masp").val("");
    $(".txt_tensp").val("");
    $(".txt_maloai").val("");
    $(".txt_hinhanhsp").val("");
    $(".txt_model").val("");
    $(".txt_mausac").val("");
    $(".txt_giabansp").val("");
    $(".txt_khuyenmai").val("")
    });

$(".btn_xoasanpham").click(function(){
    var masp=$(".txt_masp").val();
    var tensp=$(".txt_tensp").val();
    var maloai=$(".txt_maloai").val();
    var hinhanhsp=$(".txt_hinhanhsp").val();
    var model=$(".txt_model").val(); 
    var mausac=$(".txt_mausac").val();
    var giabansp=$(".txt_giabansp").val();
    var khuyenmai=$(".txt_khuyenmai").val();
    if(masp==""){
       
        alert_info("Mã Sản Phẩm khác khoảng trống");
}
    else
    {
        bootbox.confirm("Bạn có chắc xóa sản phẩm "+masp+" không?",function(res){
        if(res==true){ //nếu nhấn ok
            var datasend={
                event:"deletesp",
                masp:masp,
                tensp:tensp,
                maloai:maloai,
                hinhanhsp:hinhanhsp,
                model:model,
                mausac:mausac,
                giabansp:giabansp,
                khuyenmai:khuyenmai
        }
        queryDataGET_JSON("php/sanpham.php",datasend,function(res){
        console.log(res);
        if(res["deletesp"]==1){
            alert_info("Xóa Thành Công");
            builddssanpham(sanpham_current,recordsanpham);
            $(".txt_masp").val("");
            $(".txt_tensp").val("");
            $(".txt_maloai").val("");
            $(".txt_hinhanhsp").val("");
            $(".txt_model").val("");
            $(".txt_mausac").val("");
            $(".txt_giabansp").val("");
            $(".txt_khuyenmai").val("")
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
$(".btn_luusanpham").click(function(){
    var masp=$(".txt_masp").val();
    var tensp=$(".txt_tensp").val();
    var maloai=$(".txt_maloai").val();
    var hinhanhsp=$(".txt_hinhanhsp").val();
    var model=$(".txt_model").val(); 
    var mausac=$(".txt_mausac").val();
    var giabansp=$(".txt_giabansp").val();
    var khuyenmai=$(".txt_khuyenmai").val();
    if(masp==""){
        alert("Mã sản phẩm khác khoảng trống");}
    else
    {   
        bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
            if(result==true){
                queryDataGET_JSON("php/sanpham.php",datasend,function(res){
                console.log(res);
                if(res["updatesp"]==1)
                    {
                    alert_info("Sửa thành công");
                    builddssanpham(sanpham_current,recordsanpham);
                    $(".txt_masp").val("");
                    $(".txt_tensp").val("");
                    $(".txt_maloai").val("");
                    $(".txt_hinhanhsp").val("");
                    $(".txt_model").val("");
                    $(".txt_mausac").val("");
                    $(".txt_giabansp").val("");
                    $(".txt_khuyenmai").val("")
                    }
                    else
                    {
                    alert_info("Sửa không thành công");
                    }
                    });
            }
            else{}});
                var datasend={
                    event:"updatesp",
                   masp:masp,
                   tensp:tensp,
                   maloai:maloai,
                   hinhanhsp:hinhanhsp,
                   model:model,
                   mausac:mausac,
                   giabansp:giabansp,
                   khuyenmai:khuyenmai
                }	
            }
    })
                       


function builddssanpham(page,record) {
    var dataSend={
    event:"getDSSanPham",
    page:page,
    record:record
    }
$(".listdssanpham").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/sanpham.php",dataSend,function (res)
    {
        $(".listdssanpham").html("");
        buildHTMLsanphamData(res);
       
}); 
}

function buildHTMLsanphamData(res) {
    if(res.total==0){
        $(".listdssanpham").html("Chưa có nội dung");
    }else{  
var data = res.items;
resallsanpham=data;
var stt=1;
var currentpage=parseInt(res.page);
stt=printSTT(recordsanpham,currentpage);
var html='';
var vt=0;
for (item in data) {
var list=data[item];

html=html +
'<tr data-masp="' + list.masp + '" data-name="'+list.tensp + '" data-matl="'+list.maloai + '" data-hinhanhsp="'+list.hinhanhsp + '" data-model="'+list.model+'" data-mausac="'+list.mausac+'" data-giabansp="'+list.giabansp+'" data-khuyenmai="'+list.khuyenmai + '"  data-vt="' + list.masp + '">' +

'<td>' + stt + '</td>' +
'<td>' + list.masp+'</td>'+
'<td>' + list.tensp+'</td>'+
'<td>' + list.maloai+'</td>'+
'<td><img class="photocopy" align="center" src="./images/gallery/'+list.hinhanhsp+'"/></td>'+ 
'<td>' + list.model+'</td>'+
'<td>' + list.mausac+'</td>'+
'<td>' + list.giabansp+'</td>'+
'<td>' + list.khuyenmai+'</td>'+
'<td class="click_sua_san_pham"><i class="fa fa-eye"></i></td>'+
'</tr>';
stt++;
vt++;
$(".listdssanpham").html(html)
}
    buildSlidePage($(".pagenumbersanpham"),5,res.page,res.totalpage);
}
}
var sanpham_current=0;

$(".pagenumbersanpham").on('click','button',function () {

sanpham_current=$(this).val();
builddssanpham($(this).val(),recordsanpham);

});


$(".listdssanpham").on('click',".click_sua_san_pham",function(){
    //alert_info("ok");
    var masp=($(this).parents("tr").attr("data-masp"));
    var tensp=($(this).parents("tr").attr("data-name"));
    var maloai=($(this).parents("tr").attr("data-matl"));
    var hinhanhsp=($(this).parents("tr").attr("data-hinhanhsp"));
    var model=($(this).parents("tr").attr("data-model"));
    var mausac=($(this).parents("tr").attr("data-mausac"));
    var giabansp=($(this).parents("tr").attr("data-giabansp"));
    var khuyenmai=($(this).parents("tr").attr("data-khuyenmai"));
    $(".txt_masp").val(masp);
    $(".txt_tensp").val(resallsanpham[masp].tensp);
    $(".txt_maloai").val(resallsanpham[masp].maloai);
    $(".txt_hinhanhsp").val(resallsanpham[masp].hinhanhsp);
    $(".txt_model").val(resallsanpham[masp].model);
    $(".txt_mausac").val(resallsanpham[masp].mausac);
    $(".txt_giabansp").val(resallsanpham[masp].giabansp);
    $(".txt_khuyenmai").val(resallsanpham[masp].khuyenmai);

});



