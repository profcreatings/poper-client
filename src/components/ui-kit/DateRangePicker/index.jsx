import { useMemo } from 'react';
import { DateRangePicker as DateRangePickerOriginal } from 'react-date-range';
import { endOfDay, startOfDay } from 'date-fns';
import { ru as ruLocale } from 'react-date-range/dist/locale';

import { Wrapper } from './styles.js';

export function DateRangePicker({ range, onChange, ...restProps }) {
    const ranges = useMemo(() => [{ ...range, key: 'range' }], [range]);

    const handleChange = ({ range }) => {
        onChange({
            ...range,
            startDate: startOfDay(range.startDate),
            endDate: endOfDay(range.endDate),
        });
    };

    return (
        <Wrapper>
            <DateRangePickerOriginal
                locale={ruLocale}
                showSelectionPreview
                moveRangeOnFirstSelection={false}
                months={2}
                direction="horizontal"
                ranges={ranges}
                onChange={handleChange}
                {...restProps}
            />
        </Wrapper>
    );
}
