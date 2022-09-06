Feature: As a user I must be able to cfraete an account using the Create Account Page form

    @ap @apCreateAccount @apCreateAccountEnterEmailID
    Scenario: Verify when an emailID is entered to create an account whether the user is able to navigate to Create Account Page
        Given I am on the "APSignIn" Page
        When I enter "john1doe1@test.com" in the "APCreateFormEmailInputbox"
        And I click on "APCreateAccButton"
        Then I should see "APCreateAccountFormHeader" or "APCreateAccountAccAlreadyExistsErr"


    @ap @apCreateAccount @apCreateAccountFormEntry
    Scenario: Verify when the user enter the various details in the Create account Page and clicks Register he is able to create an account
        Given I am on the "APSignIn" Page
        When I enter "john1Do1@test.com" in the "APCreateFormEmailInputbox"
        And I click on "APCreateAccButton"
        And I wait for the page to load
        And I click on "APCreateACCFormTitleMr"
        And I enter the inputs after clearing for form
            | InputName             | InputValue        |
            | APCreateFormFirstName | John              |
            | APCreateFormLastName  | Doe               |
            | APCreateFormEmail     | john1Do1@test.com |
            | APCreateFormPswd      | 12345678          |
        And I enter the inputs for login
            | InputName           | InputValue |
            | APCreateAccDOBDate  | 10         |
            | APCreateAccDOBMonth | October    |
            | APCreateAccDOBYear  | 2004       |
        And I click on "APCreateAccSignUpNewsLtr"
        And I click on "APCreateAccReceiveSplOffer"
        And I enter the inputs after clearing for form
            | InputName                | InputValue     |
            | APCreateAddressFirstName | John           |
            | APCreateAddressLastName  | Doe            |
            | APCreateAddressCompany   | ABC Corp.      |
            | APCreateAddressLine1     | 120 ABC St,    |
            | APCreateAddressLine2     | East HighRoad, |
            | APCreateAddressCity      | Orlando        |
        And I enter the inputs for login
            | InputName            | InputValue |
            | APCreateAddressState | Florida    |
        And I enter the inputs after clearing for form
            | InputName          | InputValue |
            | APCreateAddressZip | 12345      |
        And I enter the inputs for login
            | InputName              | InputValue    |
            | APCreateAddressCountry | United States |
        And I enter the inputs after clearing for form
            | InputName                  | InputValue                 |
            | APCreateAddressAddTextArea | Account johndoe is created |
            | APCreateAddressPhone       |                            |
            | APCreateAddressMobPhone    | 1111111111                 |
            | APCreateAddressAlias       | Alias1                     |
        And I click on "APCreateAddressRegisterBtn"
        Then I should see "APMyAccountPageWelcome"

    @ap @apCreateAccount @apCreateAccountFormEntryBlanks
    Scenario: Verify when the user enter the various details in the Create account Page and clicks Register he is able to create an account
        Given I am on the "APSignIn" Page
        When I enter "john11Do11@test.com" in the "APCreateFormEmailInputbox"
        And I click on "APCreateAccButton"
        And I wait for the page to load
        And I scrolldown to "APCreateAddressRegisterBtn"
        And I click on "APCreateAddressRegisterBtn"
        Then I should see "APCreateAccPageErrors"