Ext.define('manage.view.studentsign.StudentSignListGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.studentsignlistgrid',
	initComponent : function() {	
	var store = Ext.create('manage.store.studentsign.Studentsign');
	Ext.apply(this, {
		store : store,
		bbar : Ext.create('Ext.PagingToolbar', {
		        store : store,
				displayInfo : true
			}),
			columns : [  {
				text : '学号',
				dataIndex : 'number',
				flex : 1
			},{
				text : '姓名',
				dataIndex : 'name',
				flex : 1
			},
			{
				text : '年级',
				dataIndex : 'grad',
				flex : 1
			},
			{
				text : '班级',
				dataIndex : 'class',
				flex : 1
			},{
				text : '状态',
				dataIndex : 'states',
				renderer : studentstateRender,
				flex : 1,
			}
			]
		});
		this.callParent(arguments);
	}
});