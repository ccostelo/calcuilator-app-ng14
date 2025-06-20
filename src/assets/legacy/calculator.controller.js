angular
  .module("calculatorApp")
  .controller("CalculatorController", function ($scope) {
    $scope.a = null;
    $scope.b = null;
    $scope.result = "";

    $scope.resetForm = function () {
      setTimeout(function () {
        $scope.$apply(function () {
          $scope.a = null;
          $scope.b = null;
        });
      }, 500);
    };

    $scope.add = function () {
      $scope.result = $scope.a + $scope.b;
      $scope.resetForm();
    };

    $scope.subtract = function () {
      $scope.result = $scope.a - $scope.b;
      $scope.resetForm();
    };

    $scope.multiply = function () {
      $scope.result = $scope.a * $scope.b;
      $scope.resetForm();
    };

    $scope.divide = function () {
      if ($scope.b === 0) {
        $scope.result = "Error: Cannot divide by 0";
      } else {
        $scope.result = $scope.a / $scope.b;
      }
      $scope.resetForm();
    };
  });
