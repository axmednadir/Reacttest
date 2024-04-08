import React from 'react';

function Contact() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>İletişim</h2>
      <p style={styles.paragraph}>
        Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz:
      </p>
      <ul style={styles.contactList}>
        <li>Email: example@example.com</li>
        <li>Telefon: 123-456-7890</li>
        <li>Adres: Örnek Mahallesi, Örnek Sokak No: 1, Örnek İl, Ülke</li>
      </ul>
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
  contactList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '16px',
    lineHeight: '1.6',
  },
};

export default Contact;