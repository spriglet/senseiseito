/*
 * Module dependencies
 */
var express = require('express')
var app = express()
app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
// static pages 
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})

app.listen(app.get('port'));