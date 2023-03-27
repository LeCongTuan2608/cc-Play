//id 991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com
//code : 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

const validate = (options) => {};

validate.isRequired = () => {};
validate.isEmail = () => {};
validate({
   form: '.form-login',
   check: [validate.isRequired('#email'), validate.isEmail('#password')],
});
