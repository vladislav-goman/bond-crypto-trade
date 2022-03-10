import React, { useState, useEffect, useRef, useCallback } from 'react';
import classes from './IDOProgram.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Badge } from '../../common/Badge';
import { Calendar } from '../../icons';

export const IDOProgram: React.FC = () => {
  const [sidebarTop, setSidebarTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const isSticky = useCallback(() => {
    if (!ref.current) return;
    const sidebarEl = ref.current;
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 100) {
      sidebarEl.classList.add(classes.active);
    } else {
      sidebarEl.classList.remove(classes.active);
    }
  }, [sidebarTop]);

  useEffect(() => {
    if (!ref.current) return;
    const { top } = ref.current.getBoundingClientRect();
    setSidebarTop(top);
  }, [ref]);

  useEffect(() => {
    if (!sidebarTop) return;
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop, isSticky]);

  return (
    <section id="ido-program-section" className={classes.program}>
      <Container>
        <Row>
          <Col lg={{ span: 5, offset: 1 }}>
            <div ref={ref} className={classes.sticky}>
              <h2 className={classes.label}>Программа курса IDO</h2>
              <p className={classes.date}>
                <Calendar />
                26 января – 8 февраля
              </p>
            </div>
          </Col>
          <Col lg={5}>
            <div className={classes.inner}>
              <article className={classes.card}>
                <Badge>26 января</Badge>
                <h3 className={classes.header}>Лекция 1</h3>
                <ol className={classes.description}>
                  <li>Что такое блокчейн?</li>
                  <li>Направления развития</li>
                  <li>Основные определения</li>
                  <li>Виды IDO</li>
                </ol>
              </article>

              <article className={classes.card}>
                <Badge>26 января</Badge>
                <h3 className={classes.header}>Лекция 2</h3>
                <ol className={classes.description}>
                  <li>План анализа проектов</li>
                  <li>Как анализировать соц.сети</li>
                  <li>Как анализировать Whitepaper</li>
                  <li>Как анализировать токеномику</li>
                  <li>Как анализировать карту проекта</li>
                </ol>
              </article>

              <article className={classes.card}>
                <Badge>26 января</Badge>
                <h3 className={classes.header}>Лекция 3</h3>
                <ol className={classes.description}>
                  <li>Инструменты для анализа</li>
                  <li>Практический разбор 3-ёх проектов</li>
                </ol>
              </article>

              <article className={classes.card}>
                <Badge>26 января</Badge>
                <h3 className={classes.header}>Лекция 4</h3>
                <ol className={classes.description}>
                  <li>Стадии проектов</li>
                  <li>Зависимость цены после листинга</li>
                  <li>Анализ графиков уже вышедших проектов</li>
                </ol>
              </article>

              <article className={classes.card}>
                <Badge>26 января</Badge>
                <h3 className={classes.header}>Лекция 5</h3>
                <ol className={classes.description}>
                  <li>Основные инструменты работы</li>
                  <li>Whitelist как первый способ заработка</li>
                  <li>Техника быстрой продажи токенов</li>
                </ol>
              </article>

              <article className={classes.card}>
                <Badge>26 января</Badge>
                <h3 className={classes.header}>Лекция 6</h3>
                <ol className={classes.description}>
                  <li>Стейкинг как пассивный способ заработка</li>
                  <li>Техническая часть стейкинга</li>
                  <li>Дополнительная информация про анализ</li>
                  <li>Практический разбор входа в проект</li>
                </ol>
              </article>

              <article className={classes.card}>
                <Badge>26 января</Badge>
                <h3 className={classes.header}>Лекция 7 и заключение</h3>
                <ol className={classes.description}>
                  <li>Как успеть за трендом</li>
                  <li>Цикличность трендов</li>
                  <li>Распределение рисков</li>
                  <li>Автоматизация процесса</li>
                </ol>
              </article>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
