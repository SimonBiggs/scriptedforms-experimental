import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import '../style/index.css';

/**
 * Initialization data for the scriptedforms-input-slider extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'scriptedforms-input-slider',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log(
      'JupyterLab extension scriptedforms-input-slider is activated!'
    );
  }
};

export default extension;
