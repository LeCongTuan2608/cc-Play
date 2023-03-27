// 991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com
//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
const fechData = async () => {
   const response = fetch('991294782385-ek42cs54q1h49sd4k0dos2lo96qk57q4.apps.googleusercontent.com');
   const data = (await response).json();
   console.log(data);
};
