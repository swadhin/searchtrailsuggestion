 //document.body.innerHTML="<p>Here Baby</p>" 

 function buttonClick() { 
  		var x = document.getElementById('tb');//alert(x.value);
			formfield=document.f1.persona // formname and input names to be checked
			var str2 = x.value;
			var str3 = str2.concat(".txt");
			var str1 = "";
			
			for(i=0;i<formfield.length;i++)
				if (formfield[i].checked==true){
					var j = i+1;
					str1 = j.toString();
					//alert(x.value+i);
				}
			var str4 = str1.concat(str3);
			
			//document.body.innerHTML = '<div class="tree"><ul><li><a href="#">Parent</a><ul><li><a href="#">Child</a></li></ul></li></ul>';
			document.body.innerHTML ='<p></p>'
			var filepath = "out/";
			var fpath = filepath.concat(str4);
			//alert(fpath);
			
			var final_fpath = fpath;
			var line_arr = [];
			var client = new XMLHttpRequest();
			var txt;
			
			client.open('GET', final_fpath,true);
			document.body.innerHTML = "";
			client.onreadystatechange = function() {
				if (client.readyState==4 && client.status==200)
				{
				
					//document.body.innerHTML = client.responseText;
					line_arr = client.responseText.split("\n");
					var apstr1 = '<html><head></head><body><table border="0" cellspacing="4" cellpadding="2">';
					$("body").append(apstr1);
					var oldstr ="";
					
					var mycolors = new Array();
					mycolors[0] = "#CEF6F5";
					mycolors[1] = "#BDBDBD";
					mycolors[2] = "#9FF781";
					mycolors[3] = "#F5DA81";
					mycolors[4] = "#FBFBEF";
					mycolors[5] = "#A9D0F5";
					
					var color_cnt = 0;
					
					for(i=0 ; i< (line_arr.length - 1); i++)
					{
						//alert(line_arr[i].toString());
						var link_arr = (line_arr[i].toString()).split(",");
						//alert(link_arr.length.toString());
						var first_prefix = (link_arr[0]).toString();
						var new_str;
						if ( first_prefix == oldstr )
						{
							new_str = "";
						}else
						{
							new_str = first_prefix;
							oldstr = new_str;
							color_cnt = color_cnt + 1;
						}
						
						var color_tr1 = '<tr bgcolor="';
						var color_tr2 = color_tr1.concat(mycolors[color_cnt]);
						var color_tr3 = color_tr2.concat('">');
						//alert(color_tr3);
						$("body").append(color_tr3);
						//$("body").append("<tr>");
						
						//var k = i + 1;
						//var kstr = "Trail_";
						//var kstr1 = kstr.concat(k.toString());
						var t1 = '<td style="white-space: nowrap;" ><b><em>';
						var t2 = t1.concat(new_str);
						var t3 = t2.concat("</em></b></td>");
						$("body").append(t3);
						
						for( j = 1; j < (link_arr.length)-1; j++)
						{	//alert(link_arr[i]);
						
							var str_n_tr1 = '<td ><table border="1" cellpadding="2" cellspacing="1"><tr bgcolor="';
							var str_n_tr2 = str_n_tr1.concat(mycolors[color_cnt]);
							var str_n = str_n_tr2.concat('"><td>');
							
							//var str_n = '<td ><table border="1" cellpadding="2" cellspacing="1"><tr><td bgcolor="#ffffff">';
							var str1 = (link_arr[j].toString());
							var strx = ((str1.split("/"))[2]).toString();
							var dotch =".";
							var count = 0;
							for(t=0;t<strx.length;t++)
							{
								if(strx[t] == dotch)
									count = count + 1;
							}
							var midstr;
							if( count >= 2 )
							{
								midstr = strx.split('.')[1];
							}else
							{
								midstr = strx.split('.')[0];
							}
							
							var xxstr = '<a href="';
							var yystr = xxstr.concat(str1);
							var zzstr = yystr.concat('" onclick="window.location=this.href;return false;">');
							var aastr = zzstr.concat(midstr.toString());
							var link_str = aastr.concat("</a>");
							
							var str2 = str_n.concat(link_str);
							var str3 = str2.concat('</td></tr></table></td>');
							
							$("body").append(str3);
							$("body").append('<td><img src="arrow.jpg" width="30" height="20" ></td>');
						}
						$("body").append('</tr>');
					}
					var apstr2 ='</table></body></html>';
					$("body").append(apstr2);
					
					$(document).ready(function(){
					$('a').click(function(){
						chrome.tabs.create({url: $(this).attr('href')});
						return false;
					});
			});
				}
			}
			
			client.send();
			
			//alert(line_arr.length);
			
			
	} 
			
document.addEventListener('DOMContentLoaded', function () { document.getElementById('button1').addEventListener('click', buttonClick); });
