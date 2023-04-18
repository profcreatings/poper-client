import React from 'react';
import { Center } from '../Center/index.jsx';
import { Wrapper } from './styles.js';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, notSupported: false };
    }

    static getDerivedStateFromError(err) {
        return {
            hasError: true,
            notSupported: err.message === 'not supported',
        };
    }

    render() {
        if (this.state.hasError) {
            return (
                <Wrapper>
                    <Center>
                        <div>
                            {this.state.notSupported ? (
                                'браузер не поддерживается'
                            ) : (
                                <>
                                    <h2>Сайт ебнулся</h2>
                                    <span>
                                        все, сук, сломалось.
                                        <p>перезагрузите сайт, пожалуйста</p>
                                    </span>
                                </>
                            )}
                        </div>
                    </Center>
                </Wrapper>
            );
        }

        return this.props.children;
    }
}
