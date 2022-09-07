module.exports = {

    get header (){
        return this.res.headers
    },

    get url (){
        return this.res.url;
    }
}