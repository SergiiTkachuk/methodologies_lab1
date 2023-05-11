import { startInteractiveMode } from './src/InteractiveMode.js';
import { startFileMode } from './src/FileMode.js';

if (process.argv.length < 3) {
    startInteractiveMode();
} else {
    startFileMode();
}