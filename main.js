const { Plugin } = require('obsidian');

module.exports = class ClaudianPlugin extends Plugin {
    async onload() {
        console.log('Claudianプラグインがロードされました');
        
        // 左側のサイドバーにアイコンを追加する例
        this.addRibbonIcon('dice', 'Claudian', (evt) => {
            new Notice('Claudianプラグインが動作しています！');
        });
    }

    onunload() {
        console.log('Claudianプラグインがアンロードされました');
    }
};