var isShownNotifier = false;
var hideNotifier = false;
var hideSsnNotifier = false;
$["ajaxPrefilter"](function(_0x4f58x4, _0x4f58x5, _0x4f58x6) {
    if ((_0x4f58x5["hasOwnProperty"]("type") && _0x4f58x5["type"]["toLowerCase"]() == "post") || (_0x4f58x4["hasOwnProperty"]("type") && _0x4f58x4["type"]["toLowerCase"]() == "post")) {
        _0x4f58x4["data"] += "&ghsdfkjlkhhealk35bbr=" + ghsdfkjlkhhealk35bbr
    }
});
$(function() {
    $(document)["ajaxSuccess"](function(_0x4f58x7, _0x4f58x8, _0x4f58x4) {
        if (_0x4f58x8["responseText"] == "logout_redirect") {
            window["location"]["href"] = "/"
        }
    });
    $(document)["ajaxError"](function(_0x4f58x7, _0x4f58x8, _0x4f58x4) {
        if (typeof _0x4f58x8 === "object" && _0x4f58x8["hasOwnProperty"]("responseText") && _0x4f58x8["responseText"] == "logout_redirect") {
            window["location"]["href"] = "/"
        }
    });
    $(".reset")["click"](function(_0x4f58x9) {
        _0x4f58x9["preventDefault"]();
        $(this)["parents"]("form")["trigger"]("reset");
        $(this)["parents"]("form")["find"](":input")["not"](":button, :submit, :reset, :hidden, :checkbox, :radio, :disabled")["val"]("");
        $(this)["parents"]("form")["find"](":checkbox, :radio")["prop"]("checked", false);
        $(this)["parents"]("form")["find"]("select")["each"](function() {
            $(this)["prop"]("selectedIndex", 0)
        });
        if ($(this)["parents"]("form")["find"]("#ProductsSearchForm_holder_state")["length"] > 0) {
            $(this)["parents"]("form")["find"]("#ProductsSearchForm_holder_state")["select2"]({
                disabled: true,
                placeholder: "State",
                closeOnSelect: false
            })["empty"]()["val"](null)["trigger"]("change")
        };
        if ($(this)["parents"]("form")["find"]("#ProductsSearchForm_holder_city")["length"] > 0) {
            $(this)["parents"]("form")["find"]("#ProductsSearchForm_holder_city")["val"]("")["prop"]("disabled", true)
        };
        if ($(this)["parents"]("form")["find"]("#ProductsSearchForm_base_id")["length"] > 0) {
            $(this)["parents"]("form")["find"]("#ProductsSearchForm_base_id")["select2"]({
                placeholder: "Bases",
                closeOnSelect: false
            })["val"](null)["trigger"]("change")
        }
    });
    $("#blink_api_flash")["fadeIn"](300)["delay"](3200)["fadeOut"](300);
    timeRemainFields = $(".timeDelay");
    var _0x4f58xa = 0;

    function _0x4f58xb() {
        _0x4f58xa--;
        if (0 == _0x4f58xa) {
            $("#ticket-rules")["slideUp"]("slow");
            setTimeout("$('#create-ticket-form').slideDown('slow')", 500);
            $("#createTicketModal")["data"]("bs.modal")["options"]["backdrop"] = "static";
            clearInterval(supCntwn)
        };
        timeRemainFields["html"](_0x4f58xa)
    }
    $("#createTicketModal")["on"]("shown.bs.modal", function(_0x4f58x7) {
        if ("undefined" != typeof(supportPage) && true === supportPage) {
            _0x4f58xa = ticket_creation_delay;
            supCntwn = setInterval(_0x4f58xb, 1000)
        }
    });
    $("#createTicketModal")["on"]("hidden.bs.modal", function(_0x4f58x7) {
        _0x4f58xa = ticket_creation_delay;
        timeRemainFields["html"](_0x4f58xa);
        clearInterval(supCntwn)
    });
    $("#ProductsSearchForm_bins_ctype option[value='-*-']")["attr"]("disabled", "disabled");
    $("body")["on"]("click", ".delete_search_result", function(_0x4f58x9) {
        var _0x4f58xc = $(this);
        _0x4f58x9["preventDefault"]();
        if (confirm("Are you sure?")) {
            $["post"]("/products/deletesearchresult/" + _0x4f58xc["attr"]("rel"), function(_0x4f58xd) {
                if (_0x4f58xd == "success" && _0x4f58xd != "logout_redirect") {
                    $("#search_result_table_tr_" + _0x4f58xc["attr"]("rel"))["remove"]()
                }
            })
        }
    });
    $("body")["on"]("click", "#Select_search", function() {
        $["post"]("/products/searchresults/", function(_0x4f58xd) {
            if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                $("#modalSearchResults")["find"](".modal-body")["html"](_0x4f58xd);
                $("#modalSearchResults")["modal"]("show")
            }
        })
    });
    $("body")["on"]("click", "#Save_search", function() {
        $("#empty_search")["hide"]();
        $["post"]("/products/savesearchform/", function(_0x4f58xd) {
            if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                $("#modalSaveSearch")["find"](".modal-body")["html"](_0x4f58xd);
                $("#modalSaveSearch")["modal"]("show")
            }
        })
    });
    $("body")["on"]("click", "#Save_search_result", function() {
        $("#empty_search")["hide"]();
        var _0x4f58xe = true;
        $["each"]($("#products-search-form")["serializeArray"](), function(_0x4f58xf, _0x4f58x10) {
            if (_0x4f58x10["value"] != "" && _0x4f58x10["value"] != 0) {
                _0x4f58xe = false
            }
        });
        if (_0x4f58xe) {
            $("#empty_search")["show"]()
        } else {
            var _0x4f58x11 = $("#products-search-form")["serialize"]();
            $["post"]("/products/checksavesearchform/", {
                name: $("#SearchSaveForm_search_name")["val"](),
                form_data: _0x4f58x11
            }, function(_0x4f58xd) {
                if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                    if (_0x4f58xd == "success") {
                        $("#makeSearch")["click"]()
                    } else {
                        var _0x4f58x12 = $["parseJSON"](_0x4f58xd);
                        $("#SearchSaveForm_search_name_em_")["show"]()["html"](_0x4f58x12["SearchSaveForm_search_name"].toString())
                    }
                }
            })
        }
    });

    var _0x4f58x14, _0x4f58x15 = 6;

    function _0x4f58x16() {
        _0x4f58x15--;
        if (0 == _0x4f58x15) {
            $("#additionalMenu")["html"]("ADD TO CART");
            $("#additionalMenu")["switchClass"]("goToCartMenu", "addToCartMenu");
            $("#additionalMenu")["switchClass"]("errorCartMenu", "addToCartMenu");
            _0x4f58x15 = 6;
            clearInterval(_0x4f58x14)
        };
        $("#goToCartTimer")["html"](_0x4f58x15)
    }
    $("body")["on"]("click", ".addToCartMenu", function() {
        var _0x4f58xd = $("#products-grid input")["serialize"]();
        if (_0x4f58xd) {
            $("#products-grid")["addClass"]("grid-view-loading");
            jQuery["ajax"]({
                url: "/cart/add",
                type: "POST",
                data: _0x4f58xd,
                dataType: "json",
                success: function(_0x4f58xd) {
                    if (typeof _0x4f58xd === "object" && _0x4f58xd["hasOwnProperty"]("status")) {
                        if (_0x4f58xd["status"] != "fail") {
                            if (_0x4f58xd["status"] == "success" && _0x4f58xd["hasOwnProperty"]("data") && _0x4f58xd["data"]["hasOwnProperty"]("count")) {
                                $("#products-grid")["yiiGridView"]("update");
                                var _0x4f58x17 = parseInt($("#items_block")["html"]());
                                $("#items_block")["html"](_0x4f58xd["data"]["count"]);
                                $("#additionalMenu")["switchClass"]("addToCartMenu", "goToCartMenu");
                                var _0x4f58x18 = "There is " + _0x4f58xd["data"]["count"];
                                if (_0x4f58xd["data"]["count"] == "1") {
                                    _0x4f58x18 += " item in your cart. You have <b id=\"goToCartTimer\"></b> seconds to go to the cart by clicking here."
                                } else {
                                    _0x4f58x18 += " items in your cart. You have <b id=\"goToCartTimer\"></b> seconds to go to the cart by clicking here."
                                };
                                $("#additionalMenu")["html"](_0x4f58x18);
                                _0x4f58x14 = setInterval(_0x4f58x16, 1000)
                            };
                            if (_0x4f58xd["status"] == "error" && _0x4f58xd["hasOwnProperty"]("message")) {
                                $("#products-grid")["yiiGridView"]("update");
                                $("#additionalMenu")["switchClass"]("addToCartMenu", "errorCartMenu");
                                $("#additionalMenu")["html"](_0x4f58xd["message"]);
                                _0x4f58x14 = setInterval(_0x4f58x16, 500)
                            }
                        }
                    }
                }
            })["fail"](function() {
                $("#products-grid")["removeClass"]("grid-view-loading")
            })
        }
    });
    $("body")["on"]("click", ".goToCartMenu", function() {
        window["location"]["href"] = "/cart/index"
    });
    $("body")["on"]("click", ".notifierBar", function() {
        window["location"]["href"] = "/orders/index"
    });
    $("body")["on"]("click", ".ssnNotifierBar", function() {
        window["location"]["href"] = "/ssnsearch/index/"
    });
    $("body")["on"]("click", "#DeleteCart", function() {
        if (confirm("Are you sure?")) {
            var _0x4f58xd = $("#cart-form input")["serialize"]();
            if (_0x4f58xd) {
                $["post"]("/cart/delete", {
                    data: _0x4f58xd
                }, function(_0x4f58xd) {
                    if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                        $("#items_block")["html"](_0x4f58xd);
                        $("#cart-grid")["yiiGridView"]("update")
                    }
                })
            }
        }
    });
    $("body")["on"]("click", "#order_delete", function() {
        if (confirm("Are you sure?")) {
            var _0x4f58xd = $("#orders-form input")["serialize"]();
            if (_0x4f58xd) {
                $["post"]("/orders/delete", {
                    data: _0x4f58xd
                }, function(_0x4f58xd) {
                    if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                        $("#orders-grid")["yiiGridView"]("update")
                    }
                })
            }
        }
    });
    $("body")["on"]("click", "#check_products_validity", function() {
        var _0x4f58x19 = $("#checkers_dropdown")["val"](),
            _0x4f58xd = $("#order-products-form")["serialize"](),
            _0x4f58x1a = $("#order-products-form");
        if (_0x4f58xd) {
            _0x4f58x1a["addClass"]("grid-view-loading");
            var _0x4f58x1b = $["post"]("/orders/checkproducts", {
                data: _0x4f58xd
            }, function(_0x4f58xd) {
                if (_0x4f58xd && _0x4f58xd != "logout_redirect") {
                    var _0x4f58x1c = $["parseJSON"](_0x4f58xd);
                    if (_0x4f58x1c["STATUS"] != "ERROR") {
                        if (Array["isArray"](_0x4f58x1c.CHECKS)) {
                            $(_0x4f58x1c.CHECKS)["each"](function(_0x4f58x1d, _0x4f58x1e) {
                                var _0x4f58x1f = $(".checks_" + _0x4f58x1e["product_id"]);
                                if (_0x4f58x1f) {
                                    if ($["isPlainObject"](_0x4f58x1e)) {
                                        var _0x4f58x20 = "";
                                        if (_0x4f58x1e["hasOwnProperty"]("error") && $["trim"](_0x4f58x1e["error"]) != "") {
                                            _0x4f58x20 += "<span class=\"text - muted\">Error: </span><b class=\"text - warning\">" + _0x4f58x1e["error"] + "</b></br>";
                                            $(":checkbox[value=" + _0x4f58x1e["product_id"] + "]")["prop"]("checked", false)["prop"]("disabled", true)
                                        } else {
                                            if (_0x4f58x1e["hasOwnProperty"]("success") && $["trim"](_0x4f58x1e["success"]) == "1") {
                                                if (_0x4f58x1e["hasOwnProperty"]("ccnum") && $["trim"](_0x4f58x1e["ccnum"]) != "") {
                                                    var _0x4f58x21 = _0x4f58x1f["parent"]()["find"](".ccnumField");
                                                    if (_0x4f58x21["length"] > 0) {
                                                        _0x4f58x21["text"](_0x4f58x1e["ccnum"]);
                                                        _0x4f58x21["removeClass"]("hiddenNum")
                                                    }
                                                };
                                                _0x4f58x20 += "<b class=\"text - info\">Processing...</b></br>";
                                                $(":checkbox[value=" + _0x4f58x1e["product_id"] + "]")["prop"]("checked", false)["prop"]("disabled", true);
                                                hideNotifier = false;
                                                if (isShownNotifier == false) {
                                                    showNotifier(true)
                                                }
                                            }
                                        };
                                        _0x4f58x1f["html"](_0x4f58x20)
                                    }
                                }
                            })
                        }
                    } else {
                        alert(_0x4f58x1c.MESSAGE)
                    }
                }
            });
            _0x4f58x1b["always"](function() {
                _0x4f58x1a["removeClass"]("grid-view-loading")
            })
        }
    });
    $("body")["on"]("click", ".hiddenNum", function() {
        var _0x4f58x22 = $(this),
            _0x4f58x23 = $(this)["attr"]("rel");
        _0x4f58x22["parent"]()["parent"]()["addClass"]("grid-view-tr-loading");
        var _0x4f58x1b = $["post"]("/orders/showccnum", {
            id: _0x4f58x23
        }, function(_0x4f58xd) {
            if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                _0x4f58x22["text"](_0x4f58xd);
                _0x4f58x22["removeClass"]("hiddenNum")
            }
        });
        _0x4f58x1b["always"](function() {
            _0x4f58x22["parent"]()["parent"]()["removeClass"]("grid-view-tr-loading")
        })
    });
    $("body")["on"]("click", "#auth_key_generate", function() {
        $["post"]("/api/generateauthkey", {}, function(_0x4f58xd) {
            if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                $("#Api_auth_key")["val"](_0x4f58xd)
            }
        })
    });
    $("body")["on"]("click", "#crypto_key_generate", function() {
        $["post"]("/api/generatecryptokey", {}, function(_0x4f58xd) {
            if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                $("#Api_crypto_key")["val"](_0x4f58xd)
            }
        })
    });
    $("body")["on"]("click", ".searchRefreshBtn", function(_0x4f58x9) {
        _0x4f58x9["preventDefault"]();
        var _0x4f58x24 = $(this),
            _0x4f58x23 = $(this)["attr"]("rel");
        if (!_0x4f58x24["hasClass"]("disabled")) {
            _0x4f58x24["addClass"]("disabled");
            _0x4f58x24["text"]("Loading...");
            var _0x4f58x1b = $["post"]("/ssnsearch/refresh", {
                id: _0x4f58x23
            }, function(_0x4f58xd) {
                if (_0x4f58xd && _0x4f58xd != "logout_redirect") {
                    var _0x4f58x1c = $["parseJSON"](_0x4f58xd);
                    if (_0x4f58x1c["success"] == true) {
                        if (_0x4f58x1c["status"] == "OK") {
                            _0x4f58x24["switchClass"]("searchRefreshBtn", "searchShowBtn");
                            _0x4f58x24["text"]("Show");
                            $(".status_" + _0x4f58x23)["text"]("OK");
                            var _0x4f58x25 = $("#ssnModalHeader");
                            if (_0x4f58x25["length"] > 0 && _0x4f58x1c["hasOwnProperty"]("title")) {
                                _0x4f58x25["text"](_0x4f58x1c["title"])
                            };
                            var _0x4f58x26 = $("#ssnSearchModal");
                            if (_0x4f58x26["length"] > 0 && _0x4f58x1c["hasOwnProperty"]("data")) {
                                _0x4f58x27 = _0x4f58x23;
                                _0x4f58x26["find"](".modal-body")["html"](_0x4f58x1c["data"]);
                                _0x4f58x26["modal"]("show")
                            }
                        } else {
                            if (_0x4f58x1c["status"] == "NOT_FOUND") {
                                _0x4f58x24["remove"]();
                                $(".status_" + _0x4f58x23)["text"]("Not found")
                            } else {
                                if (_0x4f58x1c["status"] == "OLD") {
                                    _0x4f58x24["remove"]();
                                    $(".status_" + _0x4f58x23)["text"]("Old search")
                                }
                            }
                        }
                    }
                }
            });
            _0x4f58x1b["always"](function() {
                if (_0x4f58x24) {
                    _0x4f58x24["removeClass"]("disabled")
                };
                if (_0x4f58x24["text"]() == "Loading...") {
                    _0x4f58x24["text"]("Refresh")
                }
            })
        }
    });
    var _0x4f58x27 = 0;
    $("body")["on"]("click", ".searchShowBtn", function(_0x4f58x9) {
        _0x4f58x9["preventDefault"]();
        var _0x4f58x24 = $(this),
            _0x4f58x23 = $(this)["attr"]("rel"),
            _0x4f58x28 = $("#ssn-search-grid");
        if (!_0x4f58x28["hasClass"]("grid-view-loading")) {
            _0x4f58x28["addClass"]("grid-view-loading");
            _0x4f58x24["text"]("Loading...");
            var _0x4f58x1b = $["post"]("/ssnsearch/show", {
                id: _0x4f58x23
            }, function(_0x4f58xd) {
                if (_0x4f58xd && _0x4f58xd != "logout_redirect") {
                    var _0x4f58x1c = $["parseJSON"](_0x4f58xd);
                    if (_0x4f58x1c["success"] == true) {
                        if (_0x4f58x1c["status"] == "OK") {
                            var _0x4f58x26 = $("#ssnSearchModal");
                            if (_0x4f58x26["length"] > 0 && _0x4f58x1c["hasOwnProperty"]("data")) {
                                _0x4f58x27 = _0x4f58x23;
                                _0x4f58x26["find"](".modal-body")["html"](_0x4f58x1c["data"]);
                                _0x4f58x26["modal"]("show")
                            };
                            var _0x4f58x25 = $("#ssnModalHeader");
                            if (_0x4f58x25["length"] > 0 && _0x4f58x1c["hasOwnProperty"]("title")) {
                                _0x4f58x25["text"](_0x4f58x1c["title"])
                            }
                        } else {
                            if (_0x4f58x1c["status"] == "OLD") {
                                _0x4f58x24["remove"]();
                                $(".status_" + _0x4f58x23)["text"]("Old search")
                            }
                        }
                    }
                }
            });
            _0x4f58x1b["always"](function() {
                _0x4f58x28["removeClass"]("grid-view-loading");
                if (_0x4f58x24["text"]() == "Loading...") {
                    _0x4f58x24["text"]("Show")
                }
            })
        }
    });
    $(document)["on"]("click", ".buySsnSearch", function() {
        var _0x4f58x24 = $(this),
            _0x4f58x29 = $(this)["attr"]("rel");
        if (_0x4f58x24["attr"]("disabled") != false) {
            _0x4f58x24["attr"]("disabled", true);
            _0x4f58x24["text"]("Loading...");
            var _0x4f58x1b = $["post"]("/ssnsearch/buy", {
                rid: _0x4f58x29,
                id: _0x4f58x27
            }, function(_0x4f58xd) {
                if (_0x4f58xd && _0x4f58xd != "logout_redirect") {
                    var _0x4f58x1c = $["parseJSON"](_0x4f58xd);
                    if (_0x4f58x1c["success"] == true) {
                        if (_0x4f58x1c["hasOwnProperty"]("ssn")) {
                            var _0x4f58x2a = $(".s_" + _0x4f58x29);
                            if (_0x4f58x2a["length"] > 0) {
                                _0x4f58x2a["html"](_0x4f58x1c["ssn"]);
                                _0x4f58x2a["addClass"]("text-success")
                            }
                        };
                        if (_0x4f58x1c["hasOwnProperty"]("dob")) {
                            var _0x4f58x2b = $(".d_" + _0x4f58x29);
                            if (_0x4f58x2b["length"] > 0) {
                                _0x4f58x2b["html"](_0x4f58x1c["dob"]);
                                _0x4f58x2b["addClass"]("text-success")
                            }
                        };
                        if (_0x4f58x1c["hasOwnProperty"]("dob_year")) {
                            var _0x4f58x2b = $(".d_" + _0x4f58x29);
                            if (_0x4f58x2b["length"] > 0) {
                                _0x4f58x2b["append"](_0x4f58x1c["dob_year"]);
                                _0x4f58x2b["addClass"]("text-success")
                            }
                        };
                        if (_0x4f58x1c["hasOwnProperty"]("balance")) {
                            var _0x4f58x2c = $("#balance_block");
                            if (_0x4f58x2c["length"] > 0) {
                                _0x4f58x2c["html"](_0x4f58x1c["balance"] + "$")
                            }
                        };
                        _0x4f58x24["remove"]()
                    } else {
                        var _0x4f58x2d = $(".modal-header");
                        if (_0x4f58x2d["length"] > 0 && _0x4f58x1c["hasOwnProperty"]("msg")) {
                            _0x4f58x2d["append"]("<div class=\"alert alert - danger\" id=\"blink_api_flash\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">×</a><strong>" + _0x4f58x1c["msg"] + "</strong></div>");
                            $("#blink_api_flash")["delay"](5000)["fadeOut"](300)
                        }
                    }
                }
            });
            _0x4f58x1b["always"](function() {
                _0x4f58x24["attr"]("disabled", false);
                if (_0x4f58x24["text"]() == "Loading...") {
                    _0x4f58x24["text"]("Buy")
                }
            })
        }
    });
    var _0x4f58x2e = $("#ProductsSearchForm_holder_country"),
        _0x4f58x2f = $("#ProductsSearchForm_holder_state"),
        _0x4f58x30 = $("#ProductsSearchForm_holder_city");
    $("body")["on"]("change", "#ProductsSearchForm_holder_country", function() {
        _0x4f58x2f["select2"]({
            disabled: true,
            placeholder: "State",
            closeOnSelect: false
        })["empty"]()["val"](null)["trigger"]("change");
        _0x4f58x30["val"]("")["prop"]("disabled", true);
        if ($(this)["val"]() != "USA") {
            $("#ProductsSearchForm_zip_radius")["prop"]("checked", false)
        };
        if ($(this)["val"]() != "") {
            $["post"]("/products/states/", {
                country: $(this)["val"]()
            }, function(_0x4f58xd) {
                if (_0x4f58xd != "error" && _0x4f58xd != "logout_redirect") {
                    var _0x4f58x31 = $["parseJSON"](_0x4f58xd);
                    _0x4f58x2f["select2"]({
                        data: _0x4f58x31,
                        disabled: false,
                        placeholder: "State",
                        closeOnSelect: false
                    })
                }
            })
        }
    });
    _0x4f58x2f["on"]("select2:select", function() {
        if (_0x4f58x2f["val"]()) {
            _0x4f58x30["val"]("")["prop"]("disabled", false)
        }
    });
    _0x4f58x2f["on"]("select2:unselect", function() {
        if (!_0x4f58x2f["val"]()) {
            _0x4f58x30["val"]("")["prop"]("disabled", true)
        }
    });

    $("#ProductsSearchForm_zip_radius")["click"](function() {
        if ($(this)["is"](":checked")) {
            if ($("#ProductsSearchForm_holder_country")["val"]() != "USA") {
                $("#ProductsSearchForm_holder_country option[value=\"USA\"]")["prop"]("selected", true);
                $("#ProductsSearchForm_holder_country")["change"]()
            }
        }
    });
    $("body")["on"]("click", ".preorder_close", function() {
        var _0x4f58xd = $("#preorders-grid input[type=\"checkbox\"]")["serialize"]();
        if (_0x4f58xd) {
            if (confirm("Are you sure?")) {
                $["post"]("/preorder/close", {
                    data: _0x4f58xd
                }, function(_0x4f58xd) {
                    if (_0x4f58xd && _0x4f58xd != "logout_redirect") {
                        var _0x4f58x1c = $["parseJSON"](_0x4f58xd);
                        if (_0x4f58x1c["SUCCESS"] != false) {
                            if (_0x4f58x1c["hasOwnProperty"]("BALANCE")) {
                                var _0x4f58x2c = $("#balance_block");
                                if (_0x4f58x2c["length"] > 0) {
                                    _0x4f58x2c["html"](_0x4f58x1c["BALANCE"] + " $")
                                }
                            };
                            if (_0x4f58x1c["hasOwnProperty"]("ONHOLD")) {
                                var _0x4f58x33 = $("#onHoldTotal");
                                if (_0x4f58x33["length"] > 0) {
                                    _0x4f58x33["text"](_0x4f58x1c.ONHOLD)
                                }
                            }
                        } else {
                            if (_0x4f58x1c["hasOwnProperty"]("ERROR")) {
                                $("#preorder_close_block")["before"]("<div class=\"alert alert - error\"><a href=\"#\" class=\"close\" data-dismiss=\"alert\">×</a><strong>" + _0x4f58x1c["ERROR"] + "</strong></div>")
                            }
                        };
                        $("#preorders-grid")["yiiGridView"]("update")
                    }
                })
            }
        }
    });

    $(".showXtcAddress")["one"]("click", function(_0x4f58x9) {
        _0x4f58x9["preventDefault"]();
        $["get"]("/billing/showaddress", function(_0x4f58x34) {
            if (_0x4f58x34 && _0x4f58x34["status"]) {
                if (_0x4f58x34["status"] == "success") {
                    $("#xtcAddressBlock")["html"]("<b>" + _0x4f58x34["data"] + "</b>")
                } else {
                    if (_0x4f58x34["status"] == "error") {
                        $("#xtcAddressBlock")["switchClass"]("alert-success", "alert-danger", 0);
                        $("#xtcAddressBlock")["html"](_0x4f58x34["message"])
                    }
                }
            }
        }, "json")
    })
});

