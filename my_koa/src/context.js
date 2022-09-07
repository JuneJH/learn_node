module.exports = {

    get body (){
        return this._body;
    },

    set body (val){
        this._body = val;
    },
    get url(){
        return this.req.url;
    },
    get method(){
        return this.req.method.toLocaleLowerCase();
    }
}