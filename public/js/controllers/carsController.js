'use strict';
var app = angular.module('carsApp',[]);

app.controller('carsController', function carsController($scope){
  $scope.carsList =
  [
    {
      carName:'BMW',
      year: '2015',
      price: '35,000',
      description: 'Brand new BMW 328i series.',
      location: 'Santa Monica',
      image: 'images/15-328i.jpg'
    },
    {
      carName:'Mercedes Benz',
      year: '2015',
      price: '35,000',
      description: 'Brand new Mercedes Benz c350.',
      location: 'Downtown Los Angeles',
      image: 'images/15-benz-c-class.png'
    },
    {
      carName:'Audi',
      year: '2015',
      price: '35,000',
      description: 'Brand new Audi A5 sport coupe.',
      location: 'Century City',
      image: 'images/15-a4.png'
    },
    {
      carName:'Mini Cooper',
      year: '2015',
      price: '30,000',
      description: 'Brand new Mini Countryman 4 wheel drive 4 door sedan.',
      location: 'Irvine',
      image: 'images/15-mini-countryman.png'
    }
  ];
});