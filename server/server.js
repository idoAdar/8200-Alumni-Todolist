const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/routes');
const PORT = process.env.PORT || 5000;
const URI = `mongodb+srv://adar:239738416@cluster0.21uxe.mongodb.net/todos-8200`

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));

// Main Route:
app.use('/api', routes);

// Error Handling:
app.use((error, req, res, next) => {
    throw new Error(`Error ${error.code || 500}: ${error.message || 'An unknown error occurred'}`);
});

// Database Connection:
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
})