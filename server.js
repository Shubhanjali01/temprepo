import express from 'express'

const app = express();
app.get('/',(req,res)=>{
    res.send('Server is ready');
});

// get list of 5 jokes
app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            id : 1,
            title:'A joke',
            content: 'This is a joke'
        },
        {
            id : 2,
            title:'B joke',
            content: 'This is B joke'
        },
        {
            id : 3,
            title:'C joke',
            content: 'This is C joke'
        },
        {
            id : 4,
            title:'D joke',
            content: 'This is D joke'
        },
        {
            id :5,
            title:'E joke',
            content: 'This is E joke'
        },

    ];
    res.send(jokes);
})
const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log('Server at http://localhost:${port}');
});