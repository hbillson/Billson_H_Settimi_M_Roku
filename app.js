const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5050;
const history = require('connect-history-api-fallback');

express.json();
express.urlencoded({
    extended: true
});

// must specify options hash even if no options provided!
var phpExpress = require('php-express')({

	// assumes php is in your PATH
	binPath: 'php'
  });
  
  // set view engine to php-express
  app.set('views', 'public');
  app.engine('php', phpExpress.engine);
  app.set('view engine', 'php');
  
  // routing all .php file to php-express
  app.all(/.+\.php$/, phpExpress.router);

app.use(express.static(path.join(__dirname, "public")));
app.use("/", require("./routes/index"));


const staticFileMiddleware = express.static(path.join(__dirname + 'public'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose:true
}));
app.use(staticFileMiddleware);


app.get('/', function(req, res) {
    res.render(path.join(__dirname + '/index.html'));
  });

app.listen(port, () => {
	console.log(`app is running on ${port}`);
})

// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const postcss = require('gulp-postcss');
// const nano = require('cssnano');
// const prefix = require('autoprefixer');
// const imagemin = require("gulp-imagemin");

// function compile() {
//     return (
//         gulp
//             .src("sass/**/*.scss")

//             // Use sass with the files found, and log any errors
//             .pipe(sass())
//             .on("error", sass.logError)
//             .pipe(postcss([prefix(), nano()]))

//             // What is the destination for the compiled file?
//             .pipe(gulp.dest("css"))
//     );
// }

// function squashImages() {
//     gulp.src('images/**')
//         .pipe(imagemin())
//         .pipe(gulp.dest('images'))
// }

// function watch() {
//     gulp.watch("sass/**/*.scss", compile);
//     gulp.watch("images/**", squashImages);
// }

// // Expose the task by exporting it
// // This allows you to run it from the command line (CLI)

// exports.watch = watch;
// exports.squash = squashImages;
