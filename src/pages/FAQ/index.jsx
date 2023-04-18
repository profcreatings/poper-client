import { Collapse } from '../../components/ui-kit/Collapse/index.jsx';
import { Wrapper } from './styles.js';
import { FAQ_CONTENT } from './constants.jsx';

export function FAQPage() {
    return (
        <Wrapper>
            <h1>FAQ</h1>
            {FAQ_CONTENT.map(({ question, answer }) => (
                <Collapse key={question} title={question}>
                    {answer}
                </Collapse>
            ))}
        </Wrapper>
    );
}
