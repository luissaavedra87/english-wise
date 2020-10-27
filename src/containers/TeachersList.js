import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getTeachers } from '../services/englishWiseApi';
import { setTeachers } from '../actions/index';

class TeachersList extends React.Component {
  responsive = {
    0: { items: 1 },
  }

  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    const { setTeachers } = this.props;

    getTeachers()
      .then(response => {
        if (response) {
          console.log(response[0].image);
          const image = response.map(m => (
            <Link key={`link${m.id}`} to={`/details/${m.id}`}>
              <img key={`teacher${m.id}`} src={m.image} alt="teachers" className="teacher-image" />
            </Link>
          ));
          this.setState({
            teachers: image,
          });
          setTeachers(response);
        }
      });
  }

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
};

const mapDispatchToProps = dispatch => ({
  setTeachers: teachers => {
    dispatch(setTeachers(teachers));
  },
});

export default connect(null, mapDispatchToProps)(TeachersList);
