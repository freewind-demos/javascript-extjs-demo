Ext.onReady(function () {
    Ext.create('Ext.Panel', {
        renderTo: 'main',
        height: 100,
        width: 200,
        title: 'Hello world',
        html: 'Hello Ext!'
    });
});