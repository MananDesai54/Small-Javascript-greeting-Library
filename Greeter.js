;(function(global,$){

    var Greeter = function(firstname,lastname,language) {
        return new Greeter.init(firstname,lastname,language)
    };

    //This will not exposed to outer env so none can change it
    let supportedLanguage = ['en','es','hindi'];

    //This will not exposed to outer env so none can change it
    let greetings = {
        en : 'Hello',
        es : 'Hola',
        hindi : 'kese ho'
    };

    //This will not exposed to outer env so none can change it
    let formalGreetings = {
        en : 'Greetings',
        es : 'Saludos',
        hindi : 'Sab khushal'
    };

    //This will not exposed to outer env so none can change it
    let logMessages = {
        en : 'Logged in',
        es : 'Inició sesión',
        hindi : 'Aa gaye aap'
    };

    Greeter.prototype = {
        fullName : function () {
            return  `${this.firstname} ${this.lastname}`
        },
        validate : function () {
            if(supportedLanguage.indexOf(this.language) === -1) {
                throw new Error('Invalid Language')
            }
        },
        greeting : function () {
            return `${greetings[this.language]} ${this.firstname}...!!!`
        },
        formalGreeting : function () {
            return  `${formalGreetings[this.language]} ${this.fullName()}...!!!`
        },
        //beneath this all methods are chainable
        greet : function (formal) {
            let msg;
            if (formal) {
                msg = this.formalGreeting()
            }else {
                msg = this.greeting()
            }
            //check weather browser has console available or not because internet explorer has no console variable available or it has  not console open
            if (console) {
                console.log(msg)
            }
            //return the object which called this method , so it will be the one who will be created by G$ or Greet to make it chainable
            return this;
        },
        log : function () {
            if(console){
                console.log(`${logMessages[this.language]} : ${this.fullName()}`);
            }
            //return the object which called this method , so it will be the one who will be created by G$ or Greet to make it chainable
            return this;
        },
        setLanguage : function (language) {
            this.language = language;
            this.validate();
            //return the object which called this method , so it will be the one who will be created by G$ or Greet to make it chainable
            return this;
        },
        HTMLGreeting : function (selector,formal) {
            if(!$) {
                throw new Error('jQuery not available or not loaded');
            }
            if (!selector) {
                throw new Error('Missing jQuery selector')
            }
            let msg;
            if (formal) {
                msg = this.formalGreeting()
            }else {
                msg = this.greeting()
            }
            console.log(msg+'hello');
            //document.querySelector(selector).textContent = msg;
            $(selector).html(msg);
            return this;
        }
    };

    Greeter.init = function (firstname='<Your Name>',lastname='<Your lastname>',language='en') {
        this.firstname = firstname;
        this.lastname= lastname;
        this.language = language;

        this.validate();
    };

    Greeter.init.prototype = Greeter.prototype;

    global.G$ = global.Greet = Greeter;
})(window,jQuery);
