
angular.module('mad-libs', [])
    .controller('LibsController', ['$scope', function($scope) {
        //setting up default gender
        $scope.subject = "he";
        $scope.possessive = "him";
        $scope.poss = "his";
        $scope.male = true;
        //change gender to male
        $scope.changeToMale = function(){
            $scope.female= false;
            $scope.subject = "he";
            $scope.possessive = "his";
            $scope.poss = "his";
        };
        //changing gender to female
        $scope.changeToFemale = function(){
            $scope.male = false;
            $scope.subject = "she";
            $scope.possessive = "her";
            $scope.poss = "her";
        };

    }]);