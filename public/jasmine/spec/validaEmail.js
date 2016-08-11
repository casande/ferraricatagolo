describe("newsletter", function(){

  it("E-mail não pode ser vázio", function() {

    expect(newsletter.validationEmail(" ")).toEqual(false);

  });

  it("Deve ser um e-mail real", function() {

    expect(newsletter.validationEmail("bncsdbdbhdsbhjskwjk")).toEqual(false);

    expect(newsletter.validationEmail("teste@gmail.com")).toEqual(true);

  });

});