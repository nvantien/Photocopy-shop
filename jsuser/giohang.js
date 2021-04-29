//Hiển thị dữ liệu san_pham lấy JSON từ server

function builddsgiohang(page,record) {
   
    var dataSend={
		event:"getDSGioHang",
		page:page,
        record:record
    }
    
    $(".listdsgiohang").html("<img src='images/loading.gif' width='30px' height='30px'/>");
    queryDataGET_JSON("php/giohang.php",dataSend,function (res) {
            $(".listdsgiohang").html("");
            buildHTMLgiohangData(res);
            //alert_info("Đã lấy được dữ liệu " + res);
    });
}

var resallgiohang;
function buildHTMLgiohangData(res) {
    if(res.total==0){
         $(".listdsgiohang").html("Chưa có nội dung");
         
    }else{
    var data = res.items;
    
    resallgiohang=data;
    var stt=1;
    var thanh_tien=0;
    var currentpage=parseInt(res.page);
    stt=printSTT(recordgiohang,currentpage);
    var html='';
    var vt=0;
    for (item in data) {
      var list=data[item];
          html=html +
          '<div class="txtmaspgh is-hidden">' + list.maspgh + '</div>' +
          '<tr class="font_giohang" data-maspgh='+list.maspgh+'>' +
          '<td><button class="btn btn-round btn_xoa_spgh"><b>x</b></button>&nbsp;'+
          '<img width="100px" height="100px" align="center" src="./images/gallery/'+
          list.hinhanhgh+'"/>&#09;<b>' + list.tenspgh + '</b></td>' +
          '<td class="giabangh"><b>' + list.giabangh + '</b></td>'+
          '<td>'+
          '<div class="buttons_added">'+
          '<input class="minus is-form btn_change_soluong" type="button" value="-">'+
          '<input aria-label="quantity" class="input-qty change_soluong" max="99" min="1" name="" type="number" value="' + list.soluonggh + '">'+
          '<input class="plus is-form btn_change_soluong" type="button" value="+">'+
          '</div>'+
          '</td>'+

          '<td class="tongtien"><b>' + list.tongtien + '</b></td>'+
          '</tr>';
      thanh_tien += Number(list.tongtien);
      stt++;
    }
    $(".listdsgiohang").html(html);
    $(".thanh_tien").val(thanh_tien);
    buildSlidePage($(".pagenumbergiohang"),5,res.page,res.totalpage);
    }
}

var giohang_current=0;
$(".pagenumbergiohang").on('click','button',function () {
    
    giohang_current=$(this).val();
    builddsgiohang($(this).val(),recordgiohang);
    
});



//BUTTON tăng giảm số lượng
$('.input-qty').each(function() {
    var $this = $(this);
    var tongtien=$this.attr('tongtien');
    var soluonggh=$this.attr('change_soluong');
    var giabangh=$this.attr('giabangh');
      qty = $this.parent().find('.is-form');
      min = Number($this.attr('min'));
      max = Number($this.attr('max'));
    if (min == 0) {
      var d = 0;
    } else d = min;
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
if (d > min) d += -1;
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1;
      }
      $this.attr('value', d).val(d);
    })
    builddssanpham(sanpham_current,recordsanpham);
  })


$('.listdsgiohang').on('click',".btn_xoa_spgh",function(){
  var maspgh=($(this).parents("tr").attr("data-maspgh"));
  maspgh=resallgiohang[maspgh].maspgh;
  bootbox.confirm("Bạn có chắc xóa sản phẩm có masp trong giỏ hàng: '" + maspgh + "' ?",
  function(result){
    if(result==true)
    {
      var datasend={
          event:"delete",
          maspgh:maspgh
      }
      queryDataGET_JSON("php/giohang.php",datasend,function(res){
          console.log(res);
          if(res["delete"]==1){
              alert_success("Xóa thành công");
              builddsgiohang(giohang_current,recordgiohang);
          }
          else{
              alert_error("Xóa không thành công");}
      });
    }
  });
});