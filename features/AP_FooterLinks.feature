Feature: As a user I want to navigate to Automation Practice Landing Page Footer section and verify the Landing Page links and buttons work

  @ap @apNewsletterInput
  Scenario Outline: Customer is displayed with jootza.com landing p
    Given I am on the "AutomationPractice" Page
    When I scrolldown to "APScrollToFooter"
    When I enter "<Email>" in the "FooterBlk1NewsletterTextBox"
    And I click on "FooterNewsletterSubmitButton"
    Then I should see "NewsletterExistsMsg"
    Examples:
      | Email           |
      | johdoe@test.com |

  @ap @apLandingPage @apFaceTwitterYTubeGoogleLinks
  Scenario Outline: As a user I want to check if I can go to facebook from the footer section of Landing Page
    Given I am on the "AutomationPractice" Page
    When I scrolldown to "APScrollToFooter"
    And I click on "<Link>" I should see a new window with "<Header>"
    Examples:
      | Link            | Header               |
      | FooterBlk2Link1 | FooterFacebookHeader |
      | FooterBlk2Link2 | FooterTwitterHeader  |
      | FooterBlk2Link3 | FooterYouTubeHeader  |
      | FooterBlk2Link4 | FooterGoogleHeader   |
      |EmailLink|Emailheader|


  @apScrollToFooterBottomLinks
  Scenario Outline: As a user I want to scroll down the Landing Page Footer section and verify the various links work
    Given I am on the "AutomationPractice" Page
    When I scrolldown to "APScrollToFooter"
    And I click on "<Link>"
    Then I should see "<NewPageHeader>"
    Examples:
      | Link            | NewPageHeader       |
      | FooterBlk3Link1 | APWomenPageHeader   |
      | FooterBlk4Link1 | APSpecialsHeader    |
      | FooterBlk4Link2 | APNewProductsHeader |
      | FooterBlk4Link3 | APBestSellersHeader |
      | FooterBlk4Link4 | APOurStoresHeader   |
      | FooterBlk4Link5 | APContactPageHeader |
      | FooterBlk4Link6 | APTermsCondHeader   |
      | FooterBlk4Link7 | APAboutUsHeader     |
      | FooterBlk4Link8 | APSiteMapHeader     |

 @apScrollToFooterBottomMyAccount
 Scenario Outline: As a user I want to scroll down the Landing Page Footer section and verify the various links work
   Given I am on the "AutomationPractice" Page
   When I scrolldown to "APScrollToFooter"
   And I click on "<Link>"
   Then I should see "<NewPageHeader>"
   Examples:
     | Link            | NewPageHeader       |
     | FooterBlk3Link1 | APWomenPageHeader   |
     | FooterBlk4Link1 | APSpecialsHeader    |
     | FooterBlk4Link2 | APNewProductsHeader |
     | FooterBlk4Link3 | APBestSellersHeader |
     | FooterBlk4Link4 | APOurStoresHeader   |
     | FooterBlk4Link5 | APContactPageHeader |
     | FooterBlk4Link6 | APTermsCondHeader   |
     | FooterBlk4Link7 | APAboutUsHeader     |
     | FooterBlk4Link8 | APSiteMapHeader     |
      
@apVerifyEmailLink
Scenario: As a user I want to scroll down the Landing Page Footer section and verify the Email link works
  Given I am on the "AutomationPractice" Page
  When I scrolldown to "APScrollToEmail"
  Then I verify "APEmailLink"

@apVerifyFooterMyAccountLinks
Scenario Outline: Verify whether the navigation links to various pages contained in My Account footer works
Given I am on the "AutomationPractice" Page
And I scrolldown to "APScrollToFooter"
When I click on "<Link>"
And I should see "APSignInEmailTextBox"
Examples:
    | Link                       | 
    | APMyAccountLink            | 
    | APFooterMyOrdersLink       | 
    | APFooterMyCreditSlipsLink  | 
    | APFooterMyAddressesLink    | 
    | APFooterMyPersonalInfoLink | 
    