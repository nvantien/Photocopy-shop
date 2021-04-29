ShowAvatar();
function ShowAvatar()
{
	var username = localStorage.getItem("userBS");
    var password = localStorage.getItem("passBS");
	var avatar=localStorage.getItem("avatarBS");
	if(username==""||username==undefined||username==null){
		location.href='login.html';
	}else{
		$(".myusername").html(username);
		$(".myavatar").attr("src","file/"+avatar);
	}
}

function logout()
{
	localStorage.removeItem("userBS");
    localStorage.removeItem("passBS");
	localStorage.removeItem("avatarBS");
	location.href='login.html';
}
$(".btn_logout").click(function(){
	logout();
});



$(".btn_themtheloai").click(function(){
									 var matl=$(".txt_matl").val();
									 var tentl=$(".txt_tentl").val(); // lay gia tri cua o nhap lieu
									 if(matl==""){
									 	alert_info("Mã Thể Loại Khác Khoảng Trống");
										}else if(tentl==""){
											//alert("Tên Thể Loại Trống");
											alert_info("Tên Thể Loại Khác Khoảng Trống");
											}else{
												var datasend={
													event:"inserttl",
													matl:matl,
													tentl:tentl
												}
												queryDataGET_JSON("php/theloai.php",datasend,function(res){
																									  console.log(res);
																									  if(res["inserttl"]==1){
																										  alert_info("Thêm Thành Công ");
																										  builddstheloai(theloai_current,recordtheloai);
																										  $(".txt_matl").val("");
																										  $(".txt_tentl").val("");
																									  }else{
																										  alert_info("Thêm Không Thành Công");
																									  }
																									  })
											}		
									 });


$(".btn_lamlaitheloai").click(function(){
										$(".txt_matl").val("");
										$(".txt_tentl").val("");
									 });

$(".btn_xoatheloai").click(function(){
	var matl=$(".txt_matl").val();//lay gia i tu ô nhập liệu mã thể loại
	var tentl=$(".txt_tentl").val();
	if(matl==""){
		//alert("Mã thể loại khác khoảng trống");
		alert_info("Mã thể loại khác khoảng trống");
	}
	else
	{
		bootbox.confirm("Bạn có chắc xóa thể loại "+matl+" không?",function(res){
		if(res==true){ //nếu nhấn ok
		var datasend={
				event:"deletetl",
				matl:matl,
				tentl:tentl
			}
			queryDataGET_JSON("php/theloai.php",datasend,function(res){
				console.log(res);
				if(res["deletetl"]==1){
					alert_info("Xóa Thành Công");
					builddstheloai(theloai_current,recordtheloai);
					$(".txt_matl").val("");
					$(".txt_tentl").val("");
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
$(".btn_luutheloai").click(function(){
	var matl=$(".txt_matl").val();
	var tentl=$(".txt_tentl").val();
	if(matl==""){
		alert("Mã thể loại khác khoảng trống");}
	else
		{
		bootbox.confirm("Bạn có chắc sẽ sửa không ?",function(result){
		if(result==true){
			queryDataGET_JSON("php/theloai.php",datasend,function(res){
			console.log(res);
			if(res["updatetl"]==1)
				{
				alert_info("Sửa thành công");
				builddstheloai (theloai_current,recordtheloai);
				$(".txt_matl").val("");
				$(".txt_tentl").val("");
				}
				else
				{
				alert_info("Sửa không thành công");
				}
				});
		}
		else{}});
			var datasend={
				event:"updatetl",
				matl:matl,
				tentl:tentl
			}	
		}
})
														

//Để trong file form_theloai.js

	function builddstheloai(page,record) {
		var dataSend={
			event:"getDSTheLoai",
			page:page,
			record:record
		}
		$(".listdstheloai").html("<img src='images/loading.gif' width='30px' height='30px'/>");
		queryDataGET_JSON("php/theloai.php",dataSend,function (res)
		{
			$(".listdstheloai").html("");
			buildHTMLTheLoaiData(res);
			//alert_info("Đã Lấy Dữ Liệu Được" + res); 
		}); 
	}
 
	function buildHTMLTheLoaiData(res) {
	if(res.total==0){
			$(".listdstheloai").html("Chưa có nội dung");
	}else{  
		var data = res.items;
		resalltheloai=data;
		var stt=1;
		var currentpage=parseInt(res.page);
		stt=printSTT(recordtheloai,currentpage);
		var html='';
		var vt=0;
		for (item in data) {
			var list=data[item];
		
			html=html +
				'<tr data-matl="' + list.matl + '" data-name="'+list.tentl+'" data-vt="' + list.matl + '">' +
				
				'<td>' + stt + '</td>' +
				'<td>' + list.matl+'</td>'+
				'<td>' + list.tentl+'</td>'+
				'<td class="click_sua_the_loai"><i class="fa fa-eye"></i></td>'+
				'</tr>';
			stt++;
			vt++;
			$(".listdstheloai").html(html)
		}
		buildSlidePage($(".pagenumbertheloai"),5,res.page,res.totalpage);
	}
	}
	var theloai_current=0;
	$(".pagenumbertheloai").on('click','button',function () {
		
		theloai_current=$(this).val();
		builddstheloai($(this).val(),recordtheloai);
		
	});


	$(".listdstheloai").on('click',".click_sua_the_loai",function(){
					//alert_info("ok");
					var matl=($(this).parents("tr").attr("data-matl"));
					var tentl=($(this).parents("tr").attr("data-name"));
					$(".txt_matl").val(matl);
					$(".txt_tentl").val(resalltheloai[matl].tentl);		  
																});


	//change avartar
$(".btn_change_avartar").click(function () {
		
	$("#imgSP").val("")
	
	$('.showmodal_changeavartar').modal('show');
	initUploadImage("imgSP","imgSPPreview","onSuccessUploadImageavartar");
});
var urlimage="";
function onSuccessUploadImageavartar(oj){
 console.log(oj);
$("#imgSPPreview").removeClass("is-hidden");
$("#imgSPPreview").attr("src",oj.url);
 console.log(oj.attach);
urlimage=oj.attach;
}
//hàm đổi avatar trên csdl
$(".btn_update_avartar").click(function () {
var username=localStorage.getItem("userBS");

	if(urlimage==""){
		alert_info("Chưa chọn hình");
	}else{
		var datasend = {
					event: "UpdateAvatar",
					
					username:username,
					avatar:urlimage
				};
				console.log(datasend);
				queryDataGET_JSON("php/theloai.php",datasend, function (data) {
								 
					if(data["UpdateAvatar"]==1){
						alert_info("Update thành công !!");
						//$(".avartarimage").attr("src",urllocal+"file/"+urlimage);
						
						localStorage.removeItem("avatarBS"); //xóa avartar localstorge 
						localStorage.setItem("avatarBS",urlimage); //lưu lại avartar localstorge
						ShowAvatar();
						urlimage=""
					}else{
						alert_info("Thất bại !!");
					}
				});
	
	}
});

