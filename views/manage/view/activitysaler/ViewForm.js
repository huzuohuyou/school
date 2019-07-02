Ext.define('manage.view.activitysaler.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.activitysalerviewform',
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