import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.static('dist', {
    setHeaders: (res, path) => {
        // Set cache for 1 hour for all files
        if (path.endsWith('.css')) {

        }
        else {

            res.setHeader('Link', '</index.css>; rel=preload; as=style;');
        }

    }
}));




app.listen(PORT, (err) => {
    console.log(`Serving on http://localhost:${PORT}`);
});