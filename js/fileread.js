if(typeof FileReader == "undified") {
            alert("您老的浏览器不行了！");
        }

        function showDataByURL() {
            var resultFile = document.getElementById("fileDemo").files[0];
            if (resultFile) {
                var reader = new FileReader();
                reader.readAsDataURL(resultFile);
                reader.onload = function (e) {
                    var urlData = this.result;
                    document.getElementById("result").innerHTML += "<img src='" + urlData + "' alt='" + resultFile.name + "' />";
                }; 
            }
        } 

        function showDataByBinaryString() {
            var resultFile = document.getElementById("fileDemo").files[0];
            if (resultFile) {
                var reader = new FileReader();
                //异步方式，不会影响主线程
                reader.readAsBinaryString(resultFile);
                reader.onload = function(e) {
                    var urlData = this.result;
                    document.getElementById("result").innerHTML += urlData;
                };
            }
        }

        function showDataByText() {
            var resultFile = document.getElementById("fileDemo").files[0];
            if (resultFile) {
                var reader = new FileReader();
                reader.readAsText(resultFile,'gb2312');
                reader.onload = function (e) {
                    var urlData = this.result;
                    document.getElementById("result").innerHTML += urlData;
                };
            }
        }