import { schedule } from 'node-cron';
import db from '../settings/db';

export const rotina_inativa_lotes = () => {
    schedule('0 0 */5 * *', () => {
        //6h em 6h
        db.query("CALL sp_inativa_lotes();");
    });
}