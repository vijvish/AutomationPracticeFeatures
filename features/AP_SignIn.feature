Feature: As a user I must be able to sign in using the Sign in tab on the top right of screen

    @apSignIn
    Scenario Outline: Given I am on the sign in page, I should be able to enter a valid email id to sign  in
        Given I am on the "APSignIn" Page
        When I enter "<Email>" in the "APSignInEmailTextBox"
        And I enter "<Password>" in the "APSignInPasswordTextBox"
        And I click on "APSignInButton"
        Then I should see "<Message>"
        Examples:
            | Email             | Password | Message                  |
            | johdoe@test.com   | 12345678 | APSignInSuccessMsg       |
            | john.doe@test.com | ghftyrdf | APSignInDoesNotMatchMsg  |
            |                   | 12345678 | APSigninEmailRequiredMsg |
            | janesm@test.com   |          | APSigninPwdRequiredMsg   |
            |                   |          | APSigninEmailRequiredMsg |

