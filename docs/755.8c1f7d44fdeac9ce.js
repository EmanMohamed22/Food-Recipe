"use strict";(self.webpackChunkfoodRecepie=self.webpackChunkfoodRecepie||[]).push([[755],{3755:(h,a,i)=>{i.r(a),i.d(a,{FavoritesModule:()=>C});var r=i(6895),g=i(3456),t=i(4650),d=i(427),l=i(7185);function p(e,c){if(1&e&&t._UZ(0,"img",19),2&e){const n=t.oxw().$implicit;t.Q6J("src","https://upskilling-egypt.com:443/"+n.recipe.imagePath,t.LSH)}}function m(e,c){1&e&&(t.TgZ(0,"div",20)(1,"h2"),t._uU(2,"No Image"),t.qZA()())}function f(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14),t.NdJ("click",function(){const u=t.CHM(n).$implicit,O=t.oxw();return t.KtG(O.deleteOneFav(u.id))}),t._UZ(4,"i",15),t.qZA(),t.YNc(5,p,1,1,"img",16),t.YNc(6,m,3,0,"div",17),t.qZA(),t.TgZ(7,"div",18)(8,"h3"),t._uU(9),t.qZA(),t.TgZ(10,"h4"),t._uU(11),t.qZA()()()()}if(2&e){const n=c.$implicit;t.xp6(5),t.Q6J("ngIf",n.recipe.imagePath),t.xp6(1),t.Q6J("ngIf",!n.recipe.imagePath),t.xp6(3),t.Oqu(n.recipe.name),t.xp6(2),t.Oqu(n.recipe.description.split("").slice(0,30).join(""))}}const _=[{path:"",component:(()=>{class e{constructor(n,o){this._user=n,this._toastr=o}ngOnInit(){this.getAllFavs()}onAddToFav(n){this._user.onAddToFavs(n).subscribe({next:o=>{console.log(o),this.getAllFavs()}})}getAllFavs(){this._user.getFavs().subscribe({next:n=>{console.log(n.data),this.favorites=n.data}})}deleteOneFav(n){this._user.deleteFav(n).subscribe({next:o=>{console.log(o)},error:o=>{},complete:()=>{this._toastr.success("Recipe deleted"),this.getAllFavs()}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(d.K),t.Y36(l._W))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-favorites"]],decls:16,vars:1,consts:[[1,"recipe1"],[1,"container"],[1,"row"],[1,"col-md-9","ps-3"],[1,""],[1,"mt-2"],[1,"col-md-3"],[1,"image","text-end"],["src","../../../assets/images/Group 48102127.svg","alt","",1,"w-75"],["id","fav-card"],["class","col-md-4 p-4",4,"ngFor","ngForOf"],[1,"col-md-4","p-4"],[1,"card","shadow-sm"],[1,"card-img","h-75"],[1,"card-img-icon",3,"click"],[1,"fa-solid","fa-trash"],["alt","","class","w-100",3,"src",4,"ngIf"],["class","h-100 d-flex justify-content-center align-items-center",4,"ngIf"],[1,"card-text","ps-2","pt-2"],["alt","",1,"w-100",3,"src"],[1,"h-100","d-flex","justify-content-center","align-items-center"]],template:function(o,s){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"span"),t._uU(6," Favorites Recipes "),t.qZA(),t.TgZ(7,"p",5),t._uU(8,"This is a welcoming screen for the entry of the application , you can now see the options"),t.qZA()()(),t.TgZ(9,"div",6)(10,"div",7),t._UZ(11,"img",8),t.qZA()()()()(),t.TgZ(12,"section",9)(13,"div",1)(14,"div",2),t.YNc(15,f,12,4,"div",10),t.qZA()()()),2&o&&(t.xp6(15),t.Q6J("ngForOf",s.favorites))},dependencies:[r.sg,r.O5],styles:[".food-card[_ngcontent-%COMP%]{background-color:#fff;padding:1rem 3rem;border-radius:16px}form[_ngcontent-%COMP%]{margin-top:1.5rem}form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{font-size:1.1rem;padding:0 .5rem;background-color:#f7f7f7}form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background-color:#f7f7f7;padding-left:.5rem}form[_ngcontent-%COMP%]   .form-register[_ngcontent-%COMP%]{margin-top:.8rem;display:flex;justify-content:space-between}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:left;padding-bottom:10px;padding-left:5px;border-bottom:1px solid #009247;font-weight:600;color:#009247}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:1px solid #009247;padding-left:5px}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f0ffef}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:15px 0 15px 10px}.login-card-logo[_ngcontent-%COMP%]{margin:auto;width:22rem}.green-btn[_ngcontent-%COMP%]{background-color:#4aa35a;margin-top:2rem;margin-bottom:9px;font-size:1.25rem;font-weight:400;text-transform:capitalize;color:#fff;padding:.75rem 1.5rem;border-radius:10px;border:0}.green[_ngcontent-%COMP%]{color:#4aa35a}button[disabled][_ngcontent-%COMP%]{background-color:#64ad71}.bg-active[_ngcontent-%COMP%]{background-color:#0092471a;border-left:10px solid #009247;transition:all .5s}.pointer[_ngcontent-%COMP%]{cursor:pointer}table[_ngcontent-%COMP%]{margin:20px 0}.hover[_ngcontent-%COMP%]:hover{color:red}.close-icon[_ngcontent-%COMP%]{text-align:end;cursor:pointer}.close-icon[_ngcontent-%COMP%]:hover{color:red}.transition[_ngcontent-%COMP%]{transition:all 1s ease-in-out}*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before{padding:0;margin:0;text-decoration:none;list-style:none;line-height:1.4;box-sizing:border-box;font-family:sans-serif;font-weight:400}html[_ngcontent-%COMP%]{font-size:100%}@media (max-width: 1200px){html[_ngcontent-%COMP%]{font-size:12px}}@media (max-width: 922px){html[_ngcontent-%COMP%]{font-size:9px}}img[_ngcontent-%COMP%]{display:block;width:100%}a[_ngcontent-%COMP%]{text-decoration:none;cursor:pointer}h2[_ngcontent-%COMP%]{font-size:2rem;color:#494949;text-transform:capitalize;font-weight:600}h4[_ngcontent-%COMP%]{font-size:1rem;color:#49494999;margin-bottom:1rem;font-weight:500}h3[_ngcontent-%COMP%]{font-size:1.5rem;color:#494949;margin-bottom:1rem;font-weight:600;text-transform:capitalize}.recipe1[_ngcontent-%COMP%]{margin-top:20px;padding:10px;background-color:#009247;border-radius:15px}.recipe1[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{align-items:center}.recipe1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:2rem}.recipe1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:1rem}#fav-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{height:350px}#fav-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]{position:relative;overflow:hidden}#fav-card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-img-icon[_ngcontent-%COMP%]{position:absolute;top:5%;right:5%;background-color:#fff;padding:5px;border:1px solid red;border-radius:5px 7px;color:red;cursor:pointer}"]})}return e})()}];let C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[r.ez,g.Bz.forChild(_)]})}return e})()}}]);