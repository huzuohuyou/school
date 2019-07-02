Ext.onReady(function(){
	Ext.apply(Ext.form.VTypes, {
        checkname : function(val, field) {
        	var id = field.up('form').form.findField('id').getValue();
            if (val == "") {
                return false;
            }
            var result = true;
            Ext.Ajax.request({
                url : 'system.do?action=queryByCondition&funcId=s00001',
                async : false,//同步执行
                params : {
                    'loginname' : val,
                    'id' : id
                },
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if(obj.totalCount>0)
                    	result = false;
                }
            });
            return result;
 
        }
    });
	Ext.apply(Ext.form.VTypes, {
        checkphone : function(val, field) {
        	var id = field.up('form').form.findField('id').getValue();
            if (val == "") {
                return false;
            }
            var result = true;
            Ext.Ajax.request({
                url : 'system.do?action=queryByCondition&funcId=s00005',
                async : false,//同步执行
                params : {
                    'telephone' : val,
                    'id' : id
                },
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if(obj.totalCount>0)
                    	result = false;
                }
            });
            return result;
 
        }
    });
	Ext.apply(Ext.form.VTypes, {
        checknumber : function(val, field) {
        	var id = field.up('form').form.findField('id').getValue();
            if (val == "") {
                return false;
            }
            var result = true;
            Ext.Ajax.request({
                url : 'system.do?action=queryByCondition&funcId=s00003',
                async : false,//同步执行
                params : {
                    'number' : val,
                    'id' : id
                },
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if(obj.totalCount>0)
                    	result = false;
                }
            });
            return result;
 
        }
    });
	Ext.apply(Ext.form.VTypes, {
        checkIDcard : function(val, field) {
        	var id = field.up('form').form.findField('id').getValue();
            if (val == "") {
                return false;
            }
            var result = true;
            Ext.Ajax.request({
                url : 'system.do?action=queryByCondition&funcId=s00004',
                async : false,//同步执行
                params : {
                    'IDcard' : val,
                    'id' : id
                },
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if(obj.totalCount>0)
                    	result = false;
                }
            });
            return result;
 
        }
    });
	Ext.apply(Ext.form.VTypes, {
		checkContractNumber : function(val, field) {
        	var id = field.up('form').form.findField('id').getValue();
            if (val == "") {
                return false;
            }
            var result = true;
            Ext.Ajax.request({
                url : 'system.do?action=queryByCondition&funcId=s00006',
                async : false,//同步执行
                params : {
                    'contract_number' : val,
                    'id' : id
                },
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if(obj.totalCount>0)
                    	result = false;
                }
            });
            return result;
 
        }
    });
	Ext.apply(Ext.form.VTypes, {
        checkroomname : function(val, field) {
        	var id = field.up('form').form.findField('id').getValue();
            if (val == "") {
                return false;
            }
            var result = true;
            Ext.Ajax.request({
                url : 'system.do?action=queryByCondition&funcId=s30201',
                async : false,//同步执行
                params : {
                    'name' : val,
                    'id' : id
                },
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    if(obj.totalCount>0)
                    	result = false;
                }
            });
            return result;
 
        }
    });
	Ext.apply(Ext.form.VTypes, {
		password : function(val, field) {
			if (field.confirmTo) {
				var pwd = Ext.getCmp(field.confirmTo);
				if (val.trim() == pwd.getValue().trim()) {
					return true;
				} else {
					return false;
				}
				return false;
			}
		}
	});
});