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
    shadow:false
});
panel2.show();