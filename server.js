var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var artilceOne={
title:"IMAD | Rishit Tandon",
heading:"This is artcile 3",
content:"This is article one.This is article one.This is artcile one",
};

function createTemplate(data)
{ 
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    
  var htmlTemplate=`
<html>

<head>
    
<link href="/ui/style.css" rel="stylesheet"/>

<title>
{title}
</title>

</head>

<body>
    
<h1>
{heading}
</h1>
<p>
{content}
</p>


<script type="text/javascript" src="/ui/main.js">
        </script>
</body>

</html>
`;
    return htmlTemplate;
}



app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res)
{
    res.send(createTemplate(articleOne))
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
