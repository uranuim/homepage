this._s=this._s||{};(function(_){var window=this;
try{
_.Erb=function(a){this.Gm=a};
}catch(e){_._DumpException(e)}
try{
var Frb=function(a){_.Zn.call(this,a.Ka);var b=this;this.window=a.service.window.get();this.wa=this.Gm();this.oa=window.orientation;this.ka=function(){var c=b.Gm(),d=b.CJb()&&90===Math.abs(window.orientation)&&b.oa===-1*window.orientation;b.oa=window.orientation;if(c!==b.wa||d){b.wa=c;d=_.ab(b.Qe);for(var e=d.next();!e.done;e=d.next()){e=e.value;var f=new _.Erb(c);try{e(f)}catch(g){_.ca(g)}}}};this.Qe=new Set;this.window.addEventListener("resize",this.ka);this.CJb()&&this.window.addEventListener("orientationchange",
this.ka)};_.F(Frb,_.Zn);Frb.kb=_.Zn.kb;Frb.Ga=function(){return{service:{window:_.ao}}};Frb.prototype.addListener=function(a){this.Qe.add(a)};Frb.prototype.removeListener=function(a){this.Qe.delete(a)};
Frb.prototype.Gm=function(){if(Grb()){var a=_.Ll(this.window);a=new _.tl(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Zb()||(_.ja()?Grb():this.window.visualViewport)?_.Ll(this.window):new _.tl(this.window.innerWidth,this.window.innerHeight);return a.height<a.width};Frb.prototype.destroy=function(){this.window.removeEventListener("resize",this.ka);this.window.removeEventListener("orientationchange",this.ka)};var Grb=function(){return _.ja()&&_.ef.FH()&&!navigator.userAgent.includes("GSA")};
Frb.prototype.Zb=function(){return _.Hrb};Frb.prototype.CJb=function(){return"orientation"in window};_.Hrb=!1;_.bo(_.GSa,Frb);
_.Hrb=!0;
}catch(e){_._DumpException(e)}
try{
_.x("aLUfP");

_.y();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
