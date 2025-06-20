describe('CalculatorController', function() {
  beforeEach(module('calculatorApp'));

  var $controller, $rootScope;

  beforeEach(inject(function(_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  it('should add two numbers', function() {
    var $scope = $rootScope.$new();
    var controller = $controller('CalculatorController', { $scope: $scope });

    $scope.a = 5;
    $scope.b = 3;
    $scope.add();

    expect($scope.result).toBe(8);
  });

  it('should subtract two numbers', function() {
    var $scope = $rootScope.$new();
    var controller = $controller('CalculatorController', { $scope: $scope });

    $scope.a = 10;
    $scope.b = 4;
    $scope.subtract();

    expect($scope.result).toBe(6);
  });

  it('should multiply two numbers', function() {
    var $scope = $rootScope.$new();
    var controller = $controller('CalculatorController', { $scope: $scope });

    $scope.a = 7;
    $scope.b = 8;
    $scope.multiply();

    expect($scope.result).toBe(56);
  });

  it('should divide two number', function(){
    var $scope = $rootScope.$new();
    var controller = $controller('CalculatorController', { $scope: $scope });

    $scope.a = 20;
    $scope.b = 5;
    $scope.divide();

    expect($scope.result).toBe(4);
  });

  it('should handle division by zero', function(){
    var $scope = $rootScope.$new();
    var controller = $controller('CalculatorController', { $scope: $scope });

    $scope.a = 10;
    $scope.b = 0;
    $scope.divide();

    expect($scope.result).toBe('Error: Cannot divide by 0');
  });

  it('should add null and a number resulting in number', function() {
    var $scope = $rootScope.$new();
    var controller = $controller('CalculatorController', { $scope: $scope });

    $scope.a = null;
    $scope.b = 4;
    $scope.add();
    expect($scope.result).toBe(4);

  });

  it('should divide a number and a null resulting to infinity', function(){
    var $scope = $rootScope.$new();
    var controller = $controller('CalculatorController', { $scope: $scope });

    $scope.a = 2;
    $scope.b = null;
    $scope.divide();

    expect($scope.result).toBe(Infinity);
  });
});
