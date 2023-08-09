//var calc_unit_1 = document.getElementById("calc-unit-1");
//var calc_unit_2 = document.getElementById("calc-unit-2");
//var calc_input_1 = document.getElementById("calc-input-1");
//var calc_input_2 = document.getElementById("calc-input-2");


// Clear values when refresh
$('.dk-container input[type=number]').val('');

//
var calc_unit_1 = document.getElementById("calc-unit-1");
var calc_unit_2 = document.getElementById("calc-unit-2"); 
var calc_input_1 = document.getElementById("calc-input-1");
var calc_input_2 = document.getElementById("calc-input-2");

function convert(id,value) {
	switch (id) {
		case 'km':
			return {
				'km': value,
				"m": parseFloat((value * 1000).toFixed(10)),
				"cm": parseFloat((value * 100000).toFixed(10)),
				"mm": parseFloat((value * 1e+6).toFixed(10)),
				"um": parseFloat((value * 1e+9).toFixed(10)),
				"micron": parseFloat((value * 1e+9).toFixed(10)),
				"nm": parseFloat((value * 1e+12).toFixed(10)),
				"mi": parseFloat((value * 0.621371).toFixed(10)),
				"yd": parseFloat((value * 1093.61).toFixed(10)),
				"ft": parseFloat((value * 3280.84).toFixed(10)),
				"in": parseFloat((value * 39370.1).toFixed(10)),
				"nmi": parseFloat((value * 0.539957).toFixed(10)),
				"mil": parseFloat((value * 3.937e+7).toFixed(10))
			}
		case 'm':
			return {
				'm': value,
				"km": parseFloat((value * 0.001).toFixed(10)),
				"cm": parseFloat((value * 100).toFixed(10)),
				"mm": parseFloat((value * 1000).toFixed(10)),
				"um": parseFloat((value * 1e+6).toFixed(10)),
				"micron": parseFloat((value * 1e+6).toFixed(10)),
				"nm": parseFloat((value * 1e+9).toFixed(10)),
				"mi": parseFloat((value * 0.000621371).toFixed(10)),
				"yd": parseFloat((value * 1.09361).toFixed(10)),
				"ft": parseFloat((value * 3.28084).toFixed(10)),
				"in": parseFloat((value * 39.3701).toFixed(10)),
				"nmi": parseFloat((value * 0.000539957).toFixed(10)),
				"mil": parseFloat((value * 39370.079).toFixed(10))
			}
		case 'cm':
			return {
				'cm': value,
				"km": parseFloat((value * 1e-5).toFixed(10)),
				"m": parseFloat((value * 0.01).toFixed(10)),
				"mm": parseFloat((value * 10).toFixed(10)),
				"um": parseFloat((value * 10000).toFixed(10)),
				"micron": parseFloat((value * 10000).toFixed(10)),
				"nm": parseFloat((value * 1e+7).toFixed(10)),
				"mi": parseFloat((value * 6.2137e-6).toFixed(10)),
				"yd": parseFloat((value * 0.0109361).toFixed(10)),
				"ft": parseFloat((value * 0.0328084).toFixed(10)),
				"in": parseFloat((value * 0.393701).toFixed(10)),
				"nmi": parseFloat((value * 5.3996e-6).toFixed(10)),
				"mil": parseFloat((value * 393.701).toFixed(10))
			}
		case 'mm':
			return {
				'mm': value,
				"km": parseFloat((value * 1e-6).toFixed(10)),
				"m": parseFloat((value * 0.001).toFixed(10)),
				"cm": parseFloat((value * 0.1).toFixed(10)),
				"um": parseFloat((value * 1000).toFixed(10)),
				"micron": parseFloat((value * 1000).toFixed(10)),
				"nm": parseFloat((value * 1e+6).toFixed(10)),
				"mi": parseFloat((value * 6.2137e-7).toFixed(10)),
				"yd": parseFloat((value * 0.00109361).toFixed(10)),
				"ft": parseFloat((value * 0.00328084).toFixed(10)),
				"in": parseFloat((value * 0.0393701).toFixed(10)),
				"nmi": parseFloat((value * 5.3996e-7).toFixed(10)),
				"mil": parseFloat((value * 39.37).toFixed(10))
			}
		case 'um':
			return {
				'um': value,
				'micron': value,
				"km": parseFloat((value * 1e-9).toFixed(10)),
				"m": parseFloat((value * 1e-6).toFixed(10)),
				"cm": parseFloat((value * 1e-4).toFixed(10)),
				"mm": parseFloat((value * .001).toFixed(10)),
				"nm": parseFloat((value * 1000).toFixed(10)),
				"mi": parseFloat((value * 6.2137e-10).toFixed(10)),
				"yd": parseFloat((value * 1.0936e-6).toFixed(10)),
				"ft": parseFloat((value * 3.2808e-6).toFixed(10)),
				"in": parseFloat((value * 3.937e-5).toFixed(10)),
				"nmi": parseFloat((value * 5.3996e-10).toFixed(10)),
				"mil": parseFloat((value / 25.4).toFixed(10))
			}
		case 'micron':
			return {
				'micron': value,
				'um': value,
				"km": parseFloat((value * 1e-9).toFixed(10)),
				"m": parseFloat((value * 1e-6).toFixed(10)),
				"cm": parseFloat((value * 1e-4).toFixed(10)),
				"mm": parseFloat((value * .001).toFixed(10)),
				"nm": parseFloat((value * 1000).toFixed(10)),
				"mi": parseFloat((value * 6.2137e-10).toFixed(10)),
				"yd": parseFloat((value * 1.0936e-6).toFixed(10)),
				"ft": parseFloat((value * 3.2808e-6).toFixed(10)),
				"in": parseFloat((value * 3.937e-5).toFixed(10)),
				"nmi": parseFloat((value * 5.3996e-10).toFixed(10)),
				"mil": parseFloat((value / 25.4).toFixed(10))
			}
		case 'nm':
			return {
				'nm': value,
				"km": parseFloat((value * 1e-12).toFixed(10)),
				"m": parseFloat((value * 1e-9).toFixed(10)),
				"cm": parseFloat((value * 1e-7).toFixed(10)),
				"mm": parseFloat((value * 1e-6).toFixed(10)),
				"um": parseFloat((value * .001).toFixed(10)),
				"micron": parseFloat((value * .001).toFixed(10)),
				"mi": parseFloat((value * 6.2137e-13).toFixed(10)),
				"yd": parseFloat((value * 1.0936e-9).toFixed(10)),
				"ft": parseFloat((value * 3.2808e-9).toFixed(10)),
				"in": parseFloat((value * 3.937e-8).toFixed(10)),
				"nmi": parseFloat((value * 5.3996e-13).toFixed(10)),
				"mil": parseFloat((value / 25400).toFixed(10))
			}
		case 'mi':
			return {
				'mi': value,
				"km": parseFloat((value * 1.60934).toFixed(10)),
				"m": parseFloat((value * 1609.34).toFixed(10)),
				"cm": parseFloat((value * 160934).toFixed(10)),
				"mm": parseFloat((value * 1.609e+6).toFixed(10)),
				"um": parseFloat((value * 1.609e+9).toFixed(10)),
				"micron": parseFloat((value * 1.609e+9).toFixed(10)),
				"nm": parseFloat((value * 1.609e+12).toFixed(10)),
				"yd": parseFloat((value * 1760).toFixed(10)),
				"ft": parseFloat((value * 5280).toFixed(10)),
				"in": parseFloat((value * 63360).toFixed(10)),
				"nmi": parseFloat((value * 0.868976).toFixed(10)),
				"mil": parseFloat((value * 6.336e+7).toFixed(10))
			}
		case 'yd':
			return {
				'yd': value,
				"km": parseFloat((value * 0.0009144).toFixed(10)),
				"m": parseFloat((value * 0.9144).toFixed(10)),
				"cm": parseFloat((value * 91.44).toFixed(10)),
				"mm": parseFloat((value * 914.4).toFixed(10)),
				"um": parseFloat((value * 914400).toFixed(10)),
				"micron": parseFloat((value * 914400).toFixed(10)),
				"nm": parseFloat((value * 9.144e+8).toFixed(10)),
				"mi": parseFloat((value * 0.000568182).toFixed(10)),
				"ft": parseFloat((value * 3).toFixed(10)),
				"in": parseFloat((value * 36).toFixed(10)),
				"nmi": parseFloat((value * 0.000493737).toFixed(10)),
				"mil": parseFloat((value * 36000).toFixed(10))
			}
		case 'ft':
			return {
				'ft': value,
				"km": parseFloat((value * 0.0003048).toFixed(10)),
				"m": parseFloat((value * 0.3048).toFixed(10)),
				"cm": parseFloat((value * 30.48).toFixed(10)),
				"mm": parseFloat((value * 304.8).toFixed(10)),
				"um": parseFloat((value * 304800).toFixed(10)),
				"micron": parseFloat((value * 304800).toFixed(10)),
				"nm": parseFloat((value * 3.048e+8).toFixed(10)),
				"mi": parseFloat((value * 0.000189394).toFixed(10)),
				"yd": parseFloat((value * 0.333333).toFixed(10)),
				"in": parseFloat((value * 12).toFixed(10)),
				"nmi": parseFloat((value * 0.000164579).toFixed(10)),
				"mil": parseFloat((value * 12000).toFixed(10))
			}
		case 'in':
			return {
				'in': value,
				"km": parseFloat((value * 2.54e-5).toFixed(10)),
				"m": parseFloat((value * 0.0254).toFixed(10)),
				"cm": parseFloat((value * 2.54).toFixed(10)),
				"mm": parseFloat((value * 25.4).toFixed(10)),
				"um": parseFloat((value * 25400).toFixed(10)),
				"micron": parseFloat((value * 25400).toFixed(10)),
				"nm": parseFloat((value * 2.54e+7).toFixed(10)),
				"mi": parseFloat((value * 1.5783e-5).toFixed(10)),
				"yd": parseFloat((value * 0.0277778).toFixed(10)),
				"ft": parseFloat((value * 0.0833333).toFixed(10)),
				"nmi": parseFloat((value * 1.3715e-5).toFixed(10)),
				"mil": parseFloat((value * 1000).toFixed(10))
			}
		case 'nmi':
			return {
				'nmi': value,
				"km": parseFloat((value * 1.852).toFixed(10)),
				"m": parseFloat((value * 1852).toFixed(10)),
				"cm": parseFloat((value * 185200).toFixed(10)),
				"mm": parseFloat((value * 1.852e+6).toFixed(10)),
				"um": parseFloat((value * 1.852e+9).toFixed(10)),
				"micron": parseFloat((value * 1.852e+9).toFixed(10)),
				"nm": parseFloat((value * 1.852e+12).toFixed(10)),
				"mi": parseFloat((value * 1.15078).toFixed(10)),
				"yd": parseFloat((value * 2025.37).toFixed(10)),
				"ft": parseFloat((value * 6076.12).toFixed(10)),
				"in": parseFloat((value * 72913.4).toFixed(10)),
				"mil": parseFloat((value * 7.291e+7).toFixed(10))
			}
		case 'mil':
			return {
				'mil': value,
				"km": parseFloat((value / 3.937e+7).toFixed(10)),
				"m": parseFloat((value / 39370.079).toFixed(10)),
				"cm": parseFloat((value / 393.701).toFixed(10)),
				"mm": parseFloat((value / 39.37).toFixed(10)),
				"um": parseFloat((value * 25.4).toFixed(10)),
				"micron": parseFloat((value * 25.4).toFixed(10)),
				"nm": parseFloat((value * 25400).toFixed(10)),
				"mi": parseFloat((value / 6.336e+7).toFixed(10)),
				"yd": parseFloat((value / 36000).toFixed(10)),
				"ft": parseFloat((value / 12000).toFixed(10)),
				"nmi": parseFloat((value / 7.291e+7).toFixed(10)),
				"in": parseFloat((value / 1000).toFixed(10)),
			}
		default:
			return {};
	}
}

