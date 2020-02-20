function getURL(){
    if(process.env.NODE_ENV === 'production'){
        return 'mongodb+srv://jia0:zx45zx45@cluster0-uokwo.mongodb.net/test_db?retryWrites=true&w=majority'
    }else{
        return 'mongodb+srv://jia0:zx45zx45@cluster0-uokwo.mongodb.net/test_db?retryWrites=true&w=majority'
    }
}

module.exports = getURL;




