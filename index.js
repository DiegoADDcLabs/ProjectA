// CLASS FROM APRIL 13, 2023
// WORKING WITH NODEJS AND POSTMAN


const express = require ('express')

const app = express()

app.use(express.json())


const courses = [
    {id:1, name:'Python'},
    {id:2, name:'JavaScript'},
    {id:3, name:'C#'}

]




app.get('/', (req, res) => {res.send('Hello World 123-ABC')}
)



// The list of courses
app.get('/api/courses', (req, res) => {
    res.send(courses)
})


// Show a specific course
app.get('/api/courses/:id', (req, res) => {
    // find the value that correspont to that id
    const course = courses.find(c => c.id===parseInt(req.params.id))
    // if the value is not found show the error
    if(!course) res.status(404).send('The course is not found with the given ID') 
    // returnn the course
    res.send(course)
})


/*
app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
})
*/



// api/courses/1
//app.get('/api/courses/:id', (req, res) => {
//    res.send(req.params.id)
//})

/*
// api/courses/:year/:month
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params)
})
*/

// api/courses/:year/:month
app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.query)
})  // 2018/01?sortBy=name



// Define another port with an environmental variable
//const port = process.env.PORT || 3000

// Define a port
app.listen(3000, () => console.log(`Listening on port 3000`))

// ex PORT=5000 
// env:PORT=5000






//app.post()

// Create a new course, we need to provide id and name

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})




//app.put()
// modify a specific course given id

app.put('/api/courses/:id', (req, res) => {
    // find the value that correspont to that id
    const course = courses.find(c => c.id===parseInt(req.params.id))
    // if the value is not found show the error
    if(!course) res.status(404).send('The course is not found with the given ID') 
    // returnn the course
    course.name = req.body.name
    res.send(course)
})



//app.delete()
// remove a course with an id

app.delete('/api/courses/:id', (req, res) => {
    // find the value that correspont to that id
    const course = courses.find(c => c.id===parseInt(req.params.id))
    // if the value is not found show the error
    if(!course) res.status(404).send('The course is not found with the given ID') 
    // returnn the course
    const index = courses.indexOf(course)
    // we give the index and the numbers of elements that we want to delete
    courses.splice(index, 1)
    
})

