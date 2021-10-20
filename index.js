const express = require('express');

const cors = require('cors');
const app = express();
const axios = require('axios');
app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(express.json())

const response = {};

app.post('/event', async (req, res)=>{

    const {type, data} = req.body
    if (type === 'commentCreat'){
     const status = data.content.includes('orange') ? 'rejected' : 'approve';
     
     await axios.post('http://localhost:5000/event',{
        type: 'commentModerate',
        data: {
            id : data.id,
            content : data.content,
            postId : data.postId, 
            status 
            
        }
    
    })
     
    }
 res.send({})
})

 app.listen(4200, () => {
     console.log(`Server started on 4200`);
 });

