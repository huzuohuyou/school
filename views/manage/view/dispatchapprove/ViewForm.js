Ext.define('manage.view.dispatchapprove.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.dispatchapproveviewform',
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
            name: 'temp_teacher_name'
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
        },
        {
			xtype: 'radiogroup',
	        fieldLabel: '是否通过',
	        colspan : 2,
	        width : 600,
	        items: [
	            { boxLabel: '通过', name: 'dispatch_status', inputValue: '1' },
	            { boxLabel: '不通过', name: 'dispatch_status', inputValue: '2' }
	        ],
	        afterLabelTextTpl: required,
	        blankText: '此项为必填项',
	        allowBlank: false
		}, {
	        xtype: 'hidden',
	        name: 'id'
	    }    
    ],
    buttons : [{
        text: '确定',
        action: 'submit'
    }, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	}  ]
});