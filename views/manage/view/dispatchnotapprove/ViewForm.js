Ext.define('manage.view.dispatchnotapprove.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.dispatchnotapproveviewform',
    layout: {
      	 columns: 2,
           type: 'table'
       },
      items: [
          {
              xtype: 'displayfield',
              fieldLabel: '班级名称',
              colspan : 2,
              name: 's_name'
          },
          {
              xtype: 'displayfield',
              fieldLabel: '串课类型',
              colspan : 2,
              name: 'type',
              renderer : dispatchTypeRender,
          },
          {
              xtype: 'displayfield',
              fieldLabel: '代课教师',
              colspan : 2,
              name: 'tt_name'
          },
          {
              xtype: 'displayfield',
              fieldLabel: '串课日期',
              colspan : 2,
              name: 'time'
          },
          {
              xtype: 'displayfield',
              fieldLabel: '申请日期',
              name: 'writetime',
              colspan : 2,
          },
          {
      		xtype : 'displayfield',
      		fieldLabel : '详细说明'
      	},
          {
      		xtype : 'panel',   		
      		autoScroll : true,
      		header : false,
      	//	border : false,
      		height :300,
              name: 'reason',
              width : 600,
          }  
      ],
    buttons : [ {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	}  ]
});