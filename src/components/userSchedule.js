import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { callAppoinments } from '../services/englishWiseApi';
import { getAppoinments } from '../actions/index';
import ScheduleCard from './ScheduleCard';

const UserSchedule = props => {
  // const { appoinments } = props;
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const appoinments1 = useSelector(state => state.appoinments.appoinments);
  // console.log(user.id);
  let appoinmentArray = [];

  useEffect(() => {
    if (user) {
      // console.log(user.user);
      callAppoinments(user.id)
        .then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            // console.log(data);
            dispatch(getAppoinments(data));
          }
        });
    }
  }, [user]);

  if (appoinments1 && appoinmentArray.length === 0) {
    appoinmentArray = appoinments1
      .map((appoinment, index) => (
        <ScheduleCard
          key={appoinment.id}
          id={index}
          appoinment={appoinment}
        />
      ));
  }
  console.log(appoinments1);
  console.log(appoinmentArray);

  return (
    <div>
      My Schedule
      <div className="appoinment-list">
        {
          appoinmentArray ? (appoinmentArray) : []
          }
      </div>
    </div>
  );
};

UserSchedule.propTypes = {
  appoinments: PropTypes.arrayOf(PropTypes.any).isRequired,
  // user: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  appoinments: state.appoinments,
});

export default connect(mapStateToProps)(UserSchedule);

// class UserSchedule extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       appoinments: [],
//     };
//   }

//   componentDidMount() {
//     const { getAppoinments, user } = this.props;
//     console.log(user);
//     callAppoinments('2')
//       .then(response => {
//         if (response) {
//           this.setState({
//             appoinments: response,
//           });
//           getAppoinments(response);
//           console.log(response);
//         }
//       });
//   }

//   render() {
//     const { appoinments } = this.state;
//     const { user } = this.props;

//     console.log(appoinments);

//     return (
//       <div>
//         {user ? (
//           <div>
//             My Schedule
//             <div className="appoinment-list">
//               {
//               appoinments
//                 .map((appoinment, index) => (
//                   <ScheduleCard
//                     key={appoinment.id}
//                     id={index}
//                     appoinment={appoinment}
//                   />
//                 ))
//               }
//             </div>
//           </div>
//         ) : <div>Loading...</div>}
//       </div>

//     );
//   }
// }

// UserSchedule.propTypes = {
//   getAppoinments: PropTypes.func.isRequired,
//   // appoinments: PropTypes.arrayOf(PropTypes.object).isRequired,
//   // appoinment: PropTypes.shape({
//   //   user_id: PropTypes.number,
//   // }).isRequired,
//   user: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// const mapStateToProps = state => ({
//   // appoinments: state.appoinments,
//   user: state.user,
// });

// const mapDispatchToProps = dispatch => ({
//   getAppoinments: appoinments => {
//     dispatch(getAppoinments(appoinments));
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserSchedule);
