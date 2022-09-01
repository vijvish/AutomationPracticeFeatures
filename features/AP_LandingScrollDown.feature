Feature: As a user I want to navigate to Automation Practice Landing Page and verify the Landing Page links and buttons work

  @ap @apLandingPage @apScrollDownToPopularTabNav
  Scenario: As a user I want to scroll down the Landing Page and click on PoPular Tab and view the list of items
    Given I am on the "AutomationPractice" Page
    When I scrolldown to "APPopularTab"
    And I click on "APPopularTab"
    Then I should see "APPopularList"
    And I scrolldown to "APLastPoPularListItem"

  @ap @apLandingPage @apScrollDownToBestSellersTabNav
  Scenario: As a user I want to scroll down the Landing Page and click on BestSellers Tab and view the list of items
    Given I am on the "AutomationPractice" Page
    When I scrolldown to "APBestSellersTab"
    And I click on "APBestSellersTab"
    Then I should see "APBestSellersList"
    And I scrolldown to "APLastBestSellerListItem"

  @apScrollDownVerifyAsExamples
  Scenario Outline: As a user I want to scroll down and verify the various tabs functionality
    Given I am on the "AutomationPractice" Page
    When I scrolldown to "<TabName>"
    And I click on "<TabName>"
    Then I should see "<FirstItemName>"
    And I scrolldown to "<LastItemName>"
    Examples:
      | TabName          | FirstItemName     | LastItemName             |
      | APPopularTab     | APPopularList     | APLastPoPularListItem    |
      | APBestSellersTab | APBestSellersList | APLastBestSellerListItem |

  
  @apNavImgScrollToImgLinksExamples
  Scenario Outline: As a user I want to scroll down the Landing Page Footer section and verify the various links work
    Given I am on the "AutomationPractice" Page
    When I scrolldown to "APScrollToBlock2Img"
    And I click on "<Link>"
    Then I should see "PrestaShopLogo"
    Examples:
      | Link             |
      | APBlock2Img1Link |
      | APBlock2Img2Link |
      | APBlock2Img3Link |
      | APBlock2Img4Link |
      | APBlock2Img5Link |