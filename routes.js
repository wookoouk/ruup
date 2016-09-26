const express = require('express');
const router = express.Router();
const Monitors = require('./controllers/monitors');

router.route('/')
    .get((req, res) => res.render('index'));

router.route('/me')
    .get(Monitors.mine);

router.route('/new')
    .get(Monitors.new)
    .post(Monitors.newPost);
router.route('/site/:id')
    .get((req, res)=>Monitors.show);
router.route('/site/:id/edit')
    .get((req, res)=>Monitors.edit);
router.route('/site/:id/delete')
    .get((req, res)=>Monitors.delete);

router.route('/badge/:site')
    .get((req, res)=> {
        var site = req.params.site;
        var badge = require('./lib/badge');
        badge.generate(site, Math.floor(Math.random() * 100) + 1 + '%').then(svg=> {
            res.send(svg);
        }).catch(err=> {
            console.log(err)
        })
    });


module.exports = router;