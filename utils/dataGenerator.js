const { faker } = require('@faker-js/faker');

function randomEmail() {
  return `qa.automation+${Date.now()}@mailinator.com`;
}

function randomFullName() {
  return faker.person.fullName();
}

function randomPassword() {
  return `Auto@${faker.number.int({ min: 10000, max: 99999 })}`;
}

module.exports = { randomEmail, randomFullName, randomPassword };
