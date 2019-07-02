Ext.define('manage.view.activityhistory.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.activityhistoryviewform',
    items: [{
        xtype: 'displayfield',
        fieldLabel: '备注	',
        name: 'remark'
    }],
    buttons: [
    {
        text: '关闭',
        handler: function() {
            this.up('window').close();
        }
    }]
});