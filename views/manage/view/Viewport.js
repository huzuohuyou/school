
    Ext.define('manage.view.Viewport',{
        extend: 'Ext.Viewport',
        layout: 'fit',
        hideBorders: true,
        requires : [
            'manage.view.Menu',
            'manage.view.Header',
            'manage.view.TabPanel'
        ],
        initComponent : function(){
        	Ext.Ajax.timeout = 1800000; 
        	Ext.data.proxy.Ajax.timeout = 1800000;
        	Ext.QuickTips.init();
			Ext.form.Field.prototype.msgTarget='side';
            var me = this;
            Ext.apply(me, {
                items: [{
                    id:'desk',
                    layout: 'border',
                    border : false,
                    items: [
                        Ext.create('manage.view.Header'),
                        Ext.create('manage.view.Menu'),
                        Ext.create('manage.view.TabPanel')
                    ]
                }]
            });
            me.callParent(arguments);
        }
    });
