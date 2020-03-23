import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo){
    this.setState({hasError: true})
  }

  render(){
    const { hasError } = this.state
    const { children } = this.props
    if(hasError){
      return <h1>Ooops! Something went wrong</h1>
    }
    else{
      return children
    }
  }
}

export default ErrorBoundry