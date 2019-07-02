Ext.define('manage.view.ux.ComboBox', {
			extend : 'Ext.form.field.ComboBox',
			alias : 'widget.mycombo',
			queryMode : 'remote',
			displayField : 'name', 
			valueField : 'id'
		});