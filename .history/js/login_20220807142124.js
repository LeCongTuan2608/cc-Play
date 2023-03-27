//id 991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com
//code : 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

const validate = (options) => {
   const formElement = document.querySelector(options.form);
   if (formElement) {
      options.rules.forEach((rule) => {
         let inputElement = formElement.querySelector(rule.selector);
         if (inputElement) {
            inputElement.addEventListener('blur', () => {
               console.log('blur' + rule.selector);
            });
         }
      });
   }
};

//định nghĩa method
validate.isRequired = (selector) => {
   return {
      selector: selector,
      checked: () => {},
   };
};
//định nghĩa method
validate.isEmail = (selector) => {
   return {
      selector: selector,
      checked: () => {},
   };
};

validate({
   form: '.form-login',
   rules: [validate.isRequired('#email'), validate.isEmail('#password')],
});
