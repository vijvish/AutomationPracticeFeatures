Feature: As a user I want to navigate to Automation Practice Landing Page and verify the Landing Page links and buttons work

    @ap @apLandingPage @apLandingPageNav
    Scenario: As a user I want to navigate to Automation Practice Landing Page
        Given I am on the "AutomationPractice" Page
        Then I should see "APLogo"

    @ap @apLandingPage @apLandingPageCartLink
    Scenario: As a user I want to check if I can go to Cart from the Landing Page
        Given I am on the "AutomationPractice" Page
        When I click on "APCartLink"
        Then I should see "APCartHeader"

    @ap @apLandingPage @apLandingContactUsLink
    Scenario: As a user I want to check if I can go to ContactUs Page from the Landing Page
        Given I am on the "AutomationPractice" Page
        When I click on "APContactUsLink"
        Then I should see "APContactPageHeader"

    @ap @apLandingPage @apLandingSigninLink
    Scenario: As a user I want to check if I can go to Signin Page from the Landing Page
        Given I am on the "AutomationPractice" Page
        When I click on "APSigninLink"
        Then I should see "APSigninPageHeader"

    @apWomensTabNav
    Scenario: As a user I want to mouse over the Women Tab in Landing Page and Click on the Tshirts option
        Given I am on the "AutomationPractice" Page
        When I click on "APWomenTab"
        Then I should see "APWomenPageHeader"

    @apDressesTabNav
    Scenario: As a user I want to mouse over the Women Tab in Landing Page and Click on the Tshirts option
        Given I am on the "AutomationPractice" Page
        When I click on "APDressesTab"
        Then I should see "APDressesPageHeader"

    @apTShirtsTabNav
    Scenario: As a user I want to mouse over the Women Tab in Landing Page and Click on the Tshirts option
        Given I am on the "AutomationPractice" Page
        When I click on "APTShirtsTab"
        Then I should see "APTShirtsPageHeader"

    @apNavLinksExamples
    Scenario Outline: As a user I want to scroll down and verify the various tabs functionality
        Given I am on the "AutomationPractice" Page
        When I click on "<Link>"
        Then I should see "<PageHeader>"
        Examples:
            | Link            | PageHeader          |
            | APCartLink      | APCartHeader        |
            | APContactUsLink | APContactPageHeader |
            | APSigninLink    | APSigninPageHeader  |
            | APWomenTab      | APWomenPageHeader   |
            | APDressesTab    | APDressesPageHeader |
            | APTShirtsTab    | APTShirtsPageHeader |


    @ap @apLandingPage @apSearchbarVerification1
    Scenario: As a user I want to check if I can type keywords to search in textbar and click search icon  in the Landing Page
        Given I am on the "AutomationPractice" Page
        When I search for "TShirts" in the "APSearchTextbox"
        And I click on "APSearchbutton"
        Then I should see "APProductListing"

    @ap @apLandingPage @apSearchbarVerification2
    Scenario: As a user I want to check if I can type keywords to search in textbar and click search icon  in the Landing Page
        Given I am on the "AutomationPractice" Page
        When I search for "Kurtas" in the "APSearchTextbox"
        And I click on "APSearchbutton"
        Then I should see "APNoSearchResultsFound"


    @apNavImgTopLinksExamples
    Scenario Outline: As a user I want to verify the various image links at top of Landing Pagework
        Given I am on the "AutomationPractice" Page
        And I click on "<Link>"
        Then I should see "PrestaShopLogo"
        Examples:
            | Link              |
            | APBlock1Img1Click |
            | APBlock1Img2Click |
            | APBlock1Img3Click |


    @apWomensTabNav1
    Scenario Outline: As a user I want to mouse over the Women Tab and navigate to all the links under Women tab
        Given I am on the "AutomationPractice" Page
        When I hover on "<TabSelector>" to go to "Title"
        Then I should see "<Header>"
        Examples:
            | TabSelector              | Header                 | Title          |
            | APTopsTabSelector        | APTopsHeader           | Tops           |
            | APTShirtsSelector        | APTShirtsHeader        | TShirts1       |
            | APBlousesSelector        | APBlousesHeader        | Blouses        |
            | APDressesSelector        | APDressesHeader        | Dresses        |
            | APCasualDressesSelector  | APCasualDressesHeader  | CasualDresses  |
            | APEveningDressesSelector | APEveningDressesHeader | EveningDresses |
            | APSummerDressesSelector  | APSummerDressesHeader  | SummerDresses  |
            