/* 
Activity: Contact manager
*/
function ContactManager() {
	this.options = ['1: List Contacts', '2: Add a contact', '0: Quit'];
    this.contact_list = [];
	this.first_time = true;
	this.contact_list.push(new Contact('Jhon','Smith'));
	this.contact_list.push(new Contact('Jane','Doe'));
}
ContactManager.prototype.showMenu = function () {
    if (this.first_time){
        console.log('Welcome to your contacts manager!');
        this.first_time = false;
    }
    for (let i=0; i < this.options.length; i++){
        console.log(this.options[i])
    }
};
ContactManager.prototype.showContacts = function(){
    console.log("Here's the list all yours contact:");
    for (let i=0; i<this.contact_list.length; i++){
        console.log(this.contact_list[i].print());
    }
};
ContactManager.prototype.addContact = function(){
    let name = prompt('Enter first name');
    let last_name = prompt('Enter last name',);
    if ((name !== "" && last_name !== "") && (name !== null && last_name !== null)){
        this.contact_list.push(new Contact(name, last_name));
        console.log('Contact added');
    }else {
        console.log('You have cancel or no enter a value');
    }

};

function Contact(name, last_name) {
    this.name = name;
    this.last_name = last_name;
}
Contact.prototype.print = function () {
    return 'Last name: '+ this.last_name +', first name: ' + this.name;
};
const contactManager = new ContactManager();
var option_selected = 3;
while (option_selected !== '0'){
    contactManager.showMenu();
    option_selected = prompt('select a option');
    if (option_selected === '1'){
        contactManager.showContacts();
    }
    if (option_selected === '2') {
        contactManager.addContact();
    }
}
