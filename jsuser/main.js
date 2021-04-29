var recordtheloai = 4;
var recordthuonghieu=4;
var recordkhachhang=2;
var recordnhanvien=2;
var recordsanpham=2;
var recorddonhang=2;
var recordhoadon=2;
var recordspth=2;
var recordcthd=2;
var recordctdh=2;
var recordhienthisp=8;
var recordgiohang=8;
$(".menu_theloai").click(function(){
	console.log("click menu theloai");
	//gọi hàm swapmain
	swapmain("form_thongtintheloai");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i> Danh mục</a></li>'+
             '<li class="active">Thể loại</li>';
	$(".titlebreadcrumb").html(html);
	builddstheloai(0, recordtheloai)		 
});

$(".hienthisp").click(function(){
	console.log("click hien thi san pham");
	builddshienthisp(0, recordhienthisp);
	 
});

$(".form_giohang").click(function(){
	console.log("click hien thi san pham");
	builddsgiohang(0,recordgiohang)		 
});

$(".menu_thuonghieu").click(function(){
	console.log("click menu thuong hieu");
	//gọi hàm swapmain
	swapmain("form_thuonghieu");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i> Danh mục</a></li>'+
             '<li class="active">Thương Hiệu</li>';
	$(".titlebreadcrumb").html(html);
	builddsthuonghieu(0, recordthuonghieu)		 
});

$(".menu_sanpham").click(function(){
	console.log("click menu san pham");
	//gọi hàm swapmain
	swapmain("form_sanpham");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i> Danh mục</a></li>'+
             '<li class="active">Sản Phẩm</li>';
	$(".titlebreadcrumb").html(html);	
	builddssanpham(0, recordsanpham)	 
});

$(".menu_nhanvien").click(function(){
	console.log("click menu nhan vien");
	//gọi hàm swapmain
	swapmain("form_nhanvien");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i> Danh mục</a></li>'+
             '<li class="active">Nhân Viên</li>';
	$(".titlebreadcrumb").html(html);	
	builddsnhanvien(0, recordnhanvien)	 
});

$(".menu_khachhang").click(function(){
	console.log("click menu khach hang");
	//gọi hàm swapmain
	swapmain("form_khachhang");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i> Danh mục</a></li>'+
             '<li class="active">Khách Hàng</li>';
	$(".titlebreadcrumb").html(html);
	builddskhachhang(0, recordkhachhang)		 
});

$(".menu_dondathang").click(function(){
	console.log("click menu don dat hang");
	//gọi hàm swapmain
	swapmain("form_dondathang");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i>Bán Hàng</a></li>'+
             '<li class="active">Đơn Đặt Hàng</li>';
	$(".titlebreadcrumb").html(html);
	builddsdonhang(0, recorddonhang)			 
});

$(".menu_hoadon").click(function(){
	console.log("click menu hoa don");
	//gọi hàm swapmain
	swapmain("form_hoadon");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i>Bán Hàng</a></li>'+
             '<li class="active">Hóa Đơn</li>';
	$(".titlebreadcrumb").html(html);
	builddshoadon(0, recordhoadon)		 
});

$(".menu_sanpham_thuonghieu").click(function(){
	console.log("click menu san pham thuong hieu");
	//gọi hàm swapmain
	swapmain("form_sanpham_thuonghieu");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i>Danh Mục</a></li>'+
             '<li class="active">Sản Phẩm & Thương Hiệu</li>';
	$(".titlebreadcrumb").html(html);
	builddsspth(0, recordspth)
	 
});

$(".menu_chitiethoadon").click(function(){
	console.log("click chi tiet hoa don");
	//gọi hàm swapmain
	swapmain("form_chitiethoadon");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i>Bán Hàng</a></li>'+
             '<li class="active">Chi Tiết Hóa Đơn</li>';
	$(".titlebreadcrumb").html(html);
	builddscthd(0, recordcthd)
	 
});

$(".menu_chitietdonhang").click(function(){
	console.log("click chi tiet don hang");
	//gọi hàm swapmain
	swapmain("form_chitietdonhang");
	var html='<li><a href="#">'+
			 '<i class="fa fa-home">'+
			 '</i>Bán Hàng</a></li>'+
             '<li class="active">Chi Tiết Đơn Hàng</li>';
	$(".titlebreadcrumb").html(html);
	builddsctdh(0, recordctdh)
	 
});
$(".menu_taikhoan").click(function(){
	console.log("click chi tiet don hang");
	//gọi hàm swapmain
	swapmain("form_taikhoan");
});

function swapmain(main){
	$(".form_dondathang").addClass("is-hidden");
	$(".form_hoadon").addClass("is-hidden");
	$(".form_thongtintheloai").addClass("is-hidden");
	$(".form_thuonghieu").addClass("is-hidden");
	$(".form_sanpham").addClass("is-hidden");
	$(".form_nhanvien").addClass("is-hidden");
	$(".form_khachhang").addClass("is-hidden");
	$(".form_sanpham_thuonghieu").addClass("is-hidden");
	$(".form_chitiethoadon").addClass("is-hidden");
	$(".form_chitietdonhang").addClass("is-hidden");
	$("."+main).removeClass("is-hidden");
}
swapmain("form_ddh");

// ham nay duwoc goi khi mot thao tac that bai
function alert_error(mes) {
	bootbox.alert({
		size: "small",
		title: "<span style='color:red'>Thất Bại</span>",
		message: mes,
		callback: function () { /* your callback code */ }
	})
}

