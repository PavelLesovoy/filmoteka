!function(){var e={save:function(e,a){try{var t=JSON.stringify(a);localStorage.setItem(e,t)}catch(a){console.error("Error during saving ".concat(e," to local strage; "),a.message)}},load:function(e){try{var a=localStorage.getItem(e);return null===a?void 0:JSON.parse(a)}catch(a){console.error("Error during getting ".concat(e," from localStorage: "),a.message)}},del:function(e){try{localStorage.removeItem(e)}catch(a){console.error("Error during deleting ".concat(e,"! from localStorage: "),a.message)}}};!function(a,t){var n=e.load(t);if(n){var r=n.map((function(e){var a=e.id,t=e.title,n=e.year,r=e.genres,o=e.rating,i=e.imgPath,c='<div class="filmoteka__item" data-id="'.concat(a,'">\n        <a class="filmoteka__item-link" href="./">\n            <div class="filmoteka__item-wrapper">\n                <img class="filmoteka-img" src="').concat(i,'" alt="" width="">\n                <div class="overlay-text">\n                    <h2 class="subtitle">').concat(t,'</h2>\n                    <p class="discription">');return void 0!==r&&(c+='<span class="description__genre">'.concat(r,"</span>")),void 0!==n&&(c+='<span class="description__year">'.concat(n,"</span>")),c+='<span class="rating">'.concat(o,"</span></p>\n                </div>\n            </div>\n        </a>\n        </div>")})).join("");a.insertAdjacentHTML("beforeend",r)}else a.insertAdjacentHTML("beforeend",'<div><p2 class="empty_text">It seems that there is no films here!</p2></div>')}({mainContainer:document.querySelector(".filmoteka__container")}.mainContainer,"watched")}();
//# sourceMappingURL=library.adbcda01.js.map