function update() {
	var input = calc_unit_1.value;
	var output = calc_unit_2.value;
	var text_output = '1 ' + (input == 'um' ? 'µm' : input) + ' = ' + convert(input, 1)[output] + ' ' + (output == 'um' ? 'µm' : output);
	$('#formula-desc').text(text_output)
	$("#calc-unit-1 option[value=" + output + "]").attr('disabled','disabled').siblings().removeAttr('disabled');
	$("#calc-unit-2 option[value=" + input + "]").attr('disabled','disabled').siblings().removeAttr('disabled');
	$('#calc-input-1').attr('placeholder', placeholder(input));
	$('#calc-input-2').attr('placeholder', placeholder(output));
}

$('#calc-input-1').on('focusin',function(e){
	$(this).data('val', $(this).val());
	id = $(this).attr('id');
}).on('change keyup', function(e) {
	var prev = $(this).data('val');
	var current = $(this).val();
	if(!current || current === ''){
		calc_input_2.value=''
		return;
	}
	if (current && prev != current) {
		var id = calc_unit_1.value;
		var id_conv = calc_unit_2.value;
		var value = calc_input_1.value;
		calc_input_2.value = convert(id, value)[id_conv];
	}
	if (e.which === 8) {
		$(this).data('val', '');
	}
});

