const prueba_test = async function(req, res){
    //console.log('Hola test');
    res.status(200).send({message: 'HOLA TEST'});
}

module.exports = {
    prueba_test
}