import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h4 className="mt-3">Something went wrong.</h4>
                    <div className="div-flex mt-3">
                        <strong className="rectanglebg text-danger text-wrap">Note: One of the children component has thrown error of no data found. Rather than crashing page it will show custom msg like above for that particular component and rest of app will work fine.</strong>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}