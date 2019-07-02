Ext.define('manage.view.chargeplanactivity.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.chargeplanactivityviewform',
    items: [{
        xtype: 'displayfield',
        fieldLabel: '活动介绍	',
        name: 'introduction',
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