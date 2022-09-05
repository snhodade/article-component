$flag = -1;
  
        $("div.btn").hover(
            function () {
                $("div.popup").attr("style", "display:block");
            },
            function () {
                if ($flag == -1) {
                    $("div.popup").attr("style", "display:none");
                }
            }
        );
  
        $("div.btn").click(function () {
            $flag = 1;
        });