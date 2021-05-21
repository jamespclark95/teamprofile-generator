const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super (name, email, id);
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return 'Engineer'
    }
    getHtml() {
        return `
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${this.name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <a mailto="${this.email}" class="list-group-item">Email Address: ${this.email}</a>
                <li class="list-group-item">ID: ${this.gitHub}</li>
            </ul>
            </div>
        </div>`
    }
}

module.exports = Engineer