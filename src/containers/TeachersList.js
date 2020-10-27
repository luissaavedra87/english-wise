import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getTeachers } from '../services/englishWiseApi';
import { setTeachers, setCurrentTeacher } from '../actions/index';
import TeacherSlide from '../components/teacherSlide';

class TeachersList extends React.Component {
  responsive = {
    0: { items: 1 },
  }

  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { setTeachers } = this.props;

    getTeachers()
      .then(response => {
        if (response) {
          console.log(response[0]);
          const slide = response.map((teacher, index) => (
            <TeacherSlide
              key={teacher.id}
              id={index}
              image={teacher.image}
              teacher={teacher}
            />
          ));
          this.setState({
            teachers: slide,
          });
          setTeachers(response);
        }
      });
  }

  handleClick = teacher => {
    const { setCurrentTeacher } = this.props;
    setCurrentTeacher(teacher);
  };

  render() {
    const { teachers } = this.state;

    return (
      <div>
        <div>Pick a Teacher</div>
        <div>
          <AliceCarousel
            items={teachers}
            responsive={this.responsive}
            autoPlayInterval={2500}
            infinite
            autoPlay
            fadeOutAnimation
            mouseTrackingEnabled
          />
        </div>
      </div>
    );
  }
}

TeachersList.propTypes = {
  setTeachers: PropTypes.func.isRequired,
  setCurrentTeacher: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setTeachers: teachers => {
    dispatch(setTeachers(teachers));
  },
  setCurrentTeacher: teacher => {
    dispatch(setCurrentTeacher(teacher));
  },
});

export default connect(null, mapDispatchToProps)(TeachersList);
