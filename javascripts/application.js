(function(){$(function(){var $address;window.gaDelayEvent=function(a,b){};$("#malmo-masthead").on("click",'a[href!="#"][id!="masthead-search"], input[class~=btn]',function(event){if($(this).parents("#nav-triggers").length){return true}event.preventDefault();alert("This is an intranet resource");return false});$address=$("#street-name");if($address.length){$address.autocomplete({source:function(request,response){return $.ajax({url:"//xyz.malmo.se/rest/1.0/addresses/",dataType:"jsonp",data:{q:request.term,items:10},success:function(data){return response($.map(data.addresses,function(item){return{label:""+item.name+" ("+item.towndistrict+")",value:item.name}}))}})},minLength:2})}return $("form").submit(function(event){alert("Only a dummy form");console.log("Y");return event.preventDefault()})})}).call(this);