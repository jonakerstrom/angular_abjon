'use strict';

/* jasmine specs for controllers go here */
describe('abjon controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });


  beforeEach(module('abjon.services'));


  describe('ListCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('articles').
          respond([{article: 'Test1'}, {article: 'Test2'}]);

      scope = $rootScope.$new();
      ctrl = $controller(ListCtrl, {$scope: scope});
    }));


    it('should create "articles" model with 2 articles fetched from xhr', function() {
      expect(scope.articles).toEqual([]);
      $httpBackend.flush();

      expect(scope.articles).toEqualData(
          [{article: 'Test1'}, {article: 'Test2'}]);
    });


  });


  describe('EditCtrl', function(){
    var scope, $httpBackend, ctrl,
        xArticleData = function() {
          return {
            article: 'Test1',
                latitude: '0.0',
                longitude: '0.0'
          }
        };


    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('articles/1').respond(xArticleData());

      $routeParams.id = '1';
      scope = $rootScope.$new();
      ctrl = $controller(PhoneDetailCtrl, {$scope: scope});
    }));


    it('should fetch article detail', function() {
      expect(scope.article).toEqualData({});
      $httpBackend.flush();

      expect(scope.phone).toEqualData(xPhoneData());
    });
  });
});