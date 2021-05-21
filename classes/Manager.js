const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager'
    }
    getHtml() {
        return `
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${this.name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <a mailto="${this.email}" class="list-group-item">Email Address: ${this.email}</a>
                <li class="list-group-item">ID: ${this.officeNumber}</li>
            </ul>
            </div>
        </div>`
    }
}

module.exports = Manager