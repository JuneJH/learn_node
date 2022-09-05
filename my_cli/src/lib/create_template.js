const fs = require('fs');
const handlebars = require('handlebars');
module.exports = async (name) => {
    compile(name,`./src/_test_/${name}.test.js`,"./src/templates/bubble.test.js.hbs" )
    compile(name,`./src/${name}.js`,"./src/templates/bubble.js.hbs")

    function compile(meta, filePath, templatePath) {
        
        if (fs.existsSync(templatePath)) {
            const content = fs.readFileSync(templatePath).toString();
            const result = handlebars.compile(content)(meta);
            fs.writeFileSync(filePath, result);
        }
        console.log((`${filePath} 创建成功`))
    }
}

// jj-cli createRouter './src/views' './src/router.js' './template/router.js.hbs'
// jj-cli createRouter './src/views' './src/App.vue' './template/App.vue.hbs'