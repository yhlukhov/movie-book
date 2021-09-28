import {Component, ErrorInfo, ReactNode} from 'react'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state = {hasError: false}

  static getDerivedStateFromError(e:Error):State {
    return {hasError: true}
  }

  componentDidCatch(e:Error, eInfo:ErrorInfo) {
    console.error("Uncaught error:", e, eInfo);
  }

  render() {
    if(this.state.hasError) {
      return <h1>Sorry, an error has occured</h1>
    }
    return this.props.children
  }
}