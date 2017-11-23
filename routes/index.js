var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.sendFile(path.join(__dirname, '../dist/index.html'));




});



/*
* function getCreatorTemplate(creator){
*   return creator + ' is creator';
* }
*
* function getCreatorsTemplate(creators){
*   var res = '';
*   for(creator in creators){
*       res += getCreatorTemplate(creator);
*   }
*   return res;
* }
*
* */

module.exports = router;
