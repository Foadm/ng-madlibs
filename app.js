
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
        $scope.submit = function(){
            $scope.validation=false;
            if($scope.madLibsForm.$valid){
                $scope.validation=true;
                $scope.resetForm = false;
                $scope.displayLibs = true;
            }
        };
        $scope.reset = function(){
            $scope.displayLibs = false;
            $scope.resetForm = true;
            $scope.maleName = null;
            $scope.dirtyTask = null;
            $scope.obnoxiousCelebrity = null;
            $scope.jobTitle = null;
            $scope.tediousTask = null;
            $scope.uselessSkill = null;
            $scope.uadjective = null;
            $scope.celebrity = null;
            $scope.HugeNumber = null;
            $scope.adjective = null;
            //$scope.madLibsForm.$setPristine();
        };
    }]);