'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('abjon', function() {

  it('should redirect index.html to index.html#/', function() {
    browser().navigateTo('../../app/index.html');
    expect(browser().location().url()).toBe('/');
  });


  describe('Article list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/');
    });

    it('should add articles when the user enters something in the new article field', function() {
        
        input('articleText').enter('test1');
        element('.btn-primary').click();
        expect(repeater('.articles li').count()).toBe(1);

        input('articleText').enter('test2');
        element('.btn-primary').click();
        expect(repeater('.articles li').count()).toBe(2);

        input('articleText').enter('test3');
        element('.btn-primary').click();
        expect(repeater('.articles li').count()).toBe(3);

      });


    it('should filter the article list as user types into the search box', function() {
    	  input('articleText').enter('test1');
          element('.btn-primary').click();
          input('articleText').enter('test2');
          element('.btn-primary').click();
    	  input('articleText').enter('test3');
          element('.btn-primary').click();
        	
      expect(repeater('.articles li').count()).toBe(3);

      input('query').enter('test');
      expect(repeater('.articles li').count()).toBe(3);

      input('query').enter('2');
      expect(repeater('.articles li').count()).toBe(1);
    });

    it('should render article specific links', function() {
      input('query').enter('2');
      element('.articles li a').click();
      expect(browser().location().url()).toBe('/edit/2');
    });
  });


  describe('Article detail view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html#/edit/2');
    });


    it('should display test2s page', function() {
      expect(binding('article.article')).toBe('test2');
    });


  });
});
