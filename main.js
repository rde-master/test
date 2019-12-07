/**
 *
 *    
 *
 */
'use strict';

const utils = require('@iobroker/adapter-core'); // Get common adapter utils
const adapterName = require('./package.json').name.split('.').pop();
let adapter;




class startAdapter extends utils.Adapter {

    constructor(options) {
        super({
            name: 'Monitoring',
            useFormatDate: true
        });
        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        this.on('unload', this.onUnload.bind(this));
    }

    async onReady() {
        
        // Create states and channels
            this.log.warn("jetzt vlt??");
            this.log.info("nochmal ein log????");
    }

    onStateChange(id, state) {
        
    }

    

    

    onUnload(callback) {
        try {
            this.log.info('cleaned everything up...');
            callback();
        } catch (e) {
            callback();
        }
    }
}



if (module.parent) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<ioBroker.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new startAdapter(options);
} else {
    // otherwise start the instance directly
    new startAdapter();
}