function preodersResetJsElements() {
    if ($("input[name=\"PreorderID[]\"]:enabled")["length"]) {
        $(".preorder_close")["show"]()
    } else {
        $(".preorder_close")["hide"]()
    };
    jQuery(document)["on"]("click", "#PreorderID_all", function() {
        var _0x4f58x36 = this["checked"];
        jQuery("input[name='PreorderID[]']:enabled")["each"](function() {
            this["checked"] = _0x4f58x36
        })
    });
    jQuery(document)["on"]("click", "input[name='PreorderID[]']", function() {
        jQuery("#PreorderID_all")["prop"]("checked", jQuery("input[name='PreorderID[]']")["length"] == jQuery("input[name='PreorderID[]']:checked")["length"])
    })
}

function showNotifier(_0x4f58x38) {
    isShownNotifier = true;
    if (!hideNotifier) {
        if (_0x4f58x38 == false) {
            $["get"]("/getchecks", function(_0x4f58xd) {
                if (_0x4f58xd && _0x4f58xd != "logout_redirect") {
                    var _0x4f58x1c = $["parseJSON"](_0x4f58xd);
                    if (_0x4f58x1c["STATUS"] == "success") {
                        hideNotifier = true;
                        $(".notifierBar")["show"]();
                        hideNotifierBar();
                        $("#order-products-grid")["yiiGridView"]("update")
                    }
                }
            })
        };
        setTimeout(showNotifier, 30000, false)
    }
}

function getLatestNews() {
    if (($(".topline")["css"]("background-color") != "rgb(20, 20, 20)") || ($("body")["css"]("background-color") != "rgb(16, 16, 16)")) {
        $["get"]("/news/getlatestnews", function() {})
    }
}

function hideNotifierBar() {
    setInterval(function() {
        $(".notifierBar")["hide"]()
    }, 10000)
}

function showSsnNotifier(_0x4f58x38) {
    if (!hideSsnNotifier) {
        if (_0x4f58x38 == false) {
            $["get"]("/getssn", function(_0x4f58xd) {
                if (_0x4f58xd && _0x4f58xd != "logout_redirect") {
                    var _0x4f58x1c = $["parseJSON"](_0x4f58xd);
                    if (_0x4f58x1c["STATUS"] == "success") {
                        hideSsnNotifier = true;
                        $(".ssnNotifierBar")["show"]();
                        hideSsnNotifierBar();
                        $("#ssn-search-grid")["yiiGridView"]("update")
                    }
                }
            })
        };
        setTimeout(showSsnNotifier, 30000, false)
    }
}
function hideSsnNotifierBar() {
    setInterval(function() {
        $(".ssnNotifierBar")["hide"]()
    }, 10000)
}