const casper = require('casper').create();
var config = require('./settings');

casper.start('https://developer.servicenow.com/app.do#!/home');

casper.then(function () {
    this.wait(3000, function () {
        this.echo('Page: ' + this.getTitle());
        this.click('#dp-hdr-login-link');
    });
});

casper.then(function () {
    this.wait(10000, function () {
        this.echo('Page: ' + this.getTitle());

        this.sendKeys('input#username', config.username);
        this.sendKeys('input#password', config.password);

        this.click('#submitButton');
    });
});

casper.then(function () {
    this.wait(6000, function () {
        this.open('https://developer.servicenow.com/app.do#!/instance');
    });
});

casper.then(function () {
    this.wait(6000, function () {
        if (this.exists('#instanceWakeUpBtn')) {
            this.click('#instanceWakeUpBtn');
        }
    });
});

casper.then(function () {
    this.wait(6000, function () {
        this.echo('Page: ' + this.getTitle());
    });
});

casper.run();
