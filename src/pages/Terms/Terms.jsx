import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './terms.css';

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="terms">
        <div className="terms_title">Term and Conditions</div>
        <div className="terms_para">Welcome to the DMW Durgapur Machine Works website. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.</div>
        <div className="terms_head">1. Acceptance of Terms</div>
        <div className="terms_para">By using this website, you confirm that you are at least 18 years old and have the legal capacity to enter into these terms. If you are accessing the site on behalf of a business, you represent that you have the authority to bind that business to these terms.</div>
        <div className="terms_head">Use of the Website</div>
        <div className="terms_para">You agree to use our website solely for lawful purposes and in a manner that does not infringe on the rights of, restrict, or inhibit anyone else’s use of the site. You are prohibited from using the website in any way that may damage, disable, or impair it.</div>
        <div className="terms_head">Intellectual Property</div>
        <div className="terms_para">All content on this website, including text, graphics, logos, and images, is the property of DMW Durgapur Machine Works or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this site without our express written permission.</div>
        <div className="terms_head">Disclaimer of Warranties</div>
        <div className="terms_para">The information provided on this website is for general informational purposes only. While we strive to ensure that the information is accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, reliability, or availability of the website or its information.</div>
        <div className="terms_head">Limitation of Liability</div>
        <div className="terms_para">In no event shall DMW Durgapur Machine Works be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of this website, even if we have been advised of the possibility of such damages.</div>
        <div className="terms_head">Third-Party Links</div>
        <div className="terms_para">Our website may contain links to third-party websites for your convenience. We do not endorse or assume any responsibility for the content or practices of these sites. You access them at your own risk.</div>
        <div className="terms_head">Changes to Terms</div>
        <div className="terms_para">We reserve the right to update or change these terms and conditions at any time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically for any changes.</div>
      </div>
      <Footer />
    </>
  )
}

export default Terms
