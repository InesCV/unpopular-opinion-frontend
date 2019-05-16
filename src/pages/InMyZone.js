import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import { withAuth } from '../lib/AuthProvider';

@inject('uiStore', 'dataStore')
@observer
class InMyZone extends Component {
  
  componentDidMount() {
    dataStore
  }
}

export default withAuth(InMyZone);