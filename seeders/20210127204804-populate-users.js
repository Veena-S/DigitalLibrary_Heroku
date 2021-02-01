// Importing another local mjs file will not work with seed files.
// Also, need to use require for node modules
const jsSHA = require('jssha');

/**
   * Hashing passwords using jsSHA library
   */
function generatedHashedValue(unhashedValueInput) {
  const unhashedValue = unhashedValueInput;
  // initialise the SHA object
  // eslint-disable-next-line new-cap
  const shaObj = new jsSHA('SHA-512', 'TEXT', { encoding: 'UTF8' });
  // input the password from the request to the SHA object
  shaObj.update(unhashedValue);
  // get the hashed password as output from the SHA object
  const hashedValue = shaObj.getHash('HEX');
  console.log(`UnhashedValue: ${unhashedValue}, HashedValue: ${hashedValue}`);
  return hashedValue;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersList = [
      {
        name: 'Adi',
        email: 'adi@mylibrary.com',
        password: generatedHashedValue('adi@123'),
        role: true,
        photo: 'adi.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Billy',
        email: 'billy@mylibrary.com',
        password: generatedHashedValue('billy@123'),
        role: true,
        photo: 'Billy.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Scott',
        email: 'scott@mylibrary.com',
        password: generatedHashedValue('scott@123'),
        role: true,
        photo: 'Scott.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Zach',
        email: 'zach@mylibrary.com',
        password: generatedHashedValue('zach@123'),
        role: true,
        photo: 'Zach.png',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Insert the users list
    const users = await queryInterface.bulkInsert('users', usersList, { returning: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
