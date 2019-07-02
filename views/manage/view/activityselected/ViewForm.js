Ext.define('manage.view.activityselected.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.activityselectedviewform',
    items: [{
        xtype: 'displayfield',
        fieldLabel: '备注	',
        name: 'remark',
        align:'center'
    }],
    buttons: [
    {
        text: '关闭',
        handler: function() {
            this.up('window').close();
        }
    }]
});