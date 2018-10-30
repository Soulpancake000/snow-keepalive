var casper = require('casper').create({
    verbose: false,
    logLevel: "error"
});
var config = require('./settings');
casper.start(config.url + '/welcome.do');
casper.then(function () {
    this.wait(5000, function () {
        this.echo('Page: ' + this.getTitle());
        this.sendKeys('form#loginPage input#user_name', config.username);
        this.sendKeys('input#user_password', config.password);
        this.click('button#sysverb_login');
    });
    this.wait(5000, function () {
        this.echo('Page: ' + this.getTitle());
        //this.echo('Page: ' + this.getPageContent());
    });
});
casper.run();
