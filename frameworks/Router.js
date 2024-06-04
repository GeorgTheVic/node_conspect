module.exports = class Router {
    constructor() {
        this.endpoints = {}
    }

    request(metod = 'GET', path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path]

        if (endpoint[metod]) {
            throw new Error(`[${metod}] по этому адресу ${path} уже существует`)
        }

        endpoint[metod] = handler

        // emitter.on(`[${path}]:[${metod}]`, (req, res) => {
        //     handler(req, res)
        // })
    }

    get(path, handler) {
        this.request('GET', path, handler)
    }

    post(path, handler) {
        this.request('POST', path, handler)
    }

    put(path, handler) {
        this.request('PUT', path, handler)
    }

    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}