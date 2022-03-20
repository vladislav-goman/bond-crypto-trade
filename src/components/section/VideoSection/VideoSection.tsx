import React from 'react';
import classes from './VideoSection.module.scss';
import { Container, Row, Col } from 'react-bootstrap';

export const VideoSection: React.FC = () => {
  return (
    <section id="video-section" className={classes.videoSection}>
      <Container>
        <h3 className={classes.title}>Демо видео</h3>
        <Row>
          <Col>
            <div className={classes.videoWrapper}>
              <iframe
                className={classes.video}
                src="https://www.youtube.com/embed/V-wYnvtAxMA"
                title="БЕСПЛАТНЫЙ ВЕБИНАР 30.09.2021| СИТУАЦИЯ НА РЫНКЕ| ОТВЕТЫ НА ВОПРОСЫ"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
