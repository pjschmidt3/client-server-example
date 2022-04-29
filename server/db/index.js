import config from '../config';
import mysql from 'mysql';

export const connection = mysql.createPool(config.mysql);