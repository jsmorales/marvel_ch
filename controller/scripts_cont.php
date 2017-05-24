<?php 
    /*
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);*/

    class scripts_pag {        

        public $arr_scripts = [];
        public $arr_css = [];

        public function creaArrayScripts(){


            $this->arr_scripts = [

                "jQuery"=>"bower_components/jquery/dist/jquery.js",
                "Bootstrap"=>"bower_components/bootstrap/dist/js/bootstrap.js",  
            ];

        }

        public function creaArrayCss(){


            $this->arr_css = [

                "bootstrap"=>"bower_components/bootstrap/dist/css/bootstrap.min.css",
                "style"=>"bower_components/bootstrap/dist/css/style.css",
                //"bootstrap theme"=>"bower_components/bootstrap/dist/css/bootstrap-theme.min.css",                
            ];

        }
        
        public function standar(){

            $this->creaArrayScripts();

            $paths = "";

            foreach ($this->arr_scripts as $key => $value){
                
                $paths .= "<script src='../".$value."'></script>\n";
                $paths .= "<!-- ".$key." -->\n";

            }

            echo $paths;
        }

        public function standarCss(){

            $this->creaArrayCss();

            $paths = "";

            foreach ($this->arr_css as $key => $value){
                
                $paths .= "<link href='../".$value."' rel='stylesheet'>\n";
                $paths .= "<!-- ".$key." -->\n";

            }

            echo $paths;
        }

        public function special($arr_script){

            $this->standar();

            for ($i=0; $i < sizeof($arr_script); $i++) { 
                # code...
                echo '<script src="../js/'.$arr_script[$i].'"></script>';
            }
        }

    //------------------------------------------------------------------------------------------------------
    }

 ?>
