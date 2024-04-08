import React from 'react';

function AboutPage() {
  return (
    
    <div style={styles.container}>
      <h2 style={styles.heading}>Hakkında</h2>
      <p style={styles.paragraph}>
        Bu proje, React ile oluşturulmuş bir örnek uygulamadır. Amacı, React
        becerilerinizi geliştirmenize ve yeni başlayanlar için bir referans
        oluşturmanıza yardımcı olmaktır.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
    textAlign: 'justify',
  },
};

export default AboutPage;