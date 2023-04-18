import {
    cloneElement,
    useLayoutEffect,
    useRef,
    useState,
    Children,
} from 'react';
import { createPortal } from 'react-dom';
import shaka from 'shaka-player/dist/shaka-player.ui.js';
import { CONTROL_PANEL_ELEMENTS } from '../Controls/constants.js';

export function RegisterControl({ name, children }) {
    const [parent, setParent] = useState(null);
    const ref = useRef(null);

    useLayoutEffect(() => {
        class Element extends shaka.ui.Element {
            constructor(parent, controls) {
                super(parent, controls);
                setParent(parent);
            }
        }

        Element.Factory = class {
            create(rootElement, controls) {
                return new Element(rootElement, controls);
            }
        };

        shaka.ui.Controls.registerElement(name, new Element.Factory());
    }, [name]);

    useLayoutEffect(() => {
        if (ref.current) {
            const index = CONTROL_PANEL_ELEMENTS.indexOf(name);
            const beforeEl = parent.children[index];

            if (beforeEl) {
                beforeEl.before(ref.current);
            } else {
                parent.append(ref.current);
            }
        }
    });

    if (!parent) {
        return null;
    }

    return Children.map(children, (child) =>
        createPortal(cloneElement(child, { ref }), parent),
    );
}
