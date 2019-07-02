<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<link href='https://www.sscsunlh.com/plugins/fullcalendar/fullcalendar.min.css' rel='stylesheet' />
<link href='https://www.sscsunlh.com/plugins/fullcalendar/fullcalendar.print.min.css' rel='stylesheet' media='print' />
<script src='https://www.sscsunlh.com/plugins/fullcalendar/lib/moment.min.js'></script>
<script src='https://www.sscsunlh.com/plugins/fullcalendar/lib/jquery.min.js'></script>
<script src='https://www.sscsunlh.com/plugins/fullcalendar/fullcalendar.min.js'></script>
<script src='https://www.sscsunlh.com/plugins/fullcalendar/locale-all.js'></script>
<script>

	$(document).ready(function() {
		var initialLocaleCode = 'zh-cn';
		$('#calendar').fullCalendar({
			header: {
				center: 'title',
				right: 'month,listMonth'
			},
			defaultDate: '${defaultdate}',
			locale: 'zh-cn',
			buttonIcons: false,// show the prev/next text
			weekNumbers: true,
			navLinks: false, // can click day/week names to navigate views
			editable: false,
			eventLimit: true, // allow "more" link when too many events
			events: [
			
			    <#list events as list>
	
			    	<#if (list.startDate2??)>
						<#if list.endDate2??>
						    {
								title: '${list.title}',
								start: '${list.startDate2}'
							},
						<#else>
						    {
								title: '${list.title}',
								start: '${list.startDate2}',
								end: '${list.endDate2}'
							},
						</#if>
					<#elseif (list.startDate1??)>
						<#if list.endDate1??>
						    {
								title: '${list.title}',
								start: '${list.startDate1}'
							},
						<#else>
						    {
								title: '${list.title}',
								start: '${list.startDate1}',
								end: '${list.endDate1}'
							},
						</#if>
					<#elseif (list.startDate0??)>
						<#if list.endDate1??>
						    {
								title: '${list.title}',
								start: '${list.startDate0}'
							},
						<#else>
						    {
								title: '${list.title}',
								start: '${list.startDate0}',
								end: '${list.endDate0}'
							},
						</#if>
					</#if>
				</#list>
			    
				
			]
		});
		
		//$('#calendar').find('.fc-prev-button,.fc-next-button').click(function(){alert($(this).hasClass('fc-prev-button')?'prev':'next')})
		
		 $('#calendar').find('.fc-prev-button').click(function(){
		     
		 	 date=$('#calendar').fullCalendar('getDate'); 
		     
		     var selectdate = $.fullCalendar.formatDate(date, "YYYY-MM-DD");  
		     window.location.href="https://www.sscsunlh.com/wx_activityCalinder.html?date="+selectdate;
		 
		     return false;
		  });
		
		  $('#calendar').find('.fc-next-button').click(function(){
		     date=$('#calendar').fullCalendar('getDate'); 
		     
		     var selectdate = $.fullCalendar.formatDate(date, "YYYY-MM-DD");  
		     //window.open("${sys.webRoot}/activityCalinder.html);
		     window.location.href="https://www.sscsunlh.com/wx_activityCalinder.html?date="+selectdate;
		     return false;
		  });

		// build the locale selector's options
		$.each($.fullCalendar.locales, function(localeCode) {
			$('#locale-selector').append(
				$('<option/>')
					.attr('value', localeCode)
					.prop('selected', localeCode == initialLocaleCode)
					.text(localeCode)
			);
		});

		// when the selected option changes, dynamically change the calendar option
		$('#locale-selector').on('change', function() {
			if (this.value) {
				$('#calendar').fullCalendar('option', 'locale', this.value);
			}
		});
	});

</script>
<style>

	body {
		margin: 0;
		padding: 0;
		font-family: "Lucida Grande",Helvetica,Arial,Verdana,sans-serif;
		font-size: 25px;
	}

	#top {
		background: #eee;
		border-bottom: 1px solid #ddd;
		padding: 0 10px;
		line-height: 40px;
		font-size: 12px;
	}

	#calendar {
		max-width: 900px;
		margin: 40px auto;
		padding: 0 10px;
	}

</style>
</head>
<body>

	<!--<div id='top'>

		Locales:
		<select id='locale-selector'></select>

	</div>-->

	<div id='calendar'></div>

</body>
</html>
