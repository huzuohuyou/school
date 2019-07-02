Ext.define('manage.view.courseteacher.ExamGrid', {
	//extend : 'Ext.tree.Panel',
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.teacherexamgrid',
	useArrows : true,
	rootVisible : false,
	multiSelect : false,
	singleExpand : false,
	initComponent : function() {
		var store = Ext.create('manage.store.courseteacher.AddExam');
		var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
		Ext.apply(this, {
			store : store,
			selModel : selModel,
			tbar : [ {
				iconCls : 'query',
				xtype : 'button',
				hidden : session.authority.indexOf('b60501') > -1 ? false : true,
				action : 'query',
				text : '查询'
			}, '-',{
				text : '新增考试',
				action : 'insert',
				hidden : session.authority.indexOf('b60502') > -1?false:true,
				icon : 'resources/images/icons/add.png'
			}],
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : [ {
				//xtype : 'treecolumn', // this is so we
				text : '考试名称',
				flex : 2,
				menuDisabled : true,
				dataIndex : 'name'
			},{
				
				text : '考试科目',
				flex : 2,
				menuDisabled : true,
				dataIndex : 'course_name'
			},{
				
				text : '参加班级',
				store : Ext.create('manage.store.teacher.Class'),
				flex : 2,
				menuDisabled : true,
				dataIndex : 'c_name'
			},{
				text : '开始时间',
				flex : 1,
				menuDisabled : true,
				dataIndex : 'start_time'
			},{
				text : '结束时间',
				flex : 1,
				menuDisabled : true,
				dataIndex : 'end_time'
			},{
				text : '上分截至日期',
				flex : 1,
				menuDisabled : true,
				dataIndex : 'edit_date'
			}, {

				text : '编辑',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '编辑',
				action : 'edit',
				align : 'center',
				hidden : session.authority.indexOf('b60503') > -1?false:true,
				icon : 'resources/images/icons/edit.png'
			}, {
				text : '删除',
				menuDisabled : true,
				xtype : 'actioncolumn',
				tooltip : '删除',
				action : 'delete',
				align : 'center',
				hidden : session.authority.indexOf('b60504') > -1?false:true,
				icon : 'resources/images/icons/remove.png'
			} ]
			
		});
		this.callParent(arguments);
	}
});