const express = require('express');
const userRouter = require('./routes/user.routes')

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}. After that i will fuck your cat imidiatly`));
