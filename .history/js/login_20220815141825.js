//id 991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com
//code : 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

const validate = (options) => {
   let selectorRules = {};
   // hàm thực hiện validate
   const validator = (inputElement, rule) => {
      const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
      let errorMessage;
      let rules = selectorRules[rule.selector];
      //lặp và kiểm tra lỗi
      for (let i = 0; i < rules.length; i++) {
         errorMessage = rules[i](inputElement.value);
         if (errorMessage) break;
      }
      //style khi gặp lỗi
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
      // lưu rule vào [...]
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
//định nghĩa method
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
validate.isPassword = (selector, minLength) => {
   return {
      selector: selector,
      checked: (value) => {
         return value.length >= minLength ? undefined : `Password phải tối thiểu ${minLength} kí tự`;
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
      validate.isPassword('#password', 6),
   ],
});
function test() {
   var age = 18;
}
test();
console.log(age);
