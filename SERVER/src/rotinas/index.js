import { schedule } from 'node-cron';
import db from '../settings/db';

export const rotina_inativa_lotes = () => {
    // 6 em 6h
    schedule('0 0 */5 * *', () => {
        console.log("TESTE")
    });
}