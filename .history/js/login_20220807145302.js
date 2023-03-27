//id 991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com
//code : 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

const validate = (options) => {
   const validator = (inputElement, rule) => {
      const errorElement = inputElement.parentElement.querySelector('.message');
      let errorMessage = rule.checked(inputElement.value);
      if (errorMessage) {
         errorElement.innerText = errorMessage;
         inputElement.parentElement.classList.add('in-valid');
      } else {
         errorElement.innerText = '';
         inputElement.parentElement.classList.remove('in-valid');
      }
   };
   const formElement = document.querySelector(options.form);
   if (formElement) {
      options.rules.forEach((rule) => {
         const inputElement = formElement.querySelector(rule.selector);
         if (inputElement) {
            inputElement.addEventListener('blur', () => {
               validator(inputElement, rule);
            });
            inputElement.addEventListener('input', () => {
               errorElement.innerText = '';
               inputElement.parentElement.classList.remove('in-valid');
            });
         }
      });
   }
};

//định nghĩa method
validate.isEmail = (selector) => {
   return {
      selector: selector,
      checked: (value) => {
         const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         return regex.test(value) ? undefined : 'Vui lòng nhập email!';
      },
   };
};

//định nghĩa method
validate.isPassword = (selector) => {
   return {
      selector: selector,
      checked: (value) => {
         return value.trim() ? undefined : 'Vui lòng nhập password!';
      },
   };
};

validate({
   form: '.form-login',
   rules: [validate.isEmail('#email'), validate.isPassword('#password')],
});
