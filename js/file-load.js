// JavaScript Document

function file-upload() {
	// 获得上传文件DOM对象
var oFiles = document.querySelector("#file-upload");


// 实例化一个表单数据对象
var formData = new FormData();



// 遍历图片文件列表，插入到表单数据中
for (var i = 0, file; file = oFiles[i]; i++) {
    // 文件名称，文件对象
    formData.append(file.name, file);
}
/**
* 上传文件
// 实例化一个AJAX对象
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    alert("上传成功！");
}
xhr.open("POST", "upload.php", true);

// 发送表单数据
xhr.send(formData);
*/
}