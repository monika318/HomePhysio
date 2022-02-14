﻿(function () {
    'use strict';

    angular
        .module('startapp')
        .controller('FileUploadController', ['$scope', 'Upload',function FileUploadController($scope, Upload) {
            $scope.PatientImgSubmit = function () {
                console.log('submit');
                if ($scope.form.file.$valid && $scope.file) {
                    $scope.PatientImgUpload($scope.file);
                }
                else {
                    messageBox('error', 'File is not valid.');
                }
            };
            $scope.PatientImgUpload = function (file) {
                Upload.upload({                    
                    url: '/Home/UploadPatientImage',
                    data: { file: file }
                }).then(function (resp) {
                    $scope.file = undefined;
                    $('#previewimage').attr("src","/img/Profile pic/PP.png");
                }, function (resp) {
                    console.log('Error status: ' + resp.status);
                }, function (evt) {
                   
                });
            };
        }]);
})();