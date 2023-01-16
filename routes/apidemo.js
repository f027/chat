

// import { Configuration, OpenAIApi } from "openai";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-nzotoj7uNoUKh3tDk16xGrpd",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);


var express = require('express');
var router = express.Router();



var api=  function(val){
    console.log('api1');
    console.log(val);
    return 'api1 msg22';
}


router.get('/', async function (req, res, next) {
    res.render('pages/apidemo', {title: 'apitest'});
});
/* GET home page. */



//使用POST API
router.get('/wukong1',   (req, res) => {

    try {
        // const data = req.body.message
        const data = req.query.message
        console.log('收到数据', data);
        // res.send('Data received:' + data)

        openai.createCompletion({
            model: "text-davinci-003",
            prompt: data,
            temperature: 0.5,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            stop: ["You:"],
        }).then((response) => {
            console.log('response----',response );
            try {
                var msg = response.data.choices[0].text;
                console.log(msg);
                res.send(msg);
            } catch (e) {

                res.send('error')
            }
        }).catch((error) => {
            console.log(error);
            res.send('error:'+ error)
        });
    } catch (e) {
        res.send('error')
    }

})



//使用POST API
router.post('/wukong2',   (req, res) => {

    try {
        // const data = req.body.message
        const data = req.query.message
        console.log('收到数据', data);
        // res.send('Data received:' + data)

        openai.createCompletion({
            model: "text-davinci-003",
            prompt: data,
            temperature: 0.5,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            stop: ["You:"],
        }).then((response) => {
            console.log('response----',response );
            try {
                var msg = response.data.choices[0].text;
                console.log(msg);
                res.send(msg);
            } catch (e) {

                res.send('error')
            }
        }).catch((error) => {
            console.log(error);
            res.send('error:'+ error)
        });
    } catch (e) {
        res.send('error')
    }

})

module.exports = router;