$('#calc-input-2').on('focusin',function(e){
	$(this).data('val', $(this).val());
	id = $(this).attr('id');
}).on('change keyup', function(e) {
	var prev = $(this).data('val');
	var current = $(this).val();
	if(!current || current === ''){
		calc_input_1.value=''
		return;
	}
	if (current && prev != current) {
		var id = calc_unit_2.value;
		var id_conv = calc_unit_1.value;
		var value = calc_input_2.value;
		calc_input_1.value = convert(id, value)[id_conv];
	}
	if (e.which === 8) {
		$(this).data('val', '');
	}
});

$('#calc-unit-1, #calc-unit-2').change(function () {
    const title = $(this).find("option:selected").attr("title");
    $(this).attr("title", title);
	var id = calc_unit_1.value;
	var id_conv = calc_unit_2.value;
	var value = calc_input_1.value;
	calc_input_2.value = convert(id, value)[id_conv] ? convert(id, value)[id_conv] : '';
	update();
});


// Define name of view key for all languages
var viewSiteArray = {en: "View", da: "Vis", de: "Anzeigen", es: "Ver", fi: "Näytä", fr: "Voir", he: "הצגה", it: "Visualizza", ja: "表示", ko: "이용 약관", nl: "Bekijk", no: "Vis", pl: "Wyświetl", sv: "Visa", zh: "查看", cs: "Zobrazit", hu: "Tovább", ro: "Vizualizare", th: "มุมมอง", pt: "Ver"};

