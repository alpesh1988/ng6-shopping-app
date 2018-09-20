let smallTimeDuration = 5000,
  mediumTimeDuration = 10000;

module.exports = {
    
  beforeEach: ( browser ) => {
    browser.maximizeWindow();
    products = browser.page.products();
  },

  'Search products with sugar filter': function( browser ) {
    products
      .navigate(browser.globals.urls.appURL);
    browser.pause( smallTimeDuration );
    products
      .waitForElementVisible( 'body', mediumTimeDuration )
      .setValue( '@searchInput', 'sugar' )

    products.expect.element( '@singleProductContainer' ).to.be.present;    
    browser.pause( smallTimeDuration );
  },

  after: function( browser ) {
    browser.end();
  }
}
  