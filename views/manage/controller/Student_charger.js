Ext.define('manage.controller.Student_charger', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'student_chargerGrid',
		selector : 'student_chargergrid'
	}, {
		ref : 'chargerstudentViewForm',
		selector : 'chargerstudentviewform'
	}],
	views : [ 'student_charger.Grid', 'student_charger.QueryForm', 'student_charger.ChargerStudentViewForm'],
	init : function(app) {
		this.control({
			'student_chargergrid actioncolumn[action=view]': {
                click: this.viewDetail
            },
            'studentlist_chargergrid button[action=query]' : {
				click : this.query
			},
		});
	},
	query: function(button) {
	        if (session.authority.indexOf('b170201') > -1) {
	            var grid = button.up('grid');
	            var form = button.up('form').form;
	            var id = this.getChargerstudentViewForm().form.findField('s_id').getValue();
	            var grad = form.findField('grad').getValue();
	            var class_id = form.findField('class').getValue();
	            var name = form.findField('name').getValue();
	            var params = {
	   	                id:id,
	   	                grad: grad,
	   	                class_id:class_id,
	 	                name :name
	 	                };
	            var store = grid.getStore();
	            store.on("beforeload",
	            function() {
	                store.proxy.extraParams = params;
	            });
	            store.loadPage(1);
	        } else {
	            Ext.Msg.alert('系统提示', '您无权进行此项操作');
	        }
	    },
	viewDetail : function(grid, rowIndex, colIndex, actionItem, event, record,
			row) {
		if (session.authority.indexOf('b170202') > -1) {
			var formWin = createWin('查看学生名单', 'chargerstudentviewform');
			var grid = formWin.down('grid');
			formWin.down('form').form.findField('s_id').setValue(record.data.id);
			var params = {
	                id: record.data.id
	                };
			var store = grid.getStore();
            store.on("beforeload",
            function() {
                store.proxy.extraParams = params;
            });
            store.loadPage(1);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
});