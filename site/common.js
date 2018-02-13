/* Utility functions required jQery */
/*
	add css to header
	url:css url
*/
function addCss(url) {
	add_css(url);
};
function add_css(url){
	var css = document.createElement("link");
	css.setAttribute("rel","stylesheet");
	css.setAttribute("type","text/css");
	css.setAttribute("href",url);
	document.getElementsByTagName("head")[0].appendChild(css);
};
/*
	array from csv
	url:csv url
	callback:async callback ex:function(data),data is csv array
*/
function createArrayFromCSV(url,callback){
	var xhr = new XMLHttpRequest();
	xhr.open("get",url,true);
	xhr.send(null);
	xhr.onload = function(){
		var csv = xhr.responseText.split("\n");
		var result = new Array();
		for(var i=0 ; i < csv.length ; i++){
			result[i] = csv[i].split(",");
		}
		callback(result);
	};
};
/*
	create uuid
*/
function createUUID(){
	return create_uuid();
};
function create_uuid(){
	var uuid = "",i,random;
	for (i = 0; i < 32; i++) {
		random = Math.random() * 16 | 0;
		if (i == 8 || i == 12 || i == 16 || i == 20) {
			uuid += "-"
		}
	uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
	}
	return uuid;
};

/* Utility for Google Adsense */
/*
	create googleads script
	style ins tag style
	adclient ins tag data-ad-client="XXX"
	adclient ins tag data-ad-slot="XXX"
*/
function createGoogleAds(style,adclient,adslot,adformat){
	var div = $("<div>");
	var script1 = $("<script>")
		.attr("async", "true")
		.attr("src", "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
	var ins = $("<ins>")
		.addClass("adsbygoogle")
		.attr("style", style)
		.attr("data-ad-client", adclient)
		.attr("data-ad-slot", adslot);
	if (adformat != null){
		ins.attr("data-ad-format",adformat);
	}
	var script2 = $("<script>")
		.text("(adsbygoogle = window.adsbygoogle || []).push({});");
	$(div).append(script1)
		.append(ins)
		.append(script2);
	return div;
}
/*
	create google ad bigrectangle
	adclient ins tag data-ad-client="XXX"
	adclient ins tag data-ad-slot="XXX"
	
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<ins class="adsbygoogle"
		style="display:inline-block;width:336px;height:280px"
		data-ad-client="ca-pub-5582503613903770"
		data-ad-slot="1419734642"></ins>
	<script>
	(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
*/
function createGoogleAdsBigRectangle(adclient,adslot){
	return createGoogleAds("display:inline-block;width:336px;height:280px",adclient,adslot,null);
}
/*
	create google ad responsive
	adclient ins tag data-ad-client="XXX"
	adclient ins tag data-ad-slot="XXX"
	
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<ins class="adsbygoogle"
		style="display:block"
		data-ad-client="ca-pub-5582503613903770"
		data-ad-slot="1371081844"
		data-ad-format="auto"></ins>
	<script>
	(adsbygoogle = window.adsbygoogle || []).push({});
	</script>
*/
function createGoogleAdsResponsive(adclient,adslot,adformat){
	return createGoogleAds("display:block",adclient,adslot,adformat);
}