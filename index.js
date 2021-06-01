import { render } from 'react-dom';
import './index.css';
import * as React from 'react';

import { SampleBase } from './sample-base';
import { PropertyPane } from './property-pane';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
export class Default extends SampleBase {
    constructor(props) {
        super(props);
        this.dropContainerEle = null;
        this.dropContainerRef = element => {
            this.dropContainerEle = element;
        };
        this.asyncSettings = {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
        };
    }
    rendereComplete() {
        this.uploadObj.dropArea = this.dropContainerEle;
        this.uploadObj.element.setAttribute('name', 'UploadFiles');
        this.uploadObj.dataBind();
    }
    onChange(args) {
        this.uploadObj.autoUpload = args.checked;
        this.uploadObj.clearAll();
    }
    onChanged(args) {
        this.uploadObj.sequentialUpload = args.checked;
        this.uploadObj.clearAll();
    }
    onRemoveFile(args) {
        args.postRawFile = false;
    }
    render() {
        return (<div className='control-pane' ref={this.dropContainerRef}>
        <div className='control-section row uploadpreview'>
         <div className='col-lg-9'>
          <div className='upload_wrapper'>
            
            <UploaderComponent id='fileUpload' type='file' ref={(scope) => { this.uploadObj = scope; }} asyncSettings={this.asyncSettings} removing={this.onRemoveFile.bind(this)}></UploaderComponent>
        </div>
        </div>
        <div className='property-section col-lg-3'>
            <PropertyPane title='Properties'>
                <div className='panel-style'>
                    <CheckBoxComponent checked={true} label='Auto Upload' ref={(scope) => { this.checkboxObj = scope; }} change={this.onChange.bind(this)}></CheckBoxComponent>
                </div>
                <div className='panel-style'>
                    <CheckBoxComponent checked={false} label='Sequential Upload' ref={(scope) => { this.checkboxObj1 = scope; }} change={this.onChanged.bind(this)}></CheckBoxComponent>
                </div>
            </PropertyPane>
        </div>
        </div>
      </div>);
    }
}

render(<Default />, document.getElementById('sample'));