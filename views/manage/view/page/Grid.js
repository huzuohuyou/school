Ext.define('manage.view.page.Grid', {
    extend: 'manage.view.moudle.querymoudle.Grid',
    alias: 'widget.pagegrid',
    
    initComponent: function() {
        var store = Ext.create('manage.store.page.Page');
        var selModel = Ext.create('Ext.selection.CheckboxModel', {
			checkOnly : true
		});
        Ext.apply(this, {
            store: store,
            selModel : selModel,
            tbar: [{
                iconCls: 'query',
                xtype: 'button',
                hidden: session.authority.indexOf('b20201') > -1 ? false: true,
                action: 'query',
                text: '查询'
            },
            '-', {
                iconCls: 'item-add',
                xtype: 'button',
                hidden: session.authority.indexOf('b20202') > -1 ? false: true,
                action: 'insert',
                text: '添加'
            },
            '-', {
                iconCls: 'item-delete',
                xtype: 'button',
                hidden: session.authority.indexOf('b20204') > -1 ? false: true,
                action: 'delete',
                text: '删除'
            }],
            bbar: Ext.create('Ext.PagingToolbar', {
                store: store,
                displayInfo: true
            }),
            columns: [{
                text: '标题',
                dataIndex: 'c_name',
                hideable: false,
                flex: 1
            },
            {
                text: '查看',
                menuDisabled: true,
                xtype: 'actioncolumn',
                tooltip: '查看',
                action: 'view',
                width: 60,
                align: 'center',
                icon: 'resources/images/icons/view.png',
                hidden: (session.authority.indexOf('b20205') > -1) ? false: true,
                isDisabled: function(view, rowIdx, colIdx, item, record) {
                    if (session.authority.indexOf('b20205') > -1) return false;
                    else return true;
                }
            },
            {
                text: '编辑',
                menuDisabled: true,
                xtype: 'actioncolumn',
                tooltip: '编辑',
                action: 'edit',
                width: 60,
                align: 'center',
                icon: 'resources/images/icons/edit.png',
                hidden: (session.authority.indexOf('b20203') > -1) ? false: true,
                isDisabled: function(view, rowIdx, colIdx, item, record) {
                    if (session.authority.indexOf('b20203') > -1) return false;
                    else return true;
                }
            }]
        });
        this.callParent(arguments);
    }
});