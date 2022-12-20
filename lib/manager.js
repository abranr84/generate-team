const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officerNumber = officeNumber;
        this.title = 'Manager';
    }

    getOfficeNumber() {
        return this.officerNumber;
    }
}

module.exports = Manager;