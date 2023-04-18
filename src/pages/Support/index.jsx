import { Center } from '../../components/layout/Center';
import { HelpIcon } from '../../components/ui-kit/Icons';
import { Email } from './styles.js';

export function SupportPage() {
    return (
        <Center>
            <div>
                <h2>Техподдержка</h2>
                <HelpIcon />
                <span>
                    если у тебя возникли какие-либо вопросы или проблемы, напиши
                    на&nbsp;эту&nbsp;почту. люблю.
                </span>
                <Email href="mailto:support@danilapoperechnyi.com">
                    support@danilapoperechnyi.com
                </Email>
            </div>
        </Center>
    );
}
