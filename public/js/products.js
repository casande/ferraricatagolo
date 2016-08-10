(function($) {
	$(function() {
		products.init();
		newsletter.init();
	});
	var products = {
		init : function() {

			var listProducts;

			products.loadProdutcs();
			products.events();
			products.productsAll();

		},
		loadProdutcs: function () {
			$.ajax({
			     url:"js/carros.json",
			     dataType: "json",
			     type: "GET",
			     async: false,
			     success:function(data){

			     	listProducts = data;

			     },
			     error:function(){
			         alert("Desculpe ocorreu um error na aplicação");
			     }      
			});
		},
		productsAll : function() {

			$('section.content .product').remove();

			$.each(listProducts.carros, function (i, val) {
				//popula os carros
			    $('.content').append('<div class="product item"><a href="#openModal" title="'+ val.nome + '"><img src="' + val.img + '" title="' + val.nome +  '" alt="' + val.nome +  '" /><h3>' + val.nome  +  '</h3><p>' + val.description +  '</p></a></div>');
			});

		},
		filterColor : function(cor) {

			$('section.content .product').remove();

			var colorSelect;

			$.each(listProducts.carros, function (i, val) {

				if (val.cor == "vermelha" && cor == "vermelha") {

					//popula os carros
			    	$('.content').append('<div class="product item"><a href="#openModal" title="'+ val.nome + '"><img src="' + val.img + '" title="' + val.nome +  '" alt="' + val.nome +  '" /><h3>' + val.nome  +  '</h3><p>' + val.description +  '</p></a></div>');

				}
				else if (val.cor == "amarela" && cor == "amarela") {

					//popula os carros
			    	$('.content').append('<div class="product item"><a href="#openModal" title="'+ val.nome + '"><img src="' + val.img + '" title="' + val.nome +  '" alt="' + val.nome +  '" /><h3>' + val.nome  +  '</h3><p>' + val.description +  '</p></a></div>');

				}
				else if (val.cor == "branca" && cor == "branca") {

					//popula os carros
			    	$('.content').append('<div class="product item"><a href="#openModal" title="'+ val.nome + '"><img src="' + val.img + '" title="' + val.nome +  '" alt="' + val.nome +  '" /><h3>' + val.nome  +  '</h3><p>' + val.description +  '</p></a></div>');

				}
				else if (val.cor == "azul" && cor == "azul") {

					//popula os carros
			    	$('.content').append('<div class="product item"><a href="#openModal" title="'+ val.nome + '"><img src="' + val.img + '" title="' + val.nome +  '" alt="' + val.nome +  '" /><h3>' + val.nome  +  '</h3><p>' + val.description +  '</p></a></div>');

				}

			});

		},
		events : function() {

			//botão voltar ao topo
			$('.backTop').on("click", function() {
				$('html, body').animate({scrollTop:0}, 'slow');
			});

			$('.vermelha').on("click", function(){
				products.filterColor("vermelha");
			});

			$('.amarela').on("click", function(){
				products.filterColor("amarela");
			});

			$('.branca').on("click", function(){
				products.filterColor("branca");
			});

			$('.azul').on("click", function(){
				products.filterColor("azul");
			});

			$('header h1').on("click", function(){
				products.productsAll();
			});

			//menu mobile e tablet portrait
			$('.menu-anchor').on('click touchstart', function(e){
		        $('html').toggleClass('menu-active');
		        e.preventDefault();
		    });
			
		}
	};
	var newsletter = {
		init: function() {

			newsletter.events();

		},
		validation: function(val){

			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

			if (emailReg.test(val) == true && val != "" ) {
				$('p.error, p.sucesso').remove();
				$('#newsletter input').after("<p class='sucesso'>E-mail cadastrado com sucesso!</p>").removeClass('error');
			}
			else if (emailReg.test(val) == false && val != "" ){
				$('p.error, p.sucesso').remove();
				$('#newsletter input').after("<p class='error'>E-mail incorreto</p>").addClass('error');
			}
			else  {
				$('p.error, p.sucesso').remove();
				$('#newsletter input').after("<p class='error'>E-mail não pode ser em branco</p>").addClass('error');
			}

		},
		events: function() {

			$("#newsletter").on("submit", function(e){
				e.preventDefault();
				newsletter.validation($('#newsletter input').val());
			});
		}

	}
})(jQuery);