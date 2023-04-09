
function uploadFile(file) {

    var type = file.type.split('/')[1];
    var arrType = ['jpg', 'jpeg', 'png'];

    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        uploadResult.src = data;
        document.querySelector('.upload-area').classList.add('is_upload');
    }

    reader.readAsDataURL(file);

}

function processFiles(files) {
    if (!files || !files.length) {
        console.log('false');
        return;
    } else {
        uploadFile(files[0]);
    }
}
document.querySelector('#fileImage') && (
    fileImage.onchange = function (byThis) { var files = byThis.target.files; processFiles(files); }
);

//document.querySelector('#btnUpload') && (btnUpload.addEventListener('click', function () { fileImage.click() }));