const codenames = ['Nightingale', 'Kraken', 'Phoenix', 'Valkyrie', 'Shadow'];
const generateCodename = () => {
  const randomIndex = Math.floor(Math.random() * codenames.length);
    return `The ${codenames[randomIndex]}`;
};
module.exports = generateCodename;