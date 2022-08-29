var express = require('express');
var app = express();
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');
//增加靜態檔案的路徑
app.use(express.static('public'))

// 增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


//路由
app.get('/',function(req,res){
    res.send('你現在進入的東西是到首頁');
    console.log('有人造訪首頁！')
    
})

app.get('/search',function(req,res){
    res.render('search');
})
app.post('/searchList',function(req,res){
    console.log(req.body);
    //轉址
    // res.redirect('search');
    res.render('search');
})

// 監聽 port
var port = process.env.PORT || 3000;
app.listen(port);