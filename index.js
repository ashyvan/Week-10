const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const app = express();
app.use(express.json());
app.use(cors);
// const port = 3000;



app.get('/api/todoList', (req, res) => {
    res.json({
        data: ['wash the car', 'go the library', 'clean the bathrooms']
    });
}); //represents one http endpoint

// app.post();
// app.put();
// app.delete();

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`)
// });


exports.app = functions.https.onRequest(app);















// const functions = require('firebase-functions');
// const express = require('express');
// const cors = require('cors')({origin: true});
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// app.use(express.json()); //
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(cors);

// // const router = require('./routes');
// // app.use('/api', router); //baseurl/api


// app.get('/api/todoList', (req, res) => {
//     res.json({
//         data: ['wash the car', 'go to the library', 'clean the bathroom']
//     });
// });

// // app.post();

// // app.put();

// // app.delete();

// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`)
// // });

// exports.app = functions.onRequest(app);