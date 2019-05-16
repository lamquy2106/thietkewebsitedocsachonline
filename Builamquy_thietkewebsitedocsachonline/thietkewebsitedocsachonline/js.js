
	function kiemtra(){
		
		var hoten=document.getElementById("hoten");
		if(hoten.value==""){
			aler("vui lòng nhập lại họ tên");
			hoten.focus();
			return false;
		}
		var nam=document.getElementById("nam");
		if(nam.value==""){
			aler("vui lòng nhập lại năm");
			nam.focus();
			return false;
		}
		if(isNaN(nam.value)==true){
			alert("Năm sinh phải là số");
			nam.value="";
			nam.focus();
			return false;
		}
		var email=document.getElementById("email");
		if(email.value==""){
			aler("vui lòng nhập lại email");
			email.focus();
			return false;
		}
		
		var taikhoan=document.getElementById("taikhoan");
		if(taikhoan.value==""){
			aler("vui lòng nhập lại tài khoản");
			taikhoan.focus();
			return false;
		}
		var matkhau=document.getElementById("matkhau");
		if(matkhau.value==""){
			aler("vui lòng nhập lại mật khẩu");
			matkhau.focus();
			return false;
		}
		var rematkhau=document.getElementById("rematkhau");
		if(rematkhau.value==""){
			aler("vui lòng nhập lại nhập lại mật khau");
			rematkhau.focus();
			return false;
		}
		alter ("Đăng ký thành công! Xin chúc mừng");
		return true;
	}
