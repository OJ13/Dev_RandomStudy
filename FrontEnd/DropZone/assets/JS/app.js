'use strict'

var $btnDropZone = document.getElementById('btnEnviarDoc');
var $files = document.getElementById('file');

var url = "http://localhost:52611/api/dropzone";

$btnDropZone.addEventListener('click', function(){
    console.log($files);
});

console.log(msg);