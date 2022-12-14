
const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {
    
    siteUrls: {
    AutomationPractice: 'http://automationpractice.com/',
    APSignIn: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    APContactUsPage: 'http://automationpractice.com/index.php?controller=contact',
    APCreateAccountFormPage: 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation',
    APDressesPage: 'http://automationpractice.com/index.php?id_category=8&controller=category',
    APTShirtsPage: 'http://automationpractice.com/index.php?id_category=5&controller=category',
    APShoppingCartPage: 'http://automationpractice.com/index.php?controller=order',
    },

APShoppingCartPage: 'http://automationpractice.com/index.php?controller=order',
    elements: {
        APLogo: '//div[@id="header_logo"]/a[@title="My Store"]/img',
        APCartLink: '//a[@title="View my shopping cart"]',
        APCartHeader: '//span[@class="navigation_page"]',
        APContactUsLink: '//div[@id="contact-link"]//a[contains(text(),"Contact us")]',
        APContactPageHeader: '//h1[@class="page-heading bottom-indent"]',
        APSigninLink: '//a[@class="login"]',
        APSignOutLink:'//a[@class="logout"]',
        APSigninPageHeader: '//h1[@class="page-heading"]',
        APUserAccountTab: '//a[@class="account"]',
        UserNameAccountLink: '/html/body/div/div[1]/header/div[2]/div/div/nav/div[1]/a',
        APSearchTextbox: '//input[@id="search_query_top"]',
        APSearchbutton: '//form[@id="searchbox"]//button[@type="submit"]',
        APProductListing: '//div[contains(@class,"top-pagination-content clearfix")]//div[contains(@class,"product-count")][contains(text(),"Showing 1 - 1 of 1 item")]',
        APNoSearchResultsFound: '//p[@class="alert alert-warning"]',
        APWomenTab: '//a[@class="sf-with-ul"][contains(text(),"Women")]',
        APWomenTabSelector:'#block_top_menu > ul > li:nth-child(1) > a',
        APTopsLandingPageTab:'//*[@id="block_top_menu"]/ul/li[1]/ul/li[1]/a',
        APTopsTabSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > a',
        APTShirtsSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(1) > a',
        APBlousesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(2) > a',
        APDressesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > a',
        APCasualDressesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(1) > a',
        APEveningDressesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(2) > a',
        APSummerDressesSelector: '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(3) > a',
        APTopsHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APTShirtsHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APBlousesHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APDressesHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APCasualDressesHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APEveningDressesHeader: '//*[@id="center_column"]/div[1]/div/div/span',
        APSummerDressesHeader:'//*[@id="center_column"]/div[1]/div/div/span',
        APWomenPageHeader: '//strong[contains(text(),"You will find here all woman fashion collections.")]',
        APDressesTab: '/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[2]/a',
        APTShirtsTab: '/html/body/div/div[1]/header/div[3]/div/div/div[6]/ul/li[3]/a',
        APDressesPageHeader: '//p[contains(text(),"Find your favorites dresses from our wide choice o")]',
        APTShirtsPageHeader: '//p[contains(text(),"The must have of your wardrobe, take a look at our")]',
        APPopularTab: '//a[@class="homefeatured"]',
        APBestSellersTab: '//a[@class="blockbestsellers"]',
        APPopularList: '//ul[@id="homefeatured"]',
        APLastPoPularListItem: '//ul[@id="homefeatured"]//li[@class="ajax_block_product col-xs-12 col-sm-4 col-md-3 last-line first-item-of-tablet-line first-item-of-mobile-line last-mobile-line"]',
        APBestSellersList: '//ul[@id="blockbestsellers"]',
        APLastBestSellerListItem: '//ul[@id="blockbestsellers"]//li[@class="ajax_block_product col-xs-12 col-sm-4 col-md-3 last-line first-item-of-tablet-line first-item-of-mobile-line last-mobile-line"]//div[@class="product-container"]//div[@class="right-block"]//h5[@itemprop="name"]',
        APBlock1Img1Click: '//body[@id="index"]/div[@id="page"]/div[@class="columns-container"]/div[@id="columns"]/div[@id="slider_row"]/div[@id="top_column"]/div[@id="homepage-slider"]/div[@class="bx-wrapper"]/div[@class="bx-viewport"]/ul[@id="homeslider"]/li[3]/div[1]/p[2]/button[1]',
        APBlock1Img2Click: '//div[@id="htmlcontent_top"]//ul[@class="htmlcontent-home clearfix row"]//li[@class="htmlcontent-item-1 col-xs-4"]//a[@class="item-link"]//img[@class="item-img"]',
        APBlock1Img3Click: '/html/body/div/div[2]/div/div[1]/div/div[2]/ul/li[2]/a/img',
        APScrollToBlock2Img: '//*[@id="htmlcontent_home"]',
        APBlock2Img1Link: '/html/body/div/div[2]/div/div[2]/div/div[2]/div[1]/ul/li[1]/a/img',
        APBlock2Img2Link: '/html/body/div/div[2]/div/div[2]/div/div[2]/div[1]/ul/li[2]/a/img',
        APBlock2Img3Link: '/html/body/div/div[2]/div/div[2]/div/div[2]/div[1]/ul/li[3]/a/img',
        APBlock2Img4Link: '/html/body/div/div[2]/div/div[2]/div/div[2]/div[1]/ul/li[4]/a/img',
        APBlock2Img5Link: '/html/body/div/div[2]/div/div[2]/div/div[2]/div[1]/ul/li[5]/a/img',
        PrestaShopLogo: '/html/body/div[2]/div[1]/nav/div[1]/div/div[1]/a[1]/img',
        APScrollToFooter: '/html/body/div/div[3]/footer/div',
        FooterBlk1NewsletterTextBox: '//input[@id="newsletter-input"]',
        FooterNewsletterSubmitButton: '//*[@id="newsletter_block_left"]/div/form/div/button',
        NewsletterExistsMsg: '//*[@id="columns"]/p',
        FooterBlk2Link1: '//li[@class="facebook"]//a[@target="_blank"]',
        FooterFacebookHeader: '/html/body/div[1]/div/div[1]/div/div[3]/div/div/div/div[1]/div[1]/div[1]/div[1]/div/div/div/div/div[2]/div/a/div/div/div/div/img',
        FooterBlk2Link2: '/html/body/div/div[3]/footer/div/section[1]/ul/li[2]/a',
        FooterTwitterHeader: '/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[2]/div/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div/span[1]/span',
        FooterBlk2Link3: '/html/body/div/div[3]/footer/div/section[1]/ul/li[3]/a',
        FooterYouTubeHeader: '//yt-formatted-string[contains(text(),"Selenium Framework")]',
        FooterBlk2Link4: '//li[@class="google-plus"]//a[@target="_blank"]',
        FooterGoogleHeader: '/html/body/div[1]/div[1]/div[2]/div/c-wiz/div/div[1]/div/h1/span',
        FooterBlk3Link1: '/html/body/div/div[3]/footer/div/section[2]/div/div/ul/li/a',
        FooterBlk4Link1: '//a[contains(text(),"Specials")]',
        FooterBlk4Link2: '/html/body/div/div[3]/footer/div/section[3]/ul/li[2]/a',
        FooterBlk4Link3: '/html/body/div/div[3]/footer/div/section[3]/ul/li[3]/a',
        FooterBlk4Link4: '/html/body/div/div[3]/footer/div/section[3]/ul/li[4]/a',
        FooterBlk4Link5: '/html/body/div/div[3]/footer/div/section[3]/ul/li[5]/a',
        FooterBlk4Link6: '/html/body/div/div[3]/footer/div/section[3]/ul/li[6]/a',
        FooterBlk4Link7: '/html/body/div/div[3]/footer/div/section[3]/ul/li[7]/a',
        FooterBlk4Link8: '/html/body/div/div[3]/footer/div/section[3]/ul/li[8]/a',
        FooterBlk5Link1: '/html/body/div/div[3]/footer/div/section[5]/h4/a',
        FooterBlk5Link2: '/html/body/div/div[3]/footer/div/section[5]/div/ul/li[1]/a',
        FooterBlk5Link3: '/html/body/div/div[3]/footer/div/section[5]/div/ul/li[2]/a',
        FooterBlk5Link4: '/html/body/div/div[3]/footer/div/section[5]/div/ul/li[3]/a',
        FooterBlk5Link5: '/html/body/div/div[3]/footer/div/section[5]/div/ul/li[4]/a',
        FooterBlk5Link6: '/html/body/div/div[3]/footer/div/section[5]/div/ul/li[5]/a',
        FooterEmailLink: '/html/body/div/div[3]/footer/div/section[6]/div/ul/li[3]/span/a',
        APSpecialsHeader: '//*[@id="center_column"]/h1',
        APNewProductsHeader: '//*[@id="center_column"]/h1',
        APBestSellersHeader: '//*[@id="center_column"]/h1',
        APOurStoresHeader: '//*[@id="center_column"]/h1',
        APTermsCondHeader: '//*[@id="center_column"]/div/h1',
        APAboutUsHeader: '//*[@id="center_column"]/div/h1',
        APSiteMapHeader:'//*[@id="center_column"]/h1',
        APSignInEmailTextBox: '//*[@id="email"]',
        APSignInPasswordTextBox: '//*[@id="passwd"]',
        APSignInButton: '//*[@id="SubmitLogin"]',
        APAccountSignInMsg:'//p[@class="info-account"]',
        APSignInDoesNotMatchMsg:'//li[contains(text(),"Authentication failed.")]',
        APSigninEmailRequiredMsg:'//li[contains(text(),"An email address required.")]',
        APSigninPwdRequiredMsg:'//li[contains(text(),"Password is required.")]',
        APSigninInvalidEmailAddressMsg: '//li[contains(text(),"Invalid email address.")]',
        APScrollToEmail: '//i[@class="icon-envelope-alt"]',
        APEmailLink: '//a[contains(text(),"support@seleniumframework.com")]',
        APMyAccountLink: '//a[contains(text(),"My account")]',
        APFooterMyOrdersLink: '//a[contains(text(),"My orders")]',
        APFooterMyCreditSlipsLink: '//a[contains(text(),"My credit slips")]',
        APFooterMyAddressesLink: '//a[contains(text(),"My addresses")]',
        APFooterMyPersonalInfoLink: '//a[contains(text(),"My personal info")]',
        APFooterSignOutLink: '//a[@href="http://automationpractice.com/index.php?mylogout"]',
        APOrderHistoryPageHeader: '//h1[@class="page-heading bottom-indent"]',
        APMyCreditSlipsPageHeader: '//h1[@class="page-heading bottom-indent"]',
        APMyAddressesPageHeader: '//h1[@class="page-heading"]',
        APMyPersonalInfoPageHeader: '//h1[@class="page-subheading"]',
        APSignOutPageHeader: '//span[@class="ajax_cart_no_product"]',
        APContactUsLink: '//div[@id="contact-link"]//a[contains(text(),"Contact us")]',
        APContactUsHeader: '/html/body/div/div[2]/div/div[3]/div/h1',
        APContactUsSubjHeadDropBox: '//select[@id="id_contact"]',
        APContactUsEmail: '//input[@id="email"]',
        APContactUsOrderReference: '//input[@id="id_order"]',
        APContactUsMessage: '//textarea[@id="message"]',
        APContactUsSendBtn: '//span[contains(text(),"Send")]',
        APContactUsResponseSuccess: '//p[@class="alert alert-success"]',
        APContactUsFileAttachBox: '//input[@id="fileUpload"]',
        APContactFormErrorMsg2: '//*[@id="center_column"]/div/p',
        APContactInvalidEmailErrMsg: '//li[contains(text(),"Invalid email address.")]',
        APContactMsgBlnkErrMsg: '//li[contains(text(),"The message cannot be blank.")]',
        APCreateFormEmailInputbox: '//input[@id="email_create"]',
        APCreateAccButton: '//button[@id="SubmitCreate"]',
        APCreateAccountFormHeader: '//h3[contains(text(),"Your personal information")]',
        APCreateAccountAccAlreadyExistsErr: '//li[contains(text(),"An account using this email address has already be")]',
        APCreateACCFormTitleMr: '//input[@id="id_gender1"]',
        APCreateACCFormTitleMrs: '//input[@id="id_gender2"]',
        APCreateFormFirstName: '//input[@id="customer_firstname"]',
        APCreateFormLastName: '//input[@id="customer_lastname"]',
        APCreateFormEmail: '//input[@id="email"]',
        APCreateFormPswd: '//input[@id="passwd"]',
        APCreateAccDOBDate: '//select[@id="days"]',
        APCreateAccDOBMonth: '//select[@id="months"]',
        APCreateAccDOBYear: '//select[@id="years"]',
        APCreateAccSignUpNewsLtr: '//input[@id="newsletter"]',
        APCreateAccReceiveSplOffer: '//input[@id="optin"]',
        APCreateAddressFirstName: '//input[@id="firstname"]',
        APCreateAddressLastName: '//input[@id="lastname"]',
        APCreateAddressCompany: '//input[@id="company"]',
        APCreateAddressLine1: '//input[@id="address1"]',
        APCreateAddressLine2: '//input[@id="address2"]',
        APCreateAddressCity: '//input[@id="city"]',
        APCreateAddressState: '//select[@id="id_state"]',
        APCreateAddressZip: '//input[@id="postcode"]',
        APCreateAddressCountry: '//select[@id="id_country"]',
        APCreateAddressAddTextArea: '//textarea[@id="other"]',
        APCreateAddressPhone: '//input[@id="phone"]',
        APCreateAddressMobPhone: '//input[@id="phone_mobile"]',
        APCreateAddressAlias: '//input[@id="alias"]',
        APCreateAddressRegisterBtn: '//button[@id="submitAccount"]',
        APMyAccountPageWelcome: '//*[@id="center_column"]/p',
        APCreateAccPageErrors: '//*[@id="center_column"]/div/p',
        APDressesPageItemLink: '//*[@id="center_column"]/ul/li[3]/div/div[2]/h5/a',
        APAddToCartBtn: '//*[@id="add_to_cart"]/button',
        APItemNameHeader: '//*[@id="center_column"]/div/div/div[3]/h1',
        APItemChooseSize: '//*[@id="group_1"]',
        APItemChooseColor: '//*[@id="color_14"]',
        APItemPageAddToCartBtn: '//*[@id="add_to_cart"]/button',
        APProceedToCheckOutBtn: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a',
        APShoppingCartPageHeader: '//*[@id="cart_title"]',
        APItem2Link: '//*[@id="center_column"]/ul/li/div/div[2]/h5/a',
        APShoppingCartDeleteItem: '//*[@id="1_2_0_0"]',
        APShoppingCartChangeQty: '//*[@id="product_1_1_0_742884"]/td[5]/input[1]',
        APShoppingCartProceedToChkOut: '//*[@id="center_column"]/p[2]/a[1]',
        APCartSignInTabHeader: '//*[@id="order_step"]/li[2]',
        APShoppingCartSignInEmail: '//*[@id="email"]',
        APShoppingCartSignInPswd: '//*[@id="passwd"]',
        APShoppingCartSignInBtn: '//*[@id="SubmitLogin"]',
        APShoppingCartAddressHeader: '//*[@id="order_step"]/li[3]',
        APShoppingCartProceedToChkOut2: '//*[@id="center_column"]/form/p/button',
        APShoppingCartShippingTabHeader: '//*[@id="order_step"]/li[4]',
        APShoppingCartAgreeToTemsCheckBox: '//*[@id="cgv"]',
        APShoppingCartProceedToChkOut3: '//*[@id="form"]/p/button',
        APShoppingCartPaymentTabHeader: '//*[@id="step_end"]',
        APShoppingCartPayByWireLink: '//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a',
        APShoppimgCartConfirmOrderBtn: '//*[@id="cart_navigation"]/button',
        APShoppingCartOrderCompleteMsg: '//*[@id="center_column"]/div/p/strong',
        APMyAccOrderHistoryLink: '//*[@id="center_column"]/div/div[1]/ul/li[1]/a',
        APOrderHistoryPageHeader: '//*[@id="center_column"]/p',
        APBackToAccBtn: '//*[@id="center_column"]/ul/li[1]/a',
        APMyAccWishlistsLink: '//*[@id="center_column"]/div/div[2]/ul/li/a/span',
        MyWishlistHeader: '//*[@id="mywishlist"]/h1',
        MyWishlistBackToAccBtn: '//*[@id="mywishlist"]/ul/li[1]/a',
        APMyCreditSlipsLink: '//*[@id="center_column"]/div/div[1]/ul/li[2]/a',
        APMyCreditSlipsPAgeHeader: '//*[@id="center_column"]/p',
        MyCreditSlipsBackToAccBtn: '//*[@id="center_column"]/ul/li[1]/a',
        APMyAccMyAddressesLink: '//*[@id="center_column"]/div/div[1]/ul/li[3]/a',
        MyAddressesPageHeader: '//*[@id="center_column"]/div[1]/p[1]/strong',
        MyAddressesBackToAccBtn: '//*[@id="center_column"]/ul/li[1]/a',
        APMyPersonalInfoLink: '//*[@id="center_column"]/div/div[1]/ul/li[4]/a',
        MyPersonalInfoPageHeader: '//*[@id="center_column"]/div/p[1]',
        MyPersonalInfoBackToAccBtn: '//*[@id="center_column"]/ul/li[1]/a'









,
    },

    content : {
        TShirts: 'T-Shirts',
        Kurtas: 'Kurtas',
        Tops: 'Tops',
        TShirts1: 'T-shirts',
        Blouses: 'Blouses',
        Dresses: 'Dresses',
        CasualDresses: 'Casual Dresses',
        EveningDresses: 'Evening Dresses',
        SummerDresses: 'Summer Dresses',
        APContactUsFilePath: "./testData/abc.txt"
    },

    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        await driver.sleep(2000);
        var selector = page.pageObjects.elements[objectKey];
        return driver.findElement(By.xpath(selector)).click();
    },

    hoverElement: async function(objectKey,textval) {
        // eslint-disable-next-line no-console
        var selector = page.pageObjects.elements[objectKey];
        var textv = page.pageObjects.content[textval];
        await helpers.clickHiddenElement(selector,textv);
    },

    scrollToElement1: async function(objectKey) {
        // eslint-disable-next-line no-console
        await driver.sleep(2000);
        var selector = page.pageObjects.elements[objectKey];
        return helpers.scrollToElement(driver.findElement(By.xpath(selector)));
    },

    verifyNewTabOpened: async function(objectKey1,objectKey2) {
        var selector1 = page.pageObjects.elements[objectKey1];
        var selector2 = page.pageObjects.elements[objectKey2];
        //1. Store the ID of the original window 
        const originalWindow = await driver.getWindowHandle();  

        //2. Click the link which opens in a new window
        await driver.findElement(By.xpath(selector1)).click();

        //Wait for the new window or tab
        await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
        10000
        );
            
        //Loop through until we find a new window handle
        const windows = await driver.getAllWindowHandles();
        windows.forEach(async handle => {
        if (handle !== originalWindow) {
          await driver.switchTo().window(handle);
          }
        });
        //Wait for the new tab to finish loading content
        //await driver.wait(until.titleIs('Selenium Framework | Facebook'), 10000);
        await driver.wait(until.elementsLocated(By.xpath(selector2)), 10000);

        //close tab and get back
        driver.close();
        await driver.switchTo().window(originalWindow);
    },

    verifyEmailLink: async function(objectKey) {
        var selector = page.pageObjects.elements[objectKey];
        const string = await driver.findElement(By.xpath(selector)).getAttribute("href");
        console.log("href value is:" + string);

        if (driver.findElement(By.xpath("//*[text()='support@seleniumframework.com']")))
         {
            console.log("verified");
            return;
        }
        else {console.log("error")
    
        };

        

    },

    inputElementAP: async function(val,objectKey) {
        var selector = page.pageObjects.elements[objectKey]; 
        var valx = page.pageObjects.content[val];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(valx);

    },

    inputElementAfterClear: async function(name,val) {
        var selector = page.pageObjects.elements[name]; 
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector)).clear();
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },

    inputElement: async function(name,val) {
        var selector = page.pageObjects.elements[name]; 
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);
    },

    inputEmailforNewsLet: async function(value,objectKey) {
        var selector = page.pageObjects.elements[objectKey]; 
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },


    inputEmailforNewsLet1: async function(value,objectKey) {
        var selector = page.pageObjects.elements[objectKey]; 
        await driver.sleep(2000);
        driver.findElement(By.xpath(selector)).clear();
        return driver.findElement(By.xpath(selector)).sendKeys(value);
    },

    chooseFileUpload: async function(objectKey1,objectKey2,objectKey3) {
        var selector1 = page.pageObjects.elements[objectKey1];
        var selector2 = page.pageObjects.elements[objectKey2];
        var selector3 = page.pageObjects.elements[objectKey3];
        var selector4 = page.pageObjects.elements.APContactUsFileAttachBox;
        const filePathElement = await driver.findElement(By.xpath(selector1));
        console.log("File xpath:" + filePathElement);
        await filePathElement.sendKeys("C://Users/vijav/Workspace/AutomationPracticeFeatures/testData/abc.txt");
        console.log("File got selected");
        await driver.findElement(By.xpath(selector2)).click();
        await driver.sleep(4000);
        const upload = await driver.findElement(By.xpath(selector3)).getText();
        if (upload.includes("successfully sent") ){ console.log("Next screen");}
        else{console.log("Error");};
     },
  /*try {
    await driver.wait(webdriver.until.elementIsVisible((await driver.findElement(By.xpath(selector3)))), 5000);
    if((await driver.findElement(By.xpath(selector3)).getText()).includes('successfully sent')) {
      await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "File upload successful"}}');
    } else {
      await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "File upload failed"}}');
    }
    } catch (e) {
    await driver.executeScript('browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "File could not be uploaded in time"}}');
    }
  await driver.quit();
    })();*/

    


    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pageObjects.elements[objectKey];
        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    },

    elementExistsCreateAcc: async function(objectKey1, objectKey2) {
        // eslint-disable-next-line no-console
        var selector1 = page.pageObjects.elements[objectKey1];
        var selector2 = page.pageObjects.elements[objectKey2];
        await driver.sleep(5000);

               if (driver.findElement(By.xpath(selector1)))
                {
                   console.log("verified form header");
                   return true;
               }
               else if (driver.findElement(By.xpath(selector2)))
                {
                   console.log("verified acc exists error msg");
                   return true;
               }
               else{
                console.log("error")
           
               };

    },


};
