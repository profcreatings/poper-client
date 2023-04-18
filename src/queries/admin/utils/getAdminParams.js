import { merge } from 'lodash';
import { ADMIN_USERNAME } from '../../../constants/permissions.js';

export const getAdminParams = (params) =>
    merge(params, {
        filters: {
            username: { $ne: ADMIN_USERNAME },
        },
    });
