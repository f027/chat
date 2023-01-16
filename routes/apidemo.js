

// import { Configuration, OpenAIApi } from "openai";
const apikey1 ='apikey1'
const apikey2 ='apikey2'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    organization: "org-nzotoj7uNoUKh3tDk16xGrpd",
    apiKey: apikey2,
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
        console.log('收到GET数据: ', data);
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
            // console.log('response----',response );
            try {
                var msg = response.data.choices[0].text;
                console.log('输出数据: ',msg);
                res.send(msg);
            } catch (e) {
                console.log('error,输出error1: ',e);
                res.send(e)
            }
        }).catch((e) => {
            console.log('error,输出error2: ',e);
            res.send(e)
        });
    } catch (e) {
        console.log('error,输出error3: ',e)
        res.send(e)
    }

})



//使用POST API
router.post('/wukong2',   (req, res) => {

    try {
        //post body
        const data = req.body.message
        //get query
        // const data = req.query.message
        console.log('收到POST数据: ', data);
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
            // console.log('response----',response );
            try {
                var msg = response.data.choices[0].text;
                console.log('输出数据: ',msg);
                res.send(msg);
            } catch (e) {
                console.log('error,输出error1: ',e);
                res.send(e)
            }
        }).catch((e) => {
            console.log('error,输出error2: ',e);
            res.send(e)
        });
    } catch (e) {
        console.log('error,输出error3: ',e)
        res.send(e)
    }

})

module.exports = router;
