Ext.define('manage.view.newactivity.QueryForm', {
	extend : 'manage.view.moudle.querymoudle.Form',
	alias : 'widget.newactivityqueryform',
	items : [{
		    xtype : 'mycombo',
		    name : 'year',
		    fieldLabel : '年度',
		    labelAlign : 'right',
		    store:[["2018","2018"],["2019","2019"],["2020","2020"],["2021","2021"],["2022","2022"],["2023","2023"],["2024","2024"],["2025","2025"]]
    },{
			xtype : 'mycombo',
			name : 'type',
			fieldLabel : '活动类型',
			labelAlign : 'right',
			store:[["军训","军训"],["安全教育","安全教育"],["社会实践","社会实践"],["研学","研学"]]
	 }]
});