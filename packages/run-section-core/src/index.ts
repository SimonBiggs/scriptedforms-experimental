import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import '../style/index.css';

/**
 * Initialization data for the scriptedforms-input-slider extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: '@scriptedforms/run-section-core',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log(
      'JupyterLab extension @scriptedforms/run-section-core is activated!'
    );
  }
};

export default extension;
