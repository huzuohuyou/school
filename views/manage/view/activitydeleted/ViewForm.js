Ext.define('manage.view.activitydeleted.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.activitydeletedviewform',
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