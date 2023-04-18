import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date, string) =>
    format(date, string, {
        locale: ru,
    });
