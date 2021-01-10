const fs = require('fs')
const path = require('path')
const uuid = require('uuidv4')


class Route {

    constructor(from, to, time) {
        this.from = from
        this.to = to
        this.time = time
        this.id = uuid()
    }

    toJSON() {
        return {
            from: this.from,
            to: this.to,
            id: this.id
        }
    }

    async save() {
        const routes = await Route.getAll()
        routes.push(this.toJSON)
        return new Promise((resolve, reject) => {
            fs.writeFile(path.join(__dirname, '..', 'routes'),
            JSON.stringify(routes),
            err => {
                if(err) reject(err)
                resolve()
            })
        })

    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'data', 'routes'),
            'utf8',
            (err, content) => {
                if(err) reject(err)
                resolve(JSON.parse(content))
            } ) 
        })
    }
}


module.exports = Route