Ext.define('manage.view.teacher.ExportForm', {
	extend : 'manage.view.moudle.Form',
	requires : [ 'manage.view.ux.ComboBox'],
	alias : 'widget.studentexportform',
	layout : {
		columns : 1,
		type : 'table'
	},
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
	    items : [{
		       xtype : 'mycombo',
		       store : Ext.create('manage.store.schools.Schools',{
			   autoLoad : {limit : 1000,start : 0}
		         }),
		       queryMode : 'local',
		       fieldLabel : '选择学校',
		       displayfield:'name',
		       labelAlign : 'right',
		       name : 'school',
		       editable : false,
		       allowBlank : false,
			   afterLabelTextTpl : required,
			   emptyText : '请选择学校',
			   width : 326,
	         },
		         {
				xtype : 'hidden',
				name : 'id'
			     } ]
		});
		me.callParent(arguments);
	},
	buttons : [ {
		text : '确定',
		action : 'submit'
	}, {
		text : '关闭',
		handler : function() {
			this.up('window').close();
		}
	} ]
});