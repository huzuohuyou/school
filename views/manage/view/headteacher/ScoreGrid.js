Ext.define('manage.view.headteacher.ScoreGrid', {
	extend : 'manage.view.moudle.querymoudle.Grid',
	alias : 'widget.headteacherscoregrid',
	tbar : [ {
		iconCls : 'query',
		xtype : 'button',
		action : 'query',
		disabled : true,
		text : '查询'
	}],
	columns : [ {
		text : '学号',
		dataIndex : 'number',
		flex : 2
	}, {
		text : '姓名',
		dataIndex : 's_name',
		flex : 2
	}],
	initComponent : function() {
		var fields = ['number','name','total'];
		var columns = [ {
			text : '学号',
			dataIndex : 'number',
			flex : 2
		}, {
			text : '姓名',
			dataIndex : 'name',
			flex : 2
		}, {
			text : '总分',
			dataIndex : 'total',
			flex : 1
		}];
		Ext.Ajax.request({
		    url: 'system.do',
		    async:false,
		    params: {
				action : 'queryByCondition',
				funcId : 's00007'
			},
		    success: function(response){
		    	var resp = Ext.decode(response.responseText);
				if (resp.success) {
					var data = resp.data;
					for(var i=0;i<data.length;i++){
						var temp = {text:data[i].name,dataIndex:data[i].code,hidden:true,flex:1};
						fields.push(data[i].code);
						columns.push(temp);
					}
				}
		    }
		});
		Ext.define('Score', {
		     extend: 'Ext.data.Model',
		     fields: fields
		 });

		var store = Ext.create('manage.store.headteacher.Score',{
			model : 'Score'
		});
		Ext.apply(this, {
			store : store,
			bbar : Ext.create('Ext.PagingToolbar', {
				store : store,
				displayInfo : true
			}),
			columns : columns
		});
		this.callParent(arguments);
	}
});