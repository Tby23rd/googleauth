import React from 'react';

interface PrivacyPolicyItem {
  [key: string]: string[];
}

const PrivacyPolicy = () => {
  const privacyPolicy: PrivacyPolicyItem = {  
      INTRODUCTION: [
    "Thank you (“you”, “your”, “User”) for viewing this Privacy Policy.",
    "Digitote Creative Management Services Inc. (“Company”, “We”, “us”, “Digitote”) is a start-up from Calgary, Alberta that provides software, products, and other services in the talent management sector, including the Website/Platform (as defined below, and together, the “Services”).",
    "We operate and provide the products, services, information, content, and Intellectual Property (as defined herein) at our website at www.digitote.co and the Digitote mobile and desktop application (together, the “Website/Platform”).",
    "This Privacy Policy interacts with, and is subject to, and, where reasonably applicable, User is subject to and bound by, the following documents:",
    "- Our Terms of Service can be found at <b><a href='http://digitote.co/terms-of-service' target='_blank' rel='noopener noreferrer'>digitote.co/terms-of-service</a></b>.",
    // "- Our Agency License agreement found at <Agency License Agreement URL>. ",
    "(The URLs or hyperlinks provided herein are for convenience only and are subject to change from time to time and a broken, incorrect, or missing hyperlink shall not affect the interpretation or enforcement of this Privacy Policy).",
    "<u>This Privacy Policy describes:</u>",
    "- The types of information we may collect from you or that you may provide when you visit the Website/Platform or connect with us through other means.",
    "- How we collect, use, disclose, and protect the personal information of our customers and website users.",
    "- Our practices for collecting, using, maintaining, protecting, and disclosing that information.",
    "<u>This Privacy Policy applies to information we collect, use, or disclose about you:</u>",
    "- On the Website/Platform.",
    "- In email, text, posts, chats, and other electronic messages between you and Digitote, including Commercial Electronic Messages (CEMs).",
    "- Through our social media and other public channels.",
    "- Through mobile and desktop applications you download from Digitote, or a third party.",
    "- When you interact with our advertising, applications, content, and Intellectual Property (as defined herein) on third-party sites and services, including, but not limited to, when those applications or advertising include links to this Privacy Policy.",
    "- Through any other means where you come into contact with Digitote.",
    "The Website/Platform may include links to third-party sites, plug-ins, services, social networks, or applications. Clicking on those links or enabling those connections may allow the third party to collect or share data about you. If you follow a link to a third-party website or engage a third-party plugin, please note that these third parties have their own privacy policies and we do not accept any responsibility or liability for these policies. We do not control these third-party applications or providers, and we encourage you to read the Privacy Policy of every website you visit.",
    "PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND OUR POLICIES AND PRACTICES FOR COLLECTING, PROCESSING, AND STORING YOUR INFORMATION. IF YOU DO NOT AGREE WITH OUR POLICIES AND PRACTICES, YOUR ONLY CHOICES ARE TO NOT USE THE WEBSITE/PLATFORM, LEAVE IMMEDIATELY, AND/OR STOP INTERACT WITH DIGITOTE.",
  ],
  "CONSENT TO PRIVACY POLICY": [
    "By accessing or using the Website/Platform or in any other interactions with Digitote, the Services, or Digitote's Intellectual Property (as defined herein), including on third-party sites, apps, or channels, you indicate that you clearly and irrevocably understand, accept, and consent to the practices described in this Privacy Policy. For greater clarity, User acknowledges and agrees that any of the following actions shall clearly mean and denote User's express consent to this Privacy Policy and any applicable agreement listed above, including when User checks a checkbox next to a form or interactive function, User registers for the Website/Platform, User enters into a written agreement with Digitote, User fills and submits a form and/or otherwise interacts with interactive functionality on the Website/Platform, User submits any Personal Information or other personal data to the Website/Platform or to Digitote, and/or User provides User Content to the Website/Platform.",
    "This Privacy Policy may change from time to time. Your continued use of the Website/Platform or in any other interaction with Digitote, the Services, or Digitote's Intellectual Property (as defined herein), including on third-party sites, apps, or channels, including after we make changes, indicates that you accept and consent to those changes. Please check this Privacy Policy periodically for updates.",
    "<u>Please check the Privacy Policy periodically for updates.</u>",
  ],
  "CONSENT TO MAIL LIST & CASL COMPLIANCE": [
    "User expressly agrees and provides consent to Digitote to send, distribute, or otherwise transmit to you any Commercial Electronic Message (CEM) or other communications or notifications, including for commercial and other promotional purpose; and you provide express consent to be added to our mail list until and when you provide us written notice that you wish to unsubscribe in accordance with the notice provision at the end of this Privacy Policy; and you agree that you otherwise provide us implied consent by virtue of the relationship between you and us and/or your posting or making available your information online unaccompanied by a statement that you do not wish to receive CEMs.",
  ],
  "JURISDICTION OF WEBSITE/PLATFORM": [
    "Digitote is in Alberta, Canada and the Website/Platform is offered only for use in Alberta, Canada. The Website/Platform is not intended for use in any jurisdiction where its use is not permitted. Digitote does not currently have sufficient capabilities to determine where a User is located, including to block a User based on jurisdiction, prevent their access to the Website/Platform or a feature or function or Website/Platform, or prevent User from completing a transaction on the Platform.",
    "If you access the Website/Platform from outside Alberta, Canada, you do so at your own risk and you are responsible for compliance with local laws of your jurisdiction. You must immediately stop using the Website/Platform if your use of it as it is offered by Digitote is prohibited under your local laws or regulations and in no way shall Digitote be responsible or liable for your unauthorized or unlawful use of the Website/Platform or the Services.",
  ],
  "USERS UNDER THE AGE OF 14": [
    "Use of the Website/Platform is not intended for children under 14 years of age. No one under age 14 may provide any information to or on the Website/Platform. We do not knowingly collect personal information from children under 14. If you are under 14, do not use or provide any information on this Website/Platform or on or through any of its features/register on the Website/Platform, make any purchases through the Website/Platform, use any of the interactive or public comment features of this Website/Platform, or provide any information about yourself to us, including your name, address, telephone number, email address, or any screen name or username you may use. If we learn we have collected or received personal information from a child under 14 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 14, please contact us in accordance with the notice provisions at the end of this Privacy Policy.",
  ],
  "INTELLECTUAL PROPERTY RIGHTS AND OWNERSHIP": [
    "You understand and agree that all intellectual property belonging to Digitote, including the Website/Platform and its entire contents, features, and functionality, including, all information, files, content, software, code, metadata, data text, displays, graphics, photographs, images, video, audio, music, broadcast, design, presentation, website or platform layout, selection, and arrangement, or any related derivatives or spinoffs, are the sole property of Digitote, its licensors, or other providers of such material and are protected in all forms by intellectual property laws including without limitation, copyright, trademark, patent, trade secret, and any other proprietary rights.",
  ],
  "INFORMATION WE COLLECT ABOUT YOU": [
    "We collect and use several types of information from and about you, including:",
    "- <b>Personal information</b>, that we can reasonably use to directly or indirectly identify you, such as your name, mailing address, e-mail address, telephone number, Internet protocol (IP) address, username or other similar identifier, billing and account information, and any other identifier we may use to contact you (“personal information”).",
    "- <b>Non-personal information</b>, that does not directly or indirectly reveal your identity or directly relate to an identifiable individual, such as statistical or aggregated data. Statistical or aggregated data does not directly identify a specific person, but we may derive non-personal statistical or aggregated data from personal information.",
    "- <b>Technical information</b>, including your login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, advertising identifiers and trackers, and information about your internet connection, hardware, software, and your usage and interactions with the Website/Platform, the Services, or any of our Intellectual Property, including on third-party sites, apps, or channels.",
    "- <b>Non-personal details about your Website/Platform interactions</b>, including the full Uniform Resource Locators (URLs), clickstream to, through and from our Website/Platform (including date and time), products you viewed or searched for, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), methods used to browse away from the page, or any phone number used to call our customer service number.",
  ],
  "HOW WE COLLECT INFORMATION ABOUT YOU": [
    "We use different methods to collect your information, including through:",
    "- <b>Direct interactions with you when you provide it to us</b>, for example, by filling in forms, surveys, or polls, or corresponding with us by phone, email, social media, or otherwise.",
    "- <b>User Content</b>, when you provide information to us to publish or display on the public Website/Platform areas or transmit to other Website/Platform, users or third parties (“User Content”), such User Content also to be subject our Terms of Service.",
    "- <b>Automated technologies or interactions</b>, as you navigate through our Website/Platform, information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies.",
    "- <b>Third party plugins</b>, the Website/Platform may use third party plugins, applications, or APIs that enhance the Website/Platform and delivery or our services, and those plugins may collect information about you.",
    "- <b>Third party tracking technologies</b>, such as Google Analytics, Facebook Pixel, and LinkedIn Pixel, which may include usage details, IP addresses, advertising data and tracking information, and information collected through cookies and other tracking technologies.",
  ],
  "Information You Provide to Us": [
    "The information we collect directly from you on or through the Website/Platform or through other means may include:",
    "- Information that you provide by filling in forms, registrations, surveys, polls, comments, and other interactive features on the Website/Platform, whether partially or fully submitted.",
    "- Personal, business, and other information provided to us during the registration process, subscribing to our service or products, submitting User Content, or requesting further services, complaints or inquires.",
    "- Records and copies of your correspondence if you contact us.",
    "- Usage information including which pages, posts, accounts, other content, or functions of the Website/Platform you are viewing, clicking on or otherwise interacting with.",
    "- Details of transactions you carry out through our Website/Platform and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Website/Platform.",
    "- Your search queries on the Website/Platform.",
    "Subject to Digitote's Terms of Service you may also provide information to be published or displayed (herein “<b>submitted</b>”) on public areas of the Website/Platform or transmitted to other users of the Website/Platform or third parties (all of which are part of User Content). Your User Content is posted on and transmitted to others at your own risk. Although we limit access to certain pages, please be aware that no security measures are perfect. Additionally, we cannot control the actions of other users of the Website/Platform with whom you may choose to share your User Content. Therefore, we cannot and do not guarantee that unauthorized persons will not view your User Content.",
  ],
  "Information We Collect Through Cookies and Other Automatic Data Collection Technologies":
    [
      "As you navigate through and interact with our Website/Platform, we may use cookies or other automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:",
      "- Details of your visits to our Website/Platform, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website/Platform.",
      "- Information about your computer and internet connection, including your IP address, operating system, and browser type.",
      "We may also use these technologies to collect information about your online activities over time and across third-party websites or other online services (behavioral tracking).",
      "The information we collect automatically is statistical information that may include personal information, and we may maintain it or associate it with personal information we collect in other ways, that you provide to us, or receive from third parties. It helps us to improve our Website/Platform and to deliver a better and more personalized service, including by enabling us to:",
      "- Estimate our audience size and usage patterns.",
      "- Store information about your preferences, allowing us to customize our Website/Platform according to your individual interests.",
      "- Speed up your searches and load times.",
      "- Personalize your user experience or user interface (UI/UX).",
      "- Recognize you when you leave and return to our Website/Platform and allow you to pick up where you left off.",
      "- Deliver personalized and targeted advertisements, including third-party services.",
      "- Deliver advertisements to you and track your usage and behavior on the internet, including on third-party websites, applications, or services.",
      "The technologies we use for this automatic data collection may include:",
      "- <b>Cookies</b> (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website/Platform. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website/Platform.",
      "- <b>Flash Cookies</b>. Certain features of our Website/Platform may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website/Platform. Flash cookies are not managed by the same browser settings that are used for browser cookies.",
      "- <b>Web Beacons or Pixels</b>. Pages of our Website/Platform and any correspondence may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit us, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity). We may also use third-party pixels, including a Facebook or LinkedIn Pixel, to deliver advertisements throughout the internet, to bring new and returning Users to our Website/Platform, and to enhance the effectiveness of our advertisements and analytics.",
    ],
  "THIRD PARTY USE OF COOKIES AND OTHER TRACKING TECHNOLOGIES": [
    "Some other content or applications on the Website/Platform, including advertisements, are served by third-parties, including advertisers, ad networks and servers, content providers, and application providers. These third parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect information about you when you use our Website. The information they collect may be associated with your personal information or they may collect information, including personal information, about your online activities over time and across different online services. They may use this information to provide you with interest-based (behavioural) advertising or other targeted content.",
    "We do not control these third parties' tracking technologies or how they are used. If you have any questions about an advertisement or other targeted content, you should contact the responsible provider directly.",
  ],
  "HOW WE USE YOUR INFORMATION": [
    "We use information that we collect about you or that you provide to us, including any personal information:",
    "- To present our Website/Platform and its content and functionality to our users.",
    "- To deliver our Services.",
    "- To provide you with information, products, or services that you request from us.",
    "- To fulfill the purposes for which you provided the information or that were described when it was collected, or any other purpose for which you provide it.",
    "- To provide you with notices about your account or subscription, including expiration and renewal notices.",
    "- To carry out our obligations and enforce our rights arising from any contracts with you, including for billing and collection or to comply with legal requirements.",
    "- To verify the accuracy or appropriateness of any User Content for the purposes of monitoring our Website/Platform and removing content.",
    "- To notify you about changes to our Website/Platform or any products or services we offer or provide though it.",
    "- To improve our Website/Platform, products or services, marketing, or customer relationships and experiences.",
    "- To allow you to participate in interactive features, including posts, comments, forms, and media, or similar features on our Website/website.",
    "- To manage our relationship and work with clients and potential clients.",
    "- To measure or understand the effectiveness of the advertising we serve to you and others, and to deliver relevant advertising to you.",
    "- To study and generate industry and other macroeconomic information.",
    "- To use, sell, distribute, broker or make available the information for third parties only in accordance with this Agreement.",
    "- To contact you about goods and services that may be of interest to you, as permitted by law.",
    "- To enable us to display advertisements to our advertisers' target audiences, for direct marketing purposes or other behavioral advertising.",
    "- To collect and measure data used to make the Website/Platform and our Services, research, delivery, and communications more effective.",
    "- In any other way we may describe when you provide the information or for any other purpose with your consent.",
  ],
  "DISCLOSURE OF YOUR INFORMATION": [
    "We may disclose personal information that we collect or you provide as described in this Privacy Policy:",
    "- Directly on the Website/Platform when you submit User Content.",
    "- To our subsidiaries and affiliates, and in accordance with applicable law, to a buyer or other successor in the event of a merger, or other sale or transfer of some or all of Digitote's assets.",
    "- To contractors, service providers, and other third parties we use to support our business (such as analytics and search engine providers that assist us with Website/Platform improvement and optimization) and who are contractually obligated to keep personal information confidential, use it only for the purposes for which we disclose it to them, and to process the personal information with the same standards set out in this Privacy Policy.",
    "- For any other purpose disclosed by us when you provide the information or with your consent.",
    "We may also disclose your personal information:",
    "- To comply with any court order, law, or legal process, including to respond to any government or regulatory request, in accordance with applicable law.",
    "- To enforce or apply our Terms of Service and Agency License Agreement, linked at the start of this Privacy Policy, including for compliance and billing and collection purposes.",
    "- If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Digitote, our customers, other Users, or the public.",
  ],
  "TRANSFERRING YOUR PERSONAL INFORMATION": [
    "We may transfer personal information that we collect or that you provide as described in this policy to third-party contractors, service providers, and/or other third parties we use to support our business (such as analytics and search engine providers that assist us with Website/Platform improvement and optimization) and who are contractually obligated to keep personal information confidential, use it only for the purposes for which we disclose it to them, and to process the personal information with the same standards set out in this policy.",
    "Where possible and practicable, we use best efforts to process and store your personal information and other data in Canada. We may use Amazon Web Services (AWS), Microsoft Azure, Cloudways, or another third-party provider, to host our servers and data, which may require your data to be located outside of Canada. In those instances, different privacy laws may apply that may or may not be as comprehensive as Canadian law. In these circumstances, the governments, courts, law enforcement, or regulatory agencies of that country may be able to obtain access to your personal information through the laws of the foreign country. Whenever we engage a service provider, we require that its privacy and security standards adhere to this Privacy Policy and applicable Canadian privacy legislation.",
  ],
  "CHOICES ABOUT HOW WE USE AND DISCLOSE YOUR INFORMATION": [
    "We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:",
    "- <b>Tracking Technologies and Advertising</b>. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe's website. If you disable or refuse cookies, please note that some parts of this Website/Platform may not be accessible or may not function properly.",
    "- <b>Third-Party Advertising</b>. If you do not want us to share your personal information with unaffiliated or non-agent third parties for promotional purposes, you can opt-out by providing us notice in accordance with the notice provision at the end of this Privacy Policy.",
    "- <b>Promotional Offers</b>. If you have opted in to receive certain emails from us but no longer wish to have your email address used by us to promote our own or third parties' products or services, you can opt-out by adjusting your user preferences in your account profile or by providing written notice in accordance with the notice provision at the end of this Privacy Policy. If we have sent you a promotional email, you may unsubscribe by providing written notice via email to the above email address.",
    "We do not control third parties' collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. You can opt-out of several third party ad servers' and networks' cookies simultaneously by opt-out tools such as those created by <b><a href='https://youradchoices.ca/en/tools' target='_blank' rel='noopener noreferrer'>Digital Advertising Alliance of Canada</a></b> or <b><a href='https://optout.networkadvertising.org/?c=1' target='_blank' rel='noopener noreferrer'>Network Advertising Initiative</a></b>. You can also access these to learn more about online behavioral advertising and how to stop websites from placing cookies on your device. Opting out of a network does not mean you will no longer receive online advertising. It does mean that the network from which you opted out will no longer deliver ads tailored to your web preferences and usage patterns.",
  ],
  "DATA SECURITY": [
    "The security of your personal information is very important to us. We use physical, electronic, and administrative measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.",
    "The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website/Platform, you are responsible for keeping this password confidential. We ask you not to share your password with anyone. We urge you to be careful about giving out information in public areas of the Website/Platform like message boards, which any Website/Platform visitor or User can view.",
    "Unfortunately, the transmission of information via the Internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website/Platform. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the Website/Platform.",
  ],
  "DATA RETENTION": [
    "Except as otherwise permitted or required by applicable law or regulation, we will only retain your personal information for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Under some circumstances we may anonymize your personal information so that it can no longer be associated with you. We reserve the right to use such anonymous and de-identified data for any legitimate business purpose without further notice to you or your consent.",
  ],
  "ACCESSING AND CORRECTING YOUR PESONAL INFORMATION": [
    "It is important that the personal information we hold about you is accurate and up-to-current. Please keep us informed if your personal information changes. By law you have the right to request access to and to correct the personal information that we hold about you.",
    "You can review and change your personal information by logging into the Website/Platform and visiting your account page or dashboard.",
    "If you want to otherwise review, verify, correct, or withdraw consent to the use of your personal information you may send us written notice in accordance with the notice provision at the end of this Privacy Policy to request access to, correct, or delete any personal information that you have provided to us. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect.",
    "We may request specific information from you to help us confirm your identity and your right to access, and to provide you with the personal information that we hold about you or make your requested changes. Applicable law may allow or require us to refuse to provide you with access to some or all the personal information that we hold about you, or we may have destroyed, erased, or made your personal information anonymous in accordance with our record retention obligations and practices. If we cannot provide you with access to your personal information, we will inform you of the reasons why, subject to any legal or regulatory restrictions.",
    "If you delete your User Content from the Website/Platform, copies of your User Content may remain viewable in cached and archived pages or might have been copied or stored by other Website/Platform users. Proper access and use of information provided on the Website/Platform, including User Content, is governed by our Terms of Service.",
  ],
  "WITHDRAWING YOUR CONSENT": [
    "To withdraw your consent to the collection, use, and transfer of your personal information, please provide us written notice in accordance with the notice provision provided at the end of this Privacy Policy. Please note that if you withdraw your consent, we may not be able to provide you with a particular product or service. We will explain the impact to you at the time to help you with your decision.",
  ],
  "CHANGES TO OUR PRIVACY POLICY": [
    "It is our policy at Digitote to post any changes we make to our Privacy Policy on this page. If we make material changes to how we treat our users' personal information, we will notify you by email to the email address specified in your account or through a notice on the Website/Platform.",
    "We include the date the Privacy Policy was last revised at the top of the page. You are responsible for ensuring we have an up-to-date, active, and deliverable email address for you, and for periodically visiting our Website/Platform and this Privacy Policy to check for any changes.",
  ],
  "CONTACT & NOTICES": [
    "Digitote Creative Management Services Inc. is a corporation duly incorporated in Alberta, Canada with a business address of 409B 13 Street NW Calgary, Alberta T2N 1Z3, Canada.",
    "All notices and communications to Digitote shall be delivered to Digitote in writing via email to legal@digitote.co, Attention: Privacy Officer.",
    "All notices and communications to User shall be delivered to User in writing via email to the email address they used to contact Digitote and/or the email address we have on file for User.",
    "We welcome your questions, comments, complaints, and requests regarding this Privacy Policy and our privacy and digital practices. We have procedures in place to receive and respond to complaints or inquiries about our handling of personal information, use and collection of data, our compliance with this Privacy Policy, and with applicable privacy laws.",
    "If submitting a notice, complaint or request to withdraw consent or remove your account, content, data, or information from the Website/Platform, please particularize and substantiate all information and evidence Digitote needs to comply with such notice, complaint or request, including to comply with all relevant rules, regulations, and this Privacy Policy, within TEN (10) days of the circumstances of such notice, complaint, or request was made known to User.",
  ]
}

return (
  <div>
    {Object.keys(privacyPolicy).map(section => (
      <div key={section}>
        <h2>{section}</h2>
        <ul>
          {privacyPolicy[section].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  )
};



export default PrivacyPolicy;
