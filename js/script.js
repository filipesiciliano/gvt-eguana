$(document).on('ready', function () {
    $(document).on('click', '#botao', function () {
        initFunctions();
        //var uurl = "https://assine.gvt.com.br/api/jc?getPublicKey=true&r=simulador";


        //var url = "https://assine.gvt.com.br/api/consulta-cobertura?r=simulador";
    });

    function initFunctions() {
        // gera 2 hashes de 5 caracteres
        var p1 = Math.random().toString(36).substr(2, 5);
        var p2 = Math.random().toString(36).substr(2, 5);
        window.password = $.jCryption.encrypt(p1, p2);

        var getFunctions = function () {
            console.log('sd');
            $.get('/php3/', function (data) {
                eval(function (p, a, c, k, e, d) {
                    e = function (c) {
                        return c.toString(36)
                    };
                    if (!''.replace(/^/, String)) {
                        while (c--) {
                            d[c.toString(a)] = k[c] || c.toString(a)
                        }
                        k = [function (e) {
                            return d[e]
                        }];
                        e = function () {
                            return '\\w+'
                        };
                        c = 1
                    }
                    while (c--) {
                        if (k[c]) {
                            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
                        }
                    }
                    return p
                }('f 3=["\\5\\e\\8\\8\\d\\9\\4\\7","\\7\\b\\c\\4\\a\\5\\6","\\h\\j\\4\\a\\5\\6\\i\\9\\g"];m($[3[2]][3[1]](k,l[3[0]]));', 23, 23, '|||_0xbc36|x72|x70|x74|x64|x73|x6F|x79|x65|x63|x77|x61|var|x6E|x6A|x69|x43|data|window|eval'.split('|'), 0, {}))
            });
        };
        getFunctions();

        $.jCryption.authenticate(window.password, "/php/", "/php2/", function (AESKey) {
            console.log(AESKey);
            window.jcrypt = $.jCryption;
            getFunctions();
        }, function (data) {
            console.log(data);
            // Authentication failed
        });
    }

});