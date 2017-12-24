import { promisify } from 'util';
import { stat } from 'fs';

export default promisify(stat);