function alert_success(mes) {
	bootbox.alert({
		size: "small",
		title: "<span style='color:red'>Thành Công</span>",
		message: mes,
		callback: function () { /* your callback code */ }
	})
}

function alert_info(mes) {
	bootbox.alert({
		size: "small",
		title: "<span style='color:red'>Thông Báo</span>",
		message: mes,
		callback: function () { /* your callback code */ }
	})
}

function isNumber(n) {
	return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}



function queryDataPOST_TEXT(url, dataSend, callback) {

	$.ajax({
		type: 'POST',
		url: url,
		data: dataSend,
		async: true,
		dataType: 'text',
		success: callback
	});
}


function queryDataGET_TEXT(url, dataSend, callback) {

	$.ajax({
		type: 'GET',
		url: url,
		data: dataSend,
		async: true,
		dataType: 'text',
		success: callback
	});
}

// goi ham
guidata();

function guidata() {
	var dataSend = {
		event: "guidata"
	}
	queryDataGET_TEXT("php/api_process.php", dataSend, function (res) {
		//alert_info(res);
	});
	queryDataPOST_TEXT("php/api_process_post.php", dataSend, function (res) {
		//alert_info(res);
	});
}

function queryDataGET_JSON(url, dataSend, callback) {

	$.ajax({
		type: 'GET',
		url: url,
		data: dataSend,
		async: true,
		dataType: 'JSON',
		success: callback
	});
}

function queryDataGET_JSON_Login(url, dataSend, callback) {

	$.ajax({
		type: 'POST',
		url: url,
		data: dataSend,
		async: true,
		dataType: 'JSON',
		success: callback
	});
}

function printSTT(record, pageCurr) {
	if ((pageCurr + 1) == 1) {
		return 1;
	} else {
		return record * (pageCurr + 1) - (record - 1);
	}
}

//Bỏ vào main.js
function buildSlidePage(obj, codan, pageActive, totalPage) {
	var html = "";
	pageActive = parseInt(pageActive);
	for (i = 1; i <= codan; i++) {
		if (pageActive - i < 0) break;
		html = '<button type="button" class="btn btn-outline btn-default" value="' + (pageActive - i) + '">' + (pageActive - i + 1) + '</button>' + html;
	}
	if (pageActive > codan) {
		html = '<button type="button" class="btn btn-outline btn-default" value="' + (pageActive - i) + '">...</button>' + html;
	}
	html += '<button type="button" class="btn btn-outline btn-default" style="background-color: #5cb85c" value="' + pageActive + '">' + (pageActive + 1) + '</button>';
	for (i = 1; i <= codan; i++) {
		if (pageActive + i >= totalPage) break;
		html = html + '<button  type="button" class="btn btn-outline btn-default" value="' + (pageActive + i) + '">' + (pageActive + i + 1) + '</button>';
	}
	if (totalPage - pageActive > codan + 1) {
		html = html + '<button type="button" value="' + (pageActive + i) + '" class="btn btn-outline btn-default">...</button>';
	}
	obj.html(html);
}


function initUploadImage(idInput,idpreview,nameFuncion){
	'use strict';
	// Initialise resize library
	var resize = new window.resize();
	resize.init();
	// console.log("no");
	// Upload photo
	document.querySelector('#'+idInput).addEventListener('change', function (event) {
		event.preventDefault();

		// var input=$("#"+idInput);
		$("#"+idInput).change(function ()
		{
			// $("#"+idpreview).show();
			if (typeof(FileReader)!="undefined"){
			
				var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.ico|.jpg|.jpeg|.gif|.png)$/;
			
				$($(this)[0].files).each(function () {
					var getfile = $(this);
					if (regex.test(getfile[0].name.toLowerCase())) {
						var reader = new FileReader();
						reader.onload = function (e) {
							$("#imgPreviewStatus").attr("src",e.target.result);
						}
						reader.readAsDataURL(getfile[0]);
						//document.getElementById("savepath").value=getfile[0].name;
						//console.log(getfile[0]);
					}
					else {
						alert(getfile[0].name + " Không phải là file .");
						return false;
					}
				});
			}
			else {
				alert("Browser does not supportFileReader.");
			}
		});
		var files = event.target.files;
		var countFile=files.length;
		for (var i in files) {
			if (typeof files[i] !== 'object') return false;

			(function () {

				var initialSize = files[i].size;

				resize.photo(files[i], 1200, 'file', function (resizedFile) {

					var resizedSize = resizedFile.size;

					upload(resizedFile, function(res){
						console.log(res);
						var s=nameFuncion+"("+res+")";
						eval(s);
					});

					// This is not used in the demo, but an example which returns a data URL so yan can show the user a thumbnail before uploading th image.
					resize.photo(resizedFile, 600, 'dataURL', function (thumbnail) {
						//console.log('Display the thumbnail to the user: ', thumbnail);
					});

				});

			}());

		}

	});
};
var upload = function (photo, callback) {
	
	var formData = new FormData();
    formData.append('photo', photo);
    
    $.ajax({
        url: './spuploadimagestatus/process.php',
        type : 'POST',
        data : formData,
        async: true,
        xhrFields: {
            withCredentials: true
        },
        processData: false,  // tell jQuery not to process the data
        contentType: false,  // tell jQuery not to set contentType
        success : callback
    });
};

