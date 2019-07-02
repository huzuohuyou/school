Ext.define('manage.controller.Score', {
	extend : 'Ext.app.Controller',
	refs : [ {
		ref : 'scoreGrid',
		selector : 'scoregrid'
	}, {
		ref : 'queryForm',
		selector : 'scorequeryform'
	} ],
	init : function(app) {
		this.control({
			'exammenu' : {
				itemdblclick : this.queryScore
			},
			'scoregrid button[action=query]' : {
				click : this.query
			},
			'scoregrid button[action=excel]' : {
				click : this.excel
			},
			'scoregrid' : {
				edit : this.edit
			}
		});
	},
	querySchool : function(o, record, item, index, e, eOpts) {
		if (record.data.leaf) {
			var grid = this.getScoreGrid();
			var form = grid.up('panel').down('form');
			
//			var form = this.getQueryForm();
//			var grid = this.getScoreGrid();
			//var grid = Ext.getCmp('jwscoregrid');
			form.form.findField('area').setValue(record.data.id.substring(1));
			var params = form.getValues();
			var store = grid.getStore();
			store.on("beforeload", function() {
				store.proxy.extraParams = params;
			});
			store.loadPage(1);
		}
	},
	query : function(button) {
		if (session.authority.indexOf('b30601') > -1) {
			query(button);
//			var grid = button.up('grid');
//			var form = grid.up('panel').down('form');
//			var params = form.getValues();
//			var store = grid.getStore();
//			store.on("beforeload", function() {
//				store.proxy.extraParams = params;
//			});
//			store.loadPage(1);
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	edit : function( editor, context, eOpts ) {
		if (session.authority.indexOf('b30602') > -1) {
			Ext.Msg.wait('正在修改，请稍后...', '提示');
			var params = {
				action : 'update',
				funcId : 'f30602',
				id : context.record.get('id'),
				score : context.record.get('score')
			};
			var grid = this.getScoreGrid();
			var freshfn = function() {
				grid.getStore().reload();
			};
			ajax(null,params,null,freshfn)
		} else {
			Ext.Msg.alert('系统提示', '您无权进行此项操作');
		}
	},
	excel : function(button) {
//		var form = button.up('form').form;
		var action;
		var funcId;
//		
//		action = 'examExcel';
//		funcId = 'f60507';
//		
//		var win = button.up('window');
		var grid = this.getScoreGrid();
		var store = grid.getStore();
		var strnumber = "";
		var strs_name = "";
		var strc_name = "";
		var strscore = "";
		for (var i = 0; i < store.getCount(); i++) {
		    var record = store.getAt(i);
		    strnumber = strnumber + record.get('number')+",";
		    strs_name = strs_name + record.get('s_name')+",";
		    strc_name = strc_name + record.get('c_name')+",";
		    strscore = strscore + record.get('score')+",";
		   
		};
		
		var params = {
				action : 'examExcel',
				funcId : 'f30601',
				strnumber : strnumber,
				strs_name : strs_name,
				strc_name : strc_name,
				strscore : strscore
				
			};
		var freshfn = function() {
			grid.getStore().reload();

		};
		ajax(null,params,null,freshfn);
		
	}
	
});