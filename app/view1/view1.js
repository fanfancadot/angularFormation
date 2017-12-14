'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
  
  $scope.personne = {
    nom: null,
    prenom : null,
    telephone : null,
    mail : null,
    montant : null,
  };

  $scope.montants=[1000,2000,3000,4000];
  $scope.personnes=[];
  $scope.savePersonne = function (){
    console.log($scope.personne);
  };

  $scope.addCredit = function (personne){
   
    $scope.personne = {
      nom : personne.nom,
      prenom : personne.prenom,
      telephone : personne.telephone,
      mail : personne.mail,
      montant : personne.montant
    };

    if (!$scope.ajoutPersonne.nom.$invalid && !$scope.ajoutPersonne.prenom.$invalid && !$scope.ajoutPersonne.telephone.$invalid
         && !$scope.ajoutPersonne.mail.$invalid ){
          $scope.personnes.push(personne);
          
         }
    
    console.log($scope.ajoutPersonne.nom);

  };

  $scope.viderChamps = function (){
      $scope.personne.nom = '';
      $scope.personne.prenom = '';
      $scope.personne.mail = '';
      $scope.personne.telephone = '';
      $scope.personne.montant = '';
  };
  
}])

.directive('menuCredit',function() {
    return {
        restrict : 'E',
        templateUrl : '../widgets/menu.html'
    }
})

.directive('formulaire',function() {
  return {
      restrict : 'E',
      templateUrl : '../widgets/formulaire.html'
  }
})

.directive('listeappli',function() {
  return {
      restrict : 'E',
      templateUrl : '../widgets/listeappli.html'
  }
})

.filter('makeUppercase', function(){
  return function(item){
    return item.toUpperCase();
  }
});



