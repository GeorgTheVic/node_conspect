module.exports = (req, res) => { //? иногда ещё можно вызвать next, чтобы middlewere вызывались по цепочке
    res.send = (data) => {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })

        res.end(JSON.stringify(data))
    }
}

