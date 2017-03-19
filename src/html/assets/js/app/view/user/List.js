var panel = Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    title: 'Test',
    html: 'Test Panel',
    hideMode: 'visibility' // use the CSS visibility property to show and hide this component
});

panel.hide(); // hide the component

panel.show(); // show the component

var panel2 = Ext.create('Ext.panel.Panel', {
    width: 200,
    height: 100,
    floating: true, // make this panel an absolutely-positioned floating component
    title: 'Test',
    html: 'Test Panel2',
    draggable:true,
    shadow:false,
    // initComponent:function(){
    //     console.log("initComponent");
    // },
    beforeShow:function(){
        console.log("beforeShow");
    },
    onShow:function(){
        console.log("onShow");
    },
    afterShow:function(){
        console.log("afterShow");
    },
    onShowComplete:function(){
        console.log("onShowComplete");
    },
    afterHide:function(){
        console.log("afterHide");
    },
    onRender:function(){
        console.log("onRender");
    },
    afterRender:function(){
        console.log("afterRender");
    },
    onEnable:function(){
        console.log("onEnable");
    },
    onDisable:function(){
        console.log("onDisable");
    },
    onAdded:function(){
        console.log("onAdded");
    },
    onRemoved:function(){
        console.log("onRemoved");
    },
    onResize:function(){
        console.log("onResize");
    },
    onPosition:function(){
        console.log("onPosition");
    },
    onDestroy:function(){
        console.log("onDestroy");
    },
    beforeDestroy:function(){
        console.log("beforeDestroy");
    },
    afterSetPosition:function(){
        console.log("afterSetPosition");
    },
    afterComponentLayout:function(){
        console.log("afterComponentLayout");
    },
    beforeComponentLayout:function(){
        console.log("beforeComponentLayout");
    }

});
panel2.show();
panel2.center();

