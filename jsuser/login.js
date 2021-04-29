$(".btn_login").click(function(){
    var username=$(".txt_username").val();
    var password=$(".txt_password").val(); // lay gia tri cua o nhap lieu
    if(username==""){
        alert_info("Usename Khác Khoảng Trống");
       }else if(password==""){
           
           alert_info("Password Khác Khoảng Trống");
           
           }else{
               var datasend={
                   event:"login",
                   username:username,
                   password:password
               }
               queryDataGET_JSON_Login("php/login.php",datasend,function(res){
                                                                     console.log(res);
                                                                     if(res.event==1){
                                                                       localStorage.setItem("userBS",res.items.username);
                                                                       localStorage.setItem("passBS",password);
                                                                       localStorage.setItem("avatarBS",res.items.avatar);
                                                                       location.href='index.html';
                                                                     }else{
                                                                         alert_info("Username hoặc password sai");
                                                                     }
                                                                     })
           }	
    });

