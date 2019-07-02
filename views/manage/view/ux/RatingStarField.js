Ext.define('Js.ux.RatingStarField', {
    xtype: 'ratingfield',
    extend: 'Ext.form.field.Base',
    baseCls: Ext.baseCSSPrefix + 'field x-rating',

    /**
    * @cfg {Number} value
    * rating as inter between 0-5
    */
    value: 0,

    /**
    * @cfg {Number} tmpValue
    * 临时存储value
    */
    tmpValue: 0,

    /**
    * @cfg {Boolean} readOnly
    * Is rating changeable
    */
    readOnly: false,

    /**
    * @cfg
    * @inheritdoc
    */
    name: 'rating',

    fieldSubTpl: [
        '<div class="starContainer">',
			'<div class="left"></div>',
			'<div class="x-button x-button-action star star1"></div>',
			'<div class="center"></div>',
			'<div class="x-button x-button-action star star2"></div>',
			'<div class="center"></div>',
			'<div class="x-button x-button-action star star3"></div>',
			'<div class="center"></div>',
			'<div class="x-button x-button-action star star4"></div>',
			'<div class="center"></div>',
			'<div class="x-button x-button-action star star5"></div>',
			'<div class="right"></div>',
		'</div>',
		'<div class="starFakeContainer"></div>',
        {
            disableFormats: true,
            compiled: true
        }
    ],

    // private
    initComponent: function () {
        var me = this;
        me.callParent();

        me.on('afterrender', function () {
            var me = this;
            // 获取下面的几个子元素
            me.starFakeContainer = me.bodyEl.down('.starFakeContainer');
            me.star1 = me.bodyEl.down('.star1');
            me.star2 = me.bodyEl.down('.star2');
            me.star3 = me.bodyEl.down('.star3');
            me.star4 = me.bodyEl.down('.star4');
            me.star5 = me.bodyEl.down('.star5');
            me.setValue(me.value);
            me.setReadOnly(me.getReadOnly());
        });
    },

    // 显示星星
    showStart: function (rating) {
        if (rating < 0) {
            rating = 0;
        } else if (rating > 5) {
            rating = 5;
        }
        if (!this['star1']) {
            return;
        }
        for (var i = 1; i <= 5; i++) {
            this['star' + i].removeCls('active');
        }
        for (var i = 1; i <= rating; i++) {
            this['star' + i].addCls('active');
        }
    },

    setValue: function (rating) {
        this.showStart(rating);
        if (rating < 0) {
            this.value = 0;
        } else if (rating > 5) {
            this.value = 5;
        } else {
            this.value = rating;
        }
    },

    getValue: function () {
        return this.value;
    },

    getReadOnly: function () {
        return this.readOnly;
    },

    getRawValue: function () {
        var me = this;
        return me.getValue();
    },

    setReadOnly: function (readOnly) {
        var me = this;
        if (readOnly) { // 不可编辑
            me.starFakeContainer.un({
                mousemove: me.onMouseMove,
                mouseleave: me.onMouseLeave,
                click: me.onClick,
                scope: me
            });
        } else { // 可编辑
            me.starFakeContainer.on({
                mousemove: me.onMouseMove,
                mouseleave: me.onMouseLeave,
                click: me.onClick,
                scope: me
            });
        }
        me.readOnly = readOnly;
    },

    onMouseMove: function () {
        var width = this.starFakeContainer.getWidth();
        var delta = window.event.offsetX;
        if (delta >= width) {
            delta = width;
        } else if (delta <= 0) {
            delta = 0;
        }
        delta = delta / width * 100;
        var onePart = ((width / 12) / width * 100);
        var rating = 0;
        if (delta >= (onePart * 9)) {
            rating = 5;
        } else if (delta >= (onePart * 7)) {
            rating = 4;
        } else if (delta >= (onePart * 5)) {
            rating = 3;
        } else if (delta >= (onePart * 3)) {
            rating = 2;
        } else if (delta >= onePart) {
            rating = 1;
        }
        this.tmpValue = rating;
        this.showStart(rating);
    },

    onMouseLeave: function () {
        var me = this;
        me.setValue(me.value);
    },

    onClick: function () {
        var me = this;
        me.setValue(me.tmpValue);
    },


    /**
    * @cfg {Boolean} [allowBlank=true]
    * Specify false to validate that the value must be > 0. If `true`, then value is any 
    */
    allowBlank: true,

    // filedBody区域采用checkboxgroup的样式
    fieldBodyCls: Ext.baseCSSPrefix + 'form-checkboxgroup-body',

    blankText: '该输入项为必输项',

    getErrors: function (value) {
        var me = this,
            errors = me.callParent(arguments);
        value = me.getValue();
        if (value <= 0) {
            if (!me.allowBlank) {
                errors.push(me.blankText);
            }
        }
        return errors;
    }

});