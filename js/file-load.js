// JavaScript Document

function file-upload() {
	// ����ϴ��ļ�DOM����
var oFiles = document.querySelector("#file-upload");


// ʵ����һ�������ݶ���
var formData = new FormData();



// ����ͼƬ�ļ��б����뵽��������
for (var i = 0, file; file = oFiles[i]; i++) {
    // �ļ����ƣ��ļ�����
    formData.append(file.name, file);
}
/**
* �ϴ��ļ�
// ʵ����һ��AJAX����
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    alert("�ϴ��ɹ���");
}
xhr.open("POST", "upload.php", true);

// ���ͱ�����
xhr.send(formData);
*/
}