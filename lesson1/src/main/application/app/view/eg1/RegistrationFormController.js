Ext.define('MyApp.view.eg1.RegistrationFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.eg1-registrationform',
    requires:'Ext.Msg',

    onCancel: function() {
      console.log("I am in the cancel event");
      var form = this.getView().down("form");
      form.reset();
      console.log("I am exiting the cancel event");
    },

    onLoginOkButton: function() {
      console.log("I am in the RegistrationFormController method yehh...");
      console.log("this.getViewModel().data=", this.getViewModel().data);

      var formValid = false;
      if (this.getViewModel().data) {
        var inputValues = this.getViewModel().data;
        var userNameIsEmpty = Ext.isEmpty(inputValues.username);
        var passwordIsEmpty = Ext.isEmpty(inputValues.password);
        var password1IsEmpty = Ext.isEmpty(inputValues.password1);


        if (userNameIsEmpty || passwordIsEmpty || password1IsEmpty) {
          Ext.Msg.alert('Error!', 'Some of the required fields are empty.')
        }

        if (inputValues.password1 != inputValues.password) {
          Ext.Msg.alert('Passwords donot match!', 'Please enter Valid password');
        }

        formValid = true;
      }

      if( formValid )
      {
        this.getViewModel().data.name = this.getViewModel().data.username;
      }

    } // onLogingOkButton
});
