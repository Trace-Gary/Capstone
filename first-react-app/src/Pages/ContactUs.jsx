import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import ContactInfo from './ContactInfo';
import MessageForm from './MessageForm';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ContactInfo />
      <MessageForm />
      <Footer />
    </div>
  );
};

export default ContactUs;