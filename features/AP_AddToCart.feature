Feature: As a user I want to navigate to Automation Practice Landing Page and verify the Landing Page links and buttons work

@ap @apAddItemToCart @APAddDress
Scenario: As a user I want to go to Womens Tops Category and add the item to Cart
Given I am on the "APDressesPage" Page
When I scrolldown to "APDressesPageItemLink"
And I click on "APDressesPageItemLink"
And I wait for the page to load
And I should see "APItemNameHeader"
And I enter "M" in the "APItemChooseSize"
And I click on "APItemChooseColor"
And I scrolldown to "APItemPageAddToCartBtn"
And I click on "APItemPageAddToCartBtn"
And I wait for the page to load
And I click on "APProceedToCheckOutBtn"
And I wait for the page to load
Then I should see "APShoppingCartPageHeader"


@ap @apAddItemToCart @apAddTShirt
Scenario: As a user I want to go to Womens Tops Category and add the item to Cart
Given I am on the "APTShirtsPage" Page
When I scrolldown to "APItem2Link"
And I click on "APItem2Link"
And I wait for the page to load
And I should see "APItemNameHeader"
And I enter "L" in the "APItemChooseSize"
And I click on "APItemChooseColor"
And I scrolldown to "APItemPageAddToCartBtn"
And I click on "APItemPageAddToCartBtn"
And I wait for the page to load
And I click on "APProceedToCheckOutBtn"
And I wait for the page to load
Then I should see "APShoppingCartPageHeader"

@ap @apAddItemToCart @APProceedToCheckOut
Scenario: As a user I want to make changes to the items in the Cart and checkout
Given I am on the "APDressesPage" Page
When I scrolldown to "APDressesPageItemLink"
And I click on "APDressesPageItemLink"
And I should see "APItemNameHeader"
And I enter "M" in the "APItemChooseSize"
And I click on "APItemChooseColor"
And I scrolldown to "APItemPageAddToCartBtn"
And I click on "APItemPageAddToCartBtn"
And I wait for the page to load
And I click on "APProceedToCheckOutBtn"
And I should see "APShoppingCartPageHeader"
And I am on the "APTShirtsPage" Page
And I scrolldown to "APItem2Link"
And I click on "APItem2Link"
And I should see "APItemNameHeader"
And I enter "L" in the "APItemChooseSize"
And I click on "APItemChooseColor"
And I scrolldown to "APItemPageAddToCartBtn"
And I click on "APItemPageAddToCartBtn"
And I click on "APProceedToCheckOutBtn"
And I should see "APShoppingCartPageHeader"
And I wait for the page to load
And I click on "APShoppingCartProceedToChkOut"
And I should see "APCartSignInTabHeader"
And I enter "john1Do1@test.com" in the "APShoppingCartSignInEmail"
And I enter "12345678" in the "APShoppingCartSignInPswd"
And I click on "APShoppingCartSignInBtn"
And I wait for the page to load
And I should see "APShoppingCartAddressHeader"
And I click on "APShoppingCartProceedToChkOut2"
And I wait for the page to load
And I should see "APShoppingCartShippingTabHeader"
And I click on "APShoppingCartAgreeToTemsCheckBox"
And I click on "APShoppingCartProceedToChkOut3"
And I wait for the page to load
And I should see "APShoppingCartPaymentTabHeader"
And I click on "APShoppingCartPayByWireLink"
And I wait for the page to load
And I click on "APShoppimgCartConfirmOrderBtn"
Then I should see "APShoppingCartOrderCompleteMsg"
