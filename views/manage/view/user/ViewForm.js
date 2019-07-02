Ext.define('manage.view.user.ViewForm', {
    extend: 'manage.view.moudle.Form',
    alias: 'widget.userviewform',
    items: [{
        xtype: 'displayfield',
        fieldLabel: '用户名	',
        name: 'loginname'
    },
    {
        xtype: 'displayfield',
        fieldLabel: '姓名',
        name: 'name'
    },
    {
        xtype: 'displayfield',
        fieldLabel: '角色',
        name: 'role_name'
    }],
    buttons: [
    {
        text: '关闭',
        handler: function() {
            this.up('window').close();
        }
    }]
});