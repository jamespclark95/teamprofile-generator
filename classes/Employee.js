class Employee {
    constructor(name, email, id){
    this.name = name;
    this.email = email;
    this.id= id;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
    getHtml() {
        return `
        <div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${this.name}<br /><br />Employee</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <a mailto="${this.email}" class="list-group-item">Email Address: ${this.email}</a>
            </ul>
            </div>
        </div>`
    }
}

module.exports = Employee

