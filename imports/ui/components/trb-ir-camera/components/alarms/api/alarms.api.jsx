
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { browserHistory } from 'react-router';

export default function Alarms_Api(_optional) {
    return (WrappedComponent) => {
        class $Alarms_Api extends Component {
            constructor(props) {
                super(props);
                this.state = {}
            }
            componentDidMount() {}
            componentWillReceiveProps(newProps) {}
            shouldComponentUpdate(nextProps, nextState) {
                return true
            }
            componentWillUpdate() {}
            componentDidUpdate() {}
            componentWillUnmount() {}

            testMethod(test) {
                return test
            }

            render() {
                return <WrappedComponent
				{...this.props}
				testMethod={()=>this.testMethod()}
				/>
            }
        }
        $Alarms_Api.propTypes = {
            styles: PropTypes.object.isRequired,
            // text : PropTypes.object.isRequired,
        };
        return $Alarms_Api
    }
}
    