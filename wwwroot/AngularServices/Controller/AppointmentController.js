﻿////const { get } = require("jquery");

(function () {
    'use strict';

    angular
        .module('startapp')
        .controller('AppointmentController', ['$scope', '$http', function AppointmentController($scope, $http) {
            $scope.url = `${document.location.origin}/Appointment/GetPhysiotherapistList`;

            //$scope.physiotherapits = [];
            $scope.CallHttpPost = function () {
                $http({ method: 'post', url: $scope.url, params: { categoryId: $scope.searchType } }).
                    then(function (response) {
                        $scope.physiotherapits = response.data.a;
                    }, function (response) {

                    });
            };

            //$scope.url1 = `${document.location.origin}/Appointment/GetPhysiotherapistList`;
            $scope.timeSlot = [];
            $scope.AssignPhysiotherapist = function (id) {
                $http({ method: 'post', url: `${document.location.origin}/Appointment/GetPhysiotherapistTimeSlot`, params: { physiotherapistId: id } }).
                    then(function (response) {
                        $scope.timeSlot = response.data.b;
                    }, function (response) {

                    });
            };

            
            $scope.AppointmentBook = function (id) {
                $http({ method: 'post', url: `${document.location.origin}/Appointment/GetAppointmentInfo`, params: { physioTimeSlotsId: id } }).
                    then(function (response) { //GetAppointmentInfo found successfully
                        console.log(response);
                        if (response.data.result)
                           
                            alert(`Appointment Pending.${response.data.msg}`);
                        else
                            alert(response.data.msg);

                    }, function (response) {
                            alert('Server down.');

                    });
            };

            $scope.url = `${document.location.origin}/Home/AppointmentList`;

            $scope.appoint = [];
            $scope.AppointmentList = function (id) {
                $http({ method: 'post', url: $scope.url, params: { patientId: id } }).
                    then(function (response) {
                        $scope.appoint = response.data.ad;
                    }, function (response) {

                    });
            };

            $scope.products = 'aa';
        }]);

})();