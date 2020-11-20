const port = 3001;
const app = require('./src/app');


app.listen(port, () => {
    console.log(`App running @  http://localhost:${port}`)
});