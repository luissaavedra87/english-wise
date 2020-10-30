import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import { callAppoinments } from '../services/englishWiseApi';
import { getAppoinments } from '../actions/index';
import ScheduleCard from './ScheduleCard';

const UserSchedule = props => {
  const { appoinments, user } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    callAppoinments()
      .then(data => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          dispatch(getAppoinments(data));
        }
      });
  });

  const filterByUser = appoinments.filter(appoinment => appoinment.user_id === user.user.id);

  return (
    <div>
      My Schedule
      <div className="appoinment-list">
        {
          filterByUser
            .map((appoinment, index) => (
              <ScheduleCard
                key={appoinment.id}
                id={index}
                appoinment={appoinment}
              />
            ))
          }
      </div>
    </div>
  );
};

UserSchedule.propTypes = {
  appoinments: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  appoinments: state.appoinments,
});

export default connect(mapStateToProps)(UserSchedule);

// class UserSchedule extends React.Component {
//   componentDidMount() {
//     const { getAppoinments } = this.props;

//     callAppoinments()
//       .then(response => {
//         if (response) {
//           getAppoinments(response);
//           console.log(response);
//         }
//       });
//   }

//   render() {
//     const { appoinments, user } = this.props;

//     console.log(user.user.id);
//     console.log(appoinments);
//     const filterByUser = appoinments.filter(appoinment => appoinment.user_id === user.user.id);

//     return (
//       <div>
//         My Schedule
//         <div className="appoinment-list">
//           {
//           filterByUser
//             .map((appoinment, index) => (
//               <ScheduleCard
//                 key={appoinment.id}
//                 id={index}
//                 appoinment={appoinment}
//               />
//             ))
//           }
//         </div>
//       </div>
//     );
//   }
// }

// UserSchedule.propTypes = {
//   getAppoinments: PropTypes.func.isRequired,
//   appoinments: PropTypes.arrayOf(PropTypes.object).isRequired,
//   // appoinment: PropTypes.shape({
//   //   user_id: PropTypes.number,
//   // }).isRequired,
//   user: PropTypes.objectOf(PropTypes.any).isRequired,
// };

// const mapStateToProps = state => ({
//   appoinments: state.appoinments,
//   user: state.user,
// });

// const mapDispatchToProps = dispatch => ({
//   getAppoinments: appoinments => {
//     dispatch(getAppoinments(appoinments));
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserSchedule);
