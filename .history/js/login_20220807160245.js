//id 991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com
//code : 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

const validate = (options) => {
   let selectorRules = {};
   const validator = (inputElement, rule) => {
      const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
      let rules = selectorRules[rule.selector];
      rules.forEach((items) => {
         let errorMessage = items.checked(inputElement.value);
         if (errorMessage) {
            break
         }
      });
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
         if (Array.isArray(selectorRules[rule.selector])) {
            selectorRules[rule.selector].push(rule.checked);
         } else {
            selectorRules[rule.selector] = [rule.checked];
         }
         // xử lí khi blur ra khỏi input
         const inputElement = formElement.querySelector(rule.selector);
         if (inputElement) {
            inputElement.addEventListener('blur', () => {
               validator(inputElement, rule);
            });
            inputElement.addEventListener('input', () => {
               const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
               errorElement.innerText = '';
               inputElement.parentElement.classList.remove('in-valid');
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
         return value.trim() ? undefined : 'Vui lòng nhập vào ô này';
      },
   };
};
validate.isEmail = (selector) => {
   return {
      selector: selector,
      checked: (value) => {
         const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         return regex.test(value) ? undefined : 'Email này không đúng định dạng!';
      },
   };
};

//định nghĩa method
validate.isPassword = (selector) => {
   return {
      selector: selector,
      checked: (value) => {
         return value.trim() ? undefined : 'Password phải tối đa 6 kí tự';
      },
   };
};

validate({
   form: '.form-login',
   errorSelector: '.message',
   rules: [
      validate.isRequired('#email'),
      validate.isEmail('#email'),
      validate.isRequired('#password'),
      validate.isPassword('#password'),
   ],
});
