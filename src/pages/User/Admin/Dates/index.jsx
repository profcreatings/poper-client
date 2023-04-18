import { useToggle } from 'react-use';

import { DateRangePicker } from '../../../../components/ui-kit/DateRangePicker/index.jsx';
import { useAdminContext } from '../context.jsx';

export function Dates() {
    const [isOpen, toggleIsOpen] = useToggle(false);
    const { dateRange, setDateRange } = useAdminContext();

    return (
        <>
            <button onClick={toggleIsOpen}>даты</button>
            {isOpen && (
                <DateRangePicker onChange={setDateRange} range={dateRange} />
            )}
        </>
    );
}
