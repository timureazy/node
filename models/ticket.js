const fs = require('fs')
const {uuid} = require('uuidv4')
const path = require('path')

class Ticket {

    constructor(buyerName, buyerEmail, buyerSurname, from, to) {
        this.buyerName = buyerName
        this.buyerEmail = buyerEmail
        this.buyerSurname = buyerSurname
        this.from = from
        this.to = to
        this.price = Math.floor((Math.random() * (10000-1000)) + 1000)
        this.id = uuid()
    }

    toJSON() {
        return {
            buyerName: this.buyerName,
            buyerEmail: this.buyerEmail,
            buyerSurname: this.buyerSurname,
            from: this.from,
            to: this.to,
            price: this.price,
            id: this.id
        }
    }

    async save() {
        const ticket = await Ticket.getAll()
        ticket.push(this.toJSON())
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'data', 'ticket.json'), JSON.stringify(ticket),
            (err) => {
                if(err) reject(err)
                resolve()
            })
        })
        
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'ticket.json'), 
            'utf8',
            (err, content) => {
                if(err) reject(err)
                resolve(JSON.parse(content))
            })
        })
    }

    static async getById(id) {
        const tickets = await Ticket.getAll()
        return tickets.find(ticket => ticket.id === id)
    }

}

module.exports = Ticket