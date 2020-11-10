import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import DashboardStyle from './DashboardStyle';
import { RootState } from '../../../engine/init/rootReducer';

interface DashboardProps {
  classes: any;
  menu: boolean;
}

const mapStateToProps = (state: RootState) => ({
  menu: state.ui.get('menu')
});

const Dashboard: React.FC<DashboardProps> = ({ classes, menu }) => {
  return (
    <main className={`${classes.content} ${menu && classes.contentShift}`}>
      {menu}
    </main>
  );
};

export default connect(
  mapStateToProps,
  null
)(
  withStyles(DashboardStyle, {
    name: 'Dashboard'
  })(Dashboard)
);
