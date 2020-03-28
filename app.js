var g = G$('Manan','Desai','en');
console.log(g);
console.log(g.fullName());
console.log(g.greeting());
console.log(g.formalGreeting());
console.log(g.greet().log().setLanguage('es'));
console.log(g.fullName());
console.log(g.greeting());
console.log(g.formalGreeting());
g.greet().setLanguage('hindi').greet(true);
g.setLanguage('es');
$('#login').click(function () {
   let logingrtr = G$("Manan","Desai");
   $('#logindiv').hide();
   logingrtr.setLanguage($('#lang').val()).HTMLGreeting('#greeting',true).log();
});
//g.HTMLGreeting('#greeting',true);