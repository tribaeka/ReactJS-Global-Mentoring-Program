import React from "react";

interface IErrorBoundaryProps {
    hasError: boolean;
    error: string;
}

const errorPage = (WrapperComponent: React.ReactNode): React.ComponentClass => {
    // eslint-disable-next-line react/display-name
    return class extends React.Component<Record<string, unknown>, IErrorBoundaryProps> {
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
                    <WrapperComponent/>
                );
            }

            return this.props.children;
        }
    }
}

export default errorPage;
