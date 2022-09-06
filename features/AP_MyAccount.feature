Feature: As a signed in user I want to verify the functionality of the My Account Page 

@ap @apMyAccountPage
Scenario: As a signed in user when I enter My account Page I should be able to click on all sub-categories
 Given I am on the "APSignIn" Page
 When I enter "johdoe@test.com" in the "APSignInEmailTextBox"
 And I enter "12345678" in the "APSignInPasswordTextBox"
 And I click on "APSignInButton"
 And I should see "APAccountSignInMsg"
 And I click on "APMyAccOrderHistoryLink"
 And I should see "APOrderHistoryPageHeader"
 And I click on "APBackToAccBtn"
 And I click on "APMyAccWishlistsLink"
 And I should see "MyWishlistHeader"
 And I click on "MyWishlistBackToAccBtn"
 And I click on "APMyCreditSlipsLink"
 And I should see "APMyCreditSlipsPAgeHeader"
 And I click on "MyCreditSlipsBackToAccBtn"
 And I click on "APMyAccMyAddressesLink"
 And I should see "MyAddressesPageHeader"
 And I click on "MyAddressesBackToAccBtn"
 And I click on "APMyPersonalInfoLink"
 And I should see "MyPersonalInfoPageHeader"
 And I click on "MyPersonalInfoBackToAccBtn"
 Then I should see "APAccountSignInMsg"
