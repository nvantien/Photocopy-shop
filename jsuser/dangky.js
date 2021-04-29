$(".btn-dangky").click(function(){
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