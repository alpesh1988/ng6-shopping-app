let extraSmallTimeDuration = 3000,
  smallTimeDuration = 5000,
  mediumTimeDuration = 10000,
  wishlistName = 'Test Wishlist';

module.exports = {
    
  beforeEach: ( browser ) => {
    browser.maximizeWindow();
    products = browser.page.products();
  },

  'Search products with sugar filter and add a product to wishlist': function( browser ) {
    products
      .navigate(browser.globals.urls.appURL);
    browser.pause( smallTimeDuration );
    products
      .waitForElementVisible( 'body', mediumTimeDuration )
      .setValue( '@searchInput', 'sugar' );

    products.expect.element( '@singleProductContainer' ).to.be.present;
    browser.pause( smallTimeDuration );
    
    // click wishlist button
    products.click( '@singleProductwishlistBtn' );
    browser.pause( smallTimeDuration );

    products.setValue( '@createWishlistInputBox', wishlistName );
    browser.pause( extraSmallTimeDuration );
    products.click( '@createWishlistButton' );
    browser.pause( extraSmallTimeDuration );
    
    products.click( 'input[ng-reflect-name="' + wishlistName + '"]');
    browser.pause( extraSmallTimeDuration );
    products.click( '@addToWishlistBtn' );
    products.expect.element( '@addedProductAlert' ).to.be.present;
    browser.pause( extraSmallTimeDuration );
  },

  after: function( browser ) {
    browser.end();
  }
}
  