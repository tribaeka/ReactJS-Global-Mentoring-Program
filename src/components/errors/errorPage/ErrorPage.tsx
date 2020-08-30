import React from "react";
import Footer from '@components/home/footer/Footer';
import Brand from '@components/shared/brand/Brand';

interface IErrorBoundaryProps {
    hasError: boolean;
    error: string;
}

export default class ErrorPage extends React.Component<Record<string, unknown>, IErrorBoundaryProps> {
    constructor(props: Record<string, unknown>) {
        super(props);
        this.state = { hasError: false, error: "" };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error: error.toString() };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-page">
                    <div className="brand-wrapper">
                        <Brand/>
                    </div>
                    <h1 className="error-message">Opps something went wrong...</h1>
                    <Footer/>
                </div>
            );
        }

        return this.props.children;
    }
}
