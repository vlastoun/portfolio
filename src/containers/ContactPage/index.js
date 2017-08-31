import React from 'react';
import PageTemplate from '../../components/PageTemplate';
const style = {
  strong: { fontWeight: 'bold', color: 'red', marginRight: '1rem' },
};
const ContactPage = () => (
  <PageTemplate>
    <h2>Kontakt</h2>
    <p><strong style={style.strong}>J:</strong>Vlastimil Sadílek</p>
    <p>
      <strong style={style.strong}>E:</strong>
      <a href="mailto:vlastimil.sadilek@gmail.com">vlastimil.sadilek@gmail.com</a>
    </p>
    <p><strong style={style.strong}>T:</strong>+420 606 370 640</p>
    <p>
      <strong style={style.strong}>G:</strong>
      <a href="https://github.com/vlastoun/" target="_blank" rel="noopener noreferrer">github.com/vlastoun</a>
    </p>
    <p>
      <strong style={style.strong}>W:</strong>
      <a href="https://vlastoun.github.io/info" target="_blank" rel="noopener noreferrer">vlastoun.github.io/info</a>
    </p>
  </PageTemplate>
);

export default ContactPage;
