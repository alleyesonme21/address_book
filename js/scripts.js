//Business logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

//Business logic for contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
  
}

AddressBook.prototype.assignId = function() {
  thid=s.currentId += 1;
  return this.currentId;
}