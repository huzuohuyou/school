Ext.define('manage.view.ux.PicField', {
    extend: 'Ext.form.field.Trigger',
    alias: ['widget.picfield'],
    requires: [
        'Ext.button.Button','manage.view.ux.PicUploadForm'
    ],

    //<locale>
    /**
     * @cfg {String} buttonText
     * The button text to display on the upload button. Note that if you supply a value for
     * {@link #buttonConfig}, the buttonConfig.text value will be used instead if available.
     */
    buttonText: '上传',
    //</locale>

    /**
     * @cfg {Boolean} buttonOnly
     * True to display the file upload field as a button with no visible text field. If true, all
     * inherited Text members will still be available.
     */
    buttonOnly: false,

    /**
     * @cfg {Number} buttonMargin
     * The number of pixels of space reserved between the button and the text field. Note that this only
     * applies if {@link #buttonOnly} = false.
     */
    buttonMargin: 3,
    
    /**
     * @cfg {Boolean} clearOnSubmit
     * True to clear the selected file value when the form this field belongs to
     * is submitted to the server.
     */
    clearOnSubmit: true,

    /**
     * @cfg {Object} buttonConfig
     * A standard {@link Ext.button.Button} config object.
     */

    /**
     * @event change
     * Fires when the underlying file input field's value has changed from the user selecting a new file from the system
     * file selection dialog.
     * @param {Ext.ux.form.FileUploadField} this
     * @param {String} value The file value returned by the underlying file input field
     */

    /**
     * @property {Ext.Element} fileInputEl
     * A reference to the invisible file input element created for this upload field. Only populated after this
     * component is rendered.
     */

    /**
     * @property {Ext.button.Button} button
     * A reference to the trigger Button component created for this upload field. Only populated after this component is
     * rendered.
     */


    // private
    extraFieldBodyCls: Ext.baseCSSPrefix + 'form-file-wrap',

    /**
     * @cfg {Boolean} readOnly
     * Unlike with other form fields, the readOnly config defaults to true in File field.
     */
    readOnly: true,


    /**
     * Do not show hand pointer over text field since file choose dialog is only shown when clicking in the button
     * @private
     */
    triggerNoEditCls: '',

    // private
    componentLayout: 'triggerfield',

    // private. Extract the file element, button outer element, and button active element.
    childEls: ['browseButtonWrap'],

    // private
    onRender: function() {
        var me = this,
            id = me.id,
            inputEl;

        me.callParent(arguments);

        inputEl = me.inputEl;
        inputEl.dom.name = ''; //name goes on the fileInput, not the text input

        // render the button here. This isn't ideal, however it will be 
        // rendered before layouts are resumed, also we modify the DOM
        // below anyway
        me.button = new Ext.button.Button(Ext.apply({
            renderTo: id + '-browseButtonWrap',
            ownerCt: me,
            ownerLayout: me.componentLayout,
            id: id + '-button',
            ui: me.ui,
            disabled: me.disabled,
            text: me.buttonText,
            style: me.buttonOnly ? '' : me.getButtonMarginProp() + me.buttonMargin + 'px',
            inputName: me.getName(),
            handler : function(button){
            	var form = button.up('form');
        		var url = form.getForm().findField('pic').getValue();
        		var win = Ext.create('Ext.window.Window', {
        			title : '上传图片',
        			resizable : true,
        			id : 'uploadImg',
        			modal : true,
        			layout : 'fit',
        			items : [ {
        				xtype : 'picuploadform',
        				pform : me.id
        			} ],
        			autoShow : true
        		});
        		win.down('form').form.findField('old_file').setValue(url);
            },
            listeners: {
                scope: me,
                change: me.onFileChange
            }
        }, me.buttonConfig));
        me.fileInputEl = me.button.fileInputEl;

        if (me.buttonOnly) {
            me.inputCell.setDisplayed(false);
        }

        // Ensure the trigger cell is sized correctly upon render
        me.browseButtonWrap.dom.style.width = (me.browseButtonWrap.dom.lastChild.offsetWidth + me.button.getEl().getMargin('lr')) + 'px';
        if (Ext.isIE) {
            me.button.getEl().repaint();
        }
    },

    /**
     * Gets the markup to be inserted into the subTplMarkup.
     */
    getTriggerMarkup: function() {
        return '<td id="' + this.id + '-browseButtonWrap" role="presentation"></td>';
    },

    /**
     * @private Event handler fired when the user selects a file.
     */
    onFileChange: function(button, e, value) {
        this.duringFileSelect = true;
        Ext.form.field.File.superclass.setValue.call(this, value);
        delete this.duringFileSelect;
    },
    
    didValueChange: function(){
        // In the case of the file field, the change event will only ever fire 
        // if the value actually changes, so we always want to fire the change event
        // This affects Chrome specifically, because hitting the cancel button will
        // reset the file upload.
        return !!this.duringFileSelect;
    },

    reset : function(){
        var me = this,
            clear = me.clearOnSubmit;
        if (me.rendered) {
            me.button.reset(clear);
            me.fileInputEl = me.button.fileInputEl;
            if (clear) {
                me.inputEl.dom.value = '';
                // Reset the underlying value if we're clearing it
                Ext.form.field.File.superclass.setValue.call(this, null);
            }
        }
        me.callParent();
    },
    
    onShow: function(){
        this.callParent();
        // If we started out hidden, the button may have a messed up layout
        // since we don't act like a container
        this.button.updateLayout();    
    },

    onDisable: function(){
        this.callParent();
        this.button.disable();
    },

    onEnable: function(){
        this.callParent();
        this.button.enable();
    },

    extractFileInput: function() {
        var me = this,
            fileInput;
            
        if (me.rendered) {
            fileInput = me.button.fileInputEl.dom;
            me.reset();
        } else {
            // Create a fake empty field here so it will still be submitted.
            // All other unrendered fields provide a value.
            fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.className = Ext.baseCSSPrefix + 'hide-display';
            fileInput.name = me.getName();
        }
        return fileInput;
    },
    
    restoreInput: function(el) {
        // If we're not rendered we don't need to do anything, it will be created
        // when we get flushed to the DOM.
        if (this.rendered) {
            var button = this.button;
            button.restoreInput(el);
            this.fileInputEl = button.fileInputEl;
        }
    },

    onDestroy: function(){
        Ext.destroyMembers(this, 'button');
        delete this.fileInputEl;
        this.callParent();
    },

    getButtonMarginProp: function() {
        return 'margin-left:';
    }
});

