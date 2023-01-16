

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


router.get('/test', async function (req, res, next) {
    res.render('pages/apitest', {title: 'apitest'});
});
/* GET home page. */
router.get('/', async function (req, res, next) {
    // res.render('index', { title: 'Express' });


    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "You: What have you been up to?\nFriend: Watching old movies.\nYou: Did you watch anything interesting?\nFriend:",
        temperature: 0.5,
        max_tokens: 4000,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
        stop: ["You:"],
    });

    console.log('response----',response.data.choices[0].text);
      res.send( '2223');

    // let msg =     await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: " \n \n ",
    //     temperature: 0.7,
    //     max_tokens: 4000,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    // });
    // console.log(msg);
    // res.send(msg);

});



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

module.exports = router;
