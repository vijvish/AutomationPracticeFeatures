Feature: As a user I must be able to sign in using the Sign in tab on the top right of screen

    @apSignIn
    Scenario Outline: I should be able to enter 5 sets of data from the test suite to sign in and test the page functionality.
        Given I am on the "APSignIn" Page
        When I enter "<Email>" in the "APSignInEmailTextBox"
        And I enter "<Password>" in the "APSignInPasswordTextBox"
        And I click on "APSignInButton"
        Then I should see "<Message>"
        Examples:
            | Email             | Password | Message                  |
            | johdoe@test.com   | 12345678 | APAccountSignInMsg       |
            | john.doe@test.com | ghftyrdf | APSignInDoesNotMatchMsg  |
            |                   | 12345678 | APSigninEmailRequiredMsg |
            | janesm@test.com   |          | APSigninPwdRequiredMsg   |
            |                   |          | APSigninEmailRequiredMsg |

    @ap @apSigninPage @apLandingSignOutLink
    Scenario: As a user, I want to SignIn to test the following Sign Out scenario
        Given I am on the "APSignIn" Page
        When I enter "johdoe@test.com" in the "APSignInEmailTextBox"
        And I enter "12345678" in the "APSignInPasswordTextBox"
        And I click on "APSignInButton"
        Then I should see "APAccountSignInMsg"
        And I click on "APSignOutLink"
        Then I should see "APSigninLink"

    @ap @apSigninPage @apUserNameLink
    Scenario: As a user, I want to SignIn to test the following Sign Out scenario
        Given I am on the "APSignIn" Page
        When I enter "johdoe@test.com" in the "APSignInEmailTextBox"
        And I enter "12345678" in the "APSignInPasswordTextBox"
        And I click on "APSignInButton"
        And I should see "APAccountSignInMsg"
        And I click on "UserNameAccountLink"
        Then I should see "APAccountSignInMsg"

    @ap @apfooter @apMyAccountLinksInFooter
    Scenario Outline: Verify whether the navigation links to various pages contained in My Account footer works
        Given I am on the "APSignIn" Page
        When I enter "johdoe@test.com" in the "APSignInEmailTextBox"
        And I enter "12345678" in the "APSignInPasswordTextBox"
        And I click on "APSignInButton"
        And I should see "APAccountSignInMsg"
        And I am on the "AutomationPractice" Page
        And I scrolldown to "APScrollToFooter"
        And I click on "<Link>"
        And I should see "<NewPageHeader>"
        Examples:
            | Link                       | NewPageHeader              |
            | APMyAccountLink            | APAccountSignInMsg         |
            | APFooterMyOrdersLink       | APOrderHistoryPageHeader   |
            | APFooterMyCreditSlipsLink  | APMyCreditSlipsPageHeader  |
            | APFooterMyAddressesLink    | APMyAddressesPageHeader    |
            | APFooterMyPersonalInfoLink | APMyPersonalInfoPageHeader |
            | APFooterSignOutLink        | APSignOutPageHeader        |
