import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './policy.css';

const Policy = () => {

  return (
    <>
      <Navbar />
      <div className="policy">
        <div className="policy_title">Privacy Policy</div>
        <div className="policy_para">At DMW Durgapur Machine Works, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when using our website.</div>
        <div className="policy_head">Information Sharing</div>
        <div className="policy_para">We do not sell, trade, or transfer your personal information to outside parties. Your information may be shared with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential. We may also disclose your information when required by law.</div>
        <div className="policy_head">Data Security</div>
        <div className="policy_para">We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. While we strive to use commercially acceptable means to protect your data, please be aware that no method of transmission over the Internet or electronic storage is completely secure.</div>
        <div className="policy_head">Cookies</div>
        <div className="policy_para">Our website may use cookies to enhance user experience. Cookies are small files placed on your device that help us improve site functionality and analyze traffic. You can choose to accept or decline cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our site.</div>
        <div className="policy_head">Changes to This Policy</div>
        <div className="policy_para">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically.</div>
      </div>
      <Footer />
    </>
  )
}

export default Policy;