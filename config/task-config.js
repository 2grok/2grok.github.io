module.exports = {
    browserSync: {
        server: {
            baseDir: "public"
        }
    },

    javascripts: {
        entries: {
            app: ["./app.js"]
        },
        extensions: ["js", "json"],
        extractSharedJs: false,
        hot: "enabled",
        // [BEGIN] added
        loaders: [
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
            // { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader' }
        ],
        alias: {
            // materialize-css is battle-tested with jQuery of specific version
            // jQuery: "materialize-css/node_modules/jquery/dist/jquery.js"

            jQuery: 'jquery/dist/jquery.js' //,
                // $: '../../node_modules/jquery/dist/jquery'
        }
        // [END] added
    },

    stylesheets: {
        autoprefixer: {
            browsers: ["last 3 version"]
        },
        sass: {
            indentedSyntax: true,
            includePaths: [
                "./node_modules/normalize.css",
                "./node_modules/materialize-css/bin"
                // "./node_modules/materialize-css/sass"
            ]
        },
        extensions: ["sass", "scss", "css"]
    },

    html: {
        dataFile: "data/global.json",
        htmlmin: {
            collapseWhitespace: true
        },
        extensions: ["html", "json"],
        excludeFolders: ["layouts", "shared", "macros", "data"]
    },

    images: {
        extensions: ["jpg", "png", "svg", "gif"]
    },

    fonts: {
        extensions: ["woff2", "woff", "eot", "ttf", "svg"]
    },

    svgSprite: {
        extensions: ["svg"]
    },

    production: {
        rev: true
    } //,

    // // https://github.com/Zevran/materialize-loader
    // module: {
    //     loaders: [
    //         test: /\.(eot|svg|ttf|woff|woff2)$/,
    //         loader: 'file-loader'
    //         //     { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    //         //     { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file" }
    //     ]
    // }
}