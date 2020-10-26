import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getTeachers } from '../services/englishWiseApi';

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
    getTeachers()
      .then(response => {
        if (response) {
          console.log(response[0].image);
          const image = response.map(m => <img key={m.id} src={m.image} alt="teachers" />);
          this.setState({
            teachers: image,
          });
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
            autoPlayDirection="rtl"
            autoPlayInterval={2500}
            autoPlay
            fadeOutAnimation
          />
        </div>
      </div>
    );
  }
}

export default TeachersList;
