import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import '../style/index.css';

/**
 * Initialization data for the scriptedforms-input-slider extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: '@scriptedforms/when-section-variables-change',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log(
      'JupyterLab extension @scriptedforms/when-section-variables-change is activated!'
    );
  }
};

export default extension;
