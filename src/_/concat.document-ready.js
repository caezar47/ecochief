
var phone=$(".form__control[type='tel']");phone.mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$("img").addClass("img-responsive");
var modal_btn_show=$('[data-target="#modal-university"]');modal_btn_show.on("click",function(a){var t=JSON.parse($(this).attr("data-modal")||"{}"),i=(t.id,t.name),e=t.note,d=t.img,s=t.team,l=$(this).attr("data-target"),m=$(l).find("[data-uni-name]"),n=$(l).find("[data-uni-note]"),r=$(l).find("[data-uni-img]"),c=$(l).find("[data-uni-team-group]"),o=$(l).find("[data-uni-team]");if(s.length){c.addClass("is--visible");for(var _=0;_<s.length;_++){var g='<div class="card__item  is--team"><div class="card__img  is--team"><img src="'+s[_].img+'" class="img-responsive" alt=""></div><div class="card__group  is--team"><h6 class="card__heading  is--team">'+s[_].name+'</h6><p class="card__label  is--team">'+s[_].label+'</p><p class="card__tel  is--team"><a href="tel:'+s[_].tel+'">'+s[_].tel+'</a></p><p class="card__email  is--team"><a href="mailto:'+s[_].email+'">'+s[_].email+"</a></p></div></div>";o.append(g)}}m.text(i),n.text(e),r.attr({src:d})}),$(".modal__block").on("hidden.bs.modal",function(a){$(this).find("[data-uni-team]").empty()});
var humb=$("[data-hamburger]"),humb_close=$("[data-hamburger-close]"),collapse=$(".navbar__collapse"),html=$("html");humb.on("click",function(){collapse.toggleClass("is--open"),html.toggleClass("is--open-navbar"),$(this).toggleClass("is--active")}),humb_close.on("click",function(){html.removeClass("is--open-navbar"),collapse.removeClass("is--open"),humb_close.removeClass("is--active")}),$(document.body).on("click",function(a){0==$(a.target).closest(".navbar__block").length&&(html.removeClass("is--open-navbar"),collapse.removeClass("is--open"),humb.removeClass("is--active"))});var url=window.location.pathname;$('.navbar__nav-list a[href="'+url+'"]').addClass("is--active");
"use strict";$(function(){var s=$("[data-slick-partners]");$(".slick-count");s.slick({rows:2,slidesPerRow:5,infinite:!1,arrows:!1,dots:!0,responsive:[{breakpoint:1400,settings:{rows:2,slidesPerRow:4}},{breakpoint:767,settings:{rows:2,slidesPerRow:3,slidesToShow:1,slidesToScroll:1}},{breakpoint:550,settings:{rows:2,slidesPerRow:2,slidesToShow:1,slidesToScroll:1}}]})});
"use strict";$(function(){var i=$("#to-top");$(window).scroll(function(){500<$(this).scrollTop()?i.addClass("is--visible"):i.removeClass("is--visible")}),i.on("click",function(i){return i.preventDefault(),$("body, html").animate({scrollTop:0},800),!1})});