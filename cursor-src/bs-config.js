// used by lite-server / `npm start`

module.exports = {
    server: {
      baseDir: "./dist"
    },
    files: ["./dist/*.*"],
    port: 3000,
    open: "local",
    startPath: "/index.html"
  };