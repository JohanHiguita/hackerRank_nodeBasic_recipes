var recipes = require('../recipes.json');
var router = require('express').Router();
const _ = require("lodash");


router.get('/', function(req, res, next) {
    
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    if(!page || !limit) {
        res.json(recipes);
    }
    console.log("page", page);
    console.log("limit", limit);
    console.log(typeof recipes);
    
    //make a validation for limit and page
    const pagination = _.chunk(recipes, 3);
    const chunkedRecipes = pagination[page-1];

    console.log(chunkedRecipes);
    res.json(chunkedRecipes);

  });

module.exports = router;

