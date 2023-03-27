//id 991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com
//code : 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

const validate = (options) => {
   const formElement = document.querySelector(options.form);
   if (formElement) {
      options.rules.forEach((rule) => {
         const inputElement = formElement.querySelector(rule.selector);
         const errorElement = inputElement.parentElement.querySelector('.message');
         if (inputElement) {
            inputElement.addEventListener('blur', () => {
               let errorMessage = rule.checked(inputElement.value);
               if (errorMessage) {
                  errorElement.innerText = errorMessage;
               } else {
                  errorElement.innerText = '';
               }
            });
         }
      });
   }
};

//định nghĩa method
validate.isRequired = (selector) => {
   return {
      selector: selector,
      checked: (value) => {
         return value.trim() ? undefined : 'Vui lòng nhập email!';
      },
   };
};
//định nghĩa method
validate.isEmail = (selector) => {
   return {
      selector: selector,
      checked: (value) => {
         return value ? undefined : 'Vui lòng nhập password!';
      },
   };
};

validate({
   form: '.form-login',
   rules: [validate.isRequired('#email'), validate.isEmail('#password')],
});