// Get no photo
var noPhoto = "https://media.digikey.com/Photos/NoPhoto/pna_en.jpg";
const langDatas = ['cs', 'da', 'de', 'es', 'fi', 'fr', 'he', 'hu', 'it', 'ja', 'ko', 'nl', 'no', 'pl', 'pt', 'ro', 'sv', 'sch', 'tch', 'th', 'zh', 'zht'];
if (langDatas.indexOf(__headerData.lang.toLowerCase()) >= 0) {
    noPhoto = "https://media.digikey.com/Photos/NoPhoto/pna_" + __headerData.lang + ".jpg";
}

// Get list categories
function listCategoriesLinks() {
    $.ajax({
        url: window.location.origin + "/" + __headerData.lang + "/api/calculator/categories-list",
        type: "POST",
        data: JSON.stringify({
            Site: __headerData.site,
            Lang: __headerData.lang,
            Cur: __headerData.cur,
            CategoryIds: ["233", "483", "832"]
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(dataResult) {
            var output = "";
            if (dataResult.length >= 0) {
                // Get value of View follow site/language
                let viewName = "View";
                for (var key in viewSiteArray) {
                    if(__headerData.lang.toLowerCase() == key) {
                        viewName = viewSiteArray[key];
                    }
                  }
                for (var i in dataResult) {
                    let imageUrl = noPhoto;
                    if (dataResult[i].imageUrl || dataResult[i].imageUrl != undefined) {
                        imageUrl = dataResult[i].imageUrl;
                    }
                    output += '<li>' + '<div class="related-product">'
                            + '<div class="image-container">'
                            + '<a class="dkc-related_item" href="' + dataResult[i].url + '">'
                            + '<img class="dkc-related-product_img" src ="'+ imageUrl +'"  alt="'+ dataResult[i].name +'"/>'
                            + '</a>' + '</div>'
                            + '<span class="dkc-related_itemTitle input-headline">' + dataResult[i].name + '</span>'
                            + '<a class="dkc-related_item" href="' + dataResult[i].url + '">'
                            + '<button class="button primary btn-normal">'+ viewName + '</button>'
                            + '</a>' + '</div>' +'</li>';
                }
            }

            output += "";
            if ($('#recommended-products-wrap-id').length > 0) {
                $("#recommended-products-wrap-id ul").append(output);
            }
        },
        error: function(e) {
            console.log(e);
        }
    })
}

$(document).ready(function() {
    listCategoriesLinks();
});

$(function() {
    $('input[type=number]').on("wheel DOMMouseScroll mousewheel MozMousePixelScroll", function(event) {
        event.preventDefault();
        $this = $(this);
    });
});
 
document.addEventListener("DOMContentLoaded", function(){
    var calcInputs = document.querySelectorAll('.calculator input');
    for (var i = 0; i < calcInputs.length; i++) {
        calcInputs[i].addEventListener("keypress", function(e) {
            if (e.charCode >= 48 && e.charCode <= 57 || (e.charCode == 9 || e.charCode == 8 || e.charCode == 0 || e.charCode == 13 || e.charCode == 46 || e.charCode == 45)) {
                return;   
            } else {
                e.preventDefault();
            }
        });
    };
});