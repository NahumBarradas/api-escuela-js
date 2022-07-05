const logger = ((request, response, next) => {
    console.log(request.method)
    console.log(response.path)
    console.log(response.body)
    console.log('-----')
    next()
})

module.exports = logger