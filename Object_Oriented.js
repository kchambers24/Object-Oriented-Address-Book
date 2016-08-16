// $(document).ready(() => {
var ContactList = function() {
    this.book = []
}

var Contact = function(name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.added = new Date();
}

ContactList.prototype.addContact = function(name, phone, address) {
    var contact = new Contact(name, phone, address);
    var contactId = this.book.map((contact) => contact.id);
    contact.id = Math.max(contactId) + 1;
    this.book.push(contact)
}

var community = new ContactList();

ContactList.prototype.find = function(name) {
    return this.book.filter((contact) => contact.name.includes(name));
}

ContactList.prototype.get = function(id) {
    return this.book.filter((contact) => contact.id === id);
}

ContactList.prototype.remove = function(id) {
    var removeIndex = this.book.map((contact) => contact.id).indexOf(id);
    this.book.splice((removeIndex, 1));
}


// I added these so 2 contacts will remain after hitting refresh
community.addContact("Ed", "800-555-5555", {
    street: "Chillin",
    city: "Hardcore",
    state: "FL"
})
community.addContact("Lake", "800-555-2222", {
    street: "MeanStreets",
    city: "Big Pimpin",
    state: "FL"
})


// TIYStudents.prototype.addRepo = function(name, language){
//  var repo = new Repo(name, language, this);
//  // this.repo.push(repo);
// // }


// function contact(name, phone, address){
//   this.name = name;
//   this.phone = phone;
//   this.address = address;
//   this.added = newDate();
// }


// })
