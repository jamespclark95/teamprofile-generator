const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, school) {
        super (name, id, email);
        this.officeNumber = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern'
    }
    getHtml() {
        return `
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${this.name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <a mailto="${this.email}" class="list-group-item">Email Address: ${this.email}</a>
                <li class="list-group-item">ID: ${this.school}</li>
            </ul>
            </div>
        </div>`
    }
}

module.exports = Intern