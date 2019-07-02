Ext.define('manage.controller.Password', {
	extend : 'Ext.app.Controller',
	views : ['password.Form'],
	init : function(app) {
		this.control({
			'passwordform button[action=submit]' : {
				click : this.submit
			},
			'passwordform button[action=yes]' : {
				click : this.yes
			},
			'passwordform button[action=refresh]' : {
				click : this.refresh
			}
		});
	},
	refresh:function(button){
		
	},
	yes:function(button){
		
	},
	submit : function(button) {
		var form = button.up('form').form;
		var action;
		var funcId;
			action = 'insert';
			funcId = 'f40302';
		var win = button.up('window');
		var grid = this.getDeviceGrid();//this.getRoleGrid();
		var freshfn = function() {
			win.close();
			grid.getStore().reload();
		};
		var params = {
			action : action,
			funcId : funcId,
		};
		formSubmit(form, params, freshfn);
	}
});