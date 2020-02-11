<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://brobin.github.io/hacker-bootstrap/css/hacker.css" rel="stylesheet">
    <title>Document</title>
</head>

<body>
    <div class="container">
        <div class="row" style="margin-top: 5%;">
            <div class="col-md-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Victim List</h3>
                    </div>
                    <div class="panel-body">
                        <div class="list-group">
                            <a href="#" class="list-group-item active">
                                <h4 class="list-group-item-heading">List group item heading</h4>
                                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus.
                                    Maecenas sed diam eget risus varius blandit.</p>
                            </a>
                            <a href="#" class="list-group-item">
                                <h4 class="list-group-item-heading">List group item heading</h4>
                                <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus.
                                    Maecenas sed diam eget risus varius blandit.</p>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">Info Victim</h3>
                    </div>
                    <div class="panel-body">

                        <div class="row">
                            <div class="col-md-12">

                                </textarea>
                                <div class="well" style = "overflow: scroll!important; height: 500px">
                                    <?php

                                        echo file_get_contents('data/tri20cm30phut/http_request.txt');
                                    ?>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>