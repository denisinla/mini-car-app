"use strict";
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            expand: true,
            cwd: "public/images",
            src: ["**/*.png"],
            dest: "public/images/compressed",
            ext: ".png"
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: "public/images",
            src: ["**/*.jpg"],
            dest: "public/images/compressed",
            ext: ".jpg"
          }
        ]
      }
    },
    sass:{
      global:{
        options:{
          sourceMap: false,
          sourceComments: false,
          outputStyle: "expanded"
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ["**/*.scss"],
          dest: "public/css",
          ext: ".css"
          }]
      }
    },
    watch:{
      options:{
        livereload: true
      },
      site:{
        files: ["public/*.html", "public/css/*.css", "public/images/**/*.{png,jpg,jpeg,gif}"]
      },
      css:{
        files: ["src/scss/**/*.scss"],
        tasks: ["sass"]
      }
    },
    nodemon: {
      dev: {
        script: "server/web.js"
      }
    },
    concurrent: {
      build: {
        tasks: ["nodemon","watch"],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // development
  grunt.registerTask("dev", ["concurrent:build"]);
  // production ready build
  grunt.registerTask("build", ["clean","copy"]);
  // squeeze images
  grunt.registerTask("compress", ["imagemin"]);
};