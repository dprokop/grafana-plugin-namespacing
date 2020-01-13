import { PanelPlugin } from '@grafana/data';
import { SimpleOptions, defaults } from './types';
import { SimplePanel } from './SimplePanel';
import { SimpleEditor } from './SimpleEditor';
// import Forms from '@grafana/ui/forms';

// console.log(Forms);
export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setDefaults(defaults).setEditor(SimpleEditor);
