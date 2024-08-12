export const referalCodeGenerator = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let referralCode = "";
      for (let i = 0; i < 10; i++) {
            referralCode += characters.charAt(Math.random() * characters.length);
      }
      return `EU-${referralCode}`;
}

