import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.static('dist', {
    setHeaders: (res, path) => {
        // Set cache for 1 hour for all files
        if (path.endsWith('.css')) {
            res.setHeader('Cache-Control', 'public, max-age=3600, immutable');

        }
        else {

            res.setHeader('Cache-Control', 'public, max-age=0');
        }

    }
}));




app.listen(PORT, () => {
    console.log(`Serving on http://localhost:${PORT}`);
});