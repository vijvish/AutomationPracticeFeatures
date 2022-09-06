Feature: As a user I must be able to sign in using the Sign in tab on the top right of screen

    @apContactUsLinkVerify
    Scenario Outline: As a user I want to navigate to Contact Us Page by clicking the Contact Us tab at the top right of all Pages
        Given I am on the "AutomationPractice" Page
        When I click on "APContactUsLink"
        Then I should see "APContactUsHeader"
        And I enter "<SubjectHeading>" in the "APContactUsSubjHeadDropBox"
        And I enter "<Email>" in the "APContactUsEmail"
        And I enter "<OrderReference>" in the "APContactUsOrderReference"
        And I enter "<MessageText>" in the "APContactUsMessage"
        And I click on "APContactUsSendBtn"
        And I should see "<ResponseMsg>"
        Examples:
            | SubjectHeading   | Email          | OrderReference | MessageText | ResponseMsg                 |
            | Customer Service | hyuji@test.com | 123456789      | Hello there | APContactUsResponseSuccess  |
            | Customer Service | hyuji@test.com | 123456g        |             | APContactMsgBlnkErrMsg      |
            | Customer Service | fgsfgth        |                | sdfgfeh     | APContactInvalidEmailErrMsg |
            | Webmaster        | hyuji@test.com | 12345678       | hello       | APContactUsResponseSuccess  |



    @apContactUsLinkWithAttachment
    Scenario: As a user I want to navigate to Contact Us Page by clicking the Contact Us tab at the top right of all Pages
        Given I am on the "APContactUsPage" Page
        When I enter "Customer Service" in the "APContactUsSubjHeadDropBox"
        And I enter "hyuji@test.com" in the "APContactUsEmail"
        And I enter "123567" in the "APContactUsOrderReference"
        And I enter "Hello" in the "APContactUsMessage"
        Then I enter filepath in the "APContactUsFileAttachBox" and click "APContactUsSendBtn" to see "APContactUsResponseSuccess